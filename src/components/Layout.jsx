import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
`;

const MainContent = styled.main`
  flex: 1;
  background-color: #000;
  flex-direction: column;
  align-items: center;
`;

function Layout({ children, hideSidebar }) {
  return (
    <LayoutContainer>
      {!hideSidebar && <Sidebar />} {/* Sidebar를 보이지 않도록 설정 */}
      <MainContent>{children}</MainContent>
    </LayoutContainer>
  );
}

export default Layout;
