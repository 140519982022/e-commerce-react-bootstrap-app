import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

    return(
        <>
            {/* <h1>Hello im header part</h1> */}
            <Navbar className="bg-body-tertiary shadow p-3 mb-5 bg-body-tertiary" sticky="top">
                <Container>
                    <Navbar.Brand href="#home"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as : <a href="#login" className='text-danger'>Isha kose</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
        </>
    );
    
}

export default Header