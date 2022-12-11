import React from "react";
import {
    Input,
    InputGroup,
    InputLeftElement,
    Button,
    FormErrorMessage
} from '@chakra-ui/react'
import { useFormik } from 'formik';

export function Login() {

    
    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        }
        if (!values.password) {
            errors.password = 'Required';
        }
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            login();
        },
    });
    async function login() {
        const response = await fetch(`authentication/login?username=${formik.values.email}&password=${formik.values.password}`, {
            method: "post",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          });
        const data = await response.json();
        alert(data)
    }
    async function logout() {
        await fetch('authentication/logout', {
            method: "post",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        })
    }

    return (
        <>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                            children='$'
                        />
                        <Input
                            id="email"
                            name="email"
                            type="text"
                            placeholder='Email address'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email} />
                        {(formik.errors.email && formik.touched.email) &&
                            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                        }
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                            children='$'
                        />
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder='Password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {(formik.errors.password && formik.touched.password) &&
                            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                        }
                    </InputGroup>
                    <Button type="submit">Sign-In</Button>
                </form>
                <Button onClick={logout}>Logout</Button>
            </div>
        </>
    )
}