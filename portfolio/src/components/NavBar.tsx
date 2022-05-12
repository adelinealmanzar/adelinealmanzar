import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const StyledNav = styled.nav`
    position: sticky;
    z-index: 100;
    display: flex;
    justify-content: space-around;
`

function NavBar() {
  return (
    <StyledNav>
        <Link to="about" smooth={true} duration={500} offset={50}>About</Link>
        <a href='#'>Projects</a>
        <a href='#'>Experience</a>
        <a href='#'>Resume</a>
        <a href='#'>Contact</a>
    </StyledNav>
  )
}

export default NavBar
