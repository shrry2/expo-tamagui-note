import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FC, useEffect, useState } from 'react';
import { Text, YStack } from 'tamagui';
import { RouteStackParamList } from '../config/route';
import { useNote } from '../datastore/getNote';
import { updateNote } from '../datastore/updateNote';
import { NoteForm } from '../form/NoteForm';

type Props = NativeStackScreenProps<RouteStackParamList, 'Detail'>;

export const NoteDetailScreen: FC<Props> = ({ route, navigation }) => {
  const noteId = route.params.id;
  const { data: note } = useNote(noteId);

  const [content, setContent] = useState<string>(note?.content ?? '');
  useEffect(() => {
    if (note) {
      setContent(note.content);
    }
  }, [note]);

  const handleSubmit = async () => {
    await updateNote(noteId, {
      content,
    });

    // go back to the list screen
    navigation.goBack();
  };

  if (!note) {
    return <Text>No such note</Text>;
  }

  return (
    <YStack>
      <NoteForm
        mode="edit"
        content={content}
        onChange={setContent}
        onSubmit={handleSubmit}
      />
    </YStack>
  );
};
