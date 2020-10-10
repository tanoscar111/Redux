import React from 'react';

import { Button } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function Todo(props) {
    const {submitForm}=props;
    return (
        <div className="todo">

            <Formik
                initialValues={{ title:dataEdit.title}}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                   
                })}
                onSubmit={(values) => {
                   submitForm(values,dataEdit.id )
                   console.log(values)
                }}
            >
                <Form className="row form-group">
                    <div className="">
                        <Field className=" col form-control" name="title" type="text" />
                        <ErrorMessage name="title" />
                    </div>
                    <div>
                        <Button type="submit" variant="primary">Lưu Lại </Button>
                    </div>

                </Form>
            </Formik>

        </div>
    );
}

export default Todo;
