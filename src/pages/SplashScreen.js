import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import colors from '../themes/Colors';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorageKey from '../constants/AsyncStorageKey';
import ScreenName from '../constants/ScreenName';
import LottieView from 'lottie-react-native';
import {useTaskReducerContext} from '../context/AppContextReducer';

export default function SplashScreen() {
  const navigation = useNavigation();
  const [state, dispatch] = useTaskReducerContext();
  async function checkOnboardingComplete() {
    const onboardingComplete = await AsyncStorage.getItem(
      AsyncStorageKey.onboardingComplete,
    );

    const tasks = await AsyncStorage.getItem(AsyncStorageKey.tasks);
    dispatch({type: 'FETCH_TASK', payload: JSON.parse(tasks)});

    if (onboardingComplete === 'true') {
      navigation.replace(ScreenName.taskList);
    } else {
      navigation.replace(ScreenName.onboarding);
    }
  }

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/animations/to-do.json')}
        autoPlay
        loop={false}
        style={{flex: 1}}
        onAnimationFinish={() => {
          setTimeout(() => {
            checkOnboardingComplete();
          }, 1000);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
