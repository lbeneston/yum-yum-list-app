import React from 'react'
import { Link, Stack } from 'expo-router'

import { Body } from '@/ui/components/Text/Body'
import { Title1 } from '@/ui/components/Text/Title1'
import { ThemedView } from '@/ui/components/_Themed/ThemedView'
import styled from 'styled-components/native'

export default function NotFound() {
  return (
    <React.Fragment>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Container>
        <Title1>This screen doesn't exist.</Title1>
        <StyledLink href="/">
          <Body>Go to home screen!</Body>
        </StyledLink>
      </Container>
    </React.Fragment>
  )
}

const Container = styled(ThemedView)({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
  gap: 16,
})

const StyledLink = styled(Link)({
  padding: 15,
})
