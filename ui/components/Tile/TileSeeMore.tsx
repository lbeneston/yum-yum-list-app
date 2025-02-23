import { Link } from 'expo-router'
import styled from 'styled-components/native'
import { useThemeColor } from '@/hooks/useThemeColor'
import { ThemedView } from '@/ui/components/_Themed/ThemedView'
import { PropsWithChildren } from 'react'
import { Title1 } from '../Text/Title1'

type Props = PropsWithChildren<{
  href: string
}>

export function TileSeeMore({ href }: Props) {
  const borderColor = useThemeColor({}, 'header')

  return (
    <StyledLink href={href} borderColor={borderColor}>
      <Container>
        <Title1 lightColor={borderColor} darkColor={borderColor}>
          +
        </Title1>
      </Container>
    </StyledLink>
  )
}

const StyledLink = styled(Link)<{ borderColor: string }>(
  ({ borderColor }: { borderColor: string }) => ({
    padding: 15,
    borderRadius: 8,
    flex: 1,
    backgroundColor: 'transparent',
    marginLeft: 15,
    borderWidth: 3,
    borderColor,
  }),
)

const Container = styled(ThemedView)({
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
})
