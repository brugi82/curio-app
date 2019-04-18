import React from 'react';
import { Card } from 'antd';
import SimpleMeasureDisplay from '../common/SimpleMeasureDisplay';


const AmbientMeasurement: React.FunctionComponent<{}> = () => {
    return (
        <div>
            <Card title='Ambient measurements' bordered={true}>
                <SimpleMeasureDisplay label='Temperature' value='17' unitOfMeasure='°C'/>
                <SimpleMeasureDisplay label='Humidity' value='68' unitOfMeasure='%'/>
                <SimpleMeasureDisplay label='Updated on' value='15:34:56' unitOfMeasure=''/>
            </Card>
        </div>
    );
}

export default AmbientMeasurement