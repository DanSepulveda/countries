import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Country = () => {
  const [country, setCountry] = useState({})
  // const params = useParams()
  // console.log(params.name)

  // const name = useParams().name
  // console.log(name)

  const { name } = useParams()

  const getCountry = async () => {
    const respuesta = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    console.log(respuesta.status)
    setCountry(respuesta.data[0])
  }

  useEffect(() => {
    getCountry()
  }, [])
  return <div>{country?.name?.common}</div>
}

export default Country
