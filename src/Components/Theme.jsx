import React from 'react';

export const Theme = () => {

    const [theme, setTheme] = React.useState('garden');
    
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'garden' : 'dark');
    };

    // initially set the theme and "listen" for changes to apply them to the HTML tag
    React.useEffect(() => {
      document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <button className='btn btn-outline btn-secondary'>
            <label className="swap swap-rotate">
                <input onClick={toggleTheme} type="checkbox" />
                <div className="swap-on">DARKMODE</div>
                <div className="swap-off">LIGHTMODE</div>
            </label>
        </button>
    );
}