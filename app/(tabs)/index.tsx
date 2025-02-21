import PageWithoutHeader from '@/ui/pages/PageWithoutHeader'
import brands from '@/data/brands.json'
import { Title } from '@/ui/components/Text/Title'
import { Subtitle } from '@/ui/components/Text/Subtitle'
import styled from 'styled-components/native'
import { Colors } from '@/constants/Colors'
import React from 'react'
import { Link } from 'expo-router'
import { ThemedFlatList } from '@/ui/components/_Themed/ThemedFlatList'
import { ThemedView } from '@/ui/components/_Themed/ThemedView'

type Flavor = {
  flavor: string
  category: string
  sub_category: string[]
}

export default function Home() {
  return (
    <PageWithoutHeader title="YumYumListe 😋">
      <ThemedViewWithPaddingHorizontal>
        <Subtitle>Les tops listes</Subtitle>
      </ThemedViewWithPaddingHorizontal>
      {brands.map((brand) => (
        <React.Fragment key={brand.name}>
          <ThemedViewWithMarginTop>
            <Title>{brand.name}</Title>
          </ThemedViewWithMarginTop>
          <ThemedFlatList
            data={brand.flavors.slice(0, 5)}
            keyExtractor={(item: Flavor) => item.flavor}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            ItemSeparatorComponent={() => <FlatListSeparatorComponent />}
            ListFooterComponent={() => (
              <BoxSeeMore href={`/brands/${brand.name}`}>
                <SubtitleContainer>
                  <CustomSubtitle>Voir plus</CustomSubtitle>
                </SubtitleContainer>
              </BoxSeeMore>
            )}
            renderItem={({ item }) => {
              const flavorWithBrand = `${brand.name} ${item.flavor}`
              return (
                <FlavorBox
                  key={item.flavor}
                  href={`/products/${flavorWithBrand}`}
                >
                  <Subtitle>{item.flavor}</Subtitle>
                </FlavorBox>
              )
            }}
          />
        </React.Fragment>
      ))}
    </PageWithoutHeader>
  )
}

const FlatListSeparatorComponent = styled.View({
  width: 15,
})

const BoxBase = styled(Link)({
  padding: 15,
  borderRadius: 8,
  width: 180,
  height: 150,
})

const FlavorBox = styled(BoxBase)({
  backgroundColor: Colors.dark.header,
})

const BoxSeeMore = styled(BoxBase)({
  backgroundColor: 'transparent',
  marginLeft: 15,
  borderWidth: 2,
  borderColor: Colors.dark.header,
})

const ThemedViewWithPaddingHorizontal = styled(ThemedView)({
  paddingHorizontal: 20,
})

const ThemedViewWithMarginTop = styled(ThemedViewWithPaddingHorizontal)({
  marginTop: 20,
})

const CustomSubtitle = styled(Subtitle)({
  color: Colors.dark.header,
})

const SubtitleContainer = styled(ThemedView)({
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
})
