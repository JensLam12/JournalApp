import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { useDispatch } from "react-redux";

export const SidebarItem = ({id, title, body, date, imageUrls = [] }) => {

    const dispatch = useDispatch();

    const newTitle = useMemo( () => {
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
    }, [title] );

    const onClickNote = () => {
        dispatch( setActiveNote( { title, body, id, date, imageUrls } ) )
    }

    return (
        <ListItem disablePadding onClick={onClickNote}>
            <ListItemIcon>
                <TurnedInNot/>
                </ListItemIcon>
            <Grid container>
                <ListItemText primary={newTitle}/>
                <ListItemText secondary={body}/>
            </Grid>
        </ListItem>
    )
}
