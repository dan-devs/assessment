import { Outlet } from 'react-router-dom'
import MainNavbar from '../components/main-navbar'
import { Container } from 'react-bootstrap'

const Layout = () => {
  return (
    <>
      <MainNavbar />
      <Container fluid>
        <Outlet />
      </Container>
    </>
  )
}

export default Layout
