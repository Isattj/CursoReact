import styles from './Cars.module.css'

const Cars = ({brand, newCar, color, km}) => {
  return (
    <div>
        <ul className = {styles.list_cars}>
            <li>Marca: {brand}</li>
            <li>Cor: {color}</li>
            <li>Novo: {newCar}</li>
            <li>KM: {km}</li>
        </ul>
    </div>
  )
}

export default Cars