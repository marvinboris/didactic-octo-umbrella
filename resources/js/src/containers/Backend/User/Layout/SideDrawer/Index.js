import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

import SideDrawerItem from './SideDrawerItem/Index';
import Logo from '../../../../../components/UI/Logo/Logo';

import './SideDrawer.css';

export default ({ data, logoutHandler, toggle, selectItem, selectedItem, cms }) => {
    const [modal, setModal] = useState(false);

    const modalToggle = () => setModal(!modal);

    let { role: role_ } = data;

    let sideDrawerItems = null;
    const {
        pages: {
            backend: {
                header: { logout, close: close_, sure_logout },
                sidebar: {
                    menu: {
                        dashboard, users, roles, features, languages, cms: cms_, notifications, settings,
                        customers, projects, project_report, financial_report,
                    }
                }
            }
        }
    } = cms;

    const logoutContent = <>
        <ModalHeader toggle={modalToggle}>{logout}</ModalHeader>
        <ModalBody className="text-center">
            <p>{sure_logout}?</p>
            <div>
                <Button color="green" onClick={logoutHandler}>{logout} <i className='fas fa-power-off fa-fw' /></Button>{' '}
                <Button color="red" onClick={modalToggle}>{close_} <i className='fas fa-times fa-fw' /></Button>
            </div>
        </ModalBody>
    </>;

    const sideDrawerItem = (fixed = false, id = null, dropdown = null, icon, path, custom = false, addon = []) => {
        if (id && fixed) return <SideDrawerItem id={id} sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={icon} href={path}>{id}</SideDrawerItem>;

        if (fixed) {
            let items = [];

            if (!custom) {
                items.push({ link: '/add', text: dropdown.add });
                items.push({ link: '/', text: dropdown.index });
                items = items.concat(addon);
            }
            else items = custom;

            return <SideDrawerItem id={dropdown.title} sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={icon} dropdown path={path} items={items}>{dropdown.title}</SideDrawerItem>;
        }

        if (id) {
            const feature = role_ && role_.features.find(f => path.includes('/user/' + f.prefix));
            if (!feature) return null;

            return <SideDrawerItem id={id} sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={icon} href={path}>{id}</SideDrawerItem>;
        }

        let items = [];

        if (!custom) {
            const feature = role_ && role_.features.find(f => path.includes('/user/' + f.prefix));
            if (!feature) return null;

            let { permissions } = feature;

            if (permissions && permissions.includes('c')) items.push({ link: '/add', text: dropdown.add });
            items.push({ link: '/', text: dropdown.index });
            items = items.concat(addon);
        }
        else items = custom;

        return <SideDrawerItem id={dropdown.title} sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={icon} dropdown path={path} items={items}>{dropdown.title}</SideDrawerItem>;
    };

    sideDrawerItems = <>
        {sideDrawerItem(true, dashboard, null, "home", "/user/dashboard")}
        {sideDrawerItem(false, users.title, null, "user", "/user/users")}
        {sideDrawerItem(false, roles.title, null, "user-tag", "/user/roles")}
        {sideDrawerItem(false, features.title, null, "tools", "/user/features")}
        {sideDrawerItem(false, languages.title, null, "language", "/user/languages")}
        {sideDrawerItem(false, customers.title, null, "user", "/user/customers")}
        {sideDrawerItem(false, projects.create, null, "folder-plus", "/user/projects/add")}
        {sideDrawerItem(false, project_report.title, null, "file-alt", "/user/project-report")}
        {sideDrawerItem(false, financial_report.title, null, "folder-open", "/user/financial-report")}
        {sideDrawerItem(true, notifications, null, "bell", "/user/notifications")}
        {sideDrawerItem(false, null, cms_, "wrench", "/user/cms", [
            { link: '/global', text: cms_.global },
            { link: '/general', text: cms_.general },
            { link: '/messages', text: cms_.messages },
            { link: '/components', text: cms_.components },
            { link: '/auth', text: cms_.auth },
            { link: '/backend', text: cms_.backend },
            { link: '/frontend', text: cms_.frontend },
        ])}
        {sideDrawerItem(true, settings.title, null, "sliders-h", "/user/settings")}

        <div className='mt-auto'>
            <div className="py-2 px-3 text-300 rounded-4 cursor-pointer" onClick={modalToggle}>
                <i className="fas fa-fw fa-power-off text-green mr-3" />

                <span className="text-border text-700">{logout}</span>
            </div>
        </div>

        <Modal isOpen={modal} toggle={modalToggle}>
            {logoutContent}
        </Modal>
    </>;



    return (
        <div className={`SideDrawer nav-left-sidebar`}>
            <div className={`content vh-100 d-flex flex-column`}>
                <div className='d-flex align-items-stretch mb-5 pb-2'>
                    <Logo type="named" />
                </div>

                <div className="flex-fill">
                    <ul className="navbar-nav flex-column pr-3">
                        {sideDrawerItems}
                    </ul>
                </div>
            </div>

            <div className="backdrop d-md-none" onClick={toggle} />
        </div>
    )
};