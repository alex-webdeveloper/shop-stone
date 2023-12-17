import React, { useState } from 'react';
import { NavLink as NavLinkRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

function NavHome(props) {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
	setIsOpen(!isOpen);
	};

	return (

		<Navbar {...props}>
			<NavbarBrand to="/" tag={NavLinkRouter}>АркасКамень</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="me-auto" navbar>
				<NavItem>
					<NavLink onClick={() => setIsOpen(!isOpen)} to="/about" tag={NavLinkRouter}>О нас</NavLink>
				</NavItem>
				<NavItem>
					<NavLink onClick={() => setIsOpen(!isOpen)} to="/partneram" tag={NavLinkRouter}>Партнерам</NavLink>
				</NavItem>
				<NavItem>
					<NavLink onClick={() => setIsOpen(!isOpen)} to="/blog" tag={NavLinkRouter}>Блог</NavLink>
				</NavItem>
				<NavItem>
					<NavLink onClick={() => setIsOpen(!isOpen)} to="/contacts" tag={NavLinkRouter}>Контакты</NavLink>
				</NavItem>
				</Nav>
				<NavbarText>Пн-Вс 9:00 - 20:00</NavbarText>
			</Collapse>
		</Navbar>
  );
}

export default NavHome;