import React from "react";
import "../Training/Training.css";

import { DateRangeInput2 } from "@blueprintjs/datetime2";
import { useCallback, useState } from "react";
import { isTomorrow } from "date-fns";
 
function Training() {
    const [dateValue, setDateValue] = useState("");
    const handleChange = useCallback(setDateValue, []);
    const formatDate = useCallback((date) => date.toDateString(), []);
    const parseDate = useCallback((str) => new Date(str), []);   
   
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

export default Training