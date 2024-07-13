import React from "react";

import './footer.css'

function Footer() {
    return (

        <footer>

            <div className="general">

                <div className="list1">
                    <p className="title1">Encontre Uma Loja Nike</p>
                    <li className="li1">Cadastre-se para receber novidades</li>
                    <li className="li1">Cartão Presente</li>
                    <li className="li1">Mapa do Site</li>
                    <li className="li1">Nike Journal</li>
                    <li className="li1">Corinthians</li>
                </div>

                <div className="list2">
                    <p className="title2">Ajuda</p>
                    <li className="li2">Dúvidas Gerais</li>
                    <li className="li2">Entregas</li>
                    <li className="li2">Pedidos</li>
                    <li className="li2">Devoluções</li>
                    <li className="li2">Pagamentos</li>
                    <li className="li2">Produtos</li>
                    <li className="li2">Corporativo</li>
                    <li className="li2">Fale Conosco</li>
                </div>

                <div className="list3">
                    <p className="title3">Sobre a Nike</p>
                    <li className="li3">Propósito</li>
                    <li className="li3">Sustentabilidade</li>
                    <li className="li3">Sobre a Nike, Inc.</li>
                    <li className="li3">Sobre o Grupo SBF</li>
                </div>

                <div className="list4">
                    <p className="title4">Redes Sociais</p>
                    <div className="icons">
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook"></i>
                    </div>

                </div>
                
            </div>

        </footer>
    )
}

export default Footer