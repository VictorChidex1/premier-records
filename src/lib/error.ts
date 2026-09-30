interface ErrorInfo {
  componentStack?: string | null
}

/**
 * Reports an error to the developer console with a structured payload.
 *
 * This is the single hook point for error reporting. To add a remote
 * monitor later (e.g. Sentry or Firebase Analytics), extend this function
 * without touching the error boundary itself.
 */
export function reportError(error: unknown, info?: ErrorInfo): void {
  console.error('[Premier] Application error:', {
    name: error instanceof Error ? error.name : 'Unknown',
    message: error instanceof Error ? error.message : String(error),
    stack: error instanceof Error ? error.stack : undefined,
    componentStack: info?.componentStack,
    href: typeof window !== 'undefined' ? window.location.href : undefined,
  })
}

/**
 * Installs global handlers for errors React error boundaries cannot catch:
 * uncaught exceptions in event handlers and unhandled promise rejections.
 * Returns a cleanup function (useful for HMR during development).
 */
export function setupGlobalErrorListeners(): () => void {
  const onError = (event: ErrorEvent) => {
    reportError(event.error ?? new Error(event.message))
  }

  const onRejection = (event: PromiseRejectionEvent) => {
    reportError(event.reason)
  }

  window.addEventListener('error', onError)
  window.addEventListener('unhandledrejection', onRejection)

  return () => {
    window.removeEventListener('error', onError)
    window.removeEventListener('unhandledrejection', onRejection)
  }
}