import { Suspense, lazy } from 'react'

import './App.css'
import Page404 from './pages/404'
import SearchPage from './pages/Search'

import { Router } from './Router'
import { Route } from './Route'

const LazyAbautPage = lazy(() => import('./pages/About'))
const LazyHomePage = lazy(() => import('./pages/Home'))

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]


function App() {

  return (
    <main>
      <Suspense fallback={<div>Loading ... </div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAbautPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
