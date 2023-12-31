import React, {useRef, useState} from 'react';
import {
  Animated,
  View,
  Text,
  Dimensions,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';

import AnimatedBannerProps from '../../components/AnimatedBanner';
import DummyComponent from '../../components/DummyComponent';
import DummyTextComponent from '../../components/DummyTextComponent';
import SegmentHeader from '../../components/SegmentHeader';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const BANNER_HEIGHT = windowHeight / 2;

function calculatePercentage(verticalOffset: number, threshold: number) {
  const quotient = Number(1 - verticalOffset / threshold);
  const isUpperHeader = verticalOffset > threshold;
  const opacity = Number(
    isUpperHeader ? -Math.abs(quotient).toFixed(2) : quotient.toFixed(2),
  );

  if (opacity > 1) {
    return 1;
  }
  if (opacity < 0) {
    return 0;
  }

  return opacity;
}

export const Dashboard: React.FC = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const scrollAnimation = useRef<Animated.Value>(new Animated.Value(0)).current;
  const [yOffset, setYOffset] = useState(0);

  // const perceptual = calculatePercentage(yOffset, BANNER_HEIGHT * 0.7);

  // console.log('opacity => ', perceptual);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <SegmentHeader
        bannerHeight={BANNER_HEIGHT}
        scrollPosition={scrollAnimation}
      />

      {/* <View
        style={{
          height: 120,
          backgroundColor: '#f00',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: perceptual,
        }}>
        <Text style={{fontSize: 18}}>Header</Text>
      </View> */}

      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollAnimation}}}],
          {
            listener: (event: any) =>
              setYOffset(event.nativeEvent.contentOffset.y),
            useNativeDriver: true,
          },
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        scrollEventThrottle={16}>
        <View style={styles.bannerContainer}>
          <AnimatedBannerProps
            scrollPosition={scrollAnimation}
            bannerHeight={BANNER_HEIGHT}
          />
          <View style={styles.actionContainer}>
            <Text style={styles.imageTitle}>Where to next?</Text>
            <TouchableOpacity style={styles.findStayBtn}>
              <Text>Find a Place to stay</Text>
            </TouchableOpacity>
          </View>
        </View>
        {refreshing && <Text style={styles.loadingText}>Loading....</Text>}
        {!refreshing && (
          <View style={styles.content}>
            <Text style={styles.title}>My Trips</Text>
            <DummyComponent />
            <DummyComponent />
            <Text style={styles.title}>Previously Booked</Text>
            <DummyTextComponent />
            <DummyTextComponent />
          </View>
        )}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerContainer: {
    flex: 1,
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    resizeMode: 'fit',
  },
  actionContainer: {
    flex: 1,
    alignItems: 'center',
    top: -100,
  },
  imageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#FFF',
    marginBottom: 10,
  },
  findStayBtn: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    width: windowWidth - 30,
    height: 46,
    borderRadius: 20,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    color: '#2f302f',
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 10,
  },
  loadingText: {
    color: '#2f302f',
    fontSize: 16,
    fontWeight: '900',
    margin: 20,
  },
});

export default Dashboard;
