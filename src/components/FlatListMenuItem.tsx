import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component as never)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="#6A2C70" size={23} />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <View style={{ flex: 1 }} />
        <Icon name="chevron-forward-outline" color="#6A2C70" size={23} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'black',
    flexDirection: 'row',
  },
  itemText: {
    color: '#B83B5E',
    marginLeft: 10,
    fontSize: 19,
  },
});

/**
 * NOTAS: 
 * - <View style={{flex: 1}} /> -->  Se pone en medio de los que quiero seprar y con el flex:1 se estira
      todo lo que puede empujando a los demas
 */
