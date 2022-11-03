import { useState } from 'react'

const Country = (props) => {
  const [mostrando, setMostrando] = useState(false)
  const { name, flags } = props.countryData

  return (
    <div>
      <h1>{name.common}</h1>
      <button onClick={() => setMostrando(!mostrando)}>Mostrar bandera</button>
      {mostrando && (
        <img
          src={flags.png}
          alt=""
        />
      )}
    </div>
  )
}

export default Country
