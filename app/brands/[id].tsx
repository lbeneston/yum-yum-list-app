import { Stack, useLocalSearchParams } from 'expo-router'
import { Title2 } from '@/ui/components/Text/Title2'
import styled from 'styled-components/native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { ThemedView } from '@/ui/components/_Themed/ThemedView'
import { ListRenderItemInfo } from 'react-native'
import brands from '@/data/brands.json'
import { ThemedFlatList } from '@/ui/components/_Themed/ThemedFlatList' // Assure-toi d'importer le composant
import { TileProductLine } from '@/ui/components/Tile/TileProductLine'
import { useThemeColor } from '@/hooks/useThemeColor'

type Flavor = {
  flavor: string
  category: string
  sub_category: string[]
}

export default function Brands() {
  const headerColor = useThemeColor({}, 'header')
  const { id: selectedBrand } = useLocalSearchParams()
  const brand = brands.find((brand) => brand.name === selectedBrand)

  if (brand) {
    return (
      <React.Fragment>
        <Stack.Screen
          options={{
            title: brand.name,
            headerStyle: { backgroundColor: headerColor },
            headerTintColor: Colors.dark.tint,
            headerLargeTitle: true,
            headerBackButtonDisplayMode: 'minimal',
            headerLargeTitleStyle: { fontSize: 25, fontWeight: 'bold' },
          }}
        />
        <ThemedFlatList
          contentInsetAdjustmentBehavior="automatic"
          data={brand.flavors}
          keyExtractor={(item: Flavor) => item.flavor}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <FlatListSeparatorComponent />}
          contentContainerStyle={{ padding: 20 }}
          renderItem={({ item }: ListRenderItemInfo<Flavor>) => {
            const flavorWithBrand = `${brand.name} ${item.flavor}`
            return (
              <TileProductLine
                key={item.flavor}
                flavor={item.flavor}
                category={item.category}
                href={`/products/${flavorWithBrand}`}
              />
            )
          }}
        />
      </React.Fragment>
    )
  }

  return (
    <ThemedView>
      <Title2>Aucune marque trouvée</Title2>
    </ThemedView>
  )
}

const FlatListSeparatorComponent = styled.View({
  height: 15,
})
