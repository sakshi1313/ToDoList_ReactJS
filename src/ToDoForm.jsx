import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Create from "@mui/icons-material/Create"
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';


import { useState } from 'react';



export default function ToDoForm({addTodo}){
    const[text,setText] = useState("")
    const handleChange = (evt) => {
        setText(evt.target.value)
    }
    const handleSubmit= (e) => { // to prevent form submit default behavior
        e.preventDefault();
        addTodo(text);
        setText("")
    }

    return(
        <ListItem >
            <form onSubmit={handleSubmit}>
            <TextField 
                id="outlined-basic" 
                label="Add Todo" 
                variant="outlined"
                onChange={handleChange} 
                value={text}
                InputProps = {{
                    endAdornment: <InputAdornment position="end">
                    <IconButton aria-label="create todo" edge="end" type="submit">
                        <AddIcon/>
                    </IconButton>
                  </InputAdornment>
                }}
                />
                </form>
        </ListItem>
    )
}


