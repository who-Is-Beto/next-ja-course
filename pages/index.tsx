import data from "database/data"
import { useEffect, useState } from "react"
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {

  const API = '/api/avo'
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    fetch(API)
    .then((response) => response.json())
    .then(({data, length}) => setProductList(data))
  }, [])

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>

      <p>The products are:</p>
      <ul>
      {productList.map((product) => (
        <li key={product.id}>{product.name}</li>
        ))}
        </ul>
    </div>
  )
}

export default HomePage
