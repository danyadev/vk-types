export interface VKAttachmentGeo {
  type: 'point'
  coordinates: {
    latitude: number
    longitude: number
  }
  place?: {
    country: string
    city: string
    title: string
  }
}
