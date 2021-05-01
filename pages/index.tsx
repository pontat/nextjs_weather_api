import Head from 'next/head'
import Weather from '../components/weather'

export default function Home() {
  const cities = [
    { city_name: 'Tokyo' },
    { city_name: 'Kanagawa' },
    { city_name: 'Obihiro' },
    { city_name: 'Hamamatsu' },
    { city_name: 'Bangladesh' },
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
