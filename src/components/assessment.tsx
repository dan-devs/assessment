import { Col, Container, Row } from 'react-bootstrap'

const Assessment = () => {
  return (
    <Container fluid className='mt-2'>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h4>On the Grid page</h4>
          <ul>
            <li>Add an input to enter a github users username</li>
            <li>Add a button to retrieve the entered users repositores</li>
            <li>
              Modify to display the users repositories with the columns: Repo
              name, Language, Date created, Date updated
            </li>
            <li>Add sorting on all columns other than language</li>
            <li>Deal with errors coming from Github</li>
          </ul>

          <h4>On the User page</h4>
          <ul>
            <li>Add the missing User component</li>
            <li>Wire up the routing to the User page</li>
            <li>
              Reuse the input and button components to retrieve a users details
            </li>
            <li>Display the returned users Avatar, Name and Email</li>
          </ul>

          <h4>Submitting the solution</h4>
          <p>
            Copy this repository to a repository under your own github account.
            (Do not fork) It should be clear how to build and run the project
            locally. <br />
            TODO - figure out how to annonymise commits directly to this repo
          </p>

          <h4>Evaluation</h4>
          <p>
            Your work will be evaluated for functional completeness based on the
            above stated goal. Additionally it will be reviewed with the
            following criteria in mind:
          </p>
          <ul>
            <li>Following convention</li>
            <li>Implementation choices</li>
            <li>Correctly using types</li>
            <li>Readability and code cleanliness</li>
          </ul>
          <p>
            Successful candidates will be asked to provide any insights
            regarding their choices and practices.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Assessment
