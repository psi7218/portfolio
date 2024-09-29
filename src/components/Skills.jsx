// components/Skills.js
import React from "react";
import styled from "styled-components";
import { FaReact, FaJs, FaDocker, FaAws, FaPython } from "react-icons/fa"; // 필요한 아이콘 임포트
import { SiTypescript, SiRedux } from "react-icons/si";

const SkillsSection = styled.section`
  padding: 100px 0;
  background-color: #111;
  color: #fff;
`;

const Container = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 60px;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 30px;
`;

const SkillCard = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const SkillIcon = styled.div`
  font-size: 50px;
  margin-bottom: 15px;
`;

const SkillName = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

function Skills() {
  const skills = [
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript color="#007ACC" /> },
    { name: "Docker", icon: <FaDocker color="#0366A6" /> },
    { name: "Aws", icon: <FaAws color="" /> },
    { name: "Python", icon: <FaPython /> },
    // 필요한 만큼 추가
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <Title>Skills</Title>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard key={index}>
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
}

export default Skills;
