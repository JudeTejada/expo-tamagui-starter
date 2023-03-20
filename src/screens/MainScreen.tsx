import React from 'react';
import { Paragraph, YStack } from 'tamagui';

export function MainScreen() {
  return (
    <YStack flex={1} jc="center" ai="center" backgroundColor={'$gray4'}>
      <Paragraph color="$color" jc="center" fontWeight="$10">
        Welcome to expo tamagui template starter (Main Screen)
      </Paragraph>
    </YStack>
  );
}
