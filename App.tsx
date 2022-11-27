import 'react-native-gesture-handler';
import React from 'react';
import { Navigator } from './src/navigation/Navigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

/* const customTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    // primary: 'string',
    // background: 'black',
    // card: 'string',
    // text: 'string',
    // border: '',
    // notification: 'string',
  },
}; */

export const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};

const AppState = ({ children }: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
