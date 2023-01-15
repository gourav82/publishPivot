import React, {useEffect, useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import data from '../data.json';

const SelectForm = (props) => {
  const [grade, setGrade] = useState(props.grade);

  const handleChange = (event: SelectChangeEvent) => {
    setGrade(event.target.value);
  };
useEffect(()=>{
  props.onChange(grade);
},[grade,props])

  return (
  <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }} className='form'>
      {/* <InputLabel id="demo-simple-select-filled-label">Select Grade</InputLabel> */}
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={grade}
          onChange={handleChange}
          className='selectForm' 
          displayEmpty   
        >
           <MenuItem value="">
            <em>Select Grade</em>
          </MenuItem>
          {
            data[0].monthly.map((elem,i)=>{
             return <MenuItem value={elem.grade} key={`selem${i}`}>{elem.grade}</MenuItem>
            })
          }
          
        </Select>
      </FormControl>
    </div>
  );
}


export default SelectForm;
