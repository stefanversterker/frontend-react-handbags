function Product({productLabel, productImage, productAltText, productTitle, productPrice}) {

    return (
        <article>
            <span>{productLabel}</span>
            <img src={productImage} alt={productAltText}/>
            <p>{productTitle}</p>
            <h4>{productPrice}</h4>
        </article>
    )
}

export default Product