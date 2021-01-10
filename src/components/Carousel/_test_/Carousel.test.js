import React from 'react';
import { } from 'react-native';
import {shallow} from 'enzyme';
import Carousel from '../Carousel';
import {carouselData} from '../../../data/carouselData';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Pruebas en <Carousel/>', () => {
    let wrapper = shallow(<Carousel data={carouselData}/>);

    beforeEach(()=>{
        wrapper = shallow(<Carousel data={carouselData}/>);
    });

    test('Debe de mostrar <Carousel/> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de renderizar', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('Debe de coincidir los props', () => {
        const data = wrapper.props().children;
        expect(data[0].props.data).toEqual(carouselData);
    });
});
