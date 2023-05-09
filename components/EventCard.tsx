import { ICardProps } from '@/lib/types'
import Image from 'next/image'

export default function EventCard(props: ICardProps) {
  const { name, description, tags, poster } = props.data
  console.log(name)
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <Image
        className="w-full"
        src={poster}
        alt="Sunset in the mountains"
        height={500}
        width={500}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {/* {tags?.map((tag: string, index: number) => ( */}
        {/* Use tags directly instead of events.tags */}
        {tags?.map((tag: string, index: number) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
