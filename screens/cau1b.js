import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { images } from '../constants/images';

const Cau1b = () => {
    return (
        <LinearGradient
            style={styles.linearGradient}
            colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
            locations={[0.0003, 0.3021, 0.8542, 0.965, 1]}
        >
            <View style={styles.container}>
                <Image source={images.Lock} style={styles.lockImage} />
                <Text style={styles.title}>Forgot Password</Text>
                <Text style={styles.instructions}>
                    Provide your account's email for which you want to reset your password
                </Text>
                <View style={styles.inputContainer}>
                    <Image source={images.Mail} style={styles.mailIcon} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        placeholderTextColor="black"
                    />
                </View>
                <TouchableOpacity>
                    <View style={styles.nextButton}>
                        <Text style={styles.nextButtonText}>NEXT</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lockImage: {
        marginTop: 20,
        height: 130,
        width: 115,
    },
    title: {
        color: 'black',
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        width: 200,
        textAlign: 'center',
        marginVertical: 25,
        fontFamily: 'Roboto-Bold',
    },
    instructions: {
        color: 'black',
        fontSize: 19,
        fontWeight: '700',
        textAlign: 'center',
        width: 350,
        textAlign: 'center',
        marginVertical: 15,
        fontFamily: 'Roboto-Bold',
    },
    inputContainer: {
        flexDirection: 'row',
        height: 50,
        width: 330,
        backgroundColor: '#c4c4c4',
        marginVertical: 15,
        alignItems: 'center',
        borderRadius: 8,
    },
    mailIcon: {
        height: 500,
        marginHorizontal: 10,
        width: 24,
        resizeMode: 'contain',
    },
    textInput: {
        height: 50,
        flex: 1,
        fontSize: 16,
        fontWeight: '400',
    },
    nextButton: {
        height: 50,
        width: 330,
        backgroundColor: '#e3c000',
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    nextButtonText: {
        textTransform: 'uppercase',
        color: 'black',
        fontSize: 25,
        fontWeight: '700',
    },
});

export default Cau1b;