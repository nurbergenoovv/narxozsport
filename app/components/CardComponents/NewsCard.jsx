import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../const/colors'

export default function NewsCard({ newsItem }) {
    return (
        <View style={styles.container} key={newsItem.id}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{newsItem.title}</Text>
                <Text style={styles.description}>{newsItem.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.opacityWhiteV2,
        borderRadius: 8,
        overflow: 'hidden',
    },
    textContainer: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'left',
    },
    description: {
        fontSize: 16,
        textAlign: 'left',
    },
});
