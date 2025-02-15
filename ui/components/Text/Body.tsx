import { StyleSheet } from 'react-native';
import { ThemedText, ThemedTextProps } from '@/ui/components/_Themed/ThemedText';

const styles = StyleSheet.create({
    body: { fontSize: 16, lineHeight: 24 },
});

export const Body = (props: ThemedTextProps) => <ThemedText {...props} style={[styles.body, props.style]} />;