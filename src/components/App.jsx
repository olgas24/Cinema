import React from "react";
import {Layout} from 'antd';

import {HeaderComponent} from "./Header";
import {SiderComponent} from "./Sider";
import {MainContainer} from "../routes";

const {Footer} = Layout;

export class App extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
        <Layout className="layout">
          <SiderComponent collapsed={this.state.collapsed}/>
          <Layout>
            <HeaderComponent collapsed={this.state.collapsed} toggle={this.toggle}/>
            <MainContainer/>
            <Footer style={{textAlign: 'center'}}>Classic Cinema. ©2018 Created by ME.</Footer>
          </Layout>
        </Layout>
    );
  }
}
