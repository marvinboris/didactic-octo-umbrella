import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Row } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel2';

// Components
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import PageTitle from '../../../../components/Backend/UI/PageTitle';
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import Card from './Card';
import GeneralWorkReportTracker from './GeneralWorkReportTracker';
import FinancialReportTracker from './FinancialReportTracker';

import { getMyReport, resetMyReport } from '../../../../store/actions/backend/my-report';

import './MyReport.scss';

const Stat = ({ text, color, value }) => <div className='Stat'>
    <div className='text'>{text}</div>

    <div className={'value text-' + color}>{value}</div>
</div>;

const WorkReportBlock = ({ title, value, color }) => <div className='col-4 pr-0 position-relative'>
    <div className={'rounded-20 shadow-sm px-3 py-4 bg-' + color + '-20 text-' + color + '-80 d-flex flex-column align-items-center'}>
        <div>
            <span className='text-30 text-700'>{value}</span> <span className='text-14 text-500'>%</span>
        </div>

        <div className='py-1'>
            <div className={'bg-' + color + '-40 rounded-pill'} style={{ height: 4, width: 14 }} />
        </div>

        <div className='text-14 text-500'>{title}</div>
    </div>

    <div className={'rounded-8 bg-' + color + ' position-absolute d-flex justify-content-center align-items-center text-white text-14 shadow-sm'} style={{ top: -8, right: -8, width: 32, height: 32 }}>
        <i className={'fas fa-' + {
            green: 'check',
            orange: 'spinner fa-spin',
            red: 'times-circle'
        }[color] + ''} />
    </div>
</div>;

const icon = "folder-open";

class Index extends Component {
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
                    pages: { backend: { pages: { my_report: { title, subtitle, form } } } }
                }
            },
            backend: { my_report: { loading, error, message, blocksData = {}, generalWorkReport = {}, projects = [], workReport = {}, generalWorkReportTrackerData = [], financialReportTrackerData = [] } },
            auth: { data },
        } = this.props;

        const errors = <>
            <Error err={error} />
        </>;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
        const feedback = <Feedback message={message} />;

        const cardsContent = [
            {
                title: form.blocks.total,
                color: 'primary',
                value: <span className='text-700 text-30'>{blocksData.total}</span>,
                addon: <i className='far fa-file-alt text-42 text-primary' />,
            },
            {
                title: form.blocks.approved,
                color: 'orange',
                value: <span className='text-700 text-30'>{blocksData.approved}</span>,
                addon: <i className='far fa-file text-42 text-orange' />,
            },
            {
                title: form.blocks.rejected,
                color: 'red',
                value: <span className='text-700 text-30'>{blocksData.rejected}</span>,
                addon: <i className='far fa-calendar-times text-42 text-red' />,
            },
            {
                title: form.blocks.accuracy,
                color: 'green',
                value: <div className='position-relative'>
                    <div className='text-700 text-30 text-green'>{blocksData.accuracy} <span className='text-500 text-16'>%</span></div>
                    <div className='position-absolute text-14'>{form.blocks.average}</div>
                </div>,
                addon: <i className='far fa-smile text-52 text-green' />,
            },
        ].map((card, index) => <Card key={index} {...card} />);
        const projectsContent = projects.map(project => <div className='project shadow' key={JSON.stringify(project)}>
            <div className='d-flex text-green'>
                <div><i className='fas fa-copy text-21' /></div>

                <div className='px-2 mx-1'><i className='fas fa-circle text-6' /></div>

                <div className='d-flex flex-column align-items-center'>
                    <div className='text-25 text-500 text-border'>{form.project_report.project} {project.number} - {form.project_report.report}</div>

                    <div>
                        <div className={'payment bg-' + ['orange-30 text-orange', 'green-30 text-green'][project.payment]}>{form.project_report.payment[['pending', 'completed'][project.payment]]}<i className={'fas fa-' + ['spinner fa-spin', 'check'][project.payment]} /></div>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center flex-fill text-16'>
                <Stat text={form.project_report.submitted_forms} color="primary" value={project.submitted_forms} />
                <Stat text={form.project_report.approved_forms} color="orange" value={project.approved_forms} />
                <Stat text={form.project_report.rejected_forms} color="red" value={project.rejected_forms} />
                <Stat text={form.project_report.expected_payment} color="green" value={'$' + project.expected_payment} />
            </div>

            <div className='align-self-center'>
                <button className='btn btn-green eye'><i className='fas fa-eye' /></button>
            </div>
        </div>);

        const content = <div className='content'>
            <div className='row'>
                <div className='col-lg-9'>
                    <div className='blocks'>
                        <Row className='d-none d-md-flex mb-5'>
                            {cardsContent}
                        </Row>

                        <div className='d-md-none'>
                            <OwlCarousel options={{
                                items: 1,
                                center: false,
                                loop: true,
                                dots: true,
                            }}>
                                {cardsContent}
                            </OwlCarousel>
                        </div>
                    </div>

                    <section className='general-work-report shadow'>
                        <div className='icon'><i className='far fa-chart-bar' /></div>

                        <div className='flex-fill'>
                            <div className='header'>
                                <div>
                                    <div className='title'>{form.general_work_report.title}<i className='fas fa-info-circle' /></div>

                                    <div className='subtitle'>{form.general_work_report.subtitle}</div>

                                    <div className='green-line' />
                                </div>

                                <div className='periods'>
                                    <div className='weekly'><i className='fas fa-square text-green-40' />{form.general_work_report.weekly}</div>

                                    <div className='monthly'><i className='fas fa-check-square text-green' />{form.general_work_report.monthly}</div>
                                </div>

                                <div>
                                    <select>
                                        <option>{form.general_work_report.change_report}</option>
                                    </select>
                                </div>
                            </div>

                            <div className='body'>
                                <div className='row align-items-center'>
                                    <div className='col-lg-4'>
                                        <div>{form.general_work_report.total}</div>

                                        <div><span className='total'>{generalWorkReport.total}</span><span className='increase'><span className='value'>{generalWorkReport.increase}%</span> {form.general_work_report.increase}</span></div>
                                    </div>

                                    <div className='general-work-report-tracker col-lg-8'>
                                        <GeneralWorkReportTracker data={generalWorkReportTrackerData} cms={form.general_work_report} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className='col-lg-3'>
                    <aside className='financial-report shadow'>
                        <div className='header'>
                            <div>
                                <div className='title'>{form.financial_report.title}<i className='fas fa-info-circle' /></div>

                                <div className='subtitle'>{form.financial_report.subtitle}</div>
                            </div>
                        </div>

                        <div>
                            <div className='circle'>
                                <div className='tracker'>
                                    <FinancialReportTracker data={financialReportTrackerData} />
                                </div>

                                <div className='balance'>{form.financial_report.balance}</div>

                                <div><div className='border-line' /></div>

                                <div className='amount'>{data.balance}</div>
                            </div>
                        </div>

                        <div className='legend'>
                            <div className='green'><i className='fas fa-square text-green' />{form.financial_report.available_balance}</div>

                            <div><i className='fas fa-square text-primary' />{form.financial_report.withdrawals}</div>
                        </div>
                    </aside>

                    <aside className='work-report shadow'>
                        <div className='header'>
                            <div>
                                <div className='title'>{form.work_report.title}<i className='fas fa-info-circle' /></div>

                                <div className='subtitle'>{form.work_report.subtitle}</div>

                                <div className='green-line' />
                            </div>
                        </div>

                        <div className='row'>
                            <WorkReportBlock title={form.work_report.approved} value={workReport.approved} color="green" />
                            <WorkReportBlock title={form.work_report.pending} value={workReport.pending} color="orange" />
                            <WorkReportBlock title={form.work_report.rejected} value={workReport.rejected} color="red" />
                        </div>
                    </aside>
                </div>

                <div className='col-lg-12'>
                    <section className='project-report shadow'>
                        <div className='header'>
                            <div>
                                <div className='title'>{form.project_report.title}<i className='fas fa-info-circle' /></div>

                                <div className='subtitle'>{form.project_report.subtitle}</div>

                                <div className='green-line' />
                            </div>

                            <div className='ml-auto'>
                                <input type="search" className='search' placeholder={form.project_report.search} />
                            </div>
                        </div>

                        <div className='body'>
                            {projectsContent}
                        </div>
                    </section>
                </div>
            </div>
        </div>;

        return <div className='MyReport'>
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
    get: (page, show, search) => dispatch(getMyReport(page, show, search)),
    reset: () => dispatch(resetMyReport()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));