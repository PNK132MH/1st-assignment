function Cart(props) {

    return (
        <div>

            <h2>
                Cart: {props.cart.length} item(s)
            </h2>

        </div>
    );
    {props.cart.map((product) => (

    <div key={product.id}>

        <h3>{product.name}</h3>

        <p>${product.price}</p>

    </div>

))}
}


export default Cart;