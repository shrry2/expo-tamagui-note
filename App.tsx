import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Button, useColorScheme } from 'react-native';
import { TamaguiProvider, Theme } from 'tamagui';

import { Route, RouteStackParamList } from './src/features/config/route';
import { CreateNoteScreen } from './src/features/create/CreateNoteScreen';
import { NoteDetailScreen } from './src/features/detail/NoteDetailScreen';
import { NoteListScreen } from './src/features/list/NoteListScreen';
import config from './tamagui.config';

const Stack = createNativeStackNavigator<RouteStackParamList>();

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
          <Stack.Navigator initialRouteName={Route.List}>
            <Stack.Screen
              name={Route.List}
              component={NoteListScreen}
              options={({ navigation }) => ({
                title: 'Notes',
                headerRight: () => (
                  <Button
                    title="Create"
                    onPress={() => {
                      navigation.navigate(Route.Create);
                    }}
                  />
                ),
              })}
            />
            <Stack.Screen name={Route.Detail} component={NoteDetailScreen} />
            <Stack.Screen
              name={Route.Create}
              component={CreateNoteScreen}
              options={{
                title: 'Create Note',
              }}
            />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </Theme>
    </TamaguiProvider>
  );
}
