const ProductCard = (props)=>{
    return(
        <div className="card">
            <img src={props.img}/>
            <div className="card-text">
                <h4>{props.name}</h4>
                <p>{props.code}</p>
                <p>Precio:<b>${props.price}</b></p>
            </div>
        </div>
    )
}

export default ProductCard;