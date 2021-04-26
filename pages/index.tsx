import Head from 'next/head'
import Weather from '../components/weather'

export default function Home() {
  const cities = [
    { city_name: 'Tokyo', color_name: 'blue' },
    { city_name: 'Obihiro', color_name: 'yellow' },
    { city_name: 'Hamamatsu', color_name: 'green' },
    { city_name: 'Bangladesh', color_name: 'red' },
  ]

  return (
    <div>
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex justify-center items-center flex-wrap">
        {cities.map((city, index) => (
          <Weather key={index} city_name={city.city_name} color_name={city.color_name} />
        ))}
      </div>
    </div>
  )
}
