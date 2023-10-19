import { Col, Container, Row } from 'react-bootstrap'
import DataTable from 'react-data-table-component'

const columns = [
  {
    name: 'Title',
    selector: (row) => row.title,
  },
  {
    name: 'Year',
    selector: (row) => row.year,
  },
]

const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 3,
    title: 'Halloween',
    year: '1978',
  },
  {
    id: 4,
    title: 'Carrie',
    year: '1976',
  },
  {
    id: 5,
    title: 'The Omen',
    year: '1976',
  },
  {
    id: 6,
    title: 'Silence Of The lambs',
    year: '1991',
  },
  {
    id: 7,
    title: 'Misery',
    year: '1990',
  },
  {
    id: 8,
    title: 'The Shining',
    year: '1980',
  },
  {
    id: 9,
    title: 'Psycho',
    year: '1960',
  },
  {
    id: 10,
    title: 'A Nightmare on Elm Street',
    year: '1984',
  },
  {
    id: 11,
    title: 'The Thing',
    year: '1982',
  },
  {
    id: 12,
    title: 'The Birds',
    year: '1963',
  },
  {
    id: 13,
    title: 'Night of the Living Dead',
    year: '1968',
  },
  {
    id: 14,
    title: 'Poltergeist',
    year: '1982',
  },
  {
    id: 15,
    title: 'The Exorcist',
    year: '1973',
  },
  {
    id: 16,
    title: 'The Sixth Sense',
    year: '1999',
  },
  {
    id: 17,
    title: 'The Texas Chainsaw Massacre',
    year: '1971',
  },
  {
    id: 18,
    title: 'American Psycho',
    year: '2000',
  },
  {
    id: 19,
    title: 'The Fly',
    year: '1986',
  },
  {
    id: 20,
    title: 'IT',
    year: '1990',
  },
]

const Grid = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <DataTable
            title='Repositories'
            pagination
            columns={columns}
            data={data}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Grid
