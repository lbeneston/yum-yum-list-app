import { PropsWithChildren } from 'react'
import { ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ThemedView } from '@/ui/components/_Themed/ThemedView'
import { useBottomTabOverflow } from '@/ui/components/TabBar/TabBarBackground'
import { Title } from '@/ui/components/Text/Title'
import styled from 'styled-components/native'

type Props = PropsWithChildren<{
  title: string
}>

export default function PageWithoutHeader({ children, title }: Props) {
  const bottom = useBottomTabOverflow()
  const { top } = useSafeAreaInsets()

  return (
    <Container>
      <ScrollView
        contentContainerStyle={{ paddingTop: top, paddingBottom: bottom }}
        scrollIndicatorInsets={{ bottom }}
      >
        <Content>
          <ThemedViewWithPaddingHorizontal>
            <Title>{title}</Title>
          </ThemedViewWithPaddingHorizontal>
          {children}
        </Content>
      </ScrollView>
    </Container>
  )
}

const Container = styled(ThemedView)({
  flex: 1,
})

const Content = styled(ThemedView)({
  flex: 1,
  gap: 16,
  paddingVertical: 20,
})

const ThemedViewWithPaddingHorizontal = styled(ThemedView)({
  paddingHorizontal: 20,
})
