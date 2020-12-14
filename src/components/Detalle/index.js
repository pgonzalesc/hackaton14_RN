import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions, TouchableHighlight} from 'react-native';
const {height, width} = Dimensions.get('window');
const Detalle = ()=>{
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>Americano Coffee</Text>
            </View>
            <View style={styles.containerPrice}>
                <Text style={styles.textPrice}>$15,00</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <View style={{marginHorizontal: 20}}>
                    <View style={styles.buttonSelected}>
                        <Text style={styles.textButtonSelected}>S</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.textButton}>M</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.textButton}>L</Text>
                    </View>
                </View>
                <Image 
                 style={styles.image}
                 source={{uri:'https://www.starbucks.com.pe/media/cappucino-espresso_tcm92-18666_w1024_n.png'}}
                />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.buttonRounded}>
                    <Text style={styles.textSign}>+</Text>
                </View>
                <View style={styles.containerAmount}>
                    <Text style={styles.textAmount}>3</Text>
                </View>
                <View style={styles.buttonRounded}>
                    <Text style={styles.textSign}>-</Text>
                </View>
            </View>
            <View style={{alignItems: 'center'}}>
                <TouchableHighlight>
                    <View style={{backgroundColor:'#e1e1e1', paddingHorizontal: 50, paddingVertical: 10, borderRadius: 20}}>
                        <Text style={{color: '#376363',fontWeight: 'bold'}}>Add to cart</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3E706F',
    },
    image: {
        width: width/2,
        height: height / 3,
    },
    containerTitle: {
        marginTop: 50,
    },
    textTitle: {
        color: '#e1e1e1',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    containerPrice: {
        marginTop: 10,
        marginBottom: 20,
    },
    textPrice: {
        color: '#D5E46D',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
    },
    button: {
        paddingVertical:10, 
        paddingHorizontal:14, 
        borderWidth:0.3, 
        borderColor: '#e1e1e1',
        borderRadius: 8,
        marginVertical: 10,
        backgroundColor: '#376363',
    },
    buttonSelected: {
        paddingVertical:10, 
        paddingHorizontal:14, 
        borderWidth:0.3, 
        borderColor: '#e1e1e1',
        borderRadius: 8,
        marginVertical: 10,
        backgroundColor: '#B6BF62',
    },
    textButton: {
        color: '#e1e1e1',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    textButtonSelected:{
        color: '#376363',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    buttonRounded:{
        borderWidth:1, 
        borderColor: '#e1e1e1', 
        paddingHorizontal: 15, 
        paddingVertical:8,
        borderRadius:20
    },
    containerAmount: {
        marginVertical: 40,
        paddingHorizontal: 30,
    },
    textAmount: {
        color: '#e1e1e1',
        fontSize: 25,
        fontWeight: 'bold',
    },
    textSign: {
        color: '#e1e1e1',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default Detalle;