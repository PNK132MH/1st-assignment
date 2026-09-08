function ProductCard(props) {

    return (
        <div>

            <h2>{props.product.name}</h2>

            <p>${props.product.price}</p>

            <p>{props.product.category}</p>

            <button
                onClick={() => props.addToCart(props.product)}
            >
                Add to Cart
            </button>

        </div>
    );
}

export default ProductCard;