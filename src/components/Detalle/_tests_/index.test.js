import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import {shallow} from 'enzyme';
import Detalle from '../index';

const onPress = jest.fn();

describe('Pruebas en <Detalle/>', () => {
    let wrapper = shallow(<Detalle/>);

    beforeEach(()=>{
        wrapper = shallow(<Detalle/>);
    });

    test('Debe de mostrar <Detalle/> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe seleccionar Tamaño S', () => {
        expect(onPress).not.toHaveBeenCalled();
        wrapper.find(TouchableOpacity).at(1).simulate('press');
        const value = wrapper.find(TouchableOpacity).at(1).children().children().text();
        expect(value).toBe('S');
    });

    test('Debe seleccionar Tamaño M', () => {
        expect(onPress).not.toHaveBeenCalled();
        wrapper.find(TouchableOpacity).at(2).simulate('press');
        const value = wrapper.find(TouchableOpacity).at(2).children().children().text();
        expect(value).toBe('M');
    });

    test('Debe seleccionar Tamaño L', () => {
        expect(onPress).not.toHaveBeenCalled();
        wrapper.find(TouchableOpacity).at(3).simulate('press');
        const value = wrapper.find(TouchableOpacity).at(3).children().children().text();
        expect(value).toBe('L');
    });

    test('Debe incrementar la cantidad en uno', () => {
        expect(onPress).not.toHaveBeenCalled();
        wrapper.find(TouchableOpacity).at(4).simulate('press');
        const value = wrapper.find(View).children().at(4).children().at(1).children().children().text();
        expect(value).toBe("2");
    });
    
    test('Debe disminuir la cantidad en uno', () => {
        expect(onPress).not.toHaveBeenCalled();
        wrapper.find(TouchableOpacity).at(4).simulate('press');
        wrapper.find(TouchableOpacity).at(5).simulate('press');
        const value = wrapper.find(View).children().at(4).children().at(1).children().children().text();
        expect(value).toBe("1");
    });
});
