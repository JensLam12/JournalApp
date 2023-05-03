import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {

    return (
        <AuthLayout title='Registro'>
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Nombre completo'
                            type='text'
                            placeholder='Silvester'
                            fullWidth
                        /> 
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='correo'
                            type='email'
                            placeholder='Correo@google.com'
                            fullWidth
                        /> 
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Contraseña'
                            type='password'
                            placeholder='Contraseña'
                            fullWidth
                        /> 
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1}}>
                        <Grid item xs={12}>
                            <Button variant='contained' fullWidth>Crear cuenta</Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} color='inherit' to='/auth/login'>
                            Iniciar sesion
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
