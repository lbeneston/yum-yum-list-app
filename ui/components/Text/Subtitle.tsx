import { ThemedText, ThemedTextProps } from '@/ui/components/_Themed/ThemedText'
import styled from 'styled-components/native'

export const Subtitle = (props: ThemedTextProps) => (
  <StyledThemeText {...props} style={props.style} />
)

const StyledThemeText = styled(ThemedText)({
  fontSize: 20,
  fontWeight: 'bold',
})
