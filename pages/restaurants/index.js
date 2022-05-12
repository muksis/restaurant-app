import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/Link'

export default function Restaurants() {
  const restaurants = [
    {name: 'WoodsHill'},
    {name: 'Fiorellas'},
    {name: 'Karma'}
  ]

  return (
    <div>
      <h1>Restaurant Top Page</h1>
      {restaurants.map(item => {
        return <div>
          <Link as={'/restaurants/' + item.name} href='restaurants/[restaurant]'>
            <a>{item.name}</a>
          </Link>
        </div>
      })}
    </div>
  )
}
