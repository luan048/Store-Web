import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

import './App.css';
import { useEffect, useState } from 'react';

import Footer from '../footer/footer';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

function App() {
  const navigate = useNavigate()

  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get('/home')
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  function menssageSucessfull() {
    const messageSucessfull = document.getElementById('menssageSucessfull')
    messageSucessfull.classList.add('show')

    setTimeout(() => {
      messageSucessfull.classList.remove('show')
    }, 3000)
  }


  function addCart() {

    const userId1 = Math.floor(1000 + Math.random() * 9000)

    api.post('/sale', {
      id: userId1,
      price: '1000,00',
      product: 'VaporMax-White-1',
      image: 'product1.png',
      quantities: 1
    })

      .then(response => {
        console.log(response);
      })

      .catch(error => {
        console.log(error)
      })

    menssageSucessfull()
  }


  function addCartProduct2() {

    const userId2 = Math.floor(1000 + Math.random() * 9000)

    api.post('/sale', {
      id: userId2,
      price: '499,99',
      product: 'Air Force-White-3',
      image: 'product2.png',
      quantities: 1
    }).then(response => {
      console.log(response);
    })

      .catch(error => {
        console.log(error)
      })

    menssageSucessfull()
  }

  function addCartProduct3() {

    const userId3 = Math.floor(1000 + Math.random() * 9000)

    api.post('/sale', {
      id: userId3,
      price: '599,99',
      product: 'Nike Mercurial-2',
      image: 'product3.png',
      quantities: 1
    }).then(response => {
      console.log(response)
    })

      .catch(error => {
        console.log(error)
      })

    menssageSucessfull()
  }

  function addCartProduct4() {

    const userId4 = Math.floor(1000 + Math.random() * 9000)

    api.post('/sale', {
      id: userId4,
      price: '329,58',
      product: 'Nike Tiempo-4',
      image: 'product4.png',
      quantities: 1
    }).then(response => {
      console.log(response)
    })

      .catch(error => {
        console.log(error)
      })

    menssageSucessfull()
  }

  function addCartProduct5() {

    const userId5 = Math.floor(1000 + Math.random() * 9000)

    api.post('/sale', {
      id: userId5,
      price: '458,62',
      product: 'Nike SB-12',
      image: 'product5.png',
      quantities: 1
    }).then(response => {
      console.log(response)
    })
      .catch(error => {
        console.log(error)
      })

    menssageSucessfull()
  }

  function addCartProduct6() {

    const userId6 = Math.floor(1000 + Math.random() * 9000)

    api.post('/sale', {
      id: userId6,
      price: '600,00',
      product: 'Nike Free-2',
      image: 'product6.png',
      quantities: 1
    }).then(response => {
      console.log(response)
    })
      .catch(error => {
        console.log(error)
      })

    menssageSucessfull()
  }

  function addCartProduct7() {

    const userId7 = Math.floor(1000 + Math.random() * 9000)

    api.post('/sale', {
      id: userId7,
      price: '817,23',
      product: 'Nike Jordan-White-3',
      image: 'product7.png',
      quantities: 1
    }).then(response => {
      console.log(response)
    })
      .catch(error => {
        console.log(error)
      })

    menssageSucessfull()
  }

  function addCartProduct8() {

    const userId8 = Math.floor(1000 + Math.random() * 9000)

    api.post('/sale', {
      id: userId8,
      price: '328,65',
      product: 'Nike Jordan-White-3',
      image: 'product8.png',
      quantities: 1
    }).then(response => {
      console.log(response)
    })
      .catch(error => {
        console.log(error)
      })

    menssageSucessfull()
  }

  function addCartProduct9() {

    const userId9 = Math.floor(1000 + Math.random() * 9000)

    api.post('/sale', {
      id: userId9,
      price: '1804,00',
      product: 'Nike Jordan-Exclusive-1',
      image: 'product9.png',
      quantities: 1
    }).then(response => {
      console.log(response)
    })
      .catch(error => {
        console.log(error)
      })

    menssageSucessfull()
  }

  function addCartProduct10() {
    const userId10 = Math.floor(1000 + Math.random() * 9000)

    api.post('/sale', {
      id: userId10,
      price: '700,00',
      product: 'Tênis Nike Air Max',
      image: 'product10.png',
      quantities: 1
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

    menssageSucessfull()
  }

  function addCartProduct11() {
    const userId11 = Math.floor(1000 + Math.random() * 9000)

    api.post('/sale', {
      id: userId11,
      price: '350,00',
      product: 'Chuteira Nike Phantom',
      image: 'product11.png',
      quantities: 1
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

    menssageSucessfull()
  }

  function addCartProduct12() {
    const userId12 = Math.floor(1000 + Math.random() * 9000)

    api.post('/sale', {
      id: userId12,
      price: '550,73',
      product: 'Chuteira Nike Superfly',
      image: 'product12.png',
      quantities: 1
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

    menssageSucessfull()
  }

  function addCartProduct13() {
    const userId13 = Math.floor(1000 + Math.random() * 9000)

    api.post('sale', {
      id: userId13,
      price: '817,50',
      product: 'Tênis Nike Air Max Escorpion',
      image: 'product13.png',
      quantities: 1
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

    menssageSucessfull()
  }

  function addCartProduct14() {
    const userId14 = Math.floor(1000 + Math.random() * 9000)

    api.post('sale', {
      id: userId14,
      price: '817,50',
      product: 'Tênis Air Zoom',
      image: 'product14.png',
      quantities: 1
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

    menssageSucessfull()
  }

  function addCartProduct15() {
    const userId15 = Math.floor(1000 + Math.random() * 9000)

    api.post('sale', {
      id: userId15,
      price: '400,00',
      product: 'Tênis Air Max Plus',
      image: 'product15.png',
      quantities: 1
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

    menssageSucessfull()
  }

  const salePage = () => {
    navigate('/sale');
  };

  const botomAddSale = () => {
    navigate('/sale')
  }

  // Tornar search fixed após scrollY (SOMENTE SE TIVER MAIS PRODUTOS, POUCOS PRODUTOS NÃO SE FAZEM NECESSÁRIO)

  // document.addEventListener('scroll', function () { //Quando o Y chegar na posição 200, a divSearch ficará fixa
  //   const divSearch = document.getElementById('divSearch')
  //   const startOffset = 200
  //   const endOffset = 500

  //   if (window.scrollY >= startOffset && window.scrollY < endOffset) {
  //     divSearch.classList.add('divSearchFixed')
  //   }

  //   else {
  //     divSearch.classList.remove('divSearchFixed')
  //   }

  // })

  // Filtrar Products pelo Price

  const getFilter1 = () => {

    api.post('/home/filter', {
      min: '0',
      max: '400'
    })
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => console.log(error))
  }

  const getFilter2 = () => {

    api.post('/home/filter', {
      min: '400',
      max: '600'
    })
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => console.log(error))

  }

  const getFilter3 = () => {

    api.post('/home/filter', {
      min: '600',
      max: '800'
    })
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => console.log(error))
  }

  const getFilter4 = () => {

    api.post('/home/filter', {
      min: '800',
      max: '900'
    })
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => console.log(error))
  }

  const getFilter5 = () => {

    api.post('/home/filter', {
      min: '900',
      max: '3000'
    })
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => console.log(error))
  }

  return (
    <>

      <div className='container'>
        <div className='menu'>
          <img className='logo' src={logo} alt='Logo' />
          <i className='fa-solid fa-cart-shopping' onClick={salePage}></i>
        </div>

        <div className='generalBodyHome'>

          <div className='bodyProducts' id='bodyProducts'>

            {products.filter(product => product.image === 'product1.png').map(product => (
              <div key={product.id} className='boxProduct1'>
                <img src={product1Image} alt={product.product} className={'product1'} />
                <i className='descriptionProduct'>- {product.product}</i>
                <i className='price1'>{product.price}</i>
                <button className='buttonProduct1' onClick={() => addCart()}>Adicionar ao carrinho</button>
              </div>
            ))}

            {products.filter(product => product.image === 'product2.png').map(product => (
              <div key={product.id} className='boxProduct2'>
                <img src={product2Image} alt={product.product} className={'product2'} />
                <i className='descriptionProduct2'>- {product.product}</i>
                <i className='price2'>{product.price}</i>
                <button className='buttonProduct2' onClick={() => addCartProduct2()}>Adicionar ao carrinho</button>
              </div>
            ))}

            {products.filter(product => product.image === 'product3.png').map(product => (
              <div key={product.id} className='boxProduct3'>
                <img src={product3Image} alt={product.product} className={'product3'} />
                <i className='descriptionProduct3'>- {product.product}</i>
                <i className='price3'>{product.price}</i>
                <button className='buttonProduct3' onClick={() => addCartProduct3()}>Adicionar ao carrinho</button>
              </div>
            ))}

            {products.filter(product => product.image === 'product4.png').map(product => (
              <div key={product.id} className='boxProduct4'>
                <img src={product4Image} alt={product.product} className={'product4'} />
                <i className='descriptionProduct4'>- {product.product}</i>
                <i className='price4'>{product.price}</i>
                <button className='buttonProduct4' onClick={() => addCartProduct4()}>Adicionar ao carrinho</button>
              </div>
            ))}

            {products.filter(product => product.image === 'product5.png').map(product => (
              <div key={product.id} className='boxProduct5'>
                <img src={product5Image} alt={product.product} className={'product5'} />
                <i className='descriptionProduct5'>- {product.product}</i>
                <i className='price5'>{product.price}</i>
                <button className='buttonProduct5' onClick={() => addCartProduct5()}>Adicionar ao carrinho</button>
              </div>
            ))}

            {products.filter(product => product.image === 'product6.png').map(product => (
              <div key={product.id} className='boxProduct6'>
                <img src={product6Image} alt={product.product} className={'product6'} />
                <i className='descriptionProduct6'>- {product.product}</i>
                <i className='price6'>{product.price}</i>
                <button className='buttonProduct6' onClick={() => addCartProduct6()}>Adicionar ao carrinho</button>
              </div>
            ))}

            {products.filter(product => product.image === 'product7.png').map(product => (
              <div key={product.id} className='boxProduct7'>
                <img src={product7Image} alt={product.product} className={'product7'} />
                <i className='descriptionProduct7'>- {product.product}</i>
                <i className='price7'>{product.price}</i>
                <button className='buttonProduct7' onClick={() => addCartProduct7()}>Adicionar ao carrinho</button>
              </div>
            ))}

            {products.filter(product => product.image === 'product8.png').map(product => (
              <div key={product.id} className='boxProduct8'>
                <img src={product8Image} alt={product.product} className={'product8'} />
                <i className='descriptionProduct8'>- {product.product}</i>
                <i className='price8'>{product.price}</i>
                <button className='buttonProduct8' onClick={() => addCartProduct8()}>Adicionar ao carrinho</button>
              </div>
            ))}

            {products.filter(product => product.image === 'product9.png').map(product => (
              <div key={product.id} className='boxProduct9'>
                <img src={product9Image} alt={product.product} className={'product9'} />
                <i className='descriptionProduct9'>- {product.product}</i>
                <i className='price9'>{product.price}</i>
                <button className='buttonProduct9' onClick={() => addCartProduct9()}>Adicionar ao carrinho</button>
              </div>
            ))}

            {products.filter(product => product.image === 'product10.png').map(product => (
              <div key={product.id} className='boxProduct10'>
                <img src={product10Image} alt={product.product} className={'product10'} />
                <i className='descriptionProduct10'>- {product.product}</i>
                <i className='price10'>{product.price}</i>
                <button className='buttonProduct10' onClick={() => addCartProduct10()}>Adicionar ao carrinho</button>
              </div>
            ))}

            {products.filter(product => product.image === 'product11.png').map(product => (
              <div key={product.id} className='boxProduct11'>
                <img src={product11Image} alt={product.product} className={'product11'} />
                <i className='descriptionProduct11'>- {product.product}</i>
                <i className='price11'>{product.price}</i>
                <button className='buttonProduct11' onClick={() => addCartProduct11()}>Adicionar ao carrinho</button>
              </div>
            ))}

            {products.filter(product => product.image === 'product12.png').map(product => (
              <div key={product.id} className='boxProduct12'>
                <img src={product12Image} alt={product.product} className={'product12'} />
                <i className='descriptionProduct12'>- {product.product}</i>
                <i className='price12'>{product.price}</i>
                <button className='buttonProduct12' onClick={() => addCartProduct12()}>Adicionar ao carrinho</button>
              </div>
            ))}

            {products.filter(product => product.image === 'product13.png').map(product => (
              <div key={product.id} className='boxProduct13'>
                <img src={product13Image} alt={product.product} className={'product13'} />
                <i className='descriptionProduct13'>- {product.product}</i>
                <i className='price13'>{product.price}</i>
                <button className='buttonProduct13' onClick={() => addCartProduct13()}>Adicionar ao carrinho</button>
              </div>
            ))}

            {products.filter(product => product.image === 'product14.png').map(product => (
              <div key={product.id} className='boxProduct14'>
                <img src={product14Image} alt={product.product} className={'product14'} />
                <i className='descriptionProduct14'>- {product.product}</i>
                <i className='price14'>{product.price}</i>
                <button className='buttonProduct14' onClick={() => addCartProduct14()}>Adicionar ao carrinho</button>
              </div>
            ))}

            {products.filter(product => product.image === 'product15.png').map(product => (
              <div key={product.id} className='boxProduct15'>
                <img src={product15Image} alt={product.product} className={'product15'} />
                <i className='descriptionProduct15'>- {product.product}</i>
                <i className='price15'>{product.price}</i>
                <button className='buttonProduct15' onClick={() => addCartProduct15()}>Adicionar ao carrinho</button>
              </div>
            ))}

            <div className='menssageSucessfull' id='menssageSucessfull'>
              <span className='menssageAddCart'>Adicionado ao Carrinho com sucesso</span> <br />
              <button onClick={botomAddSale} className='botomAddCart'>Ver Carrinho</button>
            </div>
          </div>

          <div className='divSearch' id='divSearch'>
            <button className='buttonFilter' onClick={getFilter1}>até R$ 400,00</button>
            <button className='buttonFilter2' onClick={getFilter2}>R$ 400 até R$ 600,00</button>
            <button className='buttonFilter3' onClick={getFilter3}>R$ 600 até R$ 800,00</button>
            <button className='buttonFilter4' onClick={getFilter4}>R$ 800 até R$ 900,00</button>
            <button className='buttonFilter5' onClick={getFilter5}>A partir de R$ 900,00</button>
          </div>

        </div>

      </div>

      <Footer />
    </>

  );
}

export default App