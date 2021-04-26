import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

type weatherType = {
  name: string
  dt: number
  main: {
    temp: number
    humidity: number
  }
  weather: [
    {
      icon: string
      description: string
      main: string
    }
  ]
}

export default function Weather({ city_name, color_name }) {
  const [weatherData, setWeatherData] = useState<weatherType | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_URL}/weather/?q=${city_name}&APPID=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}&units=metric&lang=ja`
    )
      .then((res: Response) => res.json())
      .then((result: weatherType) => {
        setWeatherData(result)
        setLoading(false)
      })
      .finally(() => setLoading(false))
  }, [city_name])

  if (loading) {
    return <div></div>
  }

  return (
    <div className="p-4">
      <div
        className={`bg-gradient-to-r from-${color_name}-500 to-${color_name}-300
                w-96 h-56 m-auto rounded-xl shadow-2xl
                transform hover:scale-110 transition-transform
                text-white relative`}
      >
        <div className="w-full px-8 absolute top-6">
          <div className="flex justify-between">
            <div>
              <p className="font-light">City Name</p>
              <p className="text-md font-bold tracking-widest">{weatherData.name}</p>
            </div>
            <div>
              <img
                src={`${process.env.NEXT_PUBLIC_OPEN_WEATHER_ICON_URL}/${weatherData.weather[0].icon}.png`}
                alt={weatherData.weather[0].description}
              />
            </div>
          </div>
          <div className="pt-2">
            <p className="font-light">Weather Condition</p>
            <p className="text-lg font-medium tracking-widest">{weatherData.weather[0].main}</p>
          </div>
          <div className="pt-6 pr-6">
            <div className="flex justify-between">
              <div>
                <p className="font-light text-xs">DateTime</p>
                <p className="font-bold tracking-more-wider text-sm">
                  {dayjs.unix(weatherData.dt).format('YYYY-MM-DD HH:mm')}
                </p>
              </div>
              <div>
                <p className="font-light text-xs">Temprature</p>
                <p className="font-bold tracking-more-wider text-sm">{weatherData.main.temp}°C</p>
              </div>
              <div>
                <p className="font-light text-xs">Humidity</p>
                <p className="font-bold tracking-more-wider text-sm">{weatherData.main.humidity}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
