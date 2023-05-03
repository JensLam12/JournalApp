import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views/NoteView.JSX";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <Typography>Consequat proident enim sint incididunt reprehenderit sint eiusmod velit aliqua. Anim velit sint ut dolore incididunt minim quis mollit officia excepteur incididunt fugiat eu. Enim esse consequat irure non. Sit quis sit non nostrud tempor. Magna tempor ex adipisicing cupidatat tempor sit voluptate exercitation Lorem. Nulla est esse reprehenderit occaecat occaecat qui velit.</Typography> */}
            {/* <NothingSelectedView /> */}
            <NoteView/>

            <IconButton
               size="large"
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 25,
                    bottom: 20
                }}
            >
                <AddOutlined sx={{ fontSize: 30}} />
            </IconButton>
        </JournalLayout>
    )
}
