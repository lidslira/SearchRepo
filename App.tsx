import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';

import {store} from './src/store';
import Routes from './src/routes';
import { RepoProps } from './src/dtos';

export type RootStackParamList = {
  HOME: undefined;
  REPO_DETAILS: RepoProps;
};

const App: React.FC = () => (
  <StoreProvider store={store}>
    <StatusBar barStyle="light-content" backgroundColor="#006600" />
    <Routes />
  </StoreProvider>
);

export default App;
