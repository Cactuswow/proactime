import type { Application } from './interfaces'

export const applications: Application[] = [
  {
    id: 1,
    name: 'Word',
    time: 5,
    permitted: true
  },
  {
    id: 2,
    name: 'Excel',
    time: 10,
    permitted: true
  },
  {
    id: 3,
    name: 'PowerPoint',
    time: 15,
    permitted: true
  },
  {
    id: 4,
    name: 'Outlook',
    time: 20,
    permitted: true
  },
  {
    id: 5,
    name: 'OneNote',
    time: 25,
    permitted: false
  },
  {
    id: 6,
    name: 'Access',
    time: 30,
    permitted: false
  },
  {
    id: 7,
    name: 'Publisher',
    time: 35,
    permitted: false
  },
  {
    id: 8,
    name: 'Visio',
    time: 40,
    permitted: false
  },
  {
    id: 9,
    name: 'Project',
    time: 45,
    permitted: false
  },
  {
    id: 10,
    name: 'OneDrive',
    time: 50,
    permitted: false
  }
]
