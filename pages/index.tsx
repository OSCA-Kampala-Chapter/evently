import Layout from '@/components/layout/Layout'
import type { NextPage } from 'next'
import Image from 'next/image'
import Events from '../content/events.json'

const Home: NextPage = () => {
  function Card(props: {Events: any}) {
    return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
        <Image
          className="w-full"
          src="https://images.unsplash.com/photo-1638029202288-451a89e0d55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Sunset in the mountains"
          height={500}
          width={500}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{Events.name}</div>
          <p className="text-gray-700 text-base">
          {Events.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
        {Events.tags.map((tag: string, index: number) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
      </div>
    )
  }
  function SearchBar() {
    return (
      <form>
        <div className="flex">
          <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>

          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search Hackathons, Tech Events..."
            />
          </div>
        </div>
      </form>
    )
  }
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
        <Card />
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
      </section>
    </Layout>
  )
}

export default Home
