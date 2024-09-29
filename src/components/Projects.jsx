// components/Projects.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsSection = styled.section`
  padding: 100px 0;
  background-color: #000; /* 배경색을 검은색으로 설정 */
  color: #fff; /* 텍스트 색상을 흰색으로 설정 */
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 60px;
  color: #fff;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const ProjectCard = styled.div`
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 20px;
  background-color: #111; /* 카드 배경색 어둡게 */
`;

const ProjectTitle = styled.h3`
  margin-bottom: 15px;
  color: #fff;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #ccc;
`;

function Projects() {
  return (
    <ProjectsSection id="projects">
      <Container>
        <Title
          as={motion.h2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          프로젝트
        </Title>
        <ProjectsGrid>
          <ProjectCard as={motion.div} whileHover={{ scale: 1.05 }}>
            <ProjectImage src="/images/project1.jpg" alt="프로젝트 이미지" />
            <ProjectContent>
              <ProjectTitle>프로젝트 제목 1</ProjectTitle>
              <ProjectDescription>
                프로젝트 설명을 여기에 작성하세요.
              </ProjectDescription>
            </ProjectContent>
          </ProjectCard>
          {/* 추가 프로젝트 카드 */}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
}

export default Projects;
