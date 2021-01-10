import React from 'react';
import { } from 'react-native';
import {shallow} from 'enzyme';
import ProductSlider from '../ProducttSlider';
import {productSliderData} from '../../../data/productSliderData';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Pruebas en <ProductSlider/>', () => {
    let wrapper = shallow(<ProductSlider data={productSliderData}/>);

    beforeEach(()=>{
        wrapper = shallow(<ProductSlider data={productSliderData}/>);
    });

    test('Debe de mostrar <ProductSlider/> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de renderizar', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('Debe de coincidir los props', () => {
        const data = wrapper.props().children.props.data;
        expect(data).toEqual(productSliderData);
    });
    
});
