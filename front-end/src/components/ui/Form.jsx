import React from 'react';
import MyButton from 'components/ui/MyButton';
import Input from 'components/ui/Input';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Linkcontainer from 'components/login/Linkcontainer';
import validateInfoLogin from 'components/helpers/validateInfoLogin ';
import useFormLogin from 'components/hooks/useFormLogin';
import '../../assets/css/form.css';

const Form = ({ bgcolor, title }) => {
    const { handleSubmit, handleChange, errors } =
        useFormLogin(validateInfoLogin);

    return (
        <>
            <Avatar sx={{ m: 1, bgcolor: bgcolor }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                {title}
            </Typography>
            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
            >
                <Input
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    label="Email Address"
                    type="email"
                    id="email"
                    handleChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
                <Input
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    handleChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
                <MyButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    text="Log In"
                    color={bgcolor}
                ></MyButton>
                <Linkcontainer color={bgcolor} />
            </Box>
        </>
    );
};

export default Form;
