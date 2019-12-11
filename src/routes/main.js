import React from "react";
import {Layout, Spin} from "antd";
import {Switch, Route} from "react-router-dom";
import {getMovies} from "../actions/moviesAction";
import {connect} from "react-redux";

import {MainPageContainer, MovieContainer, ScheduleContainer} from "../containers";

const {Content} = Layout;

export class Main extends React.Component{


    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        const {isLoading} = this.props;
        if(isLoading){
            return (<Spin tip="Loading..." style={{marginTop: '24px'}}/>)
        }
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
}

const mapStateToProps = (state) => ({
    isLoading: state.loading.isLoading
});

const mapDispatchToProps = {
    getMovies
};

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);