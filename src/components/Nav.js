import React, { useEffect } from 'react'
import styled from 'styled-components'

const Nav = () => {

  const [show, setShow] = React.useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    })
    return () => {
        window.removeEventListener('scroll', null);
      }
  },[])

  return (
    <NavWapper show={show}>
      <Logo>
        <img alt='DisneyPlusLogo' src='/images/Logo.svg' 
              onClick={() => { window.location.href = '/' }}/>
      </Logo>
    </NavWapper>
  )
}

export default Nav

const NavWapper = styled.nav`
  position: fixed; // 스크롤해도 상단 고정
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${props => props.show ? "#090b13" :  "transparent"} ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3; // 다른 요소들 위에 표시되도록
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;