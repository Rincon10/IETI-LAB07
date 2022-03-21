import { types } from 'components/types/types';

const themeReducer = (state = {}, action) => {
    switch (action.type) {
        case types.darkMode:
            return {
                ...action.payload,
                isDarkMode: true,
            };
        case types.lightMode:
            return {
                ...action.payload,
                isDarkMode: false,
            };
        default:
            return state;
    }
};

export default themeReducer;
