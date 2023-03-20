import React from 'react';
import { Paragraph, Spinner, Stack, XStack, YStack, H1, Label, Switch } from 'tamagui';
import { DialogDemo, SelectDemo } from '../components';

export function MainScreen() {
  return (
    <Stack p="$4">
      <H1>Stack</H1>
      <XStack padding="$3" space="$4" ai="center">
        <Spinner size="small" color="$green10" />
        <Spinner size="large" color="$orange10" />
      </XStack>
      <Stack>
        <H1>Spinner</H1>
        <XStack alignItems="center" justifyContent="space-between" space="$4">
          <Label htmlFor="switch-demo" flex={1} height="$2" lineHeight="$2">
            Dark mode
          </Label>
          <Switch id="switch-demo" size="$4" bg="$background">
            <Switch.Thumb animation="quick" />
          </Switch>
        </XStack>
      </Stack>

      <SelectDemo />
      <DialogDemo />
    </Stack>
  );
}
