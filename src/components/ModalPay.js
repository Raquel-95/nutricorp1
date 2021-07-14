import React from 'react'
import { Modal, Button} from 'react-bootstrap'
import Nav from 'react'

const ModalPay = ({show, setShow}) => {
    
    const handleClose = () => setShow(false);
    
                return (
                    <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>¡Felicidades!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Tu pedido ha sido registrado exitosamente y será descontado de tu próxima planilla</Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                         Aceptar
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    </>
                );
           
}

export default ModalPay
