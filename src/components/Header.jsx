import React from "react";

import { Layout, Icon  } from 'antd';

const { Header } = Layout;

export const HeaderComponent = (props) => {

    return (
        <Header style={{ /*background: '#fff',*/ padding: "0px 0px 0px 15px" }}>
            <Icon
                className="trigger"
                type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={props.toggle}
            />
        </Header>
    );
};

