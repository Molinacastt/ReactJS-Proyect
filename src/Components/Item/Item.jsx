import './Item.css'

const Item = ({id, name, img, price, stock}) => {

    return (
        <article className='Carditem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='Itemimg'/>
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='Itemfooter'>
                <button className='Option'>Ver detalle</button>
            </footer>
        </article>
    )
}

export default Item