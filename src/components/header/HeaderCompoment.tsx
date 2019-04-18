import React from 'react';
import { Layout } from 'antd';
import NavMenu from './NavMenu';
import UserMenu from './UserMenu';

const { Header } = Layout;

const HeaderComponent: React.FunctionComponent<{}> = () => {
    return(
        <Header>
            <div className="logo x-768" />
            <NavMenu />
            <UserMenu />
        </Header>
    );
};

export default HeaderComponent;