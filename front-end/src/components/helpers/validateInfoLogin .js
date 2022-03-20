const validateInfoLogin = values => {
    const errors = {};
    const { email, password } = values;

    for (const property in values) {
        if (!values[property]) errors[property] = `${property} is mandatory!!`;
    }

    const regularExp =
        /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}/;
    if (email && !regularExp.test(email)) errors.email = 'Invalid email';
    else if (password && password.length < 5)
        errors.password = 'The password must be longer than 5 letters';
    return errors;
};

export default validateInfoLogin;
