import { Component, type ErrorInfo, type ReactNode } from 'react'
import { reportError } from '@/lib/error'
import { ErrorFallback } from '@/components/error/ErrorFallback'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    reportError(error, info)
  }

  private handleReset = (): void => {
    this.setState({ hasError: false })
    window.scrollTo(0, 0)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <ErrorFallback onReset={this.handleReset} />
    }

    return this.props.children
  }
}