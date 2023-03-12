import { useEffect, useState } from 'react';
import { getData, getStorageKey } from '../../lib/asyncStorage';
import { Note } from './types';

export const getNote = async (noteId: string): Promise<Note | null> => {
  return getData(getStorageKey(noteId));
};

export const useNote = (noteId: string) => {
  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    getNote(noteId).then(setNote);
  }, [noteId]);

  return { data: note };
};
