import { ThemedText, ThemedTextProps } from '@/ui/components/_Themed/ThemedText'
import styled from 'styled-components/native'

export const Body = (props: ThemedTextProps) => (
  <StyledThemeText {...props} style={props.style} />
)

const StyledThemeText = styled(ThemedText)({
  fontSize: '16px',
  lineHeight: '24px',
})
