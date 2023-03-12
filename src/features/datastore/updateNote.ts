import { getStorageKey, storeData } from '../../lib/asyncStorage';
import { getNote } from './getNote';
import { Note } from './types';

type UpdateNoteData = {
  content: string;
};

export const updateNote = async (
  noteId: string,
  { content }: UpdateNoteData
): Promise<Note> => {
  const previousNote = await getNote(noteId);

  if (!previousNote) {
    throw new Error('Note not found');
  }

  const updatedNote: Note = {
    ...previousNote,
    content,
  };

  await storeData(getStorageKey(updatedNote.id), updatedNote);

  return updatedNote;
};
