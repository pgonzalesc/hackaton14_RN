import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import ProductSliderItem from './ProductSliderItem';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  dot: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const ProductSlider = ({navigation, data}) => {
  const scrollX = new Animated.Value(0);

  const detail = (item) => {
    navigation.navigate('Detalle', item);
  };

  if (data && data.length) {
    return (
      <View style={{flex: 1}}>
        <AnimatedFlatList
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => {
            return <ProductSliderItem item={item.item} onPress={()=>detail(item.item)}/>;
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
                //listener: (event) => console.log(event),
                useNativeDriver: true,
            },
          )}
        />
      </View>
    );
  }
  return null;
};

export default ProductSlider;
