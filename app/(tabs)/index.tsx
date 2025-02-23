import PageWithoutHeader from '@/ui/pages/PageWithoutHeader'
import brands from '@/data/brands.json'
import { Title1 } from '@/ui/components/Text/Title1'
import { Title2 } from '@/ui/components/Text/Title2'
import styled from 'styled-components/native'
import React from 'react'
import { ThemedFlatList } from '@/ui/components/_Themed/ThemedFlatList'
import { ThemedView } from '@/ui/components/_Themed/ThemedView'
import { TileProduct } from '@/ui/components/Tile/TileProduct'
import { TileSeeMore } from '@/ui/components/Tile/TileSeeMore'

type Product = {
  flavor: string
  category: string
  sub_category: string[]
}

export default function Home() {
  return (
    <PageWithoutHeader title="YumYumListe 😋">
      <ThemedViewWithPaddingHorizontal>
        <Title2>Les tops listes</Title2>
      </ThemedViewWithPaddingHorizontal>
      {brands.map((brand) => (
        <React.Fragment key={brand.name}>
          <ThemedViewWithMarginTop>
            <Title1>{brand.name}</Title1>
          </ThemedViewWithMarginTop>
          <ThemedFlatList
            data={brand.flavors.slice(0, 5)}
            keyExtractor={(item: Product) => item.flavor}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            ItemSeparatorComponent={() => <FlatListSeparatorComponent />}
            ListFooterComponent={() => (
              <TileSeeMore href={`/brands/${brand.name}`} />
            )}
            renderItem={({ item }) => {
              const flavorWithBrand = `${brand.name} ${item.flavor}`
              return (
                <TileProduct
                  key={item.flavor}
                  flavor={item.flavor}
                  href={`/products/${flavorWithBrand}`}
                />
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

const ThemedViewWithPaddingHorizontal = styled(ThemedView)({
  paddingHorizontal: 20,
})

const ThemedViewWithMarginTop = styled(ThemedViewWithPaddingHorizontal)({
  marginTop: 20,
})
