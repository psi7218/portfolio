import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaBlogger } from "react-icons/fa";

const HomeSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: row; /* 수평 정렬 */
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  background-color: #000;
  color: #fff;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 120px 20px;
    text-align: center;
  }
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const IntroPhraseLine = styled.h1`
  font-size: 48px;
  margin: 0;
  color: #fffcec;
  font-family: suit;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;
const ProfileContainer = styled.div`
  display: flex;
  align-items: center; /* 사진과 텍스트를 수평 정렬 */
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-right: 30px;
  margin-top: 20px;

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
  margin-bottom: -10px;
`;

const InfoItem = styled.p`
  font-size: 18px;
  margin-bottom: -10px;
  font-weight: 700;
`;

const IntroText = styled.p`
  font-size: 18px;
  margin-top: 20px;
  line-height: 1.5;
`;

const ArchivingWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  padding-right: 30%;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 50px;
  }
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

function Home() {
  return (
    <HomeSection id="home">
      <IntroContainer>
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
        <ProfileContainer>
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
        </ProfileContainer>
      </IntroContainer>

      <ArchivingWrapper>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          🔗 ARCHIVING
        </motion.h2>
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
      </ArchivingWrapper>
    </HomeSection>
  );
}

export default Home;
