import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../pages/SplashScreen';
import OnboardingScreen from '../pages/OnboardingScreen';
import TaskListScreen from '../pages/TaskListScreen';
import AddTaskScreen from '../pages/AddTaskScreen';
import colors from '../themes/Colors';
import ScreenName from '../constants/ScreenName';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background.primary,
        },
        headerTintColor: colors.text,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name={ScreenName.splash}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenName.onboarding}
        component={OnboardingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenName.taskList}
        component={TaskListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name={ScreenName.addTask} component={AddTaskScreen} />
    </Stack.Navigator>
  );
}
