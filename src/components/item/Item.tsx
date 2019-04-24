import React from 'react';
import { Col, Card } from 'antd';
import { Link } from 'react-router-dom';

const Item: React.FunctionComponent<{}> = () => {
    return (
        <div>
            <Col xs={24} sm={12} lg={6}>
                <Card title="This is title"
                    bordered={false}
                    extra={<Link to="/history">Details</Link>}>
                    <div style={{ width: '50%', float: 'left' }}>
                        <p className="item-value-label"><i>Starting weight</i></p>
                        <p>1200g</p>
                        <p className="item-value-label"><i>Target weight</i></p>
                        <p>900g</p>
                        <p className="item-value-label"><i>Current weight</i></p>
                        <p>1100g</p>
                    </div>
                    <div style={{ width: '50%', float: 'right' }}>
                        <p className="item-value-label"><i>Started on</i></p>
                        <p>April 3rd 2019</p>
                        <p className="item-value-label"><i>Projected finish</i></p>
                        <p>May 10th 2019</p>
                        <p className="item-value-label"><i>Last measurement</i></p>
                        <p>April 22nd 2019</p>
                    </div>
                </Card>
            </Col>
        </div>
    )
};

export default Item;