export interface StudyRecord {
  id: string
  title: string
  description: string
  startDate: string
  endDate: string
  participants: number
  category: 'project' | 'study' | 'mentoring'
  tags: string[]
  status: 'ongoing' | 'completed'
  leader: {
    name: string
    image: string
  }
} 