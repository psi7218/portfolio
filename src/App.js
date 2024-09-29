// App.js
import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Archiving from "./components/Archiving";
import EducationCertifications from "./components/EducationCertifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
`;
const MainContent = styled.main`
  flex: 1;
  background-color: #000; /* 배경색을 사이드바와 동일하게 검정으로 설정 */
  flex-direction: column;
  align-items: center; /* 수평 가운데 정렬 */
`;

const EmptySpace = styled.div`
  width: 80px;
  @media (max-width: 768px) {
    display: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Header /> */}
      <Layout>
        <Sidebar />
        <MainContent>
          <Home />
          {/* <About /> */}
          <EducationCertifications />
          <Skills />
          <Projects />
          <Archiving />
          {/* <Contact /> */}
          <Footer />
        </MainContent>
        {/* <EmptySpace /> */}
      </Layout>
    </>
  );
}

export default App;
