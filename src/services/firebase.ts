/**
 * Firebase service placeholder.
 *
 * Firebase project creation is deferred (Lead Developer decision, Phase 1).
 * Once a project exists, initialise the app here from the configured
 * environment variables and re-export the required SDK instances
 * (auth, firestore, storage).
 *
 * No real Firebase credentials exist in the repository yet.
 */
export const firebaseConfigured = false

export function getFirebase() {
  if (!firebaseConfigured) {
    throw new Error(
      'Firebase is not configured yet. Set up the Firebase project and env vars first.',
    )
  }
  return null
}