// components/About.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutSection = styled.section`
  padding: 100px 0;
  background-color: #000; /* 배경색을 검은색으로 설정 */
  color: #fff; /* 텍스트 색상을 흰색으로 설정 */
  text-align: center;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 40px;
  color: #fff;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #ccc;
`;

function About() {
  return (
    <AboutSection id="about">
      <Container>
        <Title
          as={motion.h2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          소개
        </Title>
        <Text
          as={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          여기에 자기소개 글을 작성하세요. 경력, 기술, 목표 등을 포함할 수
          있습니다.
        </Text>
      </Container>
    </AboutSection>
  );
}

export default About;
