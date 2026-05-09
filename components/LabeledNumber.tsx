import useColorPalette from '@/hooks/useColorPalette';
import React from 'react';
import { Text, View } from 'react-native';

export default function LabeledNumber({ label, value}: { label: string; value: string;}) {
    const colors = useColorPalette()
    
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '700', color: colors.primary }}>{value}</Text>
            <Text style={{ fontSize: 11, color: colors.textSecondary, marginTop: 2 }}>{label}</Text>
        </View>
    );
}