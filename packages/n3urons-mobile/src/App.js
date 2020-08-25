import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Routes from './Routes';

const App = () => {
  const [theme] = useState({
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#002EBE',
      secundary: '#062DAA',
      accent: '#000',
    },
  });

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
      <StatusBar barStyle="dark-content" />
      <PaperProvider theme={theme}>
        <Routes />
      </PaperProvider>
    </>
  );
};
export default App;
