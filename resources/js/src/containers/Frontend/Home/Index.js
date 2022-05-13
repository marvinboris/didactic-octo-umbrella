import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import { convertDate, updateObject } from '../../../shared/utility';
import { getHome, resetHome } from '../../../store/actions/frontend/home';

import './Home.css';

class Home extends Component {
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        const {
            content: { cms: {
                pages: { frontend: { pages: { home: { banner, services, posts, exam, forms } } } }
            } },
            frontend: { home: { loading, posts: postsData = [], forms: formsData = [] } }
        } = this.props;
        const lang = localStorage.getItem('lang');

        return <div className="Home">
            <div className="banner position-relative full-height-app d-flex flex-column text-white bg-img" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url("' + '")' }}>
                <div className="container-xxl flex-fill d-flex flex-column">
                    <div className="row flex-fill align-items-center">
                        <div className="col-md-7">
                            <div className="px-4 py-5 px-xxl-5 d-flex align-items-stretch txt-block">
                                <div className="position-relative my-0 my-md-4 my-xxl-5">
                                    <img src={""} className="position-absolute h-100" alt="Drapeau" />
                                </div>

                                <div className="px-md-4 py-md-3 py-xxl-4">
                                    <div className="text-11 text-md-15 text-xxl-20 text-300">{banner.dgsn}</div>

                                    <div className="text-700 d-inline-block mb-4">
                                        <div className="text-24 text-md-37 text-xxl-50 mb-3">{banner.police}</div>

                                        <div className="position-relative bg-white" style={{ height: .5 }}>
                                            <div className="position-absolute rounded-pill bg-white ml-5" style={{ height: 10, width: 70, top: '50%', transform: 'translateY(-50%)' }}>
                                                <div className="bg-darkblue rounded-circle position-absolute" style={{ height: 6, width: 6, top: 2, left: 2 }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-12 text-md-18 text-xxl-25">{banner.details}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="#services" className="chevron-down mb-3 mb-md-4 mb-xxl-5 text-white">
                    <div><i className="fas fa-chevron-down up" /></div>
                    <div><i className="fas fa-chevron-down down" /></div>
                </a>
            </div>




            <div id="services" scrollTo="#posts" scrollColor="secondary" title={services.title} subtitle={services.subtitle}>
                <div className="d-none d-lg-flex row justify-content-center">
                    {servicesContent}
                </div>

                <div className="d-lg-none">
                    <div className="row">
                        <div className="col-12 p-0">
                            <OwlCarousel options={{
                                responsive: {
                                    0: { items: 1, autoplay: true, stagePadding: 48, margin: 20, center: true, nav: true },
                                    600: { items: 2, autoplay: true, stagePadding: 48, margin: 20, center: false },
                                    1300: { items: 4 }
                                },
                                center: false,
                                loop: true,
                                dots: false,
                                navText: ['<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-left text-blue"></i>', '<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-right text-blue"></i>']
                            }}>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>



            <div id="posts" scrollTo="#exam" scrollColor="blue" title={posts.title} color="soft" subtitle={posts.subtitle}>
                <div className="row">
                    <div className="col-12 p-0">
                        {loading ? <div className="py-3 py-md-4 py-xxl-5 my-3 my-md-4 my-xxl-5 text-16 text-md-20 text-xxl-24 text-700 text-blue">Chargement en cours...</div> : <OwlCarousel options={{
                            responsive: {
                                0: { items: 1, autoplay: true, stagePadding: 48, margin: 20, center: true },
                                600: { items: 2, autoplay: true, stagePadding: 48, margin: 20, center: false },
                                1100: { items: 3 }
                            },
                            center: false,
                            loop: true,
                            dots: false,
                            nav: true,
                            navText: ['<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-left text-blue"></i>', '<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-right text-blue"></i>']
                        }}>
                        </OwlCarousel>}
                    </div>
                </div>
            </div>



            <div id="exam" className="UI div position-relative text-white text-center">
                <div className="py-3 py-md-4 py-xxl-5 bg-img" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url("' + '")' }}>
                    <div className="py-3 py-md-4 py-xxl-5 my-2 my-md-3 my-xxl-4 container-xxl">
                        <div className="d-flex flex-column align-items-center mb-3 mb-md-4">
                            <div className="text-40 text-md-60 text-xxl-80 text-700 text-montserrat pb-2 pb-md-3">{exam.title}</div>

                            <div className="position-relative bg-white rounded-pill" style={{ width: 115, height: 5 }}>
                                <div className="position-absolute bg-white border border-blue border-7 rounded-circle" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 30, height: 30 }} />
                            </div>
                        </div>

                        <div className="text-14 text-md-17 text-xxl-20 pb-2 pb-md-3 mb-3 mb-md-4">{exam.subtitle}</div>

                        <div>
                            <Link to="/" className="btn btn-white d-inline-flex align-items-center text-secondary rounded-pill py-1 py-md-2 py-xxl-3 pl-3 pl-md-4 pl-xxl-5 pr-2 pr-md-3 pr-xxl-4 text-14 text-md-17 text-xxl-20">
                                <div>{exam.read_more}</div>

                                <div><i className="fad fa-chevron-circle-right text-blue text-18 text-md-24 text-xxl-30 ml-2 ml-md-3 ml-xxl-4 d-block" /></div>
                            </Link>
                        </div>
                    </div>

                    <a href="#forms" className="chevron-down mb-3 mb-md-4 mb-xxl-5 text-white">
                        <div><i className="fas fa-chevron-down up" /></div>
                        <div><i className="fas fa-chevron-down down" /></div>
                    </a>
                </div>
            </div>



            <div id="forms" title={forms.title} subtitle={forms.subtitle}>
                <div className="text-right mb-4">
                    <Link to="/forms" className="btn btn-link text-yellow">{forms.full_list}<FontAwesomeIcon icon={faAngleDoubleRight} className="ml-2" /></Link>
                </div>

                <div className="d-none d-lg-flex row justify-content-center">
                    {formsContent}
                </div>

                <div className="d-lg-none">
                    <div className="row">
                        <div className="col-12 p-0">
                            <OwlCarousel options={{
                                responsive: {
                                    0: { items: 1, autoplay: true, stagePadding: 48, margin: 20, center: true, nav: true },
                                    600: { items: 2, autoplay: true, stagePadding: 48, margin: 20, center: false },
                                    1000: { items: 3 },
                                    1800: { items: 4 }
                                },
                                center: false,
                                loop: true,
                                dots: false,
                                navText: ['<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-left text-blue"></i>', '<i class="fas text-20 text-md-25 text-xxl-30 fa-chevron-circle-right text-blue"></i>']
                            }}>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getHome()),
    reset: () => dispatch(resetHome()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));