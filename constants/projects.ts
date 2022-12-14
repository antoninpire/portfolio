export type TProject = {
  label: string
  description: string
  src: string
  path: string
}

export const PROJECTS: TProject[] = [
  {
    label: 'Sinta',
    description:
      'An app made for couples, where soulmates can interact with each other, share memories, medias...',
    src: '/assets/sinta.png',
    path: '/projects/sinta'
  },
  {
    label: 'Natflix',
    description:
      'An netflix inspired website implementing machine learning for content suggestions',
    src: '/assets/natflix.png',
    path: '/projects/natflix'
  }
]
