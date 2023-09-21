import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Dashboard} from './src/pages/Dashboard';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Dashboard />
    </SafeAreaProvider>
  );
}

export default App;
