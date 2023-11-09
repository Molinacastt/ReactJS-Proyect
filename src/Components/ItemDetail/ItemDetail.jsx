import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <src src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {category}
                </p>
                <p className='Info'>
                    Description: {description}
                </p>
                <p className='Info'>
                    Precio: {price}
                </p>
            </section>

        </article>
    )
}

export default ItemDetail