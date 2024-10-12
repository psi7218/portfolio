import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import EducationCertifications from "./components/EducationCertifications";
import Footer from "./components/Footer";
import Congraduation from "./components/Projects/Congraduation";
import ScrollToTop from "./components/ScrollToTop";
import Allclear from "./components/Projects/Allclear";
import Hansotbab from "./components/Projects/Hansotbab";

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
        <Route
          path="/projects/allclear"
          element={
            <Layout hideSidebar>
              <Allclear />
            </Layout>
          }
        />
        <Route
          path="/projects/hansotbab"
          element={
            <Layout hideSidebar>
              <Hansotbab />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
