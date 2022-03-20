import { useContext, useState } from 'react';
import _ from 'lodash';
import swal from 'sweetalert';
import { userApiclient } from 'components/services/userApiClient';
import { UserContext } from 'context/UserContext';
import { types } from 'components/types/types';

const useFormLogin = (
    validateInfoLogin,
    initData = { email: '', password: '' },
) => {
    const [data, setData] = useState(initData);
    const [errors, setErrors] = useState({});
    const [token, setToken] = useState(null);
    const { dispatch } = useContext(UserContext);

    const login = () => {
        userApiclient
            .getToken(data)
            .then(token => {
                setToken(token);
                updateUser();
                window.location.href = '/home';
            })
            .catch(() => {
                swal({
                    title: 'Login',
                    icon: 'error',
                    text: 'Error al momento de iniciar sesión',
                    timer: '5000',
                });
            });
    };

    const updateUser = () => {
        data['token'] = token;
        data['password'] = '';
        const action = {
            type: types.login,
            payload: data,
        };
        dispatch(action);
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const currentErrors = await validateInfoLogin(data);
        setErrors(currentErrors);
        if (_.isEqual({}, currentErrors)) {
            login();
        }
    };

    return { handleChange, handleSubmit, errors };
};

export default useFormLogin;
