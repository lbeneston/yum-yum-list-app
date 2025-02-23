import { ThemedText, ThemedTextProps } from '@/ui/components/_Themed/ThemedText'
import styled from 'styled-components/native'

export const Title1 = (props: ThemedTextProps) => (
  <StyledThemeText {...props} style={props.style} accessibilityRole="header" />
)

const StyledThemeText = styled(ThemedText)({
  fontSize: 30,
  fontWeight: 'bold',
})
