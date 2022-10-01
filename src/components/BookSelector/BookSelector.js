import { useState } from 'react';
import React from 'react'
import Select from 'react-select'



const options = [{
    value: "Book 1",
    label: "Book 1",
    
},
{
    value: "Book 2",
    label: "Book 2",
    
}]

export default function BookSelector(){
    const [book, setBook] = useState(options);
    const reset = () => {
        setBook('')
      };
      
      return (
        <div>
          <Select options = {book}/>
</div>
          
   
      );
}

