import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Col, CustomInput, FormGroup, Row } from 'reactstrap';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import Form from '../../../../components/Backend/UI/Form/Form';
import Save from '../../../../components/Backend/UI/Food/Form/Save';
import FormInput from '../../../../components/Backend/UI/Input/Input';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import Feedback from '../../../../components/Feedback/Feedback';

import { getDriver, getDriversInfo, patchDrivers, postDrivers, resetDrivers } from '../../../../store/actions/backend/drivers';

const icon = "user-tie";
const initialState = {
    name: '',
    photo: null,

    add: false,
};

class Add extends Component {
    state = { ...initialState }



    // Component methods
    saveHandler = e => {
        e.preventDefault();
        if (this.props.edit) this.props.patch(this.props.match.params.id, e.target);
        else this.props.post(e.target);
    }

    saveAddHandler = () => this.setState({ add: true }, () => this.props.post(document.querySelector('form')))

    inputChangeHandler = e => {
        let { id, name, value, files, checked, type } = e.target;
        if (files) this.readURL(e.target);
        this.setState({ [name]: files ? files[0] : value });
    }

    readURL = input => {
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();

            reader.onload = function (e) {
                document.getElementById(`embed-${input.name}`).style.backgroundImage = `url('${e.target.result}')`;
                document.getElementById(`embed-${input.name}`).style.backgroundSize = "cover";
                document.getElementById(`embed-${input.name}`).querySelector(".file-selected").innerHTML = file.name;
            }

            reader.readAsDataURL(file); // convert to base64 string
        }
    }

    fileUpload = () => document.getElementById('photo').click()



    // Lifecycle methods
    componentDidMount() {
        this.props.reset();
        if (this.props.edit) this.props.get(this.props.match.params.id);
        else this.props.info();
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.backend.drivers.message && this.props.backend.drivers.message && this.props.backend.drivers.message.type === 'success' && !this.props.edit) {
            if (this.state.add) this.setState({ ...initialState });
            else this.props.history.push({
                pathname: '/agency/drivers',
                state: {
                    message: this.props.backend.drivers.message,
                },
            });
        }
        if (!prevProps.backend.drivers.driver && this.props.backend.drivers.driver) {
            const { backend: { drivers: { driver } } } = this.props;
            this.setState({ ...driver });
        }
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { backend: { pages: { drivers: { title, add, edit, index, form } } } }
                }
            },
            backend: { drivers: { loading, error, message, driver } },
        } = this.props;
        let { name, photo } = this.state;
        let content = null;
        let errors = null;

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            content = (
                <>
                    <Col xl={12}>
                        <Feedback message={message} />

                        {this.props.edit && <input type="hidden" name="_method" defaultValue="PATCH" />}

                        <div className="shadow-lg rounded-8 bg-white px-4 px-sm-5 py-3 py-sm-4">
                            <Row className="my-2 my-sm-3">
                                <div className="col-lg-9">
                                    <Row>
                                        <FormInput type="text" className="col-md-12" icon={icon} onChange={this.inputChangeHandler} value={name} name="name" required placeholder={form.name} />
                                    </Row>
                                </div>

                                <div className="col-lg-3">
                                    <FormGroup>
                                        <div id="embed-photo" className="embed-responsive embed-responsive-4by3 bg-soft rounded-8 d-flex justify-content-center align-items-center position-relative" style={{
                                            cursor: 'pointer',
                                            backgroundImage: photo && `url("${photo}")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            overflow: 'visible',
                                        }} onClick={this.fileUpload}>
                                            {this.props.edit
                                                ? photo && (photo !== driver.photo) && <div className="text-center text-green w-100">
                                                    <div className="position-absolute" style={{ top: 0, right: 0, transform: 'translate(50%,-50%)' }}><i className="fas fa-check-circle fa-2x fa-fw" /></div>

                                                    <div className="position-absolute file-selected text-truncate w-100 pt-3" style={{ top: '100%', left: 0 }} />
                                                </div>
                                                : photo ? <div className="text-center text-green w-100">
                                                    <div className="position-absolute" style={{ top: 0, right: 0, transform: 'translate(50%,-50%)' }}><i className="fas fa-check-circle fa-2x fa-fw" /></div>

                                                    <div className="position-absolute file-selected text-truncate w-100 pt-3" style={{ top: '100%', left: 0 }} />
                                                </div> : <div className="text-center text-light w-100 overflow-hidden px-3">
                                                    <div><i className="fas fa-file-image fa-4x fa-fw" /></div>

                                                    <div className="mt-3 mb-1 text-center text-12 text-truncate">{form.upload}</div>

                                                    <div className="text-center text-12 text-truncate">{form.size}</div>
                                                </div>}
                                        </div>
                                    </FormGroup>
                                </div>

                                <Save edit={this.props.edit} saveAddHandler={this.saveAddHandler} />
                            </Row>
                        </div>
                    </Col>
                </>
            );
        }

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb items={this.props.edit && [{ to: '/agency/drivers', content: index }]} main={this.props.edit ? edit : add} icon={icon} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{this.props.edit ? edit : add}</Subtitle>
                </TitleWrapper>
                <div>
                    {errors}
                    <Row>
                        <Form onSubmit={this.saveHandler} icon={icon} title={this.props.edit ? edit : add} list={index} link="/agency/drivers" innerClassName="row justify-content-center">
                            <input type="file" id="photo" name="photo" className="d-none" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg" />
                            {content}
                        </Form>
                    </Row>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: id => dispatch(getDriver(id)),
    info: () => dispatch(getDriversInfo()),
    post: data => dispatch(postDrivers(data)),
    patch: (id, data) => dispatch(patchDrivers(id, data)),
    reset: () => dispatch(resetDrivers()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));