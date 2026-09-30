import type { Artist, CatalogueItem, NewsArticle, Release } from '@/types'

/**
 * PLACEHOLDER MOCK DATA
 * ---------------------
 * This module contains clearly identifiable placeholder content for the
 * mockup/prototype phase. It must NOT be presented as verified Premier
 * information and will be replaced by Firestore-backed services when the
 * Firebase project is established. Per project rules: never fabricate real
 * Premier artists, releases, or company facts.
 */

export const mockFeaturedArtist: Artist = {
  id: 'placeholder-artist',
  name: 'Featured Artist',
  slug: 'featured-artist',
  bio: 'Placeholder biography for the featured artist. Replace with verified Premier artist information.',
  imageUrl: '',
  genre: 'Placeholder',
  featured: true,
  status: 'published',
  createdAt: new Date(),
  updatedAt: new Date(),
}

export const mockReleases: Release[] = [
  {
    id: 'release-1',
    title: 'Placeholder Release',
    slug: 'placeholder-release',
    artistId: 'placeholder-artist',
    artworkUrl: '',
    releaseDate: new Date('2026-01-01'),
    description: 'Placeholder release description.',
    genre: 'Placeholder',
    featured: true,
    status: 'published',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'release-2',
    title: 'Placeholder Single',
    slug: 'placeholder-single',
    artistId: 'placeholder-artist',
    artworkUrl: '',
    releaseDate: new Date('2026-02-01'),
    description: 'Placeholder release description.',
    genre: 'Placeholder',
    featured: true,
    status: 'published',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'release-3',
    title: 'Placeholder EP',
    slug: 'placeholder-ep',
    artistId: 'placeholder-artist',
    artworkUrl: '',
    releaseDate: new Date('2026-03-01'),
    description: 'Placeholder release description.',
    genre: 'Placeholder',
    featured: true,
    status: 'published',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export const mockCatalogue: CatalogueItem[] = [
  {
    id: 'catalogue-1',
    title: 'Placeholder Catalogue Item',
    slug: 'placeholder-catalogue-item',
    type: 'song',
    description: 'Placeholder catalogue item.',
    licensingAvailable: true,
    publishingAvailable: true,
    status: 'published',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'catalogue-2',
    title: 'Placeholder Album',
    slug: 'placeholder-album',
    type: 'album',
    description: 'Placeholder catalogue item.',
    licensingAvailable: true,
    publishingAvailable: false,
    status: 'published',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'catalogue-3',
    title: 'Placeholder Project',
    slug: 'placeholder-project',
    type: 'project',
    description: 'Placeholder catalogue item.',
    licensingAvailable: false,
    publishingAvailable: true,
    status: 'published',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export const mockNews: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Placeholder announcement one',
    slug: 'placeholder-announcement-one',
    excerpt: 'Placeholder news excerpt.',
    content: 'Placeholder news content.',
    status: 'published',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'news-2',
    title: 'Placeholder announcement two',
    slug: 'placeholder-announcement-two',
    excerpt: 'Placeholder news excerpt.',
    content: 'Placeholder news content.',
    status: 'published',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'news-3',
    title: 'Placeholder announcement three',
    slug: 'placeholder-announcement-three',
    excerpt: 'Placeholder news excerpt.',
    content: 'Placeholder news content.',
    status: 'published',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export const mockPublishingCopy = {
  heading: 'Premier Music Publishing',
  body: 'Music publishing built around creators, rights and long-term value.',
  cta: 'Explore Publishing',
}

export const mockLicensingCopy = {
  heading: 'Licensing & Sync',
  body: 'Music for film, television, advertising, brands and more.',
  cta: 'Licensing Enquiry',
}

export const mockStoryCopy = {
  heading: 'Our Story',
  body: 'Placeholder company story. Replace with verified Premier history and milestones.',
  cta: 'Discover Our Story',
}