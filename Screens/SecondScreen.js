import { KeyboardAvoidingView, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import { Beneficary } from '../Data/dummyData'
import RadioForm from 'react-native-simple-radio-button'
import Colors from '../Colors/Colors'

const SecondScreen = props => {
    const [number, setNumber] = useState(null)
    const [amount, setAmount] = useState(null)
    const [beneficiary, setBeneficiary] = useState(null)
    const [modeOfPayment, setModeOfPayment] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)
    const paymentsMode = [{ label: 'NEFT', value: 0 }, { label: 'RTGS', value: 1 }]
    return (
        <View style={styles.secondScreen} onPress={() => setModalVisible(false)}>
            <KeyboardAvoidingView style={styles.textInputContainer}>
                <TextInput value={number} onChangeText={setNumber} style={styles.textInput}
                    placeholder="Sender Mobile Number" placeholderTextColor={Colors.placeholderTextColor}
                    keyboardType='phone-pad'
                />
            </KeyboardAvoidingView>
            <View style={styles.textInputContainer}>
                <Dropdown data={Beneficary} style={{ ...styles.textInput, ...{ color: 'black' } }} labelField="label" valueField="value"
                    placeholder='Choose Beneficiary' placeholderStyle={{
                        color: Colors.placeholderTextColor
                    }}
                    containerStyle={{
                        borderRadius: 5
                    }}
                    itemContainerStyle={{
                        backgroundColor: "#d9d9d9",
                    }}
                    value={beneficiary}
                    onChange={item => {
                        setBeneficiary(item.value)
                    }}
                    selectedTextStyle={{
                        color: "black"
                    }}
                    itemTextStyle={{
                        color: 'black'
                    }}
                />
            </View>
            <KeyboardAvoidingView style={styles.textInputContainer}>
                <TextInput value={amount} onChangeText={setAmount} style={styles.textInput}
                    placeholder="Amount" placeholderTextColor={Colors.placeholderTextColor}
                    keyboardType='phone-pad'
                />
            </KeyboardAvoidingView>
            <View style={{ ...styles.textInputContainer, ...{ marginTop: 30, marginBottom: 20 } }}>
                <RadioForm radio_props={paymentsMode} initial={0}
                    style={{ width: '90%', justifyContent: 'center', marginVertical: 10 }}
                    onPress={(value) => { setModeOfPayment(value) }}
                    buttonSize={10}
                    labelStyle={{ paddingBottom: 15, fontSize: 20 }}
                    buttonStyle={{ width: '100%' }}
                    value={modeOfPayment}
                />
            </View>
            <KeyboardAvoidingView style={{ ...styles.textInputContainer, ...{ overflow: 'hidden' } }}>
                <Pressable style={styles.button}
                    android_ripple={{ color: 'white', borderless: false }}
                    onPress={() => {
                        setModalVisible(true)
                    }}
                >
                    <Text style={styles.buttonText}>Transfer</Text>
                </Pressable>
            </KeyboardAvoidingView>
            <Modal
                animationType='slide'
                visible={modalVisible} transparent={true}
                onRequestClose={() => {
                    setModalVisible(false)
                }}
            >
                <Pressable style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => { setModalVisible(false) }}>
                    <Pressable style={styles.modal} onPress={() => {
                        setModalVisible(true)
                    }}>
                        <Text style={{ color: 'black', textAlign: 'center', fontSize: 20, marginBottom: 50 }}>Funds transferred successfully</Text>
                        <Pressable style={styles.exit} onPress={() => {
                            setModalVisible(false)
                            props.navigation.goBack()
                        }}>
                            <Text style={styles.exitText}>Home Screen</Text>
                        </Pressable>
                    </Pressable>
                </Pressable>
            </Modal>
        </View>
    )
}

export default SecondScreen

const styles = StyleSheet.create({
    secondScreen: {
        flexGrow: 1,
        padding: 10,
        paddingVertical: 30
    },
    textInputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    textInput: {
        width: '90%',
        height: 50,
        borderRadius: 5,
        fontSize: 17,
        padding: 10,
        backgroundColor: Colors.textInputColor,
        color: Colors.blackColor
    },
    button: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        backgroundColor: "#595959",
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    },
    modal: {
        width: 225,
        height: 225,
        borderWidth: 1,
        borderColor: Colors.textInputColor,
        elevation: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    exit: {
        width: '90%',
        height: 40,
        backgroundColor: 'red',
        borderRadius: 5,
        position: 'absolute',
        bottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 40
    },
    exitText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }
})