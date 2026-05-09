import useColorPalette from '@/hooks/useColorPalette';
import React from 'react';
import { Text, View } from 'react-native';

export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
    const colors = useColorPalette()
    return (
        <View style={{ gap: 10 }}>
            <Text style={{ fontSize: 13, fontWeight: '600', color: colors.textSecondary, textTransform: 'uppercase', letterSpacing: 0.8 }}>
                {title}
            </Text>
            {children}
        </View>
    );
}