import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { ListItemIcon } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import ClearIcon from '@mui/icons-material/Clear';



export default function ToDoItem({todo,removeTodo, toggle}){
    const labelId = `checkbox-list-label-${todo.id}`;

            return(
                <ListItem
                    secondaryAction={
                        <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
                            <ClearIcon />
                        </IconButton>
                        }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                  <Checkbox 
                    edge="start"
                    checked={todo.completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{'aria-labelledby': labelId}}
                    onChange={toggle}
                  />  
                </ListItemIcon>  
                        
                        
                  
              <ListItemText id={labelId} primary={todo.text} />
            </ListItemButton>
          </ListItem>
            )
}