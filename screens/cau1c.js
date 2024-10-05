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

const Cau1c = () => {
    return (
        <LinearGradient
            style={styles.linearGradient}
            colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
            locations={[0.0003, 0.3021, 0.8542, 0.965, 1]}
        >
            <View style={styles.container}>
                <Text style={styles.title}>code</Text>
                <Text style={styles.subtitle}>verfication</Text>
                <Text style={styles.instructions}>
                    Enter ontime password sent on
                    ++849092605798
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                    />
                    <TextInput
                        style={styles.textInput}
                    />
                    <TextInput
                        style={styles.textInput}
                    />
                    <TextInput
                        style={styles.textInput}
                    />
                    <TextInput
                        style={styles.textInput}
                    />
                </View>
                <TouchableOpacity>
                    <View style={styles.verifyButton}>
                        <Text style={styles.verifyButtonText}>Verify code</Text>
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
    title: {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'black',
        fontSize: 60,
        fontWeight: 'bold',
        fontFamily: 'Roboto-Bold',
        marginBottom: 50
    },
    subtitle: {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto-Bold',
        marginBottom: 20
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
        marginVertical: 15,
        alignItems: 'center',
        borderRadius: 8
    },
    textInput: {
        height: 50,
        flex: 1,
        fontSize: 16,
        fontWeight: '400',
        borderColor: 'black',
        borderWidth: 1,
        width: 50,
    },
    verifyButton: {
        height: 50,
        width: 330,
        backgroundColor: '#e3c000',
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    verifyButtonText: {
        textTransform: 'uppercase',
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
    },
});

export default Cau1c;