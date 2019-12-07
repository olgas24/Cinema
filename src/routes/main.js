import React from "react";
import {Layout, Spin} from "antd";
import {Switch, Route} from "react-router-dom";
import {getMovies, isLoading} from "../actions/moviesAction";
import {connect} from "react-redux";

import {MainPageContainer, MovieContainer} from "../containers";

const {Content} = Layout;

export class Main extends React.Component{


    componentDidMount() {
        this.props.getMovies();
    }

    render(){
        const {isLoading} = this.props;

        return(
            <Content style={{padding: '0 50px'}}>
                {isLoading
                ? <Spin tip="Loading..." style={{marginTop: '24px'}}/>
                :   <Switch>
                    <Route path={"/"} exact component={MainPageContainer}/>
                    <Route path={"/movie/:id"} component={MovieContainer} />
                </Switch>}

            </Content>
        )

    }
};

const mapDispatchToProps = {
    getMovies
};

const mapStateToProps = (state) => ({
  isLoading: state.loading.isLoading
});

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);