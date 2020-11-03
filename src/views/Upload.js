import React from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

import colors from '../config/colors';

export default function Upload({ progress = 0, visible = false, onDone }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            width={200}
            progress={progress}
          ></Progress.Bar>
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require('../assets/animations/done.json')}
            style={styles.animation}
            resizeMode='cover'
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
