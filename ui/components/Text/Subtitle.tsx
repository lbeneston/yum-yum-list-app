import { StyleSheet } from 'react-native'
import { ThemedText, ThemedTextProps } from '@/ui/components/_Themed/ThemedText'

export const Subtitle = (props: ThemedTextProps) => (
  <ThemedText {...props} style={[styles.subtitle, props.style]} />
)

const styles = StyleSheet.create({
  subtitle: { fontSize: 20, fontWeight: 'bold' },
})
