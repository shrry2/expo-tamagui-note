import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FC } from 'react';
import { FlatList } from 'react-native';
import { RouteStackParamList } from '../config/route';
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
    />
  );
};
