import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import ImageZoom from 'js-image-zoom';

// Components
import Error from '../../../../../components/Error/Error';
import Input from '../../../../../components/UI/Input/Input';
import View from '../../../../../components/Backend/UI/View/View';
import Feedback from '../../../../../components/Feedback/Feedback';
import PageTitle from '../../../../../components/Backend/UI/PageTitle';
import Breadcrumb from '../../../../../components/Backend/UI/Breadcrumb/Breadcrumb';

import { getProjectForm, postProjectForm, resetProjects } from '../../../../../store/actions/backend/projects';

import './Forms.scss';

const icon = "copy";

class Index extends Component {
    state = {
        project: {},
        name: '',
        body: [{}, {}, {}],
        file: '',

        page: 1,
        progress: 0
    }



    // Component methods
    submitHandler = e => {
        e.preventDefault();
        this.props.post(this.props.match.params.projectNumber, this.props.match.params.formNumber, e.target);
    }

    submitForm = () => {
        this.props.post(this.props.match.params.projectNumber, this.props.match.params.formNumber, document.querySelector('form'));
    }

    inputChangeHandler = e => {
        const { name, value } = e.target;
        let { body } = this.state;
        if (!body) body = [];
        const newBody = [...body];

        const elements = name.split('[').filter((el, i) => i > 0).join('').split(']');

        const groupIndex = +elements[0];
        const fieldKey = elements[1];

        if (newBody.indexOf(groupIndex) === -1) newBody.push({ [fieldKey]: '' });
        const formerValue = newBody[groupIndex][fieldKey];
        newBody[groupIndex][fieldKey] = value;
        if (!formerValue || !value) this.setProgress(newBody);

        this.setState({ body: newBody });
    }

    setProgress = body => {
        const filledFields = [];
        const allFields = document.querySelectorAll('form input:not([type=hidden]), form textarea, form select');
        this.filledFields(body, filledFields);
        const progress = Math.round(filledFields.length * 100 / allFields.length);

        this.setState({ progress });
    }

    filledFields = (obj, fields) => {
        if (typeof obj === 'string' && obj.length > 0) fields.push(obj);
        else if (!!obj && typeof obj === 'object') Object.keys(obj).forEach(key => {
            this.filledFields(obj[key], fields);
        });
    }

    allFields = (obj, fields) => {
        if (typeof obj !== 'object') fields.push(obj);
        else Object.keys(obj).forEach(key => {
            this.allFields(obj[key], fields);
        });
    }

    fieldValue = (group, field) => {
        return this.state.body && this.state.body[group] ? this.state.body[group][field] : '';
    }

    goToPage = page => this.setState({ page })

    nextPage = () => {
        const { page } = this.state;
        if (page === 3) return;
        else this.setState({ page: page + 1 });
    }

    previousPage = () => {
        const { page } = this.state;
        if (page === 1) return;
        else this.setState({ page: page - 1 });
    }

    initImageZoom = () => {
        const { clientHeight, clientWidth } = document.querySelector('#img-container img');
        const options = {
            width: clientWidth,
            // height: clientHeight / 3,
            zoomPosition: 'left',
            zoomWidth: clientWidth / 3,
            // zoomLensStyle: `height: ${clientHeight / 3}px`
        };
        new ImageZoom(document.getElementById("img-container"), options);
    }

    initNanonetsApi = (imageUrl, callback) => {
        const data = 'urls=' + imageUrl;
        const model_id = '5b1f9938-5dce-43ee-99ac-50a15a9d4444';

        const xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                const responseText = this.responseText;
                if (!!responseText) {
                    const data = JSON.parse(responseText);
                    const resultBody = [{}, {}, {}];
                    const fieldsPerLine = [
                        ['form_number', 'company_code', 'company_name', 'company_address', 'zip_code', 'fax', 'website', 'email', 'contact_no', 'state'],
                        ['product'],
                        []
                    ]
                    data.result.forEach(page => page.prediction.map(line => {
                        const lineIndex = fieldsPerLine.find(fields => fields.includes(line.label));
                        resultBody[lineIndex][line.label] = line.ocr_text;
                    }));
                    callback(resultBody);
                }
            }
        });

        xhr.open("POST", "https://app.nanonets.com/api/v2/OCR/Model/" + model_id + "/LabelUrls/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("authorization", "Basic " + window.btoa("C__nAi2j5eYk444W2ILvpD6-f3LX56ak:"));

        xhr.send(data);
    }



    // Lifecycle components
    componentDidMount() {
        console.log('componentDidMount');
        this.props.get(this.props.match.params.projectNumber, this.props.match.params.formNumber);
    }

    componentDidUpdate(prevProps) {
        console.log('componentDidUpdate');
        if (!prevProps.backend.projects.form && this.props.backend.projects.form) {
            const { backend: { projects: { form } } } = this.props;
            this.setState({ ...form }, () => {
                this.setProgress(form.body);
                this.initImageZoom();
                if (!form.body) this.initNanonetsApi(form.file, body => this.setState({ body }));
            });
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        this.props.reset();
    }

    render() {
        console.log('render');
        const {
            content: {
                cms: {
                    pages: { backend: { pages: { projects: { customer: { title, fill, form } } } } }
                }
            },
            backend: { projects: { loading, error, message } },
        } = this.props;
        const { project, name, errors: formErrors, file, page, progress } = this.state;

        const errors = <>
            <Error err={error} />
        </>;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
        const feedback = <Feedback message={message} />;

        const content = <div className='row'>
            <div className='col-lg-6 left-content'>
                <div className='header'>
                    <div className='group'>{form.group} {page}<i className='fas fa-circle' /></div>

                    <div className='form'>{name} - {project.name}</div>

                    {formErrors && <div className='errors'><span><i className='fas fa-info-circle' />{form.read_this}</span></div>}
                </div>

                <div className='bar-progress'>
                    <div className='gray-line' />

                    <div className='bar' style={{ width: progress + '%' }}>
                        <div className='green-line bg-green-gradient' />

                        <div className='circle' />

                        <div className='info'>{progress} %</div>
                    </div>
                </div>

                {errors}
                {flash}
                {feedback}

                <form onSubmit={this.submitHandler}>
                    {<div className={'row' + (page === 1 ? "" : " d-none")}>
                        <Input className="col-lg-6" type="text" onChange={this.inputChangeHandler} name="form[0][form_number]" value={this.fieldValue(0, 'form_number')} label={form.form_number} />
                        <Input className="col-lg-6" type="text" onChange={this.inputChangeHandler} name="form[0][company_code]" value={this.fieldValue(0, 'company_code')} label={form.company_code} />
                        <Input className="col-lg-6" type="textarea" onChange={this.inputChangeHandler} name="form[0][company_name]" value={this.fieldValue(0, 'company_name')} label={form.company_name} />
                        <Input className="col-lg-6" type="textarea" onChange={this.inputChangeHandler} name="form[0][company_address]" value={this.fieldValue(0, 'company_address')} label={form.company_address} />
                        <Input className="col-lg-6" type="text" onChange={this.inputChangeHandler} name="form[0][zip_code]" value={this.fieldValue(0, 'zip_code')} label={form.zip_code} />
                        <Input className="col-lg-6" type="text" onChange={this.inputChangeHandler} name="form[0][fax]" value={this.fieldValue(0, 'fax')} label={form.fax} />
                        <Input className="col-lg-6" type="text" onChange={this.inputChangeHandler} name="form[0][website]" value={this.fieldValue(0, 'website')} label={form.website} />
                        <Input className="col-lg-6" type="email" onChange={this.inputChangeHandler} name="form[0][email]" value={this.fieldValue(0, 'email')} label={form.email} />
                        <Input className="col-lg-6" type="text" onChange={this.inputChangeHandler} name="form[0][contact_no]" value={this.fieldValue(0, 'contact_no')} label={form.contact_no} />
                        <Input className="col-lg-6" type="text" onChange={this.inputChangeHandler} name="form[0][state]" value={this.fieldValue(0, 'state')} label={form.state} />
                    </div>}

                    {<div className={'row' + (page === 2 ? "" : " d-none")}>
                        <Input className="col-lg-6" type="text" onChange={this.inputChangeHandler} name="form[1][product]" value={this.fieldValue(1, 'product')} label={form.product} />
                    </div>}
                </form>

                <div className='pages-wrapper'>
                    <div className='pages'>
                        <span className={'direction left' + (page === 1 ? ' inactive' : '')} onClick={this.previousPage}><i className='fas fa-chevron-left' /></span>
                        <span className={'page' + (page === 1 ? ' active' : '')} onClick={() => this.goToPage(1)}>1</span>
                        <span className={'page' + (page === 2 ? ' active' : '')} onClick={() => this.goToPage(2)}>2</span>
                        <span className={'page' + (page === 3 ? ' active' : '')} onClick={() => this.goToPage(3)}>3</span>
                        <span className={'direction right' + (page === 3 ? ' inactive' : '')} onClick={this.nextPage}><i className='fas fa-chevron-right' /></span>
                    </div>
                </div>
            </div>

            <div className='col-lg-6 right-content'>
                <div className='image'>
                    <div id='img-container'>
                        <img src={file} className="w-100" />
                        <input hidden type="file" />
                    </div>

                    <div className='zoom'>
                        <View title={name} content={<img src={file} className="w-100" />}>
                            <button className='btn btn-primary'><i className='fas fa-search' /></button>
                        </View>
                    </div>
                </div>

                <button onClick={this.submitForm} className='submit btn btn-green'>{form.submit_form}<i className='fas fa-paper-plane' /></button>
            </div>
        </div>;

        return <div className='Projects Forms'>
            <PageTitle title={name} subtitle={fill} icon={icon}>
                <Breadcrumb items={[{ to: '/customer/projects', content: title }]} main={name} />
            </PageTitle>

            {content}
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: (projectNumber, formNumber) => dispatch(getProjectForm(projectNumber, formNumber)),
    post: (projectNumber, formNumber, data) => dispatch(postProjectForm(projectNumber, formNumber, data)),
    reset: () => dispatch(resetProjects()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));