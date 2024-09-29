import React from "react";
import styled from "styled-components";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJava,
  FaDocker,
  FaJenkins,
} from "react-icons/fa"; // react-icons 사용
import { SiStyledcomponents, SiMongodb, SiSpring } from "react-icons/si";

const ProjectDetailSection = styled.section`
  padding: 100px 0;
  background-color: #000;
  color: #fffcec;
  font-family: suit;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;

const Subtitle = styled.h3`
  font-size: 30px;
  margin-bottom: 15px;
  align-items: center;
  gap: 10px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 40px;
  text-indent: 40px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
`;

// 각 기술 아이콘 스타일
const TechCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  padding: 20px;
  background-color: #111;
  border-radius: 10px;
  color: #fff;
  text-align: center;
`;

const Icon = styled.div`
  font-size: 50px;
  margin-bottom: 10px;
`;

const TechName = styled.h4`
  font-size: 18px;
  margin: 0;
  color: #fffcec;
`;

const Version = styled.span`
  font-size: 14px;
  color: #aaa;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; /* 이미지 사이 간격 조절 */
  margin: 40px 0;
`;

const Image = styled.img`
  width: 300px; /* 이미지 크기 조절 */
  height: 450px;
  border-radius: 10px;
  object-fit: contain;
`;
const ContentRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* 요소 간의 간격 */
  margin: 40px 0;
`;

const TextDescription = styled.div`
  width: 300px;
  font-size: 18px;
  color: #fffcec;
  line-height: 1.6;
  padding: 20px;
  background-color: #1a1a1a;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: justify;
`;
const Center = styled.div`
  justify-content: center;
  text-align: center;
`;
const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const LinkItem = styled.a`
  color: #fffcec;
  font-size: 18px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

function Congraduation() {
  return (
    <ProjectDetailSection>
      <Container>
        <Title>🎓 얘들아 나 졸업해! - 졸업 사진 롤링페이퍼 웹 서비스</Title>
        <LinksContainer>
          <LinkItem
            href="https://zest-fact-d42.notion.site/0169c665e8c14220bcc2c57fa561cf65"
            target="_blank"
            rel="noopener noreferrer"
          >
            📑 Notion 링크
          </LinkItem>
          <LinkItem
            href="https://github.com/Yaenajol/congraduation"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐱 GitHub 링크
          </LinkItem>
        </LinksContainer>

        <ImageContainer>
          <Image src="/images/cap.png" alt="프로젝트 이미지 1" />
          <Image src="/images/favicon.png" alt="프로젝트 이미지 2" />
        </ImageContainer>

        <Center>
          <Subtitle>프로젝트 개요</Subtitle>
          <Description>
            <p>
              '얘들아 나 졸업해!'는 졸업을 기념하기 위해 친구들과 사진과
              메시지를 주고받을 수 있는 롤링 페이퍼 웹 서비스입니다.{" "}
            </p>
            <p>
              사용자는 졸업 사진을 업로드하고, 친구들이 남긴 메시지를 통해
              졸업을 축하받을 수 있습니다.
            </p>
            <p>
              본 프로젝트는 사용자 친화적인 인터페이스를 제공하고, 다양한 사용자
              피드백을 반영하여 총 7번의 업데이트를 통해 개선되었습니다.
            </p>
          </Description>
        </Center>

        <Subtitle>사용 기술 스택</Subtitle>
        <IconContainer>
          <TechCard>
            <Icon style={{ color: "#61DBFB" }}>
              <FaReact />
            </Icon>
            <TechName>React</TechName>
            <Version>v18.2</Version>
          </TechCard>

          <TechCard>
            <Icon style={{ color: "#68A063" }}>
              <FaNodeJs />
            </Icon>
            <TechName>Node.js</TechName>
            <Version>v20.10.0</Version>
          </TechCard>

          <TechCard>
            <Icon style={{ color: "#007FFF" }}>
              <SiMongodb />
            </Icon>
            <TechName>MUI</TechName>
            <Version>-</Version>
          </TechCard>

          <TechCard>
            <Icon style={{ color: "#f24e1e" }}>
              <SiStyledcomponents />
            </Icon>
            <TechName>Recoil</TechName>
            <Version>v0.7.7</Version>
          </TechCard>

          <TechCard>
            <Icon style={{ color: "#F7DF1E" }}>
              <FaJava />
            </Icon>
            <TechName>Java</TechName>
            <Version>jdk 17.0.9</Version>
          </TechCard>

          <TechCard>
            <Icon style={{ color: "#6DB33F" }}>
              <SiSpring />
            </Icon>
            <TechName>Spring Boot</TechName>
            <Version>v3.2</Version>
          </TechCard>

          <TechCard>
            <Icon style={{ color: "#FFCA28" }}>
              <FaDatabase />
            </Icon>
            <TechName>MySQL</TechName>
            <Version>v8.0.34</Version>
          </TechCard>

          <TechCard>
            <Icon style={{ color: "#2496ED" }}>
              <FaDocker />
            </Icon>
            <TechName>Docker</TechName>
            <Version>-</Version>
          </TechCard>

          <TechCard>
            <Icon style={{ color: "#D24939" }}>
              <FaJenkins />
            </Icon>
            <TechName>Jenkins</TechName>
            <Version>-</Version>
          </TechCard>
        </IconContainer>

        <Subtitle>주요 기능</Subtitle>

        <Subtitle>🎓 졸업 사진 업로드 및다운로드</Subtitle>
        <ContentRow>
          <Image src="/images/gif1.gif" alt="졸업 사진 업로드 GIF" />
          <Image src="/images/gif2.gif" alt="졸업 사진 다운로드 GIF" />
          <TextDescription>
            사용자는 졸업 사진을 업로드하고 롤링 페이퍼에 공유할 수 있습니다.
            사진은 즉시 업로드되며, 각 친구들이 남긴 메시지와 함께 졸업을
            기념하는 기능입니다.
          </TextDescription>
        </ContentRow>

        <Subtitle>💬 Kakao 소셜 로그인 및 공유</Subtitle>
        <ContentRow>
          <Image src="/images/gif3.png" alt="메시지 작성 GIF" />
          <Image src="/images/gif4.gif" alt="메시지 작성 GIF" />
          <TextDescription>
            친구들이 작성한 메시지를 확인하고, 새롭게 메시지를 남길 수 있는
            기능을 제공합니다. 작성된 메시지는 실시간으로 반영되어 롤링 페이퍼에
            기록됩니다.
          </TextDescription>
        </ContentRow>

        <Subtitle>🚀 문제 해결 과정</Subtitle>
        <Description>
          <p>❌ 고해상도 이미지 업로드로 인한 서버 부하</p>

          <p>
            🔧 Client측 Canvas API를 사용하여 이미지 리사이징을 통해 파일 크기
            축소
          </p>

          <p>
            📌 사진 업로드 시간이 약 27% 향상 , 또한 서버 부하를 줄일 수 있었음
          </p>
        </Description>

        <Subtitle>🏆 성과</Subtitle>
        <Description>
          <p>⚪️ 2주간 웹서비스 운영과 사용자 모집 등 온라인 이벤트 발생 </p>
          <p>⚪️ 총 340명의 실 사용자 유치</p>
          <p>⚪️ SSAFY 10기에서 가장 빠른 배포 작업 진행</p>
        </Description>
      </Container>
    </ProjectDetailSection>
  );
}

export default Congraduation;
