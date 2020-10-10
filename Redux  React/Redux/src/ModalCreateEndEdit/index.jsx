import React from 'react';

import { Button, Modal } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function ModalCreateEndEdit(props) {
    const { showModalCreateEndEdit,  handleCloseModalCreateEndEdit, submitForm ,dataEdit} = props;
    return (
        <>
        <Modal show={showModalCreateEndEdit} onHide={handleCloseModalCreateEndEdit}>
          <Modal.Header closeButton>
            <Modal.Title>{`${dataEdit.type==="create"?"thêm":"edit" } công việc`} </Modal.Title>
          </Modal.Header>
          <Formik
            initialValues={dataEdit.type === 'create'
            ? {
              title: '',
              
            }
            : {
              title: dataEdit.title,
              
            }
          } // dùng để cập nhật lại giữ liệu khi create và edit  edit(3)
            validationSchema={Yup.object({
              title: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
               
            })}
            enableReinitialize //dùng để nhận được giữ liệu ms nhất
            onSubmit={(values) => {
                submitForm(values,dataEdit.type, dataEdit.id) 
                // dataEdit.type check xem nó create hay edit edit(5)
                //dataEdit.index truyền cái index qua để nó bk click vào đó create hay edit edit(7)
            }}
          >
  
            <Form className="form-group">
              <Modal.Body>
                
                <Field 
                name="title"
                 type="text" 
                 className="form-control" 
                  />
                <ErrorMessage name="title" />
                
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModalCreateEndEdit}>
                  Close
            </Button>
                <Button type="submit" variant="primary">
                  Lưu Lại
            </Button>
              </Modal.Footer>
  
            </Form>
          </Formik>
        </Modal>
        </>
    );
}






export default ModalCreateEndEdit;
