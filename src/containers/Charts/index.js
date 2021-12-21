import React from 'react';
import { useSelector } from 'react-redux';
import { VegaCharts } from '../../components/VegaCharts';
import { rowsSelector } from '../../redux/sourceData/selectors';
import { encodingFieldsAndTheirTypesSelector } from '../../redux/vegaEncoding/selectors';

export const Charts = () => {
    const rows = useSelector(rowsSelector);
    const encodingFieldsAndTheirTypes = useSelector(encodingFieldsAndTheirTypesSelector);

    return (
        <VegaCharts
            data={rows}
            encodingFields={encodingFieldsAndTheirTypes}
        />
    );
};
