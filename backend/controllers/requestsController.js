import cliente from "../config/db.js";

// Products

export async function insProducts(product, price, image) {

    try {
        
        const productId = Math.floor(1000 + Math.random() * 9000)

        await cliente.query('INSERT INTO products("id", "product", "price", "image") VALUES ($1, $2, $3, $4)', [productId, product, price, image])

        console.log('Inserido')
    }

    catch(ex) {
        console.log(ex)
    }
}

export async function delProducts(id) {

    try {
        await cliente.query('DELETE FROM products WHERE id = $1', [id])

        console.log('Removido')
    }

    catch (ex) {
        console.log(ex)
    }
}

export async function updatePriceProducts(id, price) {

    try {
        await cliente.query('UPDATE products SET price = $1 WHERE id = $2', [price, id])
        console.log('Price atualizado')
    }

    catch(ex) {
        console.log(ex)
    }
}

// Fim Products

// Pedidos

export async function insRequests(id, price, product, image, quantities) {

    try {
        await cliente.query('INSERT INTO requests("id", "price", "product", "image", "quantities") VALUES ($1, $2, $3, $4, $5)', [id, price, product, image, quantities]);

        console.log('Inserido');
    } 
    
    catch (ex) {
        console.log(ex);
    }
}

export async function delRequests(id) {

    try {
        await cliente.query('DELETE FROM requests WHERE id = $1', [id])
        
        console.log('Removido')
    }

    catch (ex) {
        console.log(ex)
    }
}

export async function updateQuantities(id, quantities) {

    try {
        await cliente.query('UPDATE requests SET quantities = $1 WHERE id = $2', [quantities, id])
        console.log('Quantidade atualizada')
    }

    catch(ex) {
        console.log(ex)
    }
}

// Fim Pedidos