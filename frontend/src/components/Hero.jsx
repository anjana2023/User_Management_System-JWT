import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);
   
  
  return (
    <div className=' py-5'>
     {userInfo ? (
            <>
          <Container className='d-flex justify-content-center '>
        <Card className='p-5 d-flex flex-column align-items-center '  style={{ border: '1px solid #323' }}>
          <h4 className='text-center mb-4'>MERN Authentication</h4>
          <h1 className='text-center mb-4'>WELCOME</h1>      
          </Card>
         

          </Container>
          </>):(
          <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
        <p className='text-center mb-4'>MERN Authentication</p>
          <h1 className='text-center mb-4'>WELCOME </h1>  
          <div className='d-flex'>
            <LinkContainer to='/login'>
            <Button variant='primary' className='me-3'>
              Sign In
            </Button>
            </LinkContainer>
            <LinkContainer to='/register'>
            <Button variant='secondary'>
              Sign Up 
            </Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
          )}
    </div>
          

  );
};

export default Hero;