import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, List, Typography, ListItem, ListItemIcon, Grid, ListItemText } from "@mui/material"

export const SideBar = ({ drawerWidth }) => {
  return (
    <Box
      component='nav'
      sx={{ width: {sm: drawerWidth}, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open 
        sx={{
          display: { xs: 'block'},
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
        }}
      >
        <Typography variant="h6" noWrap component='div'>
          Jens Lam
        </Typography>
        <Divider />
        <List>
          {
            ['January', 'February', 'March','April','May',].map( text => (
              <ListItem key={text} disablePadding>
                <ListItemIcon>
                  <TurnedInNot/>
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text}/>
                  <ListItemText secondary={'Ad adipisicing aliquip proident velit sunt.'}/>
                </Grid>
              </ListItem>
            ))
          }  
        </List>
      </Drawer>
    </Box>
  )
}
