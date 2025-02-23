import { ThemedText, ThemedTextProps } from '@/ui/components/_Themed/ThemedText'
import styled from 'styled-components/native'

export const Title3 = (props: ThemedTextProps) => (
  <StyledThemeText {...props} style={props.style} />
)

const StyledThemeText = styled(ThemedText)({
  fontSize: 18,
  fontWeight: 'bold',
})
