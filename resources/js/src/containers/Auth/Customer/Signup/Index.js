import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Modal, ModalBody, ModalHeader } from 'reactstrap';

import Input from '../../../Auth/Customer/UI/Input';
import CenterButton from '../../../../components/UI/Button/CenterButton/CenterButton';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';

import { authSignup } from '../../../../store/actions/auth';

export class Signup extends Component {
    state = {
        phone: '',
        password: '',
        password_confirmation: '',
    }

    toggle = () => {
        this.setState(prevState => ({ modal: !prevState.modal }));
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onAuth(e.target);
    }

    inputChangeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    goToPage = page => this.setState({ page })

    render() {
        const { phone, password, password_confirmation } = this.state;
        const {
            content: {
                cms: {
                    pages: { auth: { customer: { signup } } }
                }
            },
            auth: { loading, error, message },
        } = this.props;
        let titleContent, formContent;

        titleContent = <>
            <div className="text-30 text-500 mb-1">{signup.title}</div>

            <div className="text-16 text-300">{signup.already_account} ? <Link to="/login" className='text-orange'>{signup.login}</Link></div>
        </>;

        formContent = <>
            <Input type="text" icon="phone" onChange={this.inputChangeHandler} validation={{ required: true }} value={phone} name="phone" required placeholder={signup.phone} />
            <Input id="password" type="password" className="position-relative" icon="lock" onChange={this.inputChangeHandler} validation={{ required: true }} value={password} name="password" required placeholder={signup.password} />
            <Input id="password-confirmation" type="password" className="position-relative" icon="lock" onChange={this.inputChangeHandler} validation={{ required: true }} value={password_confirmation} name="password_confirmation" required placeholder={signup.password_confirmation} />

            <div className="my-4 pt-1 pb-2">
                <CenterButton color="orange" className="btn-block py-3" icon="sign-in-alt">{signup.signup}</CenterButton>
            </div>

            <div className='text-center'>
                {signup.by_clicking} <span className="text-orange" onClick={this.toggle} style={{ cursor: 'pointer' }}>{signup.terms}</span>
            </div>
        </>;


        const errors = <Error err={error} />;
        const feedback = <Feedback message={message} />;
        let content = null;

        if (loading) content = <div className="h-100 d-flex justify-content-center align-items-center"><CustomSpinner /></div>;
        else content = <Form onSubmit={this.submitHandler}>
            {formContent}

            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>{signup.forgot}</ModalHeader>
                <ModalBody>
                    {signup.terms_content}
                </ModalBody>
            </Modal>
        </Form>;

        return <>
            <div className="mb-4 pb-1">
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
    onAuth: data => dispatch(authSignup(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);