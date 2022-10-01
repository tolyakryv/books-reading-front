import { DateInput2 } from "@blueprintjs/datetime2";
import { useCallback } from "react";
import "../DateInputEl/DateInputEl.css"
 
function DateInputEl({placeholder, minDate, onChange, value}) {
   
    const formatDate = useCallback((date) => date.toDateString(), []);
    const parseDate = useCallback((str) => new Date(str), []);
    
      return (
        <DateInput2
            formatDate={formatDate}
            parseDate={parseDate}
            placeholder={placeholder}
            highlightCurrentDay = {true}
            minDate={minDate}
            onChange={onChange}
            value={value} 
        />
    );
}

export default DateInputEl