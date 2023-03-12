import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getAllData } from '../../lib/asyncStorage';
import { Note } from './types';

export const getNotes = async (): Promise<Note[]> => {
  const unorderedNotes = (await getAllData().then((items) =>
    items.filter((item) => item !== null)
  )) as Note[];

  // sort by createdAt
  return unorderedNotes.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });
};

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    const load = () => {
      getNotes().then((notes) => setNotes(notes));
    };

    // load notes on every screen focus
    return navigation.addListener('focus', load);
  }, [navigation]);

  return {
    data: notes,
  };
};
