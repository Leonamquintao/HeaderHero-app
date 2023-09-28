import React, {useState} from 'react';
import {View, Animated, ScrollView, Text, StyleSheet} from 'react-native';
import DummyComponent from '../../components/DummyComponent';
import DummyTextComponent from '../../components/DummyTextComponent';

const HomePage = () => {
  const [fadeAnim] = useState(new Animated.Value(0));

  const {container, header, bodyContent} = styles;

  const handleScroll = (event: any) => {
    const scrollY = event.nativeEvent.contentOffset.y;

    console.log('scrollY => ', scrollY);
    if (scrollY <= 20) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={container}>
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        <Animated.View style={[header, {opacity: fadeAnim}]}>
          <Text>Header Segment</Text>
        </Animated.View>
        <View style={bodyContent}>
          <DummyComponent />
          <DummyComponent />
          <DummyTextComponent />
          <DummyTextComponent />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: '100%',
    height: 120,
  },
  bodyContent: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default HomePage;
