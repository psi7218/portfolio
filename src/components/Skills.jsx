// components/Skills.js
import React from "react";
import styled from "styled-components";
import {
  FaReact,
  FaJs,
  FaDocker,
  FaAws,
  FaPython,
  FaJava,
} from "react-icons/fa"; // 필요한 아이콘 임포트
import {
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiRecoil,
  SiStyledcomponents,
  SiSpringboot,
} from "react-icons/si";

const SkillsSection = styled.section`
  padding: 80px 0;
  //   background-color: #111;
  color: #fffcec;
  font-family: suit;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
`;

const Container = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
  text-align: center;
`;

const CategoryContainer = styled.div`
  margin-bottom: 40px;
`;

const CategoryTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: left;
  color: #fffcec;
`;

const SkillsGrid = styled.div`
  display: flex; /* flex 레이아웃으로 변경 */
  flex-wrap: wrap; /* 줄바꿈 허용 */
  gap: 10px; /* 간격 조정 */
  justify-content: flex-start; /* 왼쪽 정렬 */
`;

const SkillCard = styled.div`
  display: flex; /* 가로 배치를 위해 flex 사용 */
  align-items: center; /* 수직 중앙 정렬 */
  background-color: #1e1e1e;
  padding: 10px 15px; /* 패딩 조정 */
  border-radius: 10px;
  transition: transform 0.3s;
  min-width: 120px; /* 최소 너비 설정 */

  &:hover {
    transform: translateY(-5px);
  }
`;
const SkillIcon = styled.div`
  font-size: 20px; /* 아이콘 크기 조정 */
  margin-right: 8px; /* 아이콘과 이름 사이 간격 */
`;

const SkillName = styled.p`
  font-size: 14px; /* 폰트 크기 조정 */
  font-weight: bold;
  margin: 0; /* 마진 제거 */
`;

function Skills() {
  const skillCategories = [
    {
      category: "Language",
      skills: [
        { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript color="#007ACC" /> },
        { name: "Python", icon: <FaPython color="#3776AB" /> },
        { name: "Java", icon: <FaJava color="#0C86C1" /> },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: <FaReact color="#61DBFB" /> },
        { name: "Recoil", icon: <SiRecoil color="#3578E5" /> },
        {
          name: "Styled-Components",
          icon: <SiStyledcomponents color="#DB7093" />,
        },
      ],
    },
    {
      category: "Backend / Database",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      ],
    },
    {
      category: "DevOps",
      skills: [
        { name: "Docker", icon: <FaDocker color="#2496ED" /> },
        { name: "AWS", icon: <FaAws color="#FF9900" /> },
      ],
    },
  ];
  return (
    <SkillsSection id="skills">
      <Container>
        <Title>✍ SKILLS</Title>
        {skillCategories.map((category, index) => (
          <CategoryContainer key={index}>
            <CategoryTitle>{category.category}</CategoryTitle>
            <SkillsGrid>
              {category.skills.map((skill, idx) => (
                <SkillCard key={idx}>
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                </SkillCard>
              ))}
            </SkillsGrid>
          </CategoryContainer>
        ))}
      </Container>
    </SkillsSection>
  );
}

export default Skills;
