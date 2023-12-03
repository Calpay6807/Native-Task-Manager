import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../themes/Colors';
import CustomButton from './CustomButton';
import StatusButton from './StatusButton';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../constants/ScreenName';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTaskReducerContext} from '../context/AppContextReducer';

export default function TodoItem({data}) {
  const navigation = useNavigation();
  const [state, dispatch] = useTaskReducerContext();

  const handleDeleteTask = () => {
    dispatch({type: 'DELETE_TASK', payload: data?.id});
    // deleteTask(data?.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemHeader}>
        <Text
          style={[
            styles.taskTitle,
            {
              textDecorationLine:
                data?.status === 'closed' ? 'line-through' : null,
            },
          ]}>
          {data?.title?.toUpperCase()}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.statusContainer,
              {
                backgroundColor:
                  data?.status === ('open' || 'progress')
                    ? '#CAF6cB'
                    : '#FECcb1',
              },
            ]}>
            <Text
              style={{
                color:
                  data?.status === ('open' || 'progress')
                    ? '#72966f'
                    : '#d6825c',
              }}>
              {data?.status}
            </Text>
          </View>
          <StatusButton
            iconName="pencil"
            onPress={() =>
              navigation.navigate(ScreenName.addTask, {task: data})
            }
          />
          <StatusButton
            iconName="delete"
            onPress={() => handleDeleteTask()}
            color="#e0695e"
          />
        </View>
      </View>

      <Text style={styles.taskDescription}>{data?.description}</Text>
      <View style={styles.footerContainer}>
        <View>
          <Text>Başlangıç Tarihi</Text>
          <View style={styles.timeContainer}>
            <Icon name="clock-outline" color={colors.primary} size={15} />
            <Text style={styles.timeText}>10.11.2023 - 18:40</Text>
          </View>
        </View>

        <View>
          <Text>Biti Tarihi</Text>
          <View style={styles.timeContainer}>
            <Icon name="clock-outline" color={colors.primary} size={15} />
            <Text style={styles.timeText}>25.11.2023 - 18:40</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },
  taskTitle: {
    flex: 1,
    fontsize: 15,
    color: colors.text.primary,
    fontWeight: '600',
    marginBottom: 5,
  },
  taskDescription: {
    fontsize: 12,
    color: colors.text.secondary,
    fontWeight: '600',
    marginVertical: 10,
  },
  itemHeader: {flexDirection: 'row', justifyContent: 'space-between'},
  statusContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    color: colors.primary,
    fontWeight: '600',
    marginHorizontal: 5,
    fontsize: 12,
  },
});
