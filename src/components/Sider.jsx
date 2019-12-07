import React from "react";

import {Layout, Menu, Icon} from 'antd';
import {Link} from "react-router-dom";

const {Sider} = Layout;

export const SiderComponent = (props) => {

    return (
        <Sider trigger={null} collapsible collapsed={props.collapsed}>
            <Link to="/">
                <div className="logo"></div>
            </Link>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/" className="active">
                        <Icon type="video-camera"/>
                        <span>Фильмы</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/schedule" className="active">
                        <Icon type="schedule"/>
                        <span>Расписание</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/contacts" className="active">
                        <Icon type="contacts"/>
                        <span>Контакты</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

