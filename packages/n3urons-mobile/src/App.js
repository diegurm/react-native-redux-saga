import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import {
  DefaultTheme,
  DarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { useColorScheme } from 'react-native-appearance';

import Routes from './Routes';
import PreferencesContext from './context/preferences.context';

const App = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = React.useState(
    colorScheme === 'dark' ? 'dark' : 'light',
  );

  function toggleTheme() {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  }

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme, toggleTheme],
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
      } catch (e) {
        alert(e);
      }
    };

    bootstrapAsync();
  }, []);

  return (
    <>
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider
          theme={
            theme === 'light'
              ? {
                  ...DefaultTheme,
                  colors: {
                    ...DefaultTheme.colors,
                    primary: '#002EBE',
                    secundary: '#062DAA',
                    accent: '#000',
                  },
                }
              : {
                  ...DarkTheme,
                  colors: { ...DarkTheme.colors, primary: '#777' },
                }
          }>
          <StatusBar barStyle="default" />

          <Routes />
        </PaperProvider>
      </PreferencesContext.Provider>
    </>
  );
};
export default App;
