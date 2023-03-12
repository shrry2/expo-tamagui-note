import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FC, useState } from 'react';
import { Alert, KeyboardAvoidingView } from 'react-native';
import { RouteStackParamList } from '../config/route';
import { createNote } from '../datastore/createNote';
import { NoteForm } from '../form/NoteForm';

type Props = NativeStackScreenProps<RouteStackParamList, 'Create'>;

export const CreateNoteScreen: FC<Props> = ({ navigation }) => {
  const [content, setContent] = useState<string>('');

  const handleSubmit = async () => {
    if (!content.trim().length) {
      Alert.alert('Please enter some content');
      return;
    }

    await createNote({
      content,
    });

    // go back to the list screen
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView>
      <NoteForm
        mode="create"
        content={content}
        onChange={setContent}
        onSubmit={handleSubmit}
      />
    </KeyboardAvoidingView>
  );
};
