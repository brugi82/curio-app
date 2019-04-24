import React from 'react';
import { Layout, Row } from 'antd';
import Item from '../item/Item';

const DashboardPage: React.FunctionComponent<{}> = () => {
    return (
        <div style={{ padding: '30px' }}>
            <Row gutter={16}>
                <Item />
                <Item />
            </Row>
        </div>
    );
}

export default DashboardPage;
