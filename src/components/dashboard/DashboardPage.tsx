import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from './HeaderComponent';

const { Footer, Content } = Layout;

const DashboardPage: React.FunctionComponent<{}> = () => {
    return (
        <div>
            <Layout style={{height:"100vh"}}>
                <HeaderComponent/>
                <Content>Test content</Content>
                <Footer>Curio App ©2019 Created by Milos Petrovic</Footer>
            </Layout>
        </div>
    );
}

export default DashboardPage;
