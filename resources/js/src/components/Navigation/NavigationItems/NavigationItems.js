import React, { useState } from 'react';
import { Container, Navbar, Collapse, Nav } from 'reactstrap';

import NavigationItem from './NavigationItem/NavigationItem';
import DropdownItem from './DropdownItem/DropdownItem';

export default ({ light = false, font, toggleNavbar, selectItem, selectedItem, cms = {} }) => {
    const [isOpenAbout, setIsOpenAbout] = useState(false);
    const toggleAbout = () => setIsOpenAbout(!isOpenAbout);
    const dropdownItemAbout = (text, href, dropdown = false, path = null, items = null) => <DropdownItem navToggle={toggleNavbar} parentToggle={toggleAbout} select={selectItem} selected={selectedItem} href={href && ("/about" + href)} path={path && ("/about" + path)} dropdown={dropdown} id={text} items={items}>{text}</DropdownItem>;
    const contentAbout = <div className="row position-relative">
        <div className="col-md-4">
            {dropdownItemAbout(cms.menu.about.genesis, "/genesis")}
            {dropdownItemAbout(cms.menu.about.missions, "/missions")}
            {dropdownItemAbout(cms.menu.about.actions, "/actions")}
            {dropdownItemAbout(cms.menu.about.uniforms, "/uniforms")}
            {dropdownItemAbout(cms.menu.about.jobs, "/jobs")}
            {dropdownItemAbout(cms.menu.about.docs, "/docs")}
            {dropdownItemAbout(cms.menu.about.downloads, "/downloads")}
        </div>

        <div className="col-md-4">
            {dropdownItemAbout(cms.menu.about.management.title, null, true, "/management", [
                { link: '/', text: cms.menu.about.management.index },
                { link: '/guardians', text: cms.menu.about.management.guardians },
                { link: '/inspectors', text: cms.menu.about.management.inspectors },
                { link: '/officers', text: cms.menu.about.management.officers },
                { link: '/commissioners', text: cms.menu.about.management.commissioners },
            ])}
            {dropdownItemAbout(cms.menu.about.media, "/media")}
        </div>

        <div className="col-md-4">
            {dropdownItemAbout(cms.menu.about.organization, "/organization")}
        </div>
    </div>;

    return (
        <Navbar dark={!light} light={light} expand className="NavigationItems position-static">
            <Container>
                <Collapse navbar>
                    <Nav className="d-block d-xl-flex align-items-center" navbar>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/" icon="fad fa-home">{cms.menu.home}</NavigationItem>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} path="/about" dropdown isOpen={isOpenAbout} toggle={toggleAbout} content={<>
                            <div className="d-none d-md-block container-xxl">
                                <div className="row justify-content-end text-white">
                                    <div className="col-md-8 col-xxl-6">
                                        <div className="p-3 p-md-4 p-xxl-5 bg-black-85 rounded-bottom-30">{contentAbout}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-md-none">
                                {contentAbout}
                            </div>
                        </>}>{cms.menu.about.title}</NavigationItem>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/services">{cms.menu.services}</NavigationItem>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/exams">{cms.menu.exams}</NavigationItem>
                        <NavigationItem exact={false} isActive={() => location.pathname === '/posts' || location.pathname.includes('/post-categories/')} toggleNavbar={toggleNavbar} font={font} href="/posts">{cms.menu.posts}</NavigationItem>
                        <NavigationItem toggleNavbar={toggleNavbar} font={font} href="/contact">{cms.menu.contact}</NavigationItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}