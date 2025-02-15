import { PropsWithChildren } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ThemedView } from '@/ui/components/_Themed/ThemedView'
import { useBottomTabOverflow } from '@/ui/components/TabBar/TabBarBackground'
import { Title } from '@/ui/components/Text/Title'
import { Subtitle } from '@/ui/components/Text/Subtitle'

type Props = PropsWithChildren<{
  title: string
  subtitle?: string
}>

export default function PageWithoutHeader({
  children,
  title,
  subtitle,
}: Props) {
  const bottom = useBottomTabOverflow()
  const { top } = useSafeAreaInsets()

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingTop: top, paddingBottom: bottom }}
        scrollIndicatorInsets={{ bottom }}
      >
        <ThemedView style={styles.content}>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          {children}
        </ThemedView>
      </ScrollView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    gap: 16,
    padding: 32,
    overflow: 'hidden',
  },
})
