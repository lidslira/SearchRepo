import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {SafeAreaView} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import { Home } from '../screens/Home';
import RepoDetails from '../screens/RepoDetails';

import Header from '../components/AccessibilityHeader';
import { HOME, REPO_DETAILS } from '../constants/routes';

import {createTheme} from '../utils/theme';
import {ApplicationState} from '../store';
import { RootStackParamList } from '../../App';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => {
  const {theme} = useSelector((state: ApplicationState) => state.theme);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ThemeProvider theme={createTheme(theme)}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName={HOME}>
            <Stack.Screen
              name={HOME}
              
              component={Home}
              options={{header: () => <Header />}}
            />
              <Stack.Screen
                name={REPO_DETAILS}
                component={RepoDetails}
                options={{header: () => <Header />}}
              />
            </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default RootStack;
