import { useUser } from '@/context/UserContext';
import useColorPalette from '@/hooks/useColorPalette';
import { submitAttempt } from '@/services/activityAttemptService';
import { Colors } from '@/theme/theme';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ActRatingComment from '../ActRatingComment';
import Button from '../Button';

export default function Act2Record() {
    const colors = useColorPalette();
    const styles = getStyles(colors);
    const router = useRouter();

    const [step, setStep] = useState<'instructions' | 'record'>('instructions');
    const [loading, setLoading] = useState(false);

    const { activityAttemptId } = useUser();

    const handleSubmit = async (comment: string, rating: number) => {
        setLoading(true);
        const res = await submitAttempt(activityAttemptId, {
            data: {},
            rating: Number(rating),
            score: 0,
            comment,
        });
        if (!res.success) {
            alert(res.message);
            setLoading(false);
            return;
        }
        alert('Successfully saved!');
        router.replace('/(tabs)');
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            {step === 'instructions' && (
                <View style={styles.sectionView}>
                    <Text style={styles.titleText}>Instructions</Text>
                    <Text style={styles.subText}>
                        1. Measure noise from different actions — dropping objects, talking, walking, and stamping your feet.{'\n\n'}
                        2. Record sound levels and note the location for each measurement.{'\n\n'}
                        3. Map loud and quiet zones around the classroom.{'\n\n'}
                        4. When finished, tap Next to record your results.
                    </Text>
                    <Button
                        label="Next"
                        onPress={() => setStep('record')}
                        fullWidth={true}
                    />
                </View>
            )}
            {step === 'record' && (
                <View style={styles.sectionView}>
                    <Text style={styles.titleText}>Results</Text>
                    <Text style={styles.subText}>
                        Rate the activity and leave a comment about the sound levels you discovered.
                    </Text>
                    <ActRatingComment
                        loading={loading}
                        handleSubmit={handleSubmit}
                    />
                </View>
            )}
        </View>
    );
}

const getStyles = (colors: Colors) => StyleSheet.create({
    container: {},
    sectionView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: 30,
        padding: 40,
        paddingTop: 70,
    },
    titleText: {
        fontSize: 20,
        fontWeight: '600',
    },
    subText: {
        textAlign: 'justify',
        color: colors.textSecondary,
    },
});
