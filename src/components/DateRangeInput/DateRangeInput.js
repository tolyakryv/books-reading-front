import React from "react";
import "./DateRangeInput.css";
import { DateRangeInput2 } from "@blueprintjs/datetime2";
import { useCallback, useState } from "react";

 
function DateRangeInput() {
    const [dateValue, setDateValue] = useState([]);
    const handleChange = useCallback(setDateValue, []);
    const formatDate = useCallback((date) => date.toDateString(), []);
    const parseDate = useCallback((str) => new Date(str), []);   

 
   console.log(dateValue)
   
    return (
        <DateRangeInput2
            formatDate={formatDate}
            onChange={handleChange}
            parseDate={parseDate}
            placeholder="M/D/YYYY"
            value={dateValue}
            allowSingleDayRange = "true"
            highlightCurrentDay = "true"
            minDate={new Date()} 
        />
    );
}

export default DateRangeInput