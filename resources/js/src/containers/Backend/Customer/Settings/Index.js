import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// Components
import Aside from './Aside';
import Section from './Section';
import Error from '../../../../components/Error/Error';
import Input from '../../../../components/UI/Input/Input';
import Feedback from '../../../../components/Feedback/Feedback';
import PageTitle from '../../../../components/Backend/UI/PageTitle';
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';

import { getSettings, saveSettings, resetSettings } from '../../../../store/actions/backend/settings';

import './Settings.scss';

const icon = "sliders-h";

class Index extends Component {
    state = {
        name: '',
        email: '',
        country: '',
        city: '',
        address: '',
        phone: '',
        user_account_disabled: true,

        mobile_money_name: '',
        mobile_money_operator: '',
        mobile_money_phone: '',
        paypal_email: '',
        payment_method_disabled: true,
    }



    // Component methods
    submitHandler = e => {
        e.preventDefault();
        this.props.save(e.target);
    }

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
                document.getElementById('div-' + input.name).style.backgroundImage = `url('${e.target.result}')`;
                document.getElementById('div-' + input.name).style.backgroundSize = "cover";
                // document.getElementById(input.name).querySelector(".file-selected").innerHTML = file.name;
            }

            reader.readAsDataURL(file); // convert to base64 string
        }
    }

    fileUpload = () => document.getElementById('photo').click()

    userAccountFormToggle = () => this.setState(prevState => ({ user_account_disabled: !prevState.user_account_disabled }))

    paymentMethodFormToggle = () => this.setState(prevState => ({ payment_method_disabled: !prevState.payment_method_disabled }))



    // Lifecycle methods
    componentDidMount() {
        this.props.get();
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.backend.settings.message && this.props.backend.settings.message && this.props.backend.settings.message.type === 'success' && !this.props.edit) {
            if (this.state.add) this.setState({ ...initialState });
            else this.props.history.push({
                pathname: '/customer/settings',
                state: {
                    message: this.props.backend.settings.message,
                },
            });
        }
        if (!prevProps.backend.settings.customer && this.props.backend.settings.customer) {
            const { backend: { settings: { customer } } } = this.props;
            this.setState({ ...customer });
        }
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        const {
            content: {
                cms: {
                    pages: { components: { form: { save } }, backend: { pages: { settings: { title, subtitle, form } } } }
                }, countries
            },
            backend: { settings: { loading, error, message, customer = {} } },
        } = this.props;
        const { name, email, country, city, address, phone, mobile_money_name, mobile_money_operator, mobile_money_phone, paypal_email, user_account_disabled, payment_method_disabled } = this.state;

        const saveButton = <button className='save btn btn-green'>{save}</button>;

        const errors = <>
            <Error err={error} />
        </>;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
        const feedback = <Feedback message={message} />;

        const countriesOptions = countries.map(({ country, code, name }) => <option key={country} value={country} code={code}>{name}</option>);

        const content = <form onSubmit={this.submitHandler} className='content'>
            <div className='row'>
                <div className='col-lg-9'>
                    <Section className='user-account' icon='user-cog' {...form.user_account} disabled={user_account_disabled} onClick={this.userAccountFormToggle}>
                        <div className='row'>
                            <Input className="col-lg-4" type="text" onChange={this.inputChangeHandler} name="name" value={name} label={form.user_account.name} required disabled={user_account_disabled} />
                            <Input className="col-lg-4" type="email" onChange={this.inputChangeHandler} name="email" value={email} label={form.user_account.email} required disabled={user_account_disabled} />
                            <Input className="col-lg-4" type="select" addon={<span className="flag"><span className={`flag-icon flag-icon-${country && country.toLowerCase()}`} /></span>} onChange={this.inputChangeHandler} value={country} name="country" required disabled={user_account_disabled} label={form.user_account.country}>
                                <option>{form.user_account.select_country}</option>
                                {countriesOptions}
                            </Input>
                            <Input className="col-lg-4" type="text" onChange={this.inputChangeHandler} name="city" value={city} label={form.user_account.city} required disabled={user_account_disabled} />
                            <Input className="col-lg-4" type="text" onChange={this.inputChangeHandler} name="address" value={address} label={form.user_account.address} required disabled={user_account_disabled} />
                            <Input className="col-lg-4" type="tel" addon={<span className="text-border text-500 text-14">{country}-</span>} onChange={this.inputChangeHandler} name="phone" value={phone} label={form.user_account.phone} required disabled={user_account_disabled} />
                        </div>
                    </Section>

                    <Section className='payment-method' icon='dollar-sign' {...form.payment_method} disabled={payment_method_disabled} onClick={this.paymentMethodFormToggle}>
                        <div className='row align-items-start'>
                            <div className='col-lg-6'>
                                <div className='method'>
                                    <div className='header'>
                                        <div>
                                            <div className='title'>{form.payment_method.mobile_money.title}</div>

                                            <div className='subtitle'>{form.payment_method.mobile_money.subtitle}</div>
                                        </div>
                                    </div>

                                    <div className='body'>
                                        <Input type="text" onChange={this.inputChangeHandler} name="mobile_money_name" value={mobile_money_name} placeholder={form.payment_method.mobile_money.mobile_money_name} disabled={payment_method_disabled} />
                                        <Input type="select" onChange={this.inputChangeHandler} name="mobile_money_operator" value={mobile_money_operator} disabled={payment_method_disabled}>
                                            <option>{form.payment_method.mobile_money.select_operator}</option>
                                            <option value="om">{form.payment_method.mobile_money.orange_money}</option>
                                            <option value="momo">{form.payment_method.mobile_money.mtn_mobile_money}</option>
                                        </Input>
                                        <Input type="tel" onChange={this.inputChangeHandler} name="mobile_money_phone" value={mobile_money_phone} placeholder={form.payment_method.mobile_money.mobile_money_phone} disabled={payment_method_disabled} />

                                        {saveButton}
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className='method'>
                                    <div className='header'>
                                        <div>
                                            <div className='title'>{form.payment_method.paypal.title}</div>
                                        </div>

                                        <div><img src='/images/paypal.png' /></div>
                                    </div>

                                    <div className='body'>
                                        <Input type="email" onChange={this.inputChangeHandler} name="paypal_email" value={paypal_email} placeholder={form.payment_method.paypal.paypal_email} disabled={payment_method_disabled} />

                                        {saveButton}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>
                </div>

                <div className='col-lg-3'>
                    <Aside className='profile-image' {...form.profile_image} button={<button onClick={this.fileUpload} type="button" className='edit btn btn-primary'><i className='fas fa-pen' /></button>}>
                        <input type="file" id="photo" name="photo" className="d-none" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg" />

                        <div>
                            <div id='div-photo' className='photo' style={{ backgroundImage: 'url("' + customer.photo + '")' }} />
                        </div>

                        <div className='name'>{customer.name}</div>

                        <div className='token'>{form.profile_image.id}: <span className='value'>{customer.token}</span></div>
                    </Aside>

                    <Aside className='affiliate-link-div' {...form.affiliate_link} button={<CopyToClipboard text={customer.affiliate_link}><button type="button" className='copy btn btn-green'><i className='fas fa-copy' /></button></CopyToClipboard>}>
                        <div>
                            <div className='qr' style={{ backgroundImage: 'url("https://chart.googleapis.com/chart?cht=qr&chs=420x420&chl=' + customer.affiliate_link + '")' }} />
                        </div>

                        <div>
                            <button className='share btn btn-green'>{form.affiliate_link.share}<i className='fas fa-share-alt' /></button>
                        </div>
                    </Aside>

                    <Aside className='accepted-payment-methods' {...form.accept_payment_methods}>
                        <div><img src='/images/paypal.png' /></div>

                        <div><img src='/images/bitcoin.png' /></div>
                    </Aside>
                </div>
            </div>
        </form>;

        return <div className='Settings'>
            <PageTitle title={title} subtitle={subtitle} icon={icon}>
                <Breadcrumb main={title} />
            </PageTitle>

            {errors}
            {flash}
            {feedback}
            {content}
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: (page, show, search) => dispatch(getSettings(page, show, search)),
    save: data => dispatch(saveSettings(data)),
    reset: () => dispatch(resetSettings()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));