import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

// Components
import Error from '../../../../components/Error/Error';
import List from '../../../../components/Backend/UI/List/List';
import Feedback from '../../../../components/Feedback/Feedback';
import PageTitle from '../../../../components/Backend/UI/PageTitle';
import Delete from '../../../../components/Backend/UI/Delete/Delete';
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';

import { getProjects, deleteProjects, resetProjects } from '../../../../store/actions/backend/projects';
import { updateObject, convertDate, } from '../../../../shared/utility';

import './Projects.css';

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
                    pages: { components: { list: { action, see } }, backend: { pages: { projects: { title, subtitle, new_project, index, form } } } }
                }
            },
            backend: { projects: { loading, error, message, projects = [], total } },
            auth: { data: { role: { features } } }
        } = this.props;

        const feature = features.find(f => f.prefix === 'projects');
        const redirect = !feature && <Redirect to="/user/dashboard" />;

        const errors = <>
            <Error err={error} />
        </>;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
        const feedback = <Feedback message={message} />;

        const data = projects.map(project => {
            return updateObject(project, {
                created_at: convertDate(project.created_at),
                submitted: <span className='submitted'>{project.submitted}</span>,
                approved: <span className='approved'><i className='fas fa-check' />{project.approved}</span>,
                pending: <span className='pending'><i className='fas fa-spinner fa-spin' />{project.pending}</span>,
                rejected: <span className='rejected'><i className='fas fa-check' />{project.rejected}</span>,
                status: <span className={'status ' + ['bg-orange-20 text-orange', 'bg-green-20 text-green'][project.status]}>{form[['pending', 'completed'][project.status]]}</span>,
                action: <div className="text-center">
                    <Link to={`/user/projects/${project.id}`} className="mx-1">
                        <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                    </Link>
                    {JSON.parse(feature.permissions).includes('u') && <Link to={`/user/projects/${project.id}/edit`} className="mx-1">
                        <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                    </Link>}
                    {JSON.parse(feature.permissions).includes('d') && <span className="mx-1"><Delete deleteAction={() => this.props.delete(project.id)}><FontAwesomeIcon icon={faTrash} className="text-red" fixedWidth /></Delete></span>}
                </div>,
            });
        });

        const content = <List array={data} loading={loading} data={JSON.stringify(projects)} get={this.props.get} total={total} add={new_project} link="/user/projects/add" icon={icon} title={index} subtitle={subtitle} className="shadow-sm"
            fields={[
                { name: form.created_at, key: 'created_at' },
                { name: form.name, key: 'name' },
                { name: form.total_forms, key: 'total_forms' },
                { name: form.submitted, key: 'submitted' },
                { name: form.approved, key: 'approved' },
                { name: form.pending, key: 'pending' },
                { name: form.rejected, key: 'rejected' },
                { name: form.status, key: 'status' },
                { name: action, key: 'action' }
            ]} />;

        return <div className='Projects'>
            <PageTitle title={title} subtitle={subtitle}>
                <Breadcrumb main={index} />
            </PageTitle>

            <div className='content'>
                {redirect}
                {errors}
                {flash}
                {feedback}
                {content}
            </div>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: (page, show, search) => dispatch(getProjects(page, show, search)),
    delete: id => dispatch(deleteProjects(id)),
    reset: () => dispatch(resetProjects()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));