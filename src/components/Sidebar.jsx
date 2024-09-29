// components/Sidebar.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaFolderOpen,
  FaArchive,
  FaEnvelope,
} from "react-icons/fa";

const SidebarContainer = styled.div`
  width: 80px;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0px;

  z-index: 1000;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarMenu = styled.ul`
  list-style: none;
`;

const SidebarItem = styled.li`
  margin: 20px 0;
`;

const SidebarLink = styled(Link)`
  cursor: pointer;
  font-size: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }

  & > span {
    font-size: 12px;
    margin-top: 5px;
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarMenu>
        <SidebarItem>
          <SidebarLink to="home" smooth={true} duration={500}>
            <FaHome />
            <span>Home</span>
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="skills" smooth={true} duration={500}>
            <FaLaptopCode />
            <span>Skills</span>
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="projects" smooth={true} duration={500}>
            <FaFolderOpen />
            <span>Projects</span>
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="archiving" smooth={true} duration={500}>
            <FaArchive />
            <span>Archiving</span>
          </SidebarLink>
        </SidebarItem>
      </SidebarMenu>
    </SidebarContainer>
  );
}
export default Sidebar;
