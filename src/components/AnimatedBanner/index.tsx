/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Animated} from 'react-native';

interface AnimatedBannerProps {
  scrollPosition: Animated.Value;
  bannerHeight: number;
}

const AnimatedBanner = ({
  scrollPosition,
  bannerHeight,
}: AnimatedBannerProps) => {
  return (
    <Animated.Image
      source={require('../../assets/banner.jpg')}
      style={{
        height: bannerHeight,
        width: '170%',
        transform: [
          {
            translateY: scrollPosition.interpolate({
              inputRange: [-bannerHeight, 0, bannerHeight, bannerHeight + 1],
              outputRange: [
                -bannerHeight / 2,
                0,
                bannerHeight * 0.75,
                bannerHeight * 0.75,
              ],
            }),
          },
          {
            scale: scrollPosition.interpolate({
              inputRange: [-bannerHeight, 0, bannerHeight, bannerHeight + 1],
              outputRange: [2, 1, 0.5, 0.5],
            }),
          },
        ],
      }}
    />
  );
};

export default AnimatedBanner;
