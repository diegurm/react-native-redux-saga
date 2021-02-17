import React from 'react';

const PreferencesContext = React.createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

export default PreferencesContext;
