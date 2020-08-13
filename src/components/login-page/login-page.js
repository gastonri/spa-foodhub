import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import styled from "styled-components";

styled(Field)`
    background-color: blue;
`;

const LoginPage = () => {
    const renderForm = (props) => {
        return (
            <Form>
                <Field name="email" type="text" />
                <ErrorMessage component="div" name="email" />
                <Field name="password" type="password" />
                <ErrorMessage component="div" name="password" />
                <button type="submit" disabled={props.isSubmitting}>
                    Enviar
                </button>
            </Form>
        );
    };

    const getFormikProps = () => {
        return {
            children: renderForm,
            initialValues: {
                email: "",
                password: "",
            },
            onSubmit: (values, { resetForm, setSubmitting }) => {
                console.log(JSON.stringify(values, null, 2));
                setSubmitting(false);
                resetForm();
            },
            validationSchema: signUpSchema,
        };
    };

    return (
        <div>
            <h1>Login</h1>
            <Formik {...getFormikProps()} />
        </div>
    );
};

const signUpSchema = Yup.object().shape({
    email: Yup.string()
        .min(2, "Demasiado corto para ser un email")
        .max(20, "Aguantiiaaa")
        .required("Email requerido"),
    password: Yup.string()
        .min(2, "Demasiado corto para ser una contraseña")
        .max(20, "Aguantiiaaa")
        .required("Contraseña requerido"),
});

export default LoginPage;
