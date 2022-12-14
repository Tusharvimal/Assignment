import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Card from '../Components/Card'
import { DATA } from '../Data/dummyData'

const FirstScreen = props => {
    const renderCards = (itemData) => {
        return (
            <Card uri={itemData.item.uri} title={itemData.item.title}
                onSelect={() => {
                    props.navigation.navigate({
                        name: 'SecondScreen',
                        params: {
                            title: itemData.item.title,
                            id: itemData.item.id
                        }
                    })
                }}
            />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={DATA} renderItem={renderCards} keyExtractor={item => item.id} numColumns={2} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flexGrow: 1,
        padding: 5,
        justifyContent: 'center',
        alignContent: 'center'
    },
})

export default FirstScreen