import { useColorScheme } from 'react-native';

import { TamaguiProvider, Theme } from 'tamagui';

import { useFonts } from 'expo-font';

import config from './tamagui.config';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigators';
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
    <NavigationContainer>
      <TamaguiProvider config={config}>
        <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
          <AppNavigator />
        </Theme>
      </TamaguiProvider>
    </NavigationContainer>
  );
}
