import PageWithoutHeader from '@/ui/pages/PageWithoutHeader'
import { Subtitle } from '@/ui/components/Text/Subtitle'
import React from 'react'
import { ThemedView } from '@/ui/components/_Themed/ThemedView'
import styled from 'styled-components/native'

export default function MyList() {
  return (
    <PageWithoutHeader title="Mes listes">
      <ThemedViewWithPaddingHorizontal>
        <Subtitle>Prochainement...</Subtitle>
      </ThemedViewWithPaddingHorizontal>
    </PageWithoutHeader>
  )
}

const ThemedViewWithPaddingHorizontal = styled(ThemedView)({
  paddingHorizontal: 20,
})
