import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {productArr} from './Products.js';
import Header from './assets/components/common/Header.jsx';

let productData = productArr.map( (productItem,productId) => {

  return(

    <>
    <ProductCard finalProduct={productItem}/>
    
    </>
  )
}

)

function App() {
  return (
    <>

      <Header></Header>
      <div className='container-fluid'>

        <div className='container'>
          <marquee className="text-danger fw-bold text-capitalize h4">best deals on all products</marquee>

          <div className='row '>
           {productData}
          </div>

        </div>

      </div>


    </>
  );
}

function ProductCard(props) {

  // console.log(props);

  return(
    <>
      <div className='col-md-3 py-3 cardHeight'>
        <Card className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
          <Card.Title className='fw-bold ' style={{height:'40px'}}>{props.finalProduct.title}</Card.Title>
          <Card.Img variant="top" src={props.finalProduct.thumbnail} />
          <Card.Body>
            
            <Card.Text>
              <span className='text-danger'>price : </span>{props.finalProduct.price}<span className='text-danger'> Rs </span>
            </Card.Text>
            <Card.Text>
              <span className='text-success'>rating : </span>{props.finalProduct.rating} &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-success" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            </Card.Text>
            <Button variant="dark">Buy Now</Button>
          </Card.Body>
        </Card>

      </div>
    
    
    </>
  )
  
}

export default App;
