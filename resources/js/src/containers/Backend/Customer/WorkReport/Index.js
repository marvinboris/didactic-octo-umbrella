import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Components
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import PageTitle from '../../../../components/Backend/UI/PageTitle';
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import FormBlock from '../../../../components/Backend/UI/FormBlock';

import { getWorkReport, resetWorkReport } from '../../../../store/actions/backend/work-report';

import './WorkReport.scss';

const Stat = ({ text, color, value }) => <div className='Stat'>
    <div className='text'>{text}</div>

    <div className={'value text-' + color}>{value}</div>
</div>;

const icon = "file-alt";

class Index extends Component {
    state = {
        selectedProject: {
            number: 2
        },
    }

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
                    pages: { backend: { pages: { work_report: { title, subtitle, index, form } } } }
                }
            },
            backend: { work_report: { loading, error, message, stats = {}, forms = [] } },
        } = this.props;
        const { selectedProject } = this.state;

        const errors = <>
            <Error err={error} />
        </>;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
        const feedback = <Feedback message={message} />;

        const formsContent = forms.map(form => <FormBlock key={JSON.stringify(form)} {...form} className="col-lg-3 pb-5" />);

        const content = <div className='content'>
            <section className='work-report'>
                <div className='header'>
                    <div className='d-flex text-green'>
                        <div><i className='fas fa-copy text-21' /></div>

                        <div className='px-2 mx-1'><i className='fas fa-circle text-6' /></div>

                        <div className='d-flex flex-column align-items-center'>
                            <div className='text-25 text-500 text-border'>{form.project} {selectedProject.number} - {form.report}</div>

                            <div>
                                <div className={'payment bg-' + ['orange-30 text-orange', 'green text-white'][stats.payment]}>{form.payment[['pending', 'completed'][stats.payment]]}<i className={'fas fa-' + ['spinner fa-spin', 'check-circle'][stats.payment]} /></div>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center align-items-center flex-fill text-16'>
                        <Stat text={form.submitted_forms} color="primary" value={stats.submitted_forms} />
                        <Stat text={form.approved_forms} color="orange" value={stats.approved_forms} />
                        <Stat text={form.rejected_forms} color="red" value={stats.rejected_forms} />
                        <Stat text={form.expected_payment} color="green" value={'$' + stats.expected_payment} />
                    </div>

                    <div>
                        <input className='form-control border-0 bg-border-5 rounded-10 text-border-50 text-14 py-3 px-4' type="search" placeholder={form.search + '...'} />
                    </div>

                    <div>
                        <button className='btn btn-green filter'><i className='fas fa-filter' /></button>
                    </div>
                </div>

                <div className='content'>
                    <div className='row'>
                        {formsContent}
                    </div>
                </div>
            </section>
        </div>;

        return <div className='WorkReport'>
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
    get: (page, show, search) => dispatch(getWorkReport(page, show, search)),
    reset: () => dispatch(resetWorkReport()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));