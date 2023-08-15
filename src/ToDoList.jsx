import { useState, useEffect} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { ListItemIcon } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';
// import { v4 as uuid} from 'uuid';
import {Box,Typography} from "@mui/material"


// const intialTodos = [
//     {id:1, text:"walk the dog" ,completed: false},
//     {id:2, text: "walk the cat", completed: true},
//     {id:3, text: "walk the fish", completed: true},
//     {id:4, text: "walk the chicken", completed: false},

// ]

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if(!data)
    {
        return []
    }
    return data;
};


export default function TodoList(){
    const [todos,setTodos] = useState(getInitialData);

    useEffect(() => {  // save every single time in our local storage as todo is changed
        localStorage.setItem(
            'todos',
            JSON.stringify(todos)
        )
    },[todos]);

    // Remove the todo from the list....
    const removeTodo = (id) => {
        setTodos(prevTodo => {
            return prevTodo.filter((t) => t.id !== id);
        })
    }
    const ToggleTodo = (id) => {
        setTodos(prevTodo => {
            return prevTodo.map((todo) => { // map over all the existing todo 
                if(todo.id === id){
                    return {...todo, completed: !todo.completed}
                }
            
            else{
                return todo;
            }
        })
    })
    }


    const addTodo = (text) => {
        setTodos(prevTodos => {
            return [...prevTodos, {text:text, id:crypto.randomUUID(), completed:false}]
        })
    }

    return (
       <Box 
        sx={{
            display:"flex",
            justifyContent: "center",
            flexDirection:"column",
            alignItems: "center"
        }}
        
    >
        <Typography variant="h2" component="div" sx={{flexGrow:1}}>
           ToDos:
        </Typography>;
       
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
         {todos.map(todo => (
             <ToDoItem 
                todo={todo} 
                key={todo.id} 
                removeTodo={() => removeTodo(todo.id)}
                toggle={() => ToggleTodo(todo.id)}
            />
         ))}
         <ToDoForm addTodo={addTodo}/>
    </List>

    </Box>

    );
}
