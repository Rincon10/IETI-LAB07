import { DarkModeSharp } from '@mui/icons-material';
import { types } from 'components/types/types';
import { ThemeContext } from 'contexts/ThemeContext';
import React, { useContext } from 'react';

const SwitchColor = () => {
    // Import JS library
    const halfmoon = require('halfmoon');
    halfmoon.onDOMContentLoaded();

    const { theme, dispatchTheme } = useContext(ThemeContext);

    const handleChange = () => {
        const { isDarkMode } = theme;

        const action = {
            type: isDarkMode ? types.lightMode : types.darkMode,
            isDarkMode: !isDarkMode,
        };
        dispatchTheme(action);
        halfmoon.toggleDarkMode();
    };

    return (
        <div className="custom-control custom-switch">
            <input
                type={'checkbox'}
                className="custom-control-input"
                id="switch-1"
                onChange={handleChange}
            />

            <label class="custom-control-label" for="switch-1">
                Dark Mode
                <DarkModeSharp />
            </label>
        </div>
    );
};

export default SwitchColor;
