import { Outlet } from "react-router-dom";
import {AppBar} from "@mui/material"
import { createTheme } from '@mui/material/styles';



export default function Layout(){

    const theme = createTheme({
        palette: {
            ochre: {
              main: '#E3D026',
              light: '#E9DB5D',
              dark: '#A29415',
              contrastText: '#242105',
            },
          },
      });

    return(
        <>
            <AppBar position="static" color="">
                This is appbar
            </AppBar>
            <Outlet/>
            <h1>Here should come footer</h1>

        </>
    )
}