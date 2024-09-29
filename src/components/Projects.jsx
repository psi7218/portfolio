// components/Projects.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsSection = styled.section`
  padding: 100px 0;
  background-color: #000;
  color: #fffcec;
  font-family: suit;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 60px;
  font-size: 36px;
  color: #fffcec;
  font-family: suit;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  color: #fffcec;
  font-family: suit;
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
  color: #fffcec;
  font-family: suit;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #fffcec;
  font-family: suit;
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
          PROJECTS
        </Title>
        <ProjectsGrid>
          <ProjectCard as={motion.div} whileHover={{ scale: 1.05 }}>
            <ProjectImage src="/images/cap.png" alt="프로젝트 이미지" />
            <ProjectContent>
              <ProjectTitle>얘들아 나 졸업해!</ProjectTitle>
              <ProjectDescription>
                졸업 사진 롤링페이퍼 웹 서비스
              </ProjectDescription>
            </ProjectContent>
          </ProjectCard>
          <ProjectCard as={motion.div} whileHover={{ scale: 1.05 }}>
            <ProjectImage
              src="/images/all_clear_logo.png"
              alt="프로젝트 이미지"
            />
            <ProjectContent>
              <ProjectTitle>ALL Clear</ProjectTitle>
              <ProjectDescription>
                Ondevice-AI를 활용한 스마트팜 구현 프로젝트
              </ProjectDescription>
            </ProjectContent>
          </ProjectCard>
          <ProjectCard as={motion.div} whileHover={{ scale: 1.05 }}>
            <ProjectImage src="/images/han_logo.png" alt="프로젝트 이미지" />
            <ProjectContent>
              <ProjectTitle>한솥밥</ProjectTitle>
              <ProjectDescription>
                공유냉장고 활성화를 위한 프로젝트
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
