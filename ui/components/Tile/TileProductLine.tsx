import { Link, type LinkProps } from 'expo-router'
import styled from 'styled-components/native'
import { ThemedView } from '../_Themed/ThemedView'
import { Colors } from '@/constants/Colors'
import { Body } from '../Text/Body'
import { Image } from 'react-native'
import { Title3 } from '../Text/Title3'
import { Title1 } from '../Text/Title1'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor'

type Props = LinkProps & {
  href: string
  flavor: string
  category: string
}

export function TileProductLine({ href, flavor, category }: Props) {
  const borderColor = useThemeColor({}, 'header')

  return (
    <Container>
      <CustomLink href={href}>
        <StyledThemedView
          lightColor={Colors.light.header}
          darkColor={Colors.dark.header}
        >
          <StyledImage
            source={require(
              `@/assets/images/la_craquante_au_sel_de_guerande.webp`,
            )}
          />
          <TextContainer>
            <Title3 numberOfLines={2}>{flavor}</Title3>
            <Body numberOfLines={1}>{category}</Body>
          </TextContainer>
        </StyledThemedView>
      </CustomLink>
      <AddButton borderColor={borderColor}>
        <Title1 darkColor={borderColor} lightColor={borderColor}>
          +
        </Title1>
      </AddButton>
    </Container>
  )
}

const Container = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  flex: 1,
})

const CustomLink = styled(Link)({
  flex: 1,
})

const StyledImage = styled(Image)({
  backgroundColor: Colors.light.background,
  borderRadius: 8,
  height: 80,
  width: 80,
})

const StyledThemedView = styled(ThemedView)({
  padding: 10,
  flexDirection: 'row',
  borderTopLeftRadius: 8,
  borderBottomLeftRadius: 8,
})

const TextContainer = styled.View({
  gap: 8,
  marginLeft: 10,
  flex: 1,
})

const AddButton = styled.TouchableOpacity<{ borderColor: string }>(
  ({ borderColor }: { borderColor: string }) => ({
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flexDirection: 'column',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 3,
    borderColor,
    padding: 10,
  }),
)
