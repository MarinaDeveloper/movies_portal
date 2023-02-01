import React from "react";

import prepareDate from "utils/prepareDate";

interface IDateViewParams {
    date: string,
}

const DateView = ({date}: IDateViewParams) => {
    const {year} = prepareDate(date);
    return (
        <p>{year}</p>
    )
}

export default DateView;