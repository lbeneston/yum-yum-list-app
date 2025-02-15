import { PropsWithChildren } from 'react'
import { ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ThemedView } from '@/ui/components/_Themed/ThemedView'
import { useBottomTabOverflow } from '@/ui/components/TabBar/TabBarBackground'
import { Title } from '@/ui/components/Text/Title'
import { Subtitle } from '@/ui/components/Text/Subtitle'
import styled from 'styled-components/native'
import { Colors } from '@/constants/Colors'

const HEADER_HEIGHT = 50

type Props = PropsWithChildren<{
  headerTitle: string
  title?: string
  subtitle?: string
}>

export default function PageWithHeader({
  children,
  headerTitle,
  title,
  subtitle,
}: Props) {
  const bottom = useBottomTabOverflow()
  const { top } = useSafeAreaInsets()

  return (
    <Container>
      <Header
        lightColor={Colors.light.header}
        darkColor={Colors.dark.header}
        style={{ height: HEADER_HEIGHT + top, paddingTop: top }}
      >
        <Subtitle>{headerTitle}</Subtitle>
      </Header>
      <ScrollView
        contentContainerStyle={{ paddingTop: top, paddingBottom: bottom }}
        scrollIndicatorInsets={{ bottom }}
      >
        <Content>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          {children}
        </Content>
      </ScrollView>
    </Container>
  )
}

const Container = styled(ThemedView)({
  flex: 1,
})

const Header = styled(ThemedView)({
  position: 'absolute',
  top: 0,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 10,
})

const Content = styled(ThemedView)({
  flex: 1,
  gap: 16,
  padding: 32,
  overflow: 'hidden',
  marginTop: HEADER_HEIGHT,
})
