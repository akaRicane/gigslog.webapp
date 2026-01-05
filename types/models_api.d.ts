export type UserModel = {
  email: string
  fullName: string
  createdAt: string
  updatedAt: string
  id: number
}

export type ArtistModel = {
  id: number
  fullName: string
  website: string | null
  wikipedia: string | null
  picture: string | null
  bornYear: number | null
  diedYear: number | null
  formedYear: number | null
  disbandedYear: number | null
  createdAt: string
  updatedAt: string
}

export type VenueModel = {
  id: number
  fullName: string
  website: string | null
  wikipedia: string | null
  picture: string | null
  postalAddress: string | null
  city: string | null
  zipcode: string | null
  state: string | null
  country: string | null
  openedYear: number | null
  closedYear: number | null
  createdAt: string
  updatedAt: string
}
