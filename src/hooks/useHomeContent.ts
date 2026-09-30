import {
  mockCatalogue,
  mockFeaturedArtists,
  mockLicensingCopy,
  mockNews,
  mockPublishingCopy,
  mockReleases,
  mockStoryCopy,
} from '@/data/mock'

/**
 * Provides homepage content. Currently returns clearly marked placeholder
 * data from the mock module. When the Firebase project is established this
 * hook will source from Firestore services instead (keeping the same shape).
 */
export function useHomeContent() {
  return {
    featuredArtists: mockFeaturedArtists,
    releases: mockReleases,
    catalogue: mockCatalogue,
    news: mockNews,
    publishing: mockPublishingCopy,
    licensing: mockLicensingCopy,
    story: mockStoryCopy,
    loading: false,
  }
}