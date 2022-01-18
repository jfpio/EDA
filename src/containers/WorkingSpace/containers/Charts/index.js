import React from 'react';
import { useSelector } from 'react-redux';
import { VegaCharts } from '../../../../components/VegaCharts';
import { rowsSelector } from '../../../../redux/sourceData/selectors';
import { fieldsAndTheirTypesSelector } from '../../../../redux/vegaEncoding/selectors';

export const Charts = () => {
    const rows = useSelector(rowsSelector);
    const encodingFieldsAndTheirTypes = useSelector(fieldsAndTheirTypesSelector);

    return (
        <VegaCharts
            data={rows}
            encodingFields={encodingFieldsAndTheirTypes}
        />
    );
};
