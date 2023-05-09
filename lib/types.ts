export interface IEventData {
  name: string
  description: string
  poster: string
  tags: string[]
}

export interface ICardProps {
  data: IEventData
}
