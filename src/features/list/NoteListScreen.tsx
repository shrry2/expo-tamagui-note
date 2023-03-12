import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FC } from 'react';
import { FlatList, View } from 'react-native';
import { Button, Heading, YStack } from 'tamagui';
import { Route, RouteStackParamList } from '../config/route';
import { useNotes } from '../datastore/getNotes';
import { NoteListItem } from './NoteListItem';

type Props = NativeStackScreenProps<RouteStackParamList, 'List'>;

export const NoteListScreen: FC<Props> = ({ navigation }) => {
  const { data: notes } = useNotes();

  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <NoteListItem note={item} />}
      ListEmptyComponent={() => (
        <YStack
          p={18}
          gap={18}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'tomato',
          }}
        >
          <View>
            <Heading size="$6" textAlign="center">
              No notes yet
            </Heading>
          </View>
          <Button
            theme="blue"
            onPress={() => navigation.navigate(Route.Create)}
          >
            Create New
          </Button>
        </YStack>
      )}
    />
  );
};
