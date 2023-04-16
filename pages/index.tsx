import Layout from '@/components/layout/Layout'
import type { NextPage } from 'next'
import events from '@/events/2023.json'
import { useEffect, useState } from 'react'
import useFlatArray from '@/hooks/useFlatArray'
import { IEventData } from '@/lib/types'
import SearchBar from '@/components/Search'
import EventCard from '@/components/EventCard'

const Home: NextPage = () => {
  const [flatEvents, setFlatEvents] = useState<IEventData[]>([])
  const eventsData = useFlatArray(events)

  useEffect(() => {
    setFlatEvents(eventsData)
  }, [])

  return (
    <Layout>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <strong className="font-extrabold text-yellow-500">
                Dont miss any tech event, hackathon, conference
              </strong>{' '}
            </h1>

            <p className="mt-4 sm:text-xl text-white sm:leading-relaxed">
              Find and Discover tech events, hackathons, and conferences
              happening around Uganda
            </p>
            <SearchBar />
          </div>
        </div>
      </section>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-8 place-items-center gap-x-1 lg:mx-20 md:mx-8 mx:2 grid-cols-1">
        {flatEvents.map((event: IEventData, index: number) => (
          <EventCard key={index} data={event} />
        ))}
      </section>
    </Layout>
  )
}

export default Home
