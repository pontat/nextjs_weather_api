import Head from 'next/head'
import Weather from '../components/weather'

export default function Home() {
  const cities = [
    { city_name: 'Tokyo' },
    { city_name: 'Obihiro' },
    { city_name: 'Kagoshima' },
    { city_name: 'Fukuoka' },
    { city_name: 'Hanoi' },
  ]

  return (
    <div>
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex justify-center items-center flex-wrap">
        {cities.map((city, index) => (
          <Weather key={index} city_name={city.city_name} />
        ))}
      </div>
    </div>
  )
}
