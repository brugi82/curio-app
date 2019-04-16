import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const HeaderComponent: React.FunctionComponent<{}> = () => {
    return(
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px', float: 'left' }}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Ambient</Menu.Item>
                <Menu.Item key="3">History</Menu.Item>
            </Menu>
        </Header>
    );
};

export default HeaderComponent;