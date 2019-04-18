import React from 'react';
import { Menu, Icon } from 'antd';

const NavMenu: React.FunctionComponent<{}> = () => {
    return (
        <div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                className="nav-menu">
                <Menu.Item key="1">
                    <Icon type='home' className="mobile-icon"/>
                    <span className="x-768">Home</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type='experiment' className="mobile-icon"/>
                    <span className="x-768">Ambient</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type='bar-chart' className="mobile-icon"/>
                    <span className="x-768">History</span>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default NavMenu;