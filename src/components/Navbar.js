import React from 'react';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBIcon,
    MDBContainer
} from 'mdb-react-ui-kit';

function Navbar() {
  const [showNavSecond, setShowNavSecond] = React.useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Asset Management</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            {/* Hier können weitere Navbar Elemente platziert werden */}
          </MDBNavbarNav>

          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  <MDBIcon fas icon='user' />
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                    <MDBDropdownItem link href="/account">Account</MDBDropdownItem>
                    <MDBDropdownItem link href="/license">License</MDBDropdownItem>
                    <MDBDropdownItem link href="/logout">Logout</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;
