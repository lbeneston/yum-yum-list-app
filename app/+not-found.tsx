import React from 'react';
import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { Body } from '@/ui/components/Text/Body';
import { Title } from '@/ui/components/Text/Title';
import { ThemedView } from '@/ui/components/_Themed/ThemedView';

export default function NotFound() {
  return (
    <React.Fragment>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <Title>This screen doesn't exist.</Title>
        <Link href="/" style={styles.link}>
          <Body>Go to home screen!</Body>
        </Link>
      </ThemedView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    gap: 16,
  },
  link: {
    padding: 15,
  },
});
