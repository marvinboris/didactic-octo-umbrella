import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../components/Backend/UI/List/List';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import Delete from '../../../../components/Backend/UI/Delete/Delete';
import View from '../../../../components/Backend/UI/View/View';

import { deleteDrivers, getDrivers, resetDrivers } from '../../../../store/actions/backend/drivers.js';
import { updateObject, convertDate } from '../../../../shared/utility';

const icon = "user-tie";

class Index extends Component {
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { list: { action, see } }, backend: { pages: { drivers: { title, add, index, form } } } }
                }
            },
            backend: { drivers: { loading, error, message, drivers, total } },
        } = this.props;

        const errors = <>
            <Error err={error} />
        </>;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
        const feedback = <Feedback message={message} />;

        if (!drivers) drivers = [];
        const data = drivers.map(driver => {
            return updateObject(driver, {
                created_at: convertDate(driver.created_at),
                photo: driver.photo && <div className="d-flex">
                    <span>{see}</span>

                    <span className="ml-auto">
                        <View title={`${form.driver_photo}: ${driver.name}`} content={<img src={driver.photo} className="w-100" />}>
                            <FontAwesomeIcon icon={faEye} className="text-green ml-2" fixedWidth />
                        </View>
                    </span>
                </div>,
                action: <div className="text-center">
                    <Link to={`/agency/drivers/${driver.id}`} className="mx-1">
                        <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                    </Link>
                    <Link to={`/agency/drivers/${driver.id}/edit`} className="mx-1">
                        <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                    </Link>
                    <span className="mx-1"><Delete deleteAction={() => this.props.delete(driver.id)}><FontAwesomeIcon icon={faTrash} className="text-red" fixedWidth /></Delete></span>
                </div>,
            });
        });

        const content = (
            <>
                <Row>
                    <List array={data} loading={loading} data={JSON.stringify(drivers)} get={this.props.get} total={total} bordered add={add} link="/agency/drivers/add" icon={icon} title={index} className="shadow-sm"
                        fields={[
                            { name: form.name, key: 'name' },
                            { name: form.photo, key: 'photo' },
                            { name: form.created_at, key: 'created_at' },
                            { name: action, key: 'action', fixed: true }
                        ]} />
                </Row>
            </>
        );

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb main={index} icon={icon} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{index}</Subtitle>
                </TitleWrapper>
                <div>
                    {errors}
                    {flash}
                    {feedback}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: (page, show, search) => dispatch(getDrivers(page, show, search)),
    delete: id => dispatch(deleteDrivers(id)),
    reset: () => dispatch(resetDrivers()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));