import React from 'react';
import {StyleSheet, View, TouchableHighlight, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Menu = ()=>{
    return (
        <View style={styles.container}>
            <View style={styles.containerButton}>
                <TouchableHighlight style={styles.buttonSelected}>
                   <View style={{flexDirection:"row", alignItems:"center"}}>
                       <View style={styles.icono}>
                            <Icon name={'md-cafe-outline'} size={20}/>
                       </View>
                        <Text style={styles.textoSelected}>Coffee</Text>
                   </View>
                </TouchableHighlight>
            </View>
            <View style={styles.containerButton}>
                <TouchableHighlight style={styles.button}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <View style={styles.icono}>
                            <Icon name={'md-ice-cream-outline'} size={20}/>
                        </View>
                        <Text style={styles.texto}>Cake</Text>
                   </View>
                </TouchableHighlight>
            </View>
            <View style={styles.containerButton}>
                <TouchableHighlight style={styles.button}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <View style={styles.icono}>
                            <Icon name={'md-fast-food-outline'} size={20}/>
                        </View>
                        <Text style={styles.texto}>Snack</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      flexDirection: "row",
    },
    title: {
      fontSize: 20,
      marginTop: 10,
      marginHorizontal: 20,
      fontWeight: 'bold',
    },
    containerButton:{
        padding: 10,
        margin: 10,
    },
    button:{
        backgroundColor: '#e1e1e1',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 25,
    },
    buttonSelected: {
        backgroundColor: '#308278',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 25,
    },
    icono:{
        backgroundColor:'white', 
        marginRight: 10, 
        padding: 5, 
        borderRadius: 15,
    },
    texto: {
        color:'#000',
        fontWeight: 'bold',
    },
    textoSelected: {
        color:'#FFF',
        fontWeight: 'bold',
    }
  });

export default Menu;