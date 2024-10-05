import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function FirstScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.circleContainer}>
                <View style={styles.circleView} />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.titleText}>GROW</Text>
                <Text style={styles.titleText}>YOUR BUSINESS</Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                    We will help you to grow your business using online server
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00CCF9',
    },
    circleContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleView: {
        width: 150,
        height: 150,
        borderWidth: 15,
        borderColor: 'black',
        borderRadius: 75,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '10%',
    },
    infoText: {
        fontSize: 14,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'Roboto-Bold',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#E3C000',
        width: 120,
        height: 50,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'black',
    },
});