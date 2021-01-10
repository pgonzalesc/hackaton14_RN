import React, {useState} from 'react';
import {StyleSheet, View, TouchableHighlight, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Menu = ()=>{
    const [selectedOption, setSelectedOption] = useState({coffee:true, cake:false, snack:false});

    const handleOption = (option) => {
        if(option === 'coffee')
            setSelectedOption({coffee:true, cake:false, snack:false});
        else if(option === 'cake')
            setSelectedOption({coffee:false, cake:true, snack:false});
        else if(option === 'snack')
            setSelectedOption({coffee:false, cake:false, snack:true});
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerButton}>
                {selectedOption.coffee 
                     ?  <TouchableOpacity style={styles.buttonSelected} onPress={()=>handleOption('coffee')}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <View style={styles.icono}>
                                    <Icon name={'md-cafe-outline'} size={20}/>
                                </View>
                                <Text style={styles.textoSelected}>Coffee</Text>
                            </View>
                        </TouchableOpacity>
                     :  <TouchableOpacity style={styles.button} onPress={()=>handleOption('coffee')}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <View style={styles.icono}>
                                    <Icon name={'md-cafe-outline'} size={20}/>
                                </View>
                                <Text style={styles.texto}>Coffee</Text>
                            </View>
                        </TouchableOpacity>
                }
            </View>
            <View style={styles.containerButton}>
                {selectedOption.cake 
                     ?  <TouchableOpacity style={styles.buttonSelected} onPress={()=>handleOption('cake')}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <View style={styles.icono}>
                                    <Icon name={'md-ice-cream-outline'} size={20}/>
                                </View>
                                <Text style={styles.textoSelected}>Cake</Text>
                            </View>
                        </TouchableOpacity>
                     :  <TouchableOpacity style={styles.button} onPress={()=>handleOption('cake')}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <View style={styles.icono}>
                                    <Icon name={'md-ice-cream-outline'} size={20}/>
                                </View>
                                <Text style={styles.texto}>Cake</Text>
                            </View>
                        </TouchableOpacity>
                }
            </View>
            <View style={styles.containerButton}>
                {selectedOption.snack 
                     ?  <TouchableOpacity style={styles.buttonSelected} onPress={()=>handleOption('snack')}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <View style={styles.icono}>
                                    <Icon name={'md-fast-food-outline'} size={20}/>
                                </View>
                                <Text style={styles.textoSelected}>Snack</Text>
                            </View>
                        </TouchableOpacity>
                     :  <TouchableOpacity style={styles.button} onPress={()=>handleOption('snack')}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <View style={styles.icono}>
                                    <Icon name={'md-fast-food-outline'} size={20}/>
                                </View>
                                <Text style={styles.texto}>Snack</Text>
                            </View>
                        </TouchableOpacity>
                }
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