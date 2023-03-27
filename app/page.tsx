import Image from 'next/image'

export default function Home() {
  function Card() {
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
          <div className="font-bold text-xl mb-2">evently hackathon</div>
          <p className="text-gray-700 text-base">
            Lets hack events and tech parties...
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #js
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #python
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #typescript
          </span>
        </div>
      </div>
    )
  }
  return (
    <main>
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
          </div>
        </div>
      </section>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-8 place-items-center gap-x-1 lg:mx-20 md:mx-8 mx:2 grid-cols-1">
        <Card />
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
      </section>
    </main>
  )
}
