import React from 'react';

import { Button, Modal } from 'react-bootstrap';
// import { Formik, Field, Form, ErrorMessage } from 'formik';

function ModalDelete(props) {
    const { handleCloseModalDelete, showModalDelte, deleteItem, dataModalDelete } = props
    return (
        <div className="todo">
            <Modal show={showModalDelte} onHide={handleCloseModalDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc Delete không?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModalDelete}>
                        Close
          </Button>
                    <Button variant="primary" onClick={() => deleteItem(dataModalDelete.index)}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalDelete;
