import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const {height, width} = Dimensions.get('window');
const Detalle = ( {navigation} )=>{
    const amount = 1;
    const unitPrice = 15;
    const [counter, setCounter] = useState(amount);
    const [price, setPrice] = useState(15);
    const [selectedSize, setSelectedSize] = useState({s:true, m:false, l:false});
    
    const handleCounter = (opc) => {
        if(opc === 'P') {//Plus
            setCounter( counter + 1 );
            setPrice( unitPrice*(counter+1) );
        }
        else if(opc === 'M') {//Minus

            if(counter - 1 >= 0) {
                setCounter( counter - 1 );
                setPrice( unitPrice*(counter-1) );
            }
            
        }
    }

    const handleSize = (size) => {
        if(size === 'S') {
            setCounter(amount);
            setPrice(unitPrice);
            setSelectedSize({s:true, m:false, l:false});
        }
        else if(size === 'M') {
            setCounter(amount);
            setPrice(unitPrice+3);
            setSelectedSize({s:false, m:true, l:false});
        }
        else if(size === 'L') {
            setCounter(amount);
            setPrice(unitPrice+5);
            setSelectedSize({s:false, m:false, l:true});
        }
            
    }

    return (
        <View style={styles.container}>
            <View style={{marginHorizontal: 20, marginVertical: 15}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Home');}}>
                    <Icon name={'md-arrow-back-outline'} size={30} color={'#e1e1e1'}/>
                </TouchableOpacity>
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>Americano Coffee</Text>
            </View>
            <View style={styles.containerPrice}>
                <Text style={styles.textPrice}>${price}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <View style={{marginHorizontal: 20}}>
                    {selectedSize.s 
                     ?  <TouchableOpacity style={styles.buttonSelected} onPress={()=>handleSize('S')}> 
                            <Text style={styles.textButtonSelected}>S</Text>
                        </TouchableOpacity>
                     :  <TouchableOpacity style={styles.button} onPress={()=>handleSize('S')}>
                            <Text style={styles.textButton}>S</Text>
                        </TouchableOpacity>
                    }
                    {selectedSize.m
                     ?  <TouchableOpacity style={styles.buttonSelected} onPress={()=>handleSize('M')}> 
                            <Text style={styles.textButtonSelected}>M</Text>
                        </TouchableOpacity>
                     :  <TouchableOpacity style={styles.button} onPress={()=>handleSize('M')}>
                            <Text style={styles.textButton}>M</Text>
                        </TouchableOpacity>
                    }
                    {selectedSize.l
                     ?  <TouchableOpacity style={styles.buttonSelected} onPress={()=>handleSize('L')}> 
                            <Text style={styles.textButtonSelected}>L</Text>
                        </TouchableOpacity>
                     :  <TouchableOpacity style={styles.button} onPress={()=>handleSize('L')}>
                            <Text style={styles.textButton}>L</Text>
                        </TouchableOpacity>
                    }
                </View>
                <Image 
                 style={styles.image}
                 source={{uri:'https://www.starbucks.com.pe/media/cappucino-espresso_tcm92-18666_w1024_n.png'}}
                />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity style={styles.buttonRounded} onPress={()=>handleCounter('P')}>
                    <Text style={styles.textSign}>+</Text>
                </TouchableOpacity>
                <View style={styles.containerAmount}>
                    <Text style={styles.textAmount}>{counter}</Text>
                </View>
                <TouchableOpacity style={styles.buttonRounded} onPress={()=>handleCounter('M')}>
                    <Text style={styles.textSign}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity>
                    <View style={{backgroundColor:'#e1e1e1', paddingHorizontal: 50, paddingVertical: 10, borderRadius: 20}}>
                        <Text style={{color: '#376363',fontWeight: 'bold'}}>Add to cart</Text>
                    </View>
                </TouchableOpacity>
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