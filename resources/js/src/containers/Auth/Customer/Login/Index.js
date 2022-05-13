import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';

import NormalInput from '../../../../components/UI/Input/Input';
import CenterButton from '../../../../components/UI/Button/CenterButton/CenterButton';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';

import { authCustomerLogin, forgotPassword } from '../../../../store/actions/auth';

const Input = props => <NormalInput size='lg' {...props} />

class Login extends Component {
    state = {
        token: '',
        password: '',
        modal: false,

        visible: false,
    }

    toggle = () => {
        this.setState(prevState => ({ modal: !prevState.modal }));
    }

    forgotPassword = e => {
        e.preventDefault();
        this.props.onForgotPassword(e.target);
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onAuth(e.target);
    }

    inputChangeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    eyeClickedHandler = () => this.setState(prevState => ({ visible: !prevState.visible }))

    render() {
        const { token, password, visible } = this.state;
        const {
            content: {
                cms: {
                    pages: { auth: { customer: { login } } }
                }
            },
            auth: { loading, error, message },
        } = this.props;

        const titleContent = <div className="text-50 text-700 text-green mb-1">{login.title}</div>;

        const formContent = <>
            <Input type="text" icon="key" onChange={this.inputChangeHandler} validation={{ required: true }} value={token} name="token" required placeholder={login.token} />
            <Input id="password" type={visible ? "text" : "password"} className="position-relative" icon="lock" onChange={this.inputChangeHandler} validation={{ required: true }} value={password} name="password" required placeholder={login.password}
                bonus={<div className="position-absolute d-flex align-items-center" style={{ height: 88, top: 0, right: 40, zIndex: 10, cursor: 'pointer' }} onClick={this.eyeClickedHandler}>
                    <div className="position-relative">
                        <i className="fas fa-eye text-green" />

                        <div style={!visible ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                            <div style={{ height: 1.5, width: 24, transform: 'rotate(30deg) translate(-9px, -12px)' }} className="bg-green" />
                        </div>
                    </div>
                </div>}
            />

            <div className='text-right text-border-75'>
                {login.forgot} ? <span className="text-green text-700" onClick={this.toggle} style={{ cursor: 'pointer' }}>{login.reset}</span>
            </div>

            <div className="mt-5 pt-1 pb-2">
                <CenterButton color="green" className="btn-block" icon="sign-in-alt">{login.sign_in}</CenterButton>
            </div>
        </>;


        const errors = <Error err={error} />;
        const feedback = <Feedback message={message} />;
        let content = null;

        if (loading) content = <div className="h-100 d-flex justify-content-center align-items-center"><CustomSpinner /></div>;
        else content = <Form onSubmit={this.submitHandler}>
            {formContent}

            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>{login.forgot}</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.forgotPassword}>
                        <FormGroup>
                            <Label>{login.email}</Label>
                            <Input icon="user" type="text" name="email" required />
                        </FormGroup>
                        <Button color="green">{login.send}<i className="fas fa-paper-plane ml-2" /></Button>
                    </Form>
                </ModalBody>
            </Modal>
        </Form>;

        return <>
            <div className="mb-5 pb-1">
                {titleContent}
            </div>
            {errors}
            {feedback}
            {content}
        </>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuth: data => dispatch(authCustomerLogin(data)),
    onForgotPassword: data => dispatch(forgotPassword(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);