import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '@/components/layout/Header'
import Home from '@/pages/Home'
import Artists from '@/pages/Artists'
import ArtistDetails from '@/pages/ArtistDetails'
import Music from '@/pages/Music'
import MusicDetails from '@/pages/MusicDetails'
import Publishing from '@/pages/Publishing'
import Catalogue from '@/pages/Catalogue'
import CatalogueDetails from '@/pages/CatalogueDetails'
import Licensing from '@/pages/Licensing'
import About from '@/pages/About'
import News from '@/pages/News'
import NewsDetails from '@/pages/NewsDetails'
import Contact from '@/pages/Contact'
import Privacy from '@/pages/Privacy'
import Terms from '@/pages/Terms'
import NotFound from '@/pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'artists', element: <Artists /> },
      { path: 'artists/:slug', element: <ArtistDetails /> },
      { path: 'music', element: <Music /> },
      { path: 'music/:slug', element: <MusicDetails /> },
      { path: 'publishing', element: <Publishing /> },
      { path: 'catalogue', element: <Catalogue /> },
      { path: 'catalogue/:slug', element: <CatalogueDetails /> },
      { path: 'licensing', element: <Licensing /> },
      { path: 'about', element: <About /> },
      { path: 'news', element: <News /> },
      { path: 'news/:slug', element: <NewsDetails /> },
      { path: 'contact', element: <Contact /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'terms', element: <Terms /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App