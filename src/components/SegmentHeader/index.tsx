import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  Animated,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const TOP_HEADER_HIGHT = 50;

interface SegmentHeaderProps {
  scrollPosition: Animated.Value;
  bannerHeight: number;
}

const SegmentHeader = ({scrollPosition, bannerHeight}: SegmentHeaderProps) => {
  const safeArea = useSafeAreaInsets();

  const isFloating = !!scrollPosition;
  const [isTransparent, setTransparent] = useState(isFloating);

  useEffect(() => {
    if (!scrollPosition) {
      return;
    }
    const listenerId = scrollPosition.addListener((a: {value: number}) => {
      const topHeaderOffset = bannerHeight - TOP_HEADER_HIGHT - safeArea.top;
      isTransparent !== a.value < topHeaderOffset &&
        setTransparent(!isTransparent);
    });
    return () => scrollPosition.removeListener(listenerId);
  });

  return (
    <>
      <StatusBar
        barStyle={isTransparent ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      {isTransparent && (
        <View style={styles.container(safeArea, isFloating, isTransparent)}>
          <Text style={styles.title(isTransparent)}>HE logo</Text>
          <Text style={styles.title(isTransparent)}>Segment Here</Text>
          <Text style={styles.title(isTransparent)}>Icon</Text>
        </View>
      )}
      {!isTransparent && (
        <View style={styles.container(safeArea, isFloating, isTransparent)}>
          <View style={styles.inputBox}>
            <Text style={styles.title(isTransparent)}>
              Find a Place to stay
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

const styles = {
  container: (
    safeArea: {top: number},
    isFloating: boolean,
    isTransparent: boolean,
  ): StyleProp<ViewStyle> => ({
    paddingTop: safeArea.top,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: isFloating ? -TOP_HEADER_HIGHT - safeArea.top : 0,
    height: TOP_HEADER_HIGHT + safeArea.top + (!isTransparent ? 10 : 0),
    backgroundColor: isTransparent ? '#0000' : '#FFF',
    shadowOpacity: isTransparent ? 0 : 0.5,
    elevation: isTransparent ? 0.01 : 5,
    zIndex: 100,
  }),
  title: (isTransparent: boolean): StyleProp<TextStyle> => ({
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: isTransparent ? '#FFF' : '#000',
  }),
  inputBox: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0eded',
    height: 46,
    justifyContent: 'center',
    borderRadius: 30,
  },
} as const;

export default SegmentHeader;
