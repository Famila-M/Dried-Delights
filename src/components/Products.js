import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

const Products = () => {

    const [products] = useState([
            { id: 1, imageSrc: require('../assets/Dehydrated apple.png'), title: 'Apple Krunch', desc: 'Cripsy Apple Chips.' },
            { id: 2, imageSrc: require('../assets/dehydrated banana.jpg'), title: 'Banana Krunch', desc: 'Cripsy Banana Chips.' },
            { id: 3, imageSrc: require('../assets/dehydrated kiwi.jpg'), title: 'Kiwi Krunch', desc: 'Cripsy Kiwi Slices.' }, 
            { id: 4, imageSrc: require('../assets/dehydrated mango.jpg'), title: 'Mango Krunch', desc: 'Tangy Mango Slices.' }, 
            { id: 5, imageSrc: require('../assets/dehydrated blueberry.jpg'), title: 'Blueberry Burst', desc: 'Berry Powder Blend.' }, 
            { id: 6, imageSrc: require('../assets/ABC-Jucie.jpg'), title: 'ABC-Fusion', desc: 'Nutritional Supplement Powder' }, 
        ]);
  return (
    <section id="products" className="bg-light">
        <Container>
            <div className='text-center'>
            <h3 className='text-primary my-3 py-5'>Discover Our Delightful Offerings</h3>
            </div>
            <Row>
                {
                    products.map((item) => {
                        return (
                        <Col md={6} lg={4} key={item.id}>
                <ProductCard imageSrc={item.imageSrc}
                title={item.title}
                desc={item.desc}
                />
                </Col>
                        );
                    })}
                
            </Row>
        </Container>
    </section>
  );
};

export default Products;