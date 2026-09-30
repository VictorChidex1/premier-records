export interface UserProfile {
  uid: string
  email: string
  displayName?: string
  role: 'admin' | 'editor'
  status: 'active' | 'disabled'
  createdAt: Date
  updatedAt: Date
}

export interface Artist {
  id: string
  name: string
  slug: string
  bio: string
  imageUrl: string
  genre?: string
  socialLinks?: {
    instagram?: string
    spotify?: string
    appleMusic?: string
    youtube?: string
  }
  featured: boolean
  status: 'draft' | 'published'
  createdAt: Date
  updatedAt: Date
}

export interface Release {
  id: string
  title: string
  slug: string
  artistId: string
  artworkUrl: string
  releaseDate?: Date
  description?: string
  genre?: string
  listeningLinks?: {
    spotify?: string
    appleMusic?: string
    youtube?: string
  }
  featured: boolean
  status: 'draft' | 'published'
  createdAt: Date
  updatedAt: Date
}

export interface CatalogueItem {
  id: string
  title: string
  slug: string
  artistId?: string
  type: 'song' | 'album' | 'project' | 'other'
  description?: string
  artworkUrl?: string
  licensingAvailable: boolean
  publishingAvailable: boolean
  status: 'draft' | 'published'
  createdAt: Date
  updatedAt: Date
}

export interface NewsArticle {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage?: string
  authorId?: string
  publishedAt?: Date
  status: 'draft' | 'published'
  createdAt: Date
  updatedAt: Date
}

export interface Enquiry {
  id: string
  name: string
  email: string
  company?: string
  enquiryType:
    | 'general'
    | 'partnership'
    | 'licensing'
    | 'publishing'
    | 'artist'
    | 'media'
    | 'other'
  message: string
  status: 'new' | 'in_progress' | 'resolved'
  createdAt: Date
  updatedAt: Date
}