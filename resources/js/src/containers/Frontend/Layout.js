import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Frontend.css';

class Layout extends Component {
    render() {
        const {
            children,
            content: {
                cms: {
                    pages: { frontend: { footer } }
                }
            }
        } = this.props;

        return <div className="Frontend bg-white">
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

export default withRouter(connect(mapStateToProps)(Layout));