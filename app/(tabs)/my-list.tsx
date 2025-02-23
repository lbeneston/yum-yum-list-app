import PageWithoutHeader from '@/ui/pages/PageWithoutHeader'
import { Title2 } from '@/ui/components/Text/Title2'
import React from 'react'
import { ThemedView } from '@/ui/components/_Themed/ThemedView'
import styled from 'styled-components/native'

export default function MyList() {
  return (
    <PageWithoutHeader title="Mes listes">
      <ThemedViewWithPaddingHorizontal>
        <Title2>Prochainement...</Title2>
      </ThemedViewWithPaddingHorizontal>
    </PageWithoutHeader>
  )
}

const ThemedViewWithPaddingHorizontal = styled(ThemedView)({
  paddingHorizontal: 20,
})
