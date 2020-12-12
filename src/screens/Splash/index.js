import React from 'react';
import {StyleSheet, View, Text, Button, TouchableHighlight, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//const image = { uri: "https://images.unsplash.com/photo-1517740642137-bc729c123aa5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80" };
const image = { uri: "https://images.unsplash.com/photo-1572373696785-e8bd92718f65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80"};
const Splash = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 30, color:'#FFF', fontWeight: 'bold', marginBottom:120, marginTop:40}}>WELCOME</Text>
                    <Text style={{ fontSize: 20, color:'#FFF', fontWeight: 'bold', marginBottom:10, marginTop:180}}>Take a coffee!</Text>
                    <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Home')} >
                        <Icon name={'md-chevron-forward'} size={20} color={'#FFF'}/>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
      },
    button: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 25,
    }
  });

export default Splash;