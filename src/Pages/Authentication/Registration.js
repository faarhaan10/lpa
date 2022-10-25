import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form"

const Registration = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-1" controlId="formGroupEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="i!"
                    {...register("displayName", { required: true })}
                />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    {...register("email", { required: true })}
                />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formGroupPassword">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="https://img.png"
                    {...register("photoURL", { required: true })}
                />
            </Form.Group>



            <Button size='sm' variant="primary" type='submit'>Submit</Button>
        </Form>
    );
};

export default Registration;