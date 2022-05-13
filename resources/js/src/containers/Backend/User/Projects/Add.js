import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Col, FormGroup, Row } from 'reactstrap';

// Components
import Error from '../../../../components/Error/Error';
import Form from '../../../../components/Backend/UI/Form/Form';
import Feedback from '../../../../components/Feedback/Feedback';
import PageTitle from '../../../../components/Backend/UI/PageTitle';
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';

import { getProject, getProjectsInfo, postProjects, patchProjects, resetProjects } from '../../../../store/actions/backend/projects';

import './Projects.css';

const icon = "folder-plus";
const initialState = {
    files: null,
}

class Add extends Component {
    state = { ...initialState }



    // Component methods
    inputChangeHandler = e => {
        const { files } = e.target;
        this.setState({ files }, () => {
            if (files && files.length > 0) this.props.post(document.querySelector('form'));
        });
    }

    fileUpload = () => document.getElementById('files').click()



    // Lifecycle methods
    componentDidMount() {
        this.props.reset();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        const {
            content: {
                cms: {
                    pages: { backend: { pages: { projects: { title, subtitle, upload, add, index, form } } } }
                }
            },
            backend: { projects: { loading, error, message, progress = 0 } },
            auth: { data: { role: { features } } }
        } = this.props;
        const { files } = this.state;

        const errors = <Error err={error} />;
        const feedback = <Feedback message={message} />;

        const feature = features.find(f => f.prefix === 'projects');
        const redirect = !(feature && JSON.parse(feature.permissions).includes('c')) && <Redirect to="/user/dashboard" />;

        let selector = <div className='selector shadow-sm'>
            <div>
                <button type='button' onClick={this.fileUpload} className='icon btn btn-primary'><i className='fas fa-upload' /></button>
            </div>

            <div className='title'>
                {form.click_to_upload}
            </div>

            <div className='subtitle'>
                {form.maximum_file_size}
            </div>
        </div>;

        if (loading) selector = <div className='selector loading shadow-sm'>
            <div>
                <div className='icon'>
                    <div style={{ height: progress + '%' }}>{progress} %</div>
                </div>
            </div>

            <div className='title'>
                {form.files_being_uploaded}
            </div>

            <div className='subtitle'>
                {form.maximum_file_size}
            </div>
        </div>;
        else if (files && files.length > 0 && !error) selector = <div className='selector uploaded shadow-sm'>
            <div>
                <div className='icon'><i className='fas fa-check' /></div>
            </div>

            <div className='title'>
                {files.length} {form.files_uploaded}
            </div>

            <div className='subtitle'>
                {form.click_on_project_list}
            </div>
        </div>;

        const content = <>
            {feedback}
            {selector}
        </>;

        return <div className='Projects'>
            <PageTitle title={title} subtitle={subtitle} icon={icon}>
                <Breadcrumb main={add} />
            </PageTitle>

            <div className='content'>
                {redirect}
                {errors}
                <Form title={add} subtitle={upload} list={index} link="/user/projects">
                    <input type="file" id="files" name="files[]" className="d-none" onChange={this.inputChangeHandler} multiple />
                    {content}
                </Form>
            </div>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: id => dispatch(getProject(id)),
    info: () => dispatch(getProjectsInfo()),
    post: data => dispatch(postProjects(data)),
    patch: (id, data) => dispatch(patchProjects(id, data)),
    reset: () => dispatch(resetProjects()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));