import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Cau1a = () => {
    return (
        <LinearGradient
            colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
            locations={[0.0003, 0.3021, 0.8542, 0.965, 1]}
            style={styles.container}
        >
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

            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>HOW WE WORK?</Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    circleContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: "15%"
    },
    circleView: {
        width: 150,
        height: 150,
        borderWidth: 15,
        borderColor: 'black',
        borderRadius: 100,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'Roboto-Bold',
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    infoText: {
        fontSize: 15,
        lineHeight: 17.58,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'Roboto-Bold',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
    },
    button: {
        backgroundColor: '#E3C000',
        width: 120,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Roboto-Bold',
    },
    footerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: "20%",
    },
    footerText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    },
});

export default Cau1a;