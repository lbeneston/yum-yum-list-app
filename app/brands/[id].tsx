import { Link, Stack, useLocalSearchParams } from 'expo-router'
import { Subtitle } from '@/ui/components/Text/Subtitle'
import styled from 'styled-components/native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { ThemedView } from '@/ui/components/_Themed/ThemedView'
import { ListRenderItemInfo } from 'react-native'
import brands from '@/data/brands.json'
import { Body } from '@/ui/components/Text/Body'
import { ThemedFlatList } from '@/ui/components/_Themed/ThemedFlatList' // Assure-toi d'importer le composant

type Flavor = {
  flavor: string
  category: string
  sub_category: string[]
}

export default function Brands() {
  const { id: selectedBrand } = useLocalSearchParams()
  const brand = brands.find((brand) => brand.name === selectedBrand)

  if (brand) {
    return (
      <React.Fragment>
        <Stack.Screen
          options={{
            title: brand.name,
            headerBackTitle: 'Retour',
            headerStyle: { backgroundColor: Colors.dark.header },
            headerTintColor: Colors.dark.tint,
          }}
        />
        <ThemedFlatList
          data={brand.flavors}
          keyExtractor={(item: Flavor) => item.flavor}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <FlatListSeparatorComponent />}
          contentContainerStyle={{ padding: 20 }}
          renderItem={({ item }: ListRenderItemInfo<Flavor>) => {
            const flavorWithBrand = `${brand.name} ${item.flavor}`
            return (
              <FlavorBox
                key={item.flavor}
                href={`/products/${flavorWithBrand}`}
              >
                <RowContainer>
                  <Subtitle>{item.flavor}</Subtitle>
                  <Body>{item.category}</Body>
                </RowContainer>
              </FlavorBox>
            )
          }}
        />
      </React.Fragment>
    )
  }

  return (
    <ThemedView>
      <Subtitle>Aucune marque trouvée</Subtitle>
    </ThemedView>
  )
}

const FlatListSeparatorComponent = styled.View({
  height: 15,
})

const BoxBase = styled(Link)({
  padding: 15,
  borderRadius: 8,
  width: '100%',
  height: 100,
})

const FlavorBox = styled(BoxBase)({
  backgroundColor: Colors.dark.header,
})

const RowContainer = styled.View({
  flexDirection: 'column',
})
