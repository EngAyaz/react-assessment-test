import { useContext } from 'react';
import Context from '../context/Context';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CheckoutModal = (props) => {
    const {checkout, RemoveProduct} = useContext(Context);

    return (
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
              checkout.map((product, index) => {
                return (
                  <div className='row' key={index}>
                    <div className='col-md-2'>
                      <img src={product.img} className="img-thumbnail border-0" />
                    </div>
                    <div className='col-md-9'>
                      <span><strong>{product.name}</strong></span>
                      <br/>
                      <span>Price: {product.price}</span>
                      <br/>
                      <span>Quanity: {product.quantity}</span>
                      <br/>
                    </div>
                    <div className='col-md-1'>
                      <button className='btn btn-sm mt-3 bg-danger text-white' onClick={() => RemoveProduct(product.id)}>X</button>
                    </div>
                  </div>
                )
              })
            }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default CheckoutModal;