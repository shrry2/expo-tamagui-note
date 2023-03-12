import { getStorageKey, storeData } from '../../lib/asyncStorage';
import { generateNoteId } from './generateNoteId';
import { Note } from './types';

type CreateNoteData = {
  content: string;
};

export const createNote = async ({
  content,
}: CreateNoteData): Promise<Note> => {
  const note: Note = {
    id: generateNoteId(),
    content,
    createdAt: new Date().getTime(),
  };

  await storeData(getStorageKey(note.id), note);

  return note;
};
