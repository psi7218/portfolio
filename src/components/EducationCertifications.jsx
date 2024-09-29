// components/EducationCertifications.js
import React from "react";
import { FaUniversity, FaCertificate } from "react-icons/fa";
import styled from "styled-components";

const Section = styled.section`
  padding: 80px 0;
  color: #fffcec;
  font-family: suit;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
`;

const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 40px; /* 좌우 섹션 사이의 간격 */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SubSection = styled.div`
  flex: 1;
`;

const SubsectionTitle = styled.div`
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  margin-bottom: 20px;
`;

const ItemIcon = styled.div`
  font-size: 28px;
  margin-right: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0; /* 마진 제거로 수평 정렬시 간격 최소화 */
`;
const Item = styled.div`
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  margin-bottom: 15px;
  gap: 10px; /* 요소 사이의 간격을 10px로 설정 */
`;

const ItemTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px; /* 간격을 10px로 설정 */
`;

const ItemDetails = styled.span`
  font-size: 16px;
`;

function EducationCertifications() {
  const educationData = [
    {
      institution: "부산대학교 (조선해양공학과)",
      period: "2015 - 2022",
    },
    {
      institution: "SSAFY",
      period: "2023.07 - 2024.06",
    },
    // 추가 학력 사항
  ];

  const certificationsData = [
    {
      title: "SQLD",
      date: "2020년 5월",
    },
    {
      title: "OPIC IM1",
      date: "2021년",
    },
    // 추가 자격증 사항
  ];

  return (
    <Section id="education">
      <Container>
        {/* Education 섹션 */}
        <SubSection>
          <SubsectionTitle>
            <ItemIcon>
              <FaUniversity />
            </ItemIcon>
            <Title>Education</Title>
          </SubsectionTitle>

          {educationData.map((edu, index) => (
            <Item key={index}>
              <ItemTitle>{edu.institution}</ItemTitle>
              <ItemDetails>{edu.period}</ItemDetails>
            </Item>
          ))}
        </SubSection>

        {/* Certifications 섹션 */}
        <SubSection>
          <SubsectionTitle>
            <ItemIcon>
              <FaCertificate />
            </ItemIcon>
            <Title>Certifications</Title>
          </SubsectionTitle>

          {certificationsData.map((cert, index) => (
            <Item key={index}>
              <ItemTitle>{cert.title}</ItemTitle>
              <ItemDetails>{cert.date}</ItemDetails>
            </Item>
          ))}
        </SubSection>
      </Container>
    </Section>
  );
}

export default EducationCertifications;
