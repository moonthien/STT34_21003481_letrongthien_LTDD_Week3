import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { images } from '../constants/images';


const Cau1e = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>REGISTER</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Name"
                    placeholderTextColor="black"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Phone"
                    placeholderTextColor="black"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    placeholderTextColor="black"
                    keyboardType="email-address"
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Password"
                        placeholderTextColor="black"
                    />
                    <TouchableOpacity >
                        <Image
                            source={images.Eye}
                        />
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder="Birthday"
                    placeholderTextColor="black"
                />

                <View style={styles.genderContainer}>
                    <View style={styles.radioButton}>
                        <Image
                            source={images.RadioButton}
                            style={styles.radioIcon}
                        />
                        <Text style={styles.genderText}>Male</Text>
                    </View>
                    <View style={styles.radioButton}>
                        <Image
                            source={images.RadioButton}
                            style={styles.radioIcon}
                        />
                        <Text style={styles.genderText}>Fermale</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.login}>
                <View style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>REGISTER</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                    When you agree to terms and conditions
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#31AA5230',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        lineHeight: 30,
        fontFamily: 'Roboto-Bold',
        textTransform: 'uppercase',
    },
    inputContainer: {
        marginTop: 50,
        width: '90%',
    },
    textInput: {
        backgroundColor: '#C4C4C44D',
        height: 54,
        width: 330,
        marginBottom: 20,
        paddingLeft: 20,
        borderRadius: 10,

    },
    passwordContainer: {
        height: 54,
        width: 330,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#C4C4C44D',
        justifyContent: 'space-between',
        borderRadius: 10,
        paddingRight: 10,
        marginBottom: 20,

    },
    passwordInput: {
        backgroundColor: 'transparent',
        height: 50,
        width: '85%',
        paddingLeft: 20,
        fontSize: 20
    },
    eyeIcon: {
        width: 24,
        height: 24,
        tintColor: 'black',
    },
    login: {
        backgroundColor: '#E53935',
        height: 50,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,

        marginBottom: 20,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    genderText: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'Roboto-Regular',
    },
    loginButton: {
        backgroundColor: 'transparent',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 25,
        fontFamily: 'Roboto-Bold',
        lineHeight: 29.3
    },
    footerContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    footerText: {
        color: '#000',
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
        marginVertical: 5,
    },


});

export default Cau1e;