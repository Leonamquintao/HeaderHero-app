import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import HomePage from './src/pages/HomePage';
import {Dashboard} from './src/pages/Dashboard';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      {/* <HomePage /> */}
      <Dashboard />
    </SafeAreaProvider>
  );
}

export default App;
