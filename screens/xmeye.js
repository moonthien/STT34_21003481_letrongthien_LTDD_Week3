import React from "react";
import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity, Text, TextInput } from "react-native";
import { images } from "../constants/images";

const XMEye = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image

                resizeMode="cover"
                source={images.EyeBall}
            />

            <View style={styles.inputContainer}>
                <Image
                    resizeMode="cover"
                    source={images.User}
                />
                <TextInput
                    style={[styles.input, styles.inputText]}
                    placeholder="Please input user name"
                    placeholderTextColor="#C4C4C4"
                />
            </View>
            <View style={styles.inputContainer}>
                <Image
                    resizeMode="cover"
                    source={images.LockPassword}
                />
                <TextInput
                    style={[styles.input, styles.inputText]}
                    placeholder="Please input user name"
                    placeholderTextColor="#C4C4C4"
                />
            </View>

            <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.buttonLoginText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.row}>
                <TouchableOpacity>
                    <Text style={styles.linkText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.linkText}>Forgot Password</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.otherLoginContainer}>
                <View style={styles.line} />
                <Text style={styles.otherLoginText}>Other Login Methods</Text>
                <View style={styles.line} />
            </View>

            <View style={styles.footer}>
                <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={images.CreateUser}
                />
                <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={images.Wifi}
                />
                <View style={styles.facebookContainer}>
                    <Image

                        resizeMode="cover"
                        source={images.FacebookICon}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    facebookContainer: {
        backgroundColor: '#3A579C',
        height: 74,
        width: 74,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 10

    },
    icon: {
        height: 74,
        width: 74,
        marginHorizontal: 10
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    inputContainer: {
        height: 50,
        width: '80%',
        borderBottomWidth: 1,
        borderColor: '#C4C4C4',
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        height: '100%',
        color: 'black',
    },
    buttonLogin: {
        backgroundColor: '#386FFC',
        height: 50,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 50,
        marginBottom: 20
    },
    buttonLoginText: {
        color: 'white',
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 21.09,
        textAlign: 'center',
        fontFamily: 'Roboto-Regular'
    },
    inputText: {
        color: '#C4C4C4',
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 21.09,
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
        textAlign: 'left'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 40,
    },
    linkText: {
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 21.09,
        textAlign: 'center',
        fontFamily: 'Roboto-Regular'
    },
    otherLoginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        width: '80%',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#0E18F5',
        top: '-25%'
    },
    otherLoginText: {
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 21.09,
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
        marginHorizontal: 10,
        marginBottom: 30,
    },

});
export default XMEye;