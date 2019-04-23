import React from 'react';
import { Col, Card } from 'antd';

const Item: React.FunctionComponent<{}> = () => {
    return (
        <div>
            <Col xs={24} sm={12} lg={6}>
                <Card title="This is title"
                    bordered={false}
                    extra={<a href="/history">Details</a>}>
                    <p>Starting weight:</p>
                    <p>1200g</p>
                    <p>Target weight:</p>
                    <p>900g</p>
                    <p>Current weight:</p>
                    <p>1100g</p>
                </Card>
            </Col>
        </div>
    )
};

export default Item;