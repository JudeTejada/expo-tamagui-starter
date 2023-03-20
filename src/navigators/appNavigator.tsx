import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../screens';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainScreen} />
    </Stack.Navigator>
  );
}
