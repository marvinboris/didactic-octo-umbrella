import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel2';

// Components
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import FormBlock from '../../../../components/Backend/UI/FormBlock';
import PageTitle from '../../../../components/Backend/UI/PageTitle';
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import ProjectBlock from '../../../../components/Backend/UI/ProjectBlock';

import { getProjects, resetProjects } from '../../../../store/actions/backend/projects';

import './Projects.scss';

const icon = "folder-plus";

class Index extends Component {
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
                    pages: { backend: { pages: { projects: { customer: { title, subtitle, form } } } } }
                }
            },
            backend: { projects: { loading, error, message, selectedProject = {}, projects = [], forms = [] } },
        } = this.props;

        const errors = <>
            <Error err={error} />
        </>;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
        const feedback = <Feedback message={message} />;

        const projectsContent = projects.map(project => <ProjectBlock key={JSON.stringify(project)} {...project} className="p-4" />);
        const formsContent = forms.map(form => <FormBlock key={JSON.stringify(form)} {...form} className="col-lg-3 pb-5" />);

        const content = <div className='content'>
            <section className='projects'>
                {projects.length > 0 && <OwlCarousel options={{
                    responsive: { 0: { items: 1 }, 480: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 }, 1440: { items: 5 } },
                    center: false,
                    loop: false,
                    dots: true,
                }}>
                    {projectsContent}
                </OwlCarousel>}
            </section>

            {selectedProject.number && <section className='project-files'>
                <div className='header'>
                    <div className='d-flex align-items-center text-green'>
                        <div><i className='fas fa-copy text-21' /></div>

                        <div className='px-2 mx-1'><i className='fas fa-circle text-6' /></div>

                        <div className='text-25 text-500 text-border'>{form.project} {selectedProject.number} - {form.project_files}</div>
                    </div>

                    <div className='d-flex justify-content-center align-items-center flex-fill text-16'>
                        <div>{form.available}</div>

                        <div><div className='line' /></div>

                        <div>{form.booked}</div>
                    </div>

                    <div>
                        <input className='form-control border-0 bg-border-5 rounded-10 text-border-50 text-14 py-3 px-4' type="search" placeholder={form.search + '...'} />
                    </div>
                </div>

                <div className='content'>
                    <div className='row'>
                        {formsContent}
                    </div>
                </div>
            </section>}
        </div>;

        return <div className='Projects'>
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
    get: (page, show, search) => dispatch(getProjects(page, show, search)),
    reset: () => dispatch(resetProjects()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));