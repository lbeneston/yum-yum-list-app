import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Title2 } from '@/ui/components/Text/Title2'
import styled from 'styled-components/native'
import { useThemeColor } from '@/hooks/useThemeColor'
import { ThemedScrollView } from '@/ui/components/_Themed/ThemedScrollView'

export default function Products() {
  const headerColor = useThemeColor({}, 'header')
  const { id } = useLocalSearchParams()
  const title = typeof id === 'string' ? id : id?.[0] || 'Produit'

  return (
    <React.Fragment>
      <Stack.Screen
        options={{
          title,
          headerStyle: { backgroundColor: headerColor },
          headerTintColor: Colors.dark.tint,
          headerLargeTitle: true,
          headerBackButtonDisplayMode: 'minimal',
          headerLargeTitleStyle: { fontSize: 25, fontWeight: 'bold' },
        }}
      />
      <Container contentInsetAdjustmentBehavior="automatic">
        <Title2>Prochainement...</Title2>
      </Container>
    </React.Fragment>
  )
}

const Container = styled(ThemedScrollView)({
  flex: 1,
  padding: 20,
  gap: 16,
})
