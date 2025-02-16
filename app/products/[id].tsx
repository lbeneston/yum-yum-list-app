import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Subtitle } from '@/ui/components/Text/Subtitle'
import { ThemedView } from '@/ui/components/_Themed/ThemedView'
import styled from 'styled-components/native'

export default function Products() {
  const { id } = useLocalSearchParams()
  const title = typeof id === 'string' ? id : id?.[0] || 'Produit'

  return (
    <React.Fragment>
      <Stack.Screen
        options={{
          title,
          headerBackTitle: 'Retour',
          headerStyle: { backgroundColor: Colors.dark.header },
          headerTintColor: Colors.dark.tint,
        }}
      />
      <Container>
        <Subtitle>Prochainement...</Subtitle>
      </Container>
    </React.Fragment>
  )
}

const Container = styled(ThemedView)({
  flex: 1,
  padding: 20,
  gap: 16,
})
