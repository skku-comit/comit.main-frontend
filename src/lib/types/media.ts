export interface MediaPost {
  id: string
  title: string
  description: string
  date: string
  type: 'event' | 'activity' | 'seminar'
  thumbnail: string
  views: number
  category: string
} 