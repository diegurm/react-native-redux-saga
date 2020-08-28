import React from 'react';

const PreferencesContext = React.createContext({
  rtl: 'left',
  theme: 'dark',
  toggleTheme: () => {},
  toggleRTL: () => {},
});

export default PreferencesContext;
