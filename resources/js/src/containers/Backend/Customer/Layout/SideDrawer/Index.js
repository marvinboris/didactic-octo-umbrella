import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

import SideDrawerItem from './SideDrawerItem/Index';
import Logo from '../../../../../components/UI/Logo/Logo';

import './SideDrawer.css';

export default ({ data, logoutHandler, toggle, selectItem, selectedItem, cms }) => {
    const [modal, setModal] = useState(false);

    const modalToggle = () => setModal(!modal);

    let sideDrawerItems = null;
    const {
        pages: {
            backend: {
                header: { logout, close: close_, sure_logout },
                sidebar: {
                    menu: {
                        authenticate, dashboard, files, projects, work_report, my_report, withdraw, settings
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
            const feature = role_ && role_.features.find(f => '/user/' + f.prefix === path);
            if (!feature) return null;

            return <SideDrawerItem id={id} sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={icon} href={path}>{id}</SideDrawerItem>;
        }

        let items = [];

        if (!custom) {
            const feature = role_ && role_.features.find(f => '/user/' + f.prefix === path);
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
        {sideDrawerItem(true, dashboard, null, "home", "/customer/dashboard")}
        {sideDrawerItem(true, projects.title, null, "folder-plus", "/customer/projects")}
        {sideDrawerItem(true, files.title, null, "copy", "/customer/files")}
        {sideDrawerItem(true, my_report.title, null, "file-alt", "/customer/my-report")}
        {sideDrawerItem(true, work_report.title, null, "folder-open", "/customer/work-report")}
        {sideDrawerItem(true, withdraw.title, null, "wallet", "/customer/withdraw")}
        {sideDrawerItem(true, settings.title, null, "sliders-h", "/customer/settings")}

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