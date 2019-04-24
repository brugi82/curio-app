import React, { Component } from 'react';
import { Layout, Row } from 'antd';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DashboardPage from './components/dashboard/DashboardPage';
import HeaderComponent from './components/header/HeaderCompoment';
import AmbientPage from './components/ambient/AmbientPage';
import HistoryPage from './components/history/HistoryPage';


const { Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Layout style={{height:"100vh"}}>
            <HeaderComponent/>
            <Content>
              <Switch>
                <Route exact path="/" component={DashboardPage} />
                <Route path="/ambient" component={AmbientPage} />
                <Route path="/history" component={HistoryPage} />
              </Switch>
            </Content>
            <Footer>Curio App ©2019 Created by Milos Petrovic</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
