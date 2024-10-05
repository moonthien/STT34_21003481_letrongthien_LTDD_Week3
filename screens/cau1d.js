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


const Cau1d = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Login</Text>

            <View style={styles.inputContainer}>
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
            </View>
            <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Cau1e')}>
                <View style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>LOGIN</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                    When you agree to terms and conditions
                </Text>
                <Text style={styles.linkText}>
                    Forgot your password?
                </Text>
                <Text style={styles.footerText}>
                    Or login with
                </Text>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={[styles.buttonContainer, styles.facebookButton]}>

                        <Image
                            style={styles.socialIcon}
                            resizeMode="cover"
                            source={images.Facebook}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonContainer, styles.zaloButton]}>

                        <Image
                            style={styles.socialIcon}
                            resizeMode="cover"
                            source={images.Zalo}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
                        <Image
                            style={styles.socialIcon}
                            resizeMode="cover"
                            source={images.Google}
                        />
                    </TouchableOpacity>
                </View>
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
        height: 50,
        marginBottom: 10,
        paddingLeft: 20,
        borderRadius: 10,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#C4C4C44D',
        justifyContent: 'space-between',
        borderRadius: 10,
        paddingRight: 10,
    },
    passwordInput: {
        backgroundColor: 'transparent',
        height: 50,
        width: '85%',
        paddingLeft: 20,
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
        marginTop: 50,

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
        marginTop: 50,
    },
    footerText: {
        color: '#000',
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
        marginVertical: 5,
    },
    linkText: {
        color: '#5d25fa',
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
        marginVertical: 10,
    },
    buttonContainer: {
        width: 120,
        height: 50,
        justifyContent: 'center',
        marginVertical: 10,
        alignItems: 'center',
    },
    facebookButton: {
        backgroundColor: '#25479b',
        justifyContent: 'center',
    },
    zaloButton: {
        backgroundColor: '#0f8ee0',
        justifyContent: 'center',
    },
    googleButton: {
        borderColor: '#0680f1',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    socialIcon: {
        width: 20,
        height: 20,
        justifyContent: 'center',
    },

});

export default Cau1d;