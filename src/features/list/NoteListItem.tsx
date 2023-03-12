import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ChevronRight } from '@tamagui/lucide-icons';
import { FC } from 'react';
import { ListItem } from 'tamagui';
import { formatDate } from '../../utils/date';
import { summarize } from '../../utils/string';
import { Route, RouteStackParamList } from '../config/route';
import { Note } from '../datastore/types';

type Props = {
  note: Note;
};

export const NoteListItem: FC<Props> = ({ note }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RouteStackParamList>>();

  return (
    <ListItem
      hoverTheme
      pressTheme
      onPress={() => {
        navigation.navigate(Route.Detail, {
          id: note.id,
        });
      }}
      title={summarize(note.content)}
      subTitle={formatDate(note.createdAt)}
      iconAfter={ChevronRight}
      backgroundColor="#fff"
      borderBottomWidth={1}
    />
  );
};
