import { StyleSheet } from 'react-native';
import { ThemedText, ThemedTextProps } from '@/ui/components/_Themed/ThemedText';

const styles = StyleSheet.create({
    title: { fontSize: 32, lineHeight: 32, fontWeight: 'bold' },
});

export const Title = (props: ThemedTextProps) => (
    <ThemedText {...props} style={[styles.title, props.style]} accessibilityRole="header" />
);

