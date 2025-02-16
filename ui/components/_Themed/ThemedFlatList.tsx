import React from 'react'
import { FlatList, FlatListProps } from 'react-native'
import { useThemeColor } from '@/hooks/useThemeColor'

type ThemedFlatListProps<ItemT> = FlatListProps<ItemT> & {
  lightColor?: string
  darkColor?: string
}

export function ThemedFlatList<ItemT>({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedFlatListProps<ItemT>) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  )

  return <FlatList style={[{ backgroundColor }, style]} {...otherProps} />
}
