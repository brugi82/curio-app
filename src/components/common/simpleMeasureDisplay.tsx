import React from 'react';
// import { Typography } from 'antd';

// const { Title } = Typography;

type SimpleMeasureDisplayProps = {
    label: string,
    value: string,
    unitOfMeasure: string
}

const SimpleMeasureDisplay: React.FunctionComponent<SimpleMeasureDisplayProps> = ({ label, value, unitOfMeasure }) => {
    return(
        <div>
            <h4 className='Lean-text'>{label}</h4>
            <div className='Simple-measure-value-container'>
                <h1 className='Lean-text Simple-measure-value'>{value}</h1>
                { unitOfMeasure && <h1 className='Lean-text Simple-measure-unit'>{unitOfMeasure}</h1> }
            </div>
        </div>
    );
}

export default SimpleMeasureDisplay;