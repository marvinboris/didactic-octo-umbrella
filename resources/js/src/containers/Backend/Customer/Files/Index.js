import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Components
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import PageTitle from '../../../../components/Backend/UI/PageTitle';
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import FormBlock from '../../../../components/Backend/UI/FormBlock';

import { getFiles, resetFiles } from '../../../../store/actions/backend/files';

import './Files.scss';

const icon = "copy";

const FilterOption = ({ name, active, onClick }) => <div className={'option' + (active ? ' active' : '')} onClick={onClick}>{name}</div>

class Index extends Component {
    state = {
        page: 1,
        show: 'All',
        search: '',
    }



    // Component methods
    inputChangeHandler = e => {
        const { name, value } = e.target
        this.setState({ [name]: value }, () => this.props.get(this.state.page, this.state.show, value));
    }

    setShow = show => this.setState({ show }, () => this.props.get(this.state.page, show, this.state.search))



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
                    pages: { backend: { pages: { files: { title, subtitle, index, form } } } }
                }
            },
            backend: { files: { loading, error, message, selectedProject = {}, forms = [] } },
        } = this.props;
        const { show, search } = this.state;

        const errors = <>
            <Error err={error} />
        </>;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
        const feedback = <Feedback message={message} />;

        const formsContent = forms.map(form => <FormBlock key={JSON.stringify(form)} {...form} className="col-lg-3 pb-5" />);

        const content = <div className='content'>
            <section className='files-status'>
                <div className='header'>
                    <div className='d-flex align-items-center text-green'>
                        <div><i className='fas fa-copy text-21' /></div>

                        <div className='px-2 mx-1'><i className='fas fa-circle text-6' /></div>

                        <div className='text-25 text-500 text-border'>{form.project} {selectedProject.number} - {form.project_files}</div>
                    </div>

                    <div className='filter'>
                        <FilterOption name={form.all} active={show === form.all} onClick={() => this.setShow(form.all)} />
                        <div><div className='line' /></div>
                        <FilterOption name={form.pending} active={show === form.pending} onClick={() => this.setShow(form.pending)} />
                        <div><div className='line' /></div>
                        <FilterOption name={form.approved} active={show === form.approved} onClick={() => this.setShow(form.approved)} />
                        <div><div className='line' /></div>
                        <FilterOption name={form.rejected} active={show === form.rejected} onClick={() => this.setShow(form.rejected)} />
                        <div><div className='line' /></div>
                        <FilterOption name={form.reserved} active={show === form.reserved} onClick={() => this.setShow(form.reserved)} />
                    </div>

                    <div>
                        <input className='form-control border-0 bg-border-5 rounded-10 text-border-50 text-14 py-3 px-4' type="search" name='search' value={search} onChange={this.inputChangeHandler} placeholder={form.search + '...'} />
                    </div>
                </div>

                <div className='content'>
                    <div className='row'>
                        {formsContent}
                    </div>
                </div>
            </section>
        </div>;

        return <div className='Files'>
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
    get: (page, show, search) => dispatch(getFiles(page, show, search)),
    reset: () => dispatch(resetFiles()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));