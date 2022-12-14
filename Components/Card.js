import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Colors/Colors'

const Card = props => {
    return (
        <View style={styles.card}>
            <Pressable style={styles.pressable} android_ripple={{ color: 'grey', borderless: false }}
                onPress={props.onSelect}>
                <View style={{ justifyContent: 'center', alignItems: "center" }}>
                    <Image source={{ uri: props.uri }}
                        style={styles.image}
                    />
                </View>
                <Text style={{ color: 'white', fontSize: 17, alignSelf: 'center' }}>{props.title}</Text>
            </Pressable>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.primaryColor,
        flex: 1,
        height: 150,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        overflow: 'hidden',
        elevation: 5
    },
    pressable: {
        width: '100%',
        height: '100%'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 30,
        margin: 10
    }
})