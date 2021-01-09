import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import CarouselItem from './CarouselItem';

let flatList;
const infiniteScroll = (datalist) => {
  const numberOfData = datalist.length;
  let scrollValue = 0;
  let scrolled = 0;
  setInterval(() => {
    scrolled++;
    if (scrolled < numberOfData) {
      scrollValue = scrollValue + width;
    } else {
      scrollValue = 0;
      scrolled = 0;
    }
    this.flatList.scrollToOffset({animated: true, offset: scrollValue});
  }, 5000);
};
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  dot: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Carousel = ({data}) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    setDataList(data);
    infiniteScroll(dataList);
  }, []);
  if (data && data.length) {
    return (
      <View style={{flex: 1}}>
        <AnimatedFlatList
          ref={(flatList) => {
            this.flatList = flatList;
          }}
          style={{flex: 0.95}}
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => {
            return <CarouselItem item={item.item} />;
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
                //listener: (event) => console.log(event),
                useNativeDriver: true,
            },
          )}
        />
        <View style={styles.dot}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: '#212121',
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
  return null;
};

export default Carousel;
