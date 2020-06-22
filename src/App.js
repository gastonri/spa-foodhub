import './App.scss';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import logo from './logo.svg';
import React from 'react';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Edit src/App.js and save to reload.</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Formik {...getFormikProps()}></Formik>
            </header>
        </div>
    );
};

const renderForm = (props) => {
    const errors = props.errors;
    const touched = props.touched;

    return (
        <Form>
            <Field {...getNombreFieldProps()} />
            {shouldRenderNombreError(errors.nombre, touched.nombre)}
            <Field {...getApellidoFieldProps()} />
            {shouldRenderApellidoError(errors.apellido, touched.apellido)}
            <button type="submit" disabled={props.isSubmitting}>
                Enviar
            </button>
        </Form>
    );
};

const shouldRenderNombreError = (error, touched) => {
    let dataToRender = null;

    if (error && touched) {
        dataToRender = <div>{error}</div>;
    }

    return dataToRender;
};

const shouldRenderApellidoError = (error, touched) => {
    let dataToRender = null;

    if (error && touched) {
        dataToRender = <div>{error}</div>;
    }

    return dataToRender;
};

const getFormikProps = () => {
    return {
        children: renderForm,
        initialValues: {
            nombre: '',
            apellido: ''
        },
        onSubmit: (values, { resetForm, setSubmitting }) => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
        },
        validationSchema: signUpSchema
    };
};

const getNombreFieldProps = () => {
    return {
        name: 'nombre',
        type: 'text'
    };
};

const getApellidoFieldProps = () => {
    return {
        name: 'apellido',
        type: 'text'
    };
};

const signUpSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(2, 'Demasiado corto para ser un nombre')
        .max(20, 'Aguantiiaaa')
        .required('Nombre requerido'),
    apellido: Yup.string()
        .min(2, 'Demasiado corto para ser un apellido')
        .max(20, 'Aguantiiaaa')
        .required('Apellido requerido')
});

export default App;
