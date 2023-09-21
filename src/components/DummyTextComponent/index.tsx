import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DummyTextComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
        deserunt aperiam, dolorem dolorum debitis perferendis cumque rem
        eveniet. Reprehenderit, iste modi aut commodi quaerat officiis. Cumque
        autem dolorum sed cupiditate. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Tempore deserunt aperiam, dolorem dolorum debitis
        perferendis cumque rem eveniet. Reprehenderit, iste modi aut commodi
        quaerat officiis. Cumque autem dolorum sed cupiditate. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Tempore deserunt aperiam,
        dolorem dolorum debitis perferendis cumque rem eveniet. Reprehenderit,
        iste modi aut commodi quaerat officiis. Cumque autem dolorum sed
        cupiditate. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Tempore deserunt aperiam, dolorem dolorum debitis perferendis cumque rem
        eveniet. Reprehenderit, iste modi aut commodi quaerat officiis. Cumque
        autem dolorum sed cupiditate.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  text: {
    color: '#2f302f',
  },
});

export default DummyTextComponent;
