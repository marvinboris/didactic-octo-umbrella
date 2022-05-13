import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel2';

// Components
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import PageTitle from '../../../../components/Backend/UI/PageTitle';
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import PerformanceBlock from '../../../../components/Backend/UI/PerformanceBlock';
import Card from './Card';
import GeneralReportTracker from './GeneralReportTracker';

import { getDashboard, resetDashboard } from '../../../../store/actions/backend/dashboard';

import './Dashboard.css';

const SectionTitle = ({ title, subtitle }) => <>
    <div className='text-500'>{title}</div>

    <div className='mb-4'>{subtitle}</div>

    <div className='bg-green rounded-pill' style={{ height: 5, width: 39 }} />
</>;

const icon = "home";

class Dashboard extends Component {
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
                    pages: { backend: { pages: { dashboard: { user: { title, subtitle, blocks, general_report, ranking_board } } } } }
                }
            },
            backend: { dashboard: { loading, error, message, blocksData, rankingBoard, generalReport, generalReportTrackerData } },
        } = this.props;

        let content = null;
        const errors = <Error err={error} />;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
        const feedback = <Feedback message={message} />;

        if (loading || !blocksData) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            const cardsContent = [
                {
                    title: blocks.total,
                    color: 'primary',
                    value: <span className='text-700 text-30'>{blocksData.total}</span>,
                    addon: <i className='far fa-file-alt text-42 text-primary' />,
                },
                {
                    title: blocks.approved,
                    color: 'orange',
                    value: <span className='text-700 text-30'>{blocksData.approved}</span>,
                    addon: <i className='far fa-file text-42 text-orange' />,
                },
                {
                    title: blocks.project,
                    color: 'green',
                    value: <div className='position-relative'>
                        <div className='text-700 text-30'>{blocksData.project} <span className='text-500 text-16'>/ 1000</span></div>
                        <div className='position-absolute text-14'>{blocksData.days_left} {blocks.days_left}</div>
                    </div>,
                    addon: <div className='text-500 text-16 text-green d-flex justify-content-center align-items-center border border-green border-4 rounded-circle' style={{ width: 50, height: 50 }}>
                        {Math.floor(blocksData.project / 10)} <span className='text-400 text-12 text-green-40'>%</span>
                    </div>,
                },
                {
                    title: blocks.payment_out,
                    color: 'red',
                    value: <span className='text-700 text-30'><i className='fas fa-dollar-sign' /> {blocksData.payment_out}</span>,
                    addon: <i className='fas fa-wallet text-42 text-red' />,
                },
                {
                    title: blocks.payment_in,
                    color: 'lightgreen',
                    value: <span className='text-700 text-30'><i className='fas fa-dollar-sign' /> {blocksData.payment_in}</span>,
                    addon: <i className='fas fa-wallet text-42 text-lightgreen' />,
                },
            ].map((card, index) => <Card key={index} {...card} />);
            const rankingBoardContent = rankingBoard.map(performance => <PerformanceBlock key={JSON.stringify(performance)} {...performance} />);

            content = <div className='content'>
                {errors}
                {flash}
                {feedback}

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

                <div className='row'>
                    <div className='col-lg-8'>
                        <section className='general-report shadow'>
                            <div className='icon'><i className='far fa-chart-bar' /></div>

                            <div className='flex-fill'>
                                <div className='header'>
                                    <div>
                                        <div className='title'>{general_report.title}<i className='fas fa-info-circle' /></div>

                                        <div className='subtitle'>{general_report.subtitle}</div>

                                        <div className='green-line' />
                                    </div>

                                    <div className='periods'>
                                        <div className='finance'><i className='fas fa-square text-green-40' />{general_report.finance}</div>

                                        <div className='work'><i className='fas fa-check-square text-green' />{general_report.work}</div>
                                    </div>

                                    <div>
                                        <select>
                                            <option>{general_report.change_project}</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='body'>
                                    <div className='row align-items-center'>
                                        <div className='col-lg-4'>
                                            <div>{general_report.total}</div>

                                            <div><span className='total'>{generalReport.total}</span><span className='increase'><span className='value'>{generalReport.increase}%</span> {general_report.increase}</span></div>
                                        </div>

                                        <div className='general-report-tracker col-lg-8'>
                                            <GeneralReportTracker data={generalReportTrackerData} cms={general_report} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className='col-lg-4'>
                        <section className='ranking-board shadow'>
                            <div className='d-flex mb-4'>
                                <div>
                                    <SectionTitle {...ranking_board} />
                                </div>

                                <div className='ml-auto'>

                                </div>
                            </div>

                            <div>
                                {rankingBoardContent}
                            </div>
                        </section>
                    </div>
                </div>
            </div>;
        }

        return <div className='Dashboard'>
            <PageTitle title={title} subtitle={subtitle} icon={icon}>
                <Breadcrumb main={title} />
            </PageTitle>

            {content}
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getDashboard()),
    reset: () => dispatch(resetDashboard()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));