import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/home">UserApp</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/usuarios">Usuários</Nav.Link>
                        <Nav.Link href="/contato">Contato</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Link to={'/login'}>
                            Sair
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
