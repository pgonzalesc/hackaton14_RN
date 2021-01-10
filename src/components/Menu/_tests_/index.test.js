import React from 'react';
import { TouchableOpacity } from 'react-native';
import {shallow} from 'enzyme';
import Menu from '../index';
const onPress = jest.fn();
describe('Pruebas en <Menu/>', () => {
    let wrapper = shallow(<Menu/>);

    beforeEach(()=>{
        let wrapper = shallow(<Menu/>);
    });

    test('Debe de mostrar <Menu/> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe seleccionar Coffee', () => {
        expect(onPress).not.toHaveBeenCalled();
        wrapper.find(TouchableOpacity).at(0).simulate('press');
        const value = wrapper.find(TouchableOpacity).at(0).children().children().at(1).children().text();
        expect(value).toBe('Coffee');
    });

    test('Debe seleccionar Cake', () => {
        expect(onPress).not.toHaveBeenCalled();
        wrapper.find(TouchableOpacity).at(1).simulate('press');
        const value = wrapper.find(TouchableOpacity).at(1).children().children().at(1).children().text();
        expect(value).toBe('Cake');
    });

    test('Debe seleccionar Snack', () => {
        expect(onPress).not.toHaveBeenCalled();
        wrapper.find(TouchableOpacity).at(2).simulate('press');
        const value = wrapper.find(TouchableOpacity).at(2).children().children().at(1).children().text();
        expect(value).toBe('Snack');
    });
});
