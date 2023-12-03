import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import colors from '../themes/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import AsyncStorageKey from '../constants/AsyncStorageKey';

const width = Dimensions.get('screen').width;

export default function OnboardingScreen() {
  const navigation = useNavigation();

  const handleOnboardingComplete = async () => {
    await AsyncStorage.setItem(AsyncStorageKey.onboardingComplete, 'true');
    navigation.replace('AddTask');
  };

  return (
    <View style={styles.container}>
      <View style={styles.ellipseBackground} />
      <View style={styles.inlineContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/Task2x.png')}
            style={styles.image}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.title}>Haydi İşlerini Planla!</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleOnboardingComplete}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    alignItems: 'center',
  },
  ellipseBackground: {
    width: width,
    height: '70%',
    backgroundColor: colors.primary,
    borderBottomLeftRadius: width / 2,
    borderBottomRightRadius: width / 2,
    transform: [{scaleX: 1.5}],
  },
  inlineContainer: {
    width: width,
    height: '100%',
    position: 'absolute',
  },
  imageContainer: {alignItems: 'center', marginTop: 110},
  image: {height: 400, width: 400},
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.text.primary,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    width: 70,
    height: 70,
    backgroundColor: colors.primary,
    borderRadius: 35,
    margin: 20,
  },
  plus: {
    color: colors.background.primary,
    fontSize: 50,
    fontWeight: '500',
    alignSelf: 'center',
  },
});
