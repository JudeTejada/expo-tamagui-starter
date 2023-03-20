import { StatusBar } from 'expo-status-bar';

import { useColorScheme } from 'react-native';

import { Paragraph, Stack, TamaguiProvider, Theme, YStack } from 'tamagui';

import { useFonts } from 'expo-font';

import config from './tamagui.config';
export default function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
        <YStack f={1} jc="center" ai="center" backgroundColor={'$backgroundSoft'}>
          <Paragraph color="$color" jc="center" fontWeight="InterBold">
            {colorScheme}
          </Paragraph>

          <StatusBar style="auto" />
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
}
