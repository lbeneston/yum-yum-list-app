import { Link, type LinkProps } from 'expo-router'
import styled from 'styled-components/native'
import { ThemedView } from '../_Themed/ThemedView'
import { Colors } from '@/constants/Colors'
import { Image } from 'react-native'
import { Title3 } from '../Text/Title3'

type Props = LinkProps & {
  href: string
  flavor: string
}

export function TileProduct({ href, flavor }: Props) {
  return (
    <Link href={href}>
      <StyledThemedView
        lightColor={Colors.light.header}
        darkColor={Colors.dark.header}
      >
        <StyledImage
          source={require(
            `@/assets/images/la_craquante_au_sel_de_guerande.webp`,
          )}
        />
        <Title3 numberOfLines={1}>{flavor}</Title3>
      </StyledThemedView>
    </Link>
  )
}

const StyledImage = styled(Image)({
  backgroundColor: Colors.light.background,
  borderRadius: 8,
  height: 130,
  marginBottom: 10,
  width: 130,
})

const StyledThemedView = styled(ThemedView)({
  borderRadius: 8,
  padding: 10,
  width: 150,
})
