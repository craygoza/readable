import React, { Component } from 'react';
import './App.css';
import CategoriesList from "./containers/CategoriesList";
import PostListContainer from "./containers/PostListContainer";
import { Grid, Row, Col } from "react-bootstrap";

class App extends Component {

  render() {
    return (
      <div className="App">

          <Grid>
              <Row>
                    <Col xs={6} md={3}>
                        <CategoriesList />
                    </Col>
                    <Col xs={6} md={9}>
                        <PostListContainer />
                    </Col>
              </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
