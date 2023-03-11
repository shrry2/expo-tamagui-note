import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Text, YStack } from 'tamagui';

export const Main = () => {
  return (
    <SafeAreaView>
      <YStack margin={10}>
        <Text>Hello, World!</Text>
        <Button>Button</Button>
      </YStack>
    </SafeAreaView>
  );
};
