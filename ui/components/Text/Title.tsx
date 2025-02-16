import { ThemedText, ThemedTextProps } from '@/ui/components/_Themed/ThemedText'
import styled from 'styled-components/native'

export const Title = (props: ThemedTextProps) => (
  <StyledThemeText {...props} style={props.style} accessibilityRole="header" />
)

const StyledThemeText = styled(ThemedText)({
  fontSize: '32px',
  lineHeight: '32px',
  fontWeight: 'bold',
})
