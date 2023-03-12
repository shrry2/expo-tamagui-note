import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { TamaguiProvider, Theme } from 'tamagui';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import config from './tamagui.config';
import { Main } from './src/Main';
import { NoteListScreen } from './src/features/list/NoteListScreen';

const Stack = createNativeStackNavigator();

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
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={NoteListScreen}
              options={{
                title: 'Notes',
              }}
            />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </Theme>
    </TamaguiProvider>
  );
}
