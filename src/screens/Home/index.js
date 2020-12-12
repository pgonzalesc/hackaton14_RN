import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Carousel from '../../components/Carousel/Carousel';
import {carouselData} from '../../data/carouselData';
import ProductSlider from '../../components/ProductSlider/ProducttSlider';
import {productSliderData} from '../../data/productSliderData';

const Home = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>Home</Text>
            <View style={{flex: 1}}>
                <Carousel data={carouselData} />
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.title}>T-Shirt</Text>
                <ProductSlider data={productSliderData} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      fontSize: 20,
      marginTop: 10,
      marginHorizontal: 20,
      fontWeight: 'bold',
    },
  });

export default Home;