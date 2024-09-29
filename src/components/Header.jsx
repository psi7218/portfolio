// components/Header.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Nav = styled.nav`
  position: fixed;
  width: calc(100% - 160px); /* 양쪽 사이드바 폭을 뺌 */
  left: 80px; /* 왼쪽 사이드바 폭 */
  background: #000;
  padding: 20px 0;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
  z-index: 999;

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;

const NavContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  & > li {
    margin-left: 30px;
  }
`;

const MenuItem = styled.li``;

const MenuLink = styled(Link)`
  cursor: pointer;
  font-weight: bold;
  color: #fff; /* 링크 색상을 흰색으로 변경 */

  &:hover {
    color: #007bff; /* 호버 시 색상 */
  }
`;

function Header() {
  return (
    <Nav>
      <NavContainer>
        <Logo>My Portfolio</Logo>
        <Menu>
          <MenuItem>
            <MenuLink to="home" smooth={true} duration={500}>
              홈
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="about" smooth={true} duration={500}>
              소개
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="skills" smooth={true} duration={500}>
              기술
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="projects" smooth={true} duration={500}>
              프로젝트
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="archiving" smooth={true} duration={500}>
              아카이빙
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="contact" smooth={true} duration={500}>
              연락처
            </MenuLink>
          </MenuItem>
        </Menu>
        {/* 햄버거 메뉴 등 기존 코드 */}
      </NavContainer>
    </Nav>
  );
}
export default Header;
