import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Archiving from "./components/Archiving";
import EducationCertifications from "./components/EducationCertifications";
import Footer from "./components/Footer";
import Congraduation from "./components/Projects/Congraduation";
import ScrollToTop from "./components/ScrollToTop";
import Test from "./components/Test";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
              <EducationCertifications />

              <Skills />
              <Projects />

              <Footer />
            </Layout>
          }
        />
        <Route
          path="/projects/congraduation"
          element={
            <Layout hideSidebar>
              <Congraduation />
            </Layout>
          }
        />
        {/* 다른 라우트들을 필요에 따라 추가하세요 */}
      </Routes>
    </Router>
  );
}

export default App;
