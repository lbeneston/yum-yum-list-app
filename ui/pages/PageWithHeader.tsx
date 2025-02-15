import { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemedView } from '@/ui/components/_Themed/ThemedView';
import { useBottomTabOverflow } from '@/ui/components/TabBar/TabBarBackground';
import { Title } from '@/ui/components/Text/Title';
import { Subtitle } from '@/ui/components/Text/Subtitle';

const HEADER_HEIGHT = 50

type Props = PropsWithChildren<{
    headerTitle: string;
    title?: string;
    subtitle?: string;
}>;

export default function PageWithHeader({
    children,
    headerTitle,
    title,
    subtitle,
}: Props) {
    const bottom = useBottomTabOverflow();
    const { top } = useSafeAreaInsets();

    return (
        <ThemedView style={styles.container}>
            <ThemedView
                lightColor='#A1CEDC'
                darkColor='#1D3D47'
                style={[styles.header, { height: HEADER_HEIGHT + top, paddingTop: top }]}
            >
                <Subtitle>{headerTitle}</Subtitle>
            </ThemedView>

            <ScrollView
                contentContainerStyle={{ paddingTop: top, paddingBottom: bottom }}
                scrollIndicatorInsets={{ bottom }}
            >
                <ThemedView style={styles.content}>
                    {title && <Title>{title}</Title>}
                    {subtitle && <Subtitle>{subtitle}</Subtitle>}
                    {children}
                </ThemedView>
            </ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    content: {
        flex: 1,
        gap: 16,
        padding: 32,
        overflow: 'hidden',
        marginTop: HEADER_HEIGHT,
    }
});
