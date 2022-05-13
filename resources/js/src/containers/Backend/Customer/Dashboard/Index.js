import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel2';

// Components
import Card from './Card';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import PageTitle from '../../../../components/Backend/UI/PageTitle';
import FormBlock from '../../../../components/Backend/UI/FormBlock';
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import PerformanceBlock from '../../../../components/Backend/UI/PerformanceBlock';

import { getDashboard, resetDashboard } from '../../../../store/actions/backend/dashboard';
import { authLogout } from '../../../../store/actions/auth';

import './Dashboard.scss';

const RecentFormGroup = ({ title, active }) => <div className='RecentFormGroup'>
    <div className={active ? "active" : ""}>
        {title}{active && " ."}
    </div>
</div>;

const SectionTitle = ({ title, subtitle }) => <>
    <div className='text-500'>{title}</div>

    <div className='mb-4'>{subtitle}</div>

    <div className='bg-green rounded-pill' style={{ height: 5, width: 39 }} />
</>;

const DataOverviewBlock = ({ title, value, color }) => <div className='col-4 pr-0 position-relative'>
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
                cms
            },
            backend: { dashboard: { loading, error, message, blocksData, recentForms, dataOverview, rankingBoard } },
        } = this.props;
        const {
            pages: { backend: { pages: { dashboard: { customer: { title, subtitle, blocks, recent_forms, data_overview, ranking_board } } } } }
        } = cms;

        let leftContent = null, rightContent = null;

        const errors = <Error err={error} />;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
        const feedback = <Feedback message={message} />;

        if (loading || !blocksData) leftContent = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            const data = [
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
                    title: blocks.balance,
                    color: 'lightgreen',
                    value: <span className='text-700 text-30 text-green'><i className='fas fa-dollar-sign' /> {blocksData.balance}</span>,
                    addon: <i className='fas fa-wallet text-42 text-lightgreen' />,
                },
            ];

            const cardsContent = data.map((card, index) => <Card key={index} {...card} />);
            const recentFormsContent = recentForms.map(form => <FormBlock key={JSON.stringify(form)} {...form} className="col-lg-4" />);
            const rankingBoardContent = rankingBoard.map(performance => <PerformanceBlock key={JSON.stringify(performance)} {...performance} />);

            leftContent = <div className='left-content'>
                {errors}
                {flash}
                {feedback}

                <section className='blocks'>
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
                </section>

                <section className='recent-forms'>
                    <div className='header'>
                        <div className='row'>
                            <div className='col-lg-4 d-flex align-items-center text-green'>
                                <div><i className='fas fa-copy text-21' /></div>

                                <div className='px-2 mx-1'><i className='fas fa-circle text-6' /></div>

                                <div className='text-25 text-500 text-border'>{recent_forms.title}</div>
                            </div>

                            <div className='col-lg-8 d-flex align-items-center'>
                                <div className='d-flex align-items-center'>
                                    <RecentFormGroup title={recent_forms.all} active />
                                    <RecentFormGroup title={recent_forms.approved} />
                                    <RecentFormGroup title={recent_forms.pending} />
                                    <RecentFormGroup title={recent_forms.available} />
                                    <RecentFormGroup title={recent_forms.cancelled} />
                                </div>

                                <div className='flex-fill d-flex justify-content-center'>
                                    <div className='bg-border-50 rounded-1' style={{ width: 2, height: 30 }} />
                                </div>

                                <div className='d-flex justify-content-end align-items-center text-green text-500'>
                                    {recent_forms.view_list}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='content'>
                        <div className='row'>
                            {recentFormsContent}
                        </div>
                    </div>
                </section>
            </div>;

            rightContent = <>
                <section className='data-overview'>
                    <div className='d-flex mb-4'>
                        <div>
                            <SectionTitle {...data_overview} />
                        </div>

                        <div className='ml-auto'>
                            {data_overview.total} : <span className='text-green text-500'>{dataOverview.total}</span>
                        </div>
                    </div>

                    <div className='row'>
                        <DataOverviewBlock title={data_overview.approved} value={dataOverview.approved} color="green" />
                        <DataOverviewBlock title={data_overview.pending} value={dataOverview.pending} color="orange" />
                        <DataOverviewBlock title={data_overview.rejected} value={dataOverview.rejected} color="red" />
                    </div>
                </section>

                <section className='ranking-board flex-fill'>
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
            </>;
        }

        return <div className='Dashboard'>
            <div className='flex-fill'>
                <PageTitle title={title} subtitle={subtitle} icon={icon}>
                    <Breadcrumb main={title} />
                </PageTitle>

                {leftContent}
            </div>

            <div className='right-content'>{rightContent}</div>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getDashboard()),
    reset: () => dispatch(resetDashboard()),
    logout: () => dispatch(authLogout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));