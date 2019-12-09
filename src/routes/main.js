import React from "react";
import {Layout} from "antd";
import {Switch, Route} from "react-router-dom";
import {getMovies, isLoading} from "../actions/moviesAction";
import {connect} from "react-redux";

import {MainPageContainer, MovieContainer, ScheduleContainer} from "../containers";

const {Content} = Layout;

export class Main extends React.Component{


    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        return (
            <Content style={{padding: '0 50px'}}>
                <Switch>
                    <Route path={"/"} exact component={MainPageContainer}/>
                    <Route path={"/movie/:id"} component={MovieContainer}/>
                    <Route path={"/schedule"} component={ScheduleContainer}/>
                </Switch>
            </Content>
        )
    }
};

const mapDispatchToProps = {
    getMovies
};

export const MainContainer = connect(null, mapDispatchToProps)(Main);