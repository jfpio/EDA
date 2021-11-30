export const givenTypeOrNull = (wrappedPropTypes) => (props, propName, ...rest) => {
    // eslint-disable-next-line react/destructuring-assignment
    if (props[propName] === null) {
        return null;
    }
    return wrappedPropTypes(props, propName, ...rest);
};
