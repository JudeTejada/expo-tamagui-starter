import { useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TamaguiProvider, Theme, Stack, H1, Button } from 'tamagui';
import { useFonts } from 'expo-font';

import config from './tamagui.config';
const Appstack = createNativeStackNavigator();

export function MainScreen() {
  return (
    <Stack p="$4" f={1} h="100%" ai="center" jc="center">
      <H1>Welcome!</H1>
      <Button>Click me</Button>
    </Stack>
  );
}

export function AppNavigator() {
  return (
    <Appstack.Navigator>
      <Appstack.Screen name="Home" component={MainScreen} />
    </Appstack.Navigator>
  );
}

export default function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
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
