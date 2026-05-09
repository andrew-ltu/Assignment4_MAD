import { ACTIVITY_DATA } from '@/activityData/activityData';
import Act1Record from '@/components/activityRecording/Act1/Act1Record';
import Act2Record from '@/components/activityRecording/Act2/Act2Record';
import Act3Record from '@/components/activityRecording/Act3/Act3Record';
import Act4Record from '@/components/activityRecording/Act4/Act4Record';
import Act5Record from '@/components/activityRecording/Act5/Act5Record';
import Act6Record from '@/components/activityRecording/Act6/Act6Record';
import Act7Record from '@/components/activityRecording/Act7/Act7Record';
import Frame from '@/components/Frame';
import { Colors } from '@/theme/theme';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function ActivityRecord() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const activity = ACTIVITY_DATA[id];

    function renderAct() {
        switch (id) {
            case '1':
                return <Act1Record />;
            case '2':
                return <Act2Record />;
            case '3':
                return <Act3Record />;
            case '4':
                return <Act4Record />;
            case '5':
                return <Act5Record />;
            case '6':
                return <Act6Record />;
            case '7':
                return <Act7Record />;
        }
    }

    return (
        <Frame title={activity.title} prevPagePath={`/activity/${activity.id}`}>
            <View>
                {renderAct()}
            </View>
        </Frame>
    );
}

const getStyles = (colors: Colors) => StyleSheet.create({});
