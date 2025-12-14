import { formatoPrecio } from './utils/formatoPrecio.js'

function CardPizza({ nombre, ingredientes, precio, img, descripcion }) {
  return (
    <div className="card-pizza">
      <img src={img} alt={nombre} className="pizza-img" />
      <h3>{nombre}</h3>

      <p><strong>Descripción:</strong> {descripcion}</p>

      <p><strong>Ingredientes:</strong></p>
      <ul>
        {ingredientes.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>

      <p><strong>Precio:</strong> ${formatoPrecio(precio)}</p>

      <div className="pizza-buttons">
        <button>Ver Más</button>
        <button>Añadir</button>
      </div>
    </div>
  )
}

export default CardPizza
