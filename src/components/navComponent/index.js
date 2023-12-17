import React, { useState } from 'react';
import './index.scss';
import { NavLink as NavLinkRouter} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem

} from 'reactstrap';

function NavComponent(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
      <Navbar {...props} id='header-nav'>
        <NavbarBrand to="/" tag={NavLinkRouter}>Аркаскамень</NavbarBrand>
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
              <NavLink onClick={() => setIsOpen(!isOpen)} to="/contacts" tag={NavLinkRouter}>Контакты</NavLink>
            </NavItem>
          </Nav>
          <Nav className="me-auto" navbar >
            <NavItem>
                <NavLink onClick={() => setIsOpen(!isOpen)} to="/mramor" tag={NavLinkRouter}>Мрамор</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink onClick={() => setIsOpen(!isOpen)} to="/proekty" tag={NavLinkRouter}>Наши проекты</NavLink>
            </NavItem>
             <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Изделия из мрамора
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem tag={NavLinkRouter} onClick={() => setIsOpen(!isOpen)} to="/izdeliya-iz-mramora/lestnicy-stupeni">
                    Лестницы, ступени
                  </DropdownItem>
                  <DropdownItem tag={NavLinkRouter} onClick={() => setIsOpen(!isOpen)} to="/izdeliya-iz-mramora/kaminy-portaly">
                    Камины, порталы
                  </DropdownItem>
                  <DropdownItem tag={NavLinkRouter} onClick={() => setIsOpen(!isOpen)} to="/izdeliya-iz-mramora/stoly-stoleshnicy">
                    Столы, столешницы
                  </DropdownItem>
                  <DropdownItem tag={NavLinkRouter} onClick={() => setIsOpen(!isOpen)} to="/izdeliya-iz-mramora/podokonniki">
                    Подоконники
                  </DropdownItem>
                  <DropdownItem tag={NavLinkRouter} onClick={() => setIsOpen(!isOpen)} to="/izdeliya-iz-mramora/plitka-bruschatka">
                    Плитка, брусчатка
                  </DropdownItem>
                  <DropdownItem tag={NavLinkRouter} onClick={() => setIsOpen(!isOpen)} to="/izdeliya-iz-mramora/oblicovka-fasadov">
                    Облицовка фасадов
                  </DropdownItem>
                  <DropdownItem tag={NavLinkRouter} onClick={() => setIsOpen(!isOpen)} to="/izdeliya-iz-mramora/design">
                    Индивидуальные решения
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Пн-Вс 9:00 - 20:00</NavbarText>
        </Collapse>
      </Navbar>
  );
}

export default NavComponent;