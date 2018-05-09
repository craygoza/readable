import React, { Component } from 'react';
import './App.css';
import CategoriesList from "./containers/CategoriesList";
import PostListContainer from "./containers/PostListContainer";
import { Grid, Row, Col } from "react-bootstrap";
import {Route, Switch} from "react-router-dom";
import PostDetailContainer from "./containers/PostDetailContainer";
import ResourceNotFound from "./components/ResourceNotFound";

class App extends Component {

  render() {
    return (
        <div className="App">

        <Switch>
            <Route exact path="/" render = {() => (

                <Grid>
                    <Row>
                        <Col xs={6} md={12}>
                            <PostListContainer />
                        </Col>
                    </Row>
                </Grid>

            )} />

            <Route path="/404" component={ResourceNotFound} />
            <Route path="/:category/:post_id" component={PostDetailContainer} />
            <Route path="/:category" component={PostListContainer} />
        </Switch>
        </div>
    );
  }
}

export default App;
