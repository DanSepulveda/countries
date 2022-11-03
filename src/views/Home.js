// https://restcountries.com/v3.1/all
import axios from 'axios'
import { useEffect, useState } from 'react'
import Country from '../components/Country'

const Home = () => {
  const [countries, setCountries] = useState([])

  const getCountries = async () => {
    const respuesta = await axios.get('https://restcountries.com/v3.1/all')
    setCountries(respuesta.data)
  }

  useEffect(() => {
    getCountries()
  }, [])

  return (
    <div>
      {countries.map((el) => (
        <Country
          key={el.name.common}
          countryData={el}
        />
      ))}
    </div>
  )
}

export default Home

// // https://restcountries.com/v3.1/all
// import axios from 'axios'
// import { useEffect, useState } from 'react'

// const Home = () => {
//   const [contador, setContador] = useState(0)
//   const [contador2, setContador2] = useState(0)

//     console.log('antes del use effect')

//     useEffect(() => {
//     console.log('hice fetch')
// }, [contador])

// return (
//     <div>
//       <h1>Home</h1>
//       {contador}
//       <button onClick={() => setContador(contador + 1)}>Sumar 1</button>
//       {contador2}
//       <button onClick={() => setContador2(contador2 + 1)}>Sumar 1</button>
//       {console.log('estoy en el return')}
//     </div>
//   )
// }

// export default Home
