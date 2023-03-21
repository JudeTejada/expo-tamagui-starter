import React from 'react';
import { Stack, H1, Button } from 'tamagui';

export function MainScreen() {
  return (
    <Stack p="$4" f={1} h="100%" ai="center" jc="center">
      <H1>Welcome!</H1>
      <Button>Click me</Button>
    </Stack>
  );
}
