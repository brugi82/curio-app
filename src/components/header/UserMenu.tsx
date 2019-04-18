import React from 'react';
import { Avatar } from 'antd';

const UserMenu: React.FunctionComponent<{}> = () => {
    return (
        <div className="user-menu">
            <Avatar size="large">TU</Avatar>
            <span className="user-menu-username x-768 ant-menu-dark">Test User</span>
        </div>
    )
};

export default UserMenu;