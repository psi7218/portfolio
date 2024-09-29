// components/Home.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  justify-content: center;
  padding-top: 80px;
  background-color: #000;
  color: #fff;
  position: relative;

  @media (max-width: 768px) {
    padding-top: 120px;
    text-align: center;
  }
`;

const IntroPhraseContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 150px; /* 헤더 아래 공간 */
  left: 0;
  right: 0;
  padding: 0 80px; /* 좌우 패딩 */

  @media (max-width: 768px) {
    position: static;
    padding: 0 20px;
  }
`;

const IntroPhraseLine = styled.h1`
  font-size: 48px;
  margin: 0;
  color: #fffcec;
  font-family: suit;
  font-weight: 700;
  line-height: 1.2;

  //   &:first-child {
  //     text-align: center;
  //   }

  //   &:last-child {
  //     text-align: center;
  //   }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Container = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-top: 200px; /* 소개 문구 아래로 공간 확보 */

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 100px;
  }
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-right: 30px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #fffcec;
  font-family: suit;
`;

const NameTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`;

const InfoItem = styled.p`
  font-size: 18px;
  margin-bottom: 0px;
  font-weight: 700;
`;

const IntroText = styled.p`
  font-size: 18px;
  margin-top: 20px;
  line-height: 1.5;
`;

function Home() {
  return (
    <HomeSection id="home">
      <IntroPhraseContainer>
        <IntroPhraseLine
          as={motion.h1}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          SEONG-IN
        </IntroPhraseLine>
        <IntroPhraseLine
          as={motion.h1}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          PORTFOLIO
        </IntroPhraseLine>
      </IntroPhraseContainer>
      <Container>
        <ProfileImage
          src="/images/mypic.jpg"
          alt="프로필 사진"
          as={motion.img}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <InfoWrapper
          as={motion.div}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <NameTitle>박성인</NameTitle>
          <InfoItem>1996. 07. 17</InfoItem>
          <InfoItem>Frontend Developer</InfoItem>
          <IntroText>
            복잡한 문제를 해결하는 즐거움을 알고
            <br />그 여정을 기록하며 성장하는 개발자 지망생
          </IntroText>
        </InfoWrapper>
      </Container>
    </HomeSection>
  );
}

export default Home;
