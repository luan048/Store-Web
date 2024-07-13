import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import logo from '../public/logo.png';
import product1Image from '../public/product1.png';
import product2Image from '../public/product2.png';
import product3Image from '../public/product3.png';
import product4Image from '../public/product4.png'
import product5Image from '../public/product5.png'
import product6Image from '../public/product6.png'
import product7Image from '../public/product7.png'
import product8Image from '../public/product8.png'
import product9Image from '../public/product9.png'
import product10Image from '../public/product10.png'
import product11Image from '../public/product11.png'
import product12Image from '../public/product12.png'
import product13Image from '../public/product13.png'
import product14Image from '../public/product14.png'
import product15Image from '../public/product15.png'

import Footer from "../footer/footer";

import './sale.css';

const api = axios.create({
    baseURL: 'http://localhost:3000'
});

function ProductList({ products }) {
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        const initialQuantities = {};
        products.forEach(product => {
            initialQuantities[product.id] = product.quantities || 1;
        });
        setQuantities(initialQuantities);
    }, [products]);

    const allProductsNull = products.every(product => !product.product);
    const navigate = useNavigate();

    const homePage = () => {
        navigate('/');
    };

    const handleQuantityChange = (id, event) => {
        const value = parseInt(event.target.value, 10);
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: value
        }));

        // Atualizar a quantidade no banco de dados
        api.put(`/sale/${id}`, { quantities: value }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.error('Erro ao atualizar a quantidade:', error)
        });
    };

    function deleteProduct(id) {
        api.delete(`/sale/${id}`).then(response => {
            console.log(response.data)
            window.location.reload() // Recarrega a página 
        });
    }

    const totalPrice = products.reduce((total, product) => {

        const quantity = parseInt(quantities[product.id], 10) || 1;
        const priceString = product.price ? product.price.replace('R$', '').replace('.', '').replace(',', '.').trim() : '0' // Substitui o R$ por '', assim como as virgulas etc...
        const price = parseFloat(priceString) || 0

        return total + (price * quantity)
    }, 0).toFixed(2)

    const formattedTotalPrice = parseFloat(totalPrice).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })


    return (
        <>
            <div className="divAnsweredList" style={{ display: allProductsNull ? 'none' : 'block' }}>
                {products.map((product, index) => (
                    <div key={index} className="ListProduct1">

                        <div className="listProduct">
                            Product: {product.product}
                        </div>

                        <div className="listPrice">
                            <input className="inputQnt" type="number" min="1" value={quantities[product.id] || 1} onChange={(e) => handleQuantityChange(product.id, e)} onKeyDown={(e) => e.preventDefault()} />
                            Price: {product.price}
                        </div>

                        {product.image === 'product1.png' && <img className='imgProductsale1' src={product1Image} alt={product.product} />}
                        {product.image === 'product2.png' && <img className='imgProductsale2' src={product2Image} alt={product.product} />}
                        {product.image === 'product3.png' && <img className='imgProductsale3' src={product3Image} alt={product.product} />}
                        {product.image === 'product4.png' && <img className='imgProductsale4' src={product4Image} alt={product.product} />}
                        {product.image === 'product5.png' && <img className='imgProductsale5' src={product5Image} alt={product.product} />}
                        {product.image === 'product6.png' && <img className='imgProductsale6' src={product6Image} alt={product.product} />}
                        {product.image === 'product7.png' && <img className='imgProductsale7' src={product7Image} alt={product.product} />}
                        {product.image === 'product8.png' && <img className='imgProductsale8' src={product8Image} alt={product.product} />}
                        {product.image === 'product9.png' && <img className='imgProductsale9' src={product9Image} alt={product.product} />}
                        {product.image === 'product10.png' && <img className='imgProductsale10' src={product10Image} alt={product.product} />}
                        {product.image === 'product11.png' && <img className='imgProductsale11' src={product11Image} alt={product.product} />}
                        {product.image === 'product12.png' && <img className='imgProductsale12' src={product12Image} alt={product.product} />}
                        {product.image === 'product13.png' && <img className='imgProductsale13' src={product13Image} alt={product.product} />}
                        {product.image === 'product14.png' && <img className='imgProductsale14' src={product14Image} alt={product.product} />}
                        {product.image === 'product15.png' && <img className='imgProductsale15' src={product15Image} alt={product.product} />}

                        <i onClick={() => deleteProduct(product.id)} className='fa-solid fa-trash'></i>

                    </div>
                ))}

                <div className="divTotalPrice" style={{ display: allProductsNull ? 'none' : 'block' }}>
                    <div className="totalPrice">
                        <h3>Total: R$ {formattedTotalPrice}</h3>
                    </div>
                </div>

                <div>
                    <button onClick={homePage} className="botomHome">Voltar Home</button>
                </div>

            </div>

            <div className="divFault" id="divFault">
                <p className="menssageFaultProducts" style={{ display: allProductsNull ? 'block' : 'none' }}>Sem produtos no carrinho</p>

                <i className="fa-solid fa-circle-xmark" style={{ display: allProductsNull ? 'block' : 'none' }}></i>

                <button onClick={homePage} className="buttonSale" style={{ display: allProductsNull ? 'block' : 'none' }}>Adicionar produtos</button>
            </div>

        </>
    );
}

function Sale() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('/sale').then((response) => {
            console.log(response.data);
            setProducts(response.data);
        });
    }, []);

    return (
        <>
            <div id="generalSale">

                <div className="generalContainerSale">

                    <div className="divMenuContainerSale">

                        <div className="menuSale">
                            <img className="logoSale" src={logo} alt="Logo" />
                        </div>

                    </div>

                    <div className="divBodySale">
                        <ProductList products={products} />
                    </div>

                </div>
            </div>

            <div className="footerSale">
                <Footer />
            </div>

        </>
    );
}

export default Sale;
