import { ScrollView, type ScrollViewProps } from 'react-native'
import { useThemeColor } from '@/hooks/useThemeColor'

type ThemedScrollViewProps = ScrollViewProps & {
  lightColor?: string
  darkColor?: string
}

export function ThemedScrollView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedScrollViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  )

  return <ScrollView style={[{ backgroundColor }, style]} {...otherProps} />
}
