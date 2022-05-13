import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Logo from '../../../../components/UI/Logo/Logo';

import './Layout.css';

class Layout extends Component {
    render() {
        const {
            content: {
                cms: { global: { company_name }, pages: { auth: { footer, customer: { layout } } } }
            },
            children,
        } = this.props;

        return <div className='Auth Customer Layout'>
            <header>
                <div className='container'>
                    <Logo type="named" />
                </div>
            </header>

            <main className='flex-fill'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <div className='text-border-30 text-50'>{layout.work_from} <span className='text-green text-80 text-700'>{layout.home}</span></div>

                            <div className='row text-border-30 text-50'>
                                <div className='ml-auto col-lg-6'>{layout.data_entry}</div>
                            </div>
                        </div>

                        <div className='col-lg-3'>{children}</div>
                    </div>
                </div>
            </main>

            <footer>
                <div className='container d-flex justify-content-center align-items-center'>
                    <div className='pr-3'><i className='far fa-copyright fa-fw text-24 text-green' /></div>

                    <div>{footer.copyrights} {(new Date()).getFullYear()}. {footer.all_rights} <span className='special'>{company_name}</span></div>
                </div>
            </footer>
        </div>
    }
}

const mapStateToProps = state => ({ ...state });

export default withRouter(connect(mapStateToProps)(Layout));