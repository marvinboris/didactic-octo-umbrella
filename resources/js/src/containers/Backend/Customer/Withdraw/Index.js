import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// Components
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import Input from '../../../../components/UI/Input/Input';
import Table from '../../../../components/Backend/UI/Table/Table';
import PageTitle from '../../../../components/Backend/UI/PageTitle';
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import AvailableBalanceTracker from './AvailableBalanceTracker';

import { getWithdraw, postWithdraw, resetWithdraw } from '../../../../store/actions/backend/withdraw';
import { convertDate, updateObject } from '../../../../shared/utility';

import './Withdraw.scss';

const icon = "wallet";

class Index extends Component {
    state = {
        amount: '',
        method: '',
        otp: '',
    }



    // Component methods
    submitHandler = e => {
        e.preventDefault();
        this.props.save(e.target);
    }

    inputChangeHandler = e => {
        let { id, name, value, files, checked, type } = e.target;
        this.setState({ [name]: files ? files[0] : value });
    }



    // Lifecycle methods
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        const {
            content: {
                cms: {
                    pages: { backend: { pages: { withdraw: { title, subtitle, form } } } }
                }
            },
            backend: { withdraw: { loading, error, message, withdrawals = [], total, availableBalanceTrackerData = [] } },
            auth: { data },
        } = this.props;
        const { amount, method, otp } = this.state;

        const errors = <>
            <Error err={error} />
        </>;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
        const feedback = <Feedback message={message} />;

        const content = <form onSubmit={this.submitHandler} className='content'>
            <div className='row'>
                <div className='col-lg-9'>
                    <section className='withdrawal-history shadow'>
                        <div className='header'>
                            <div className='icon'><i className='fas fa-wallet' /></div>

                            <div>
                                <div className='title'>{form.withdrawal_history.title}<i className='fas fa-info-circle' /></div>

                                <div className='subtitle'>{form.withdrawal_history.subtitle}</div>

                                <div className='green-line' />
                            </div>

                            <div className='ml-auto'>
                                <input type="search" className='search' placeholder={form.withdrawal_history.search} />
                            </div>

                            <div>
                                <button className='btn btn-green withdraw'>+ {form.withdrawal_history.withdraw}</button>
                            </div>
                        </div>

                        <div className='body'>
                            <Table loading={loading} data={JSON.stringify(withdrawals)} get={this.props.get} total={total} array={withdrawals.map(withdrawal => updateObject(withdrawal, {
                                created_at: convertDate(withdrawal.created_at),
                                amount: <span className='text-red'>-${withdrawal.amount}</span>,
                                balance_after: <span className='text-green'>${withdrawal.balance_after}</span>,
                            }))} fields={[
                                { name: form.withdrawal_history.date, key: 'created_at' },
                                { name: form.withdrawal_history.method, key: 'method' },
                                { name: form.withdrawal_history.amount, key: 'amount' },
                                { name: form.withdrawal_history.balance_before, key: 'balance_before' },
                                { name: form.withdrawal_history.balance_after, key: 'balance_after' },
                                { name: form.withdrawal_history.location, key: 'location' },
                                { name: form.withdrawal_history.status, key: 'status' },
                            ]} />
                        </div>
                    </section>
                </div>

                <div className='col-lg-3'>
                    <aside className='available-balance shadow'>
                        <div className='header'>
                            <div>
                                <div className='title'>{form.available_balance.title}<i className='fas fa-info-circle' /></div>

                                <div className='subtitle'>{form.available_balance.subtitle}</div>
                            </div>
                        </div>

                        <div>
                            <div className='circle'>
                                <div className='tracker'>
                                    <AvailableBalanceTracker data={availableBalanceTrackerData} />
                                </div>

                                <div className='balance'>{form.available_balance.balance}</div>

                                <div><div className='border-line' /></div>

                                <div className='amount'>{data.balance}</div>
                            </div>
                        </div>

                        <div className='legend'>
                            <div className='green'><i className='fas fa-square text-green' />{form.available_balance.available_balance}</div>

                            <div><i className='fas fa-square text-primary' />{form.available_balance.withdrawals}</div>
                        </div>
                    </aside>

                    <aside className='quick-withdraw shadow'>
                        <div className='header'>
                            <div>
                                <div className='title'>{form.quick_withdraw.title}<i className='fas fa-info-circle' /></div>

                                <div className='subtitle'>{form.quick_withdraw.subtitle}</div>

                                <div className='green-line' />
                            </div>
                        </div>

                        <div>
                            <form onSubmit={this.submitHandler}>
                                <Input type="number" addon={<div className='addon-bg'><i className="fas fa-dollar-sign text-border" /></div>} onChange={this.inputChangeHandler} name="amount" value={amount} placeholder={form.quick_withdraw.amount} required />
                                <Input type="select" addon={<div className='addon-bg'><i className="fas fa-credit-card text-border" /></div>} onChange={this.inputChangeHandler} name="method" value={method} placeholder={form.quick_withdraw.method} required>
                                    <option>{form.quick_withdraw.select_method}</option>
                                </Input>
                                <Input type="number" addon={<div className='addon-bg'><i className="fas fa-key text-border" /></div>} bonus={<button className='get-code btn btn-primary shadow'>{form.quick_withdraw.get_code}</button>} onChange={this.inputChangeHandler} name="otp" value={otp} placeholder={form.quick_withdraw.otp} required />

                                <button className='submit-request btn btn-green btn-block'>{form.quick_withdraw.submit_request}<i className='fas fa-paper-plane' /></button>
                            </form>
                        </div>
                    </aside>
                </div>
            </div>
        </form>;

        return <div className='Withdraw'>
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
    get: (page, show, search) => dispatch(getWithdraw(page, show, search)),
    save: data => dispatch(postWithdraw(data)),
    reset: () => dispatch(resetWithdraw()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));