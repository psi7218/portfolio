// components/Archiving.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaBlogger } from "react-icons/fa";

const ArchivingSection = styled.section`
  padding: 100px 0;
  background-color: #000;
  color: #fffcec;
  font-family: suit;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
`;

const Container = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 60px;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const LinkCard = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }

  & > svg {
    font-size: 50px;
    margin-bottom: 15px;
  }
`;

function Archiving() {
  return (
    <ArchivingSection id="archiving">
      <Container>
        <Title
          as={motion.h2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          🔗 ARCHIVING
        </Title>
        <LinksWrapper>
          <LinkCard
            href="https://github.com/psi7218"
            target="_blank"
            rel="noopener noreferrer"
            as={motion.a}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaGithub />
            GitHub
          </LinkCard>
          <LinkCard
            href="https://velog.io/@psi7218/posts"
            target="_blank"
            rel="noopener noreferrer"
            as={motion.a}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaBlogger />
            Velog
          </LinkCard>
        </LinksWrapper>
      </Container>
    </ArchivingSection>
  );
}

export default Archiving;
