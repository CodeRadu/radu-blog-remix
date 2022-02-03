import { Links, LinksFunction, LiveReload, Outlet } from 'remix'
import Header from './components/Header'
import styles from './styles/app.css'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <title>Radu Blog</title>
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  )
}
