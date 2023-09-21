import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DummyComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.number}>3</Text>
        <Text>Active Trips</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.row}>
        <Text style={styles.number}>2</Text>
        <Text>Active Trips</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 10,
    borderWidth: 1,
    padding: 4,
    borderColor: '#C0C0C0',
    marginVertical: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#C0C0C0',
  },
  number: {
    backgroundColor: '#C0C0C0',
    padding: 4,
    borderRadius: 5,
    marginHorizontal: 10,
  },
});

export default DummyComponent;
