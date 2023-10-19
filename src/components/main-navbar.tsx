import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from 'react-router-dom'

function MainNavbar() {
  const navigate = useNavigate()

  return (
    <Navbar sticky='top' expand='lg' className='bg-body-tertiary'>
      <Container fluid>
        <Navbar.Brand role='button' onClick={() => navigate('/')}>
          Frontend Assessment
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={() => navigate('user')}>User</Nav.Link>
            <Nav.Link onClick={() => navigate('grid')}>Grid</Nav.Link>
          </Nav>
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavbar
