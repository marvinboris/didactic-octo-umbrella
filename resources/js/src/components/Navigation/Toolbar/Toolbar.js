import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Collapse } from 'reactstrap';

import Logo from '../../UI/Logo/Logo';

import Languages from './Languages';
import SocialNetworks from './SocialNetworks';

import NavigationItems from '../NavigationItems/NavigationItems';

import { setLanguage } from '../../../store/actions/content';

import './Toolbar.css';

class Toolbar extends Component {
    state = {
        navbar: true,
        search: true,

        selectedItem: '',

        language: null,
    }

    scrollHandler = () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        let progress = (window.pageYOffset / totalHeight) * 100;
        progress = Math.round(Number(progress)) + "%";

        document.getElementById('progress-bar').style.width = progress;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
        this.setState({ language: this.props.content.languages.find(l => l.abbr === localStorage.getItem('lang')) });
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.content.cms) !== JSON.stringify(this.props.content.cms)) this.setState({ language: this.props.content.languages.find(l => l.abbr === localStorage.getItem('lang')) });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    toggleNavbar = () => this.setState(state => ({ navbar: !state.navbar, search: true }))

    toggleSearch = () => this.setState(state => ({ search: !state.search, navbar: true }))

    selectItem = item => this.setState({ selectedItem: item })

    setLanguage = id => {
        this.props.set(id);
    }

    render() {
        const { selectedItem, language } = this.state;
        const {
            content: {
                cms: {
                    pages: { frontend: { header: { tel, menu } } }
                }, languages
            },
        } = this.props;

        return <div className="Toolbar sticky-top w-100">
            <div className="text-white">
                <div className="container-xxl d-flex justify-content-between align-items-center h-100">
                    <div>
                        <Link to="/" className="text-decoration-none"><Logo /></Link>
                    </div>

                    <div className="pl-3 d-flex align-items-center d-md-none">
                        <a href={`tel:${tel}`} className="btn btn-green d-inline-flex align-items-center ml-xl-5 pl-2 pl-md-3 pr-3 pr-md-4 py-1 py-md-2">
                            <div className="pr-2 pr-xl-3 mr-2 mr-xl-3 py-0 py-xl-1 border-right border-soft-50"><i className="fad fa-phone-plus text-18 text-md-24 text-xxl-30" /></div>

                            <div className="text-montserrat text-700 text-19 text-md-22 text-xxl-25">{tel}</div>
                        </a>

                        <div className="pl-3 d-md-none">
                            <Languages languages={languages} set={this.setLanguage} language={language} />
                        </div>

                        <div className="pl-3">
                            <i className="fad fa-search text-21 text-md-35 text-lightblue" />
                        </div>
                    </div>

                    <div className="pl-3 h-100 d-none d-md-flex align-items-center">
                        <a href={`tel:${tel}`} className="h-100 bg-green text-white d-inline-flex align-items-center ml-xl-5 pl-2 pl-md-3 pr-3 pr-md-4 py-1 py-md-2">
                            <div className="pr-2 pr-xl-3 mr-2 mr-xl-3 py-0 py-xl-1 border-right border-soft-50"><i className="fad fa-phone-plus text-18 text-md-24 text-xxl-30" /></div>

                            <div className="text-montserrat text-700 text-15 text-md-20 text-xxl-25">{tel}</div>
                        </a>

                        <div className="pl-5">
                            <i className="fad fa-search text-21 text-md-35 text-lightblue" />
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-none d-xl-block">
                            <NavigationItems cms={{ menu }} font="white" toggleNavbar={this.toggleNavbar} selectItem={this.selectItem} selectedItem={selectedItem} />
                        </div>

                        <div className="mx-2 mx-md-3 d-xl-none">
                            <i onClick={this.toggleNavbar} className="fad fa-th-large text-21 text-md-40" style={{ cursor: 'pointer' }} />
                        </div>

                        <div className="pl-3 d-none d-xl-block">
                            <Languages languages={languages} set={this.setLanguage} language={language} />
                        </div>
                    </div>
                </div>

                <div className="d-xl-none">
                    <Collapse isOpen={!this.state.navbar} navbar>
                        <div className="fixed-top w-100 h-100 bg-black-85 d-flex flex-column p-3">
                            <div className="position-absolute pt-3 pr-3" style={{ top: 0, right: 0, zIndex: 10 }}>
                                <i className="fad fa-times text-25" style={{ cursor: 'pointer' }} onClick={this.toggleNavbar} />
                            </div>

                            <div className="p-3">
                                <NavigationItems cms={{ menu }} font="white" toggleNavbar={this.toggleNavbar} selectItem={this.selectItem} selectedItem={selectedItem} />
                            </div>
                        </div>
                    </Collapse>
                </div>

                <div id="progress-bar" />
            </div>

            <SocialNetworks />
        </div >;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    set: id => dispatch(setLanguage(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);