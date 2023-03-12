import { Pencil, Plus } from '@tamagui/lucide-icons';
import { FC } from 'react';
import { Button, Form, TextArea, YStack } from 'tamagui';

type Props = {
  mode: 'create' | 'edit';
  content: string;
  onChange: (content: string) => void;
  onSubmit: () => void;
};

export const NoteForm: FC<Props> = ({ mode, content, onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <YStack p="$4" gap={20}>
        <TextArea
          value={content}
          onChangeText={onChange}
          minHeight={300}
          borderWidth={2}
        />

        <Form.Trigger asChild>
          {mode === 'create' ? (
            <Button icon={Plus} theme="blue">
              Create
            </Button>
          ) : (
            <Button icon={Pencil} theme="blue">
              Save
            </Button>
          )}
        </Form.Trigger>
      </YStack>
    </Form>
  );
};
