import React from "react";

function Product(props) {

    const {productName, productPrice} = props;

    return(
        <div>
            <div>ÜRÜN BİLGİLERİ</div>
            <div>
                <div>İsim: {productName} </div>
                <div>Fiyat: {productPrice}$ </div> 
            </div>
        </div>
    )
}

export default Product