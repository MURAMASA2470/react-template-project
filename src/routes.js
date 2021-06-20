import React from 'react'

const App = React.lazy(() => import('./components/pages/App'))

const routes = [
  { path: '/', exact: true, name: 'App', component: App },
]

export default routes