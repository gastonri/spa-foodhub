import { configure, shallow } from 'enzyme';
import { Form, Formik } from 'formik';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import logo from './logo.svg';
import React from 'react';

let wrapper;

configure({ adapter: new Adapter() });

describe('<App />', () => {
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should render image & learn react link', () => {
        const img = wrapper.find('img');
        const paragraph = wrapper.find('p');
        const link = wrapper.find('a');

        expect(wrapper.find('header').exists()).toBeTruthy();

        expect(img.exists()).toBeTruthy();
        expect(img.hasClass('App-logo')).toBeTruthy();
        expect(img.prop('src')).toEqual(logo);

        expect(paragraph.exists()).toBeTruthy();
        expect(paragraph.text()).toEqual('Edit src/App.js and save to reload.');

        expect(link.exists()).toBeTruthy();
        expect(link.hasClass('App-link')).toBeTruthy();
        expect(link.prop('href')).toEqual('https://reactjs.org');
        expect(link.text()).toEqual('Learn React');
    });

    test('should render form with props', () => {
        const formik = wrapper.find(Formik);
        const form = wrapper.find(Form);

        wrapper.renderForm = jest.fn();
        wrapper.update();

        expect(formik.exists()).toBeTruthy();
        expect(formik.prop('initialValues')).toEqual({
            nombre: '',
            apellido: ''
        });
        expect(form.exists()).toBeTruthy();
        // expect(wrapper.renderForm).toHaveBeenCalled();
    });
});
