import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Form from 'components/ui/Form';

const theme = createTheme();

const LogInScreen = () => {
    const backgroundProperties = {
        backgroundImage:
            'url(https://imagenes.elpais.com/resizer/yZPp6xFMd8b42kVA0AbcI5UuA8Y=/1200x0/ep01.epimg.net/tecnologia/imagenes/2018/03/09/actualidad/1520608511_738807_1520847369_noticia_fotograma.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={backgroundProperties}
                    />
                    <Grid
                        item
                        xs={12}
                        sm={8}
                        md={5}
                        component={Paper}
                        elevation={6}
                        square
                    >
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Form bgcolor="#000" title="Log in" />
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    );
};

export default LogInScreen;
