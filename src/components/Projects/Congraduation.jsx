import React from "react";
import styled from "styled-components";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJava,
  FaDocker,
  FaJenkins,
} from "react-icons/fa";
import {
  SiStyledcomponents,
  SiMongodb,
  SiSpring,
  SiRecoil,
  SiMui,
} from "react-icons/si";
import { motion } from "framer-motion";
import TechCard from "./TechCard";
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

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 40px 0;
`;

const Image = styled.img`
  width: 300px;
  height: 450px;
  border-radius: 10px;
  object-fit: contain;
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
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
              사용자는 졸업 사진을 업로드하고, 친구들이 작성한 축하 메시지를
              받을 수 있습니다.
              <p>
                이를 통해 졸업생들은 자신만의 추억을 디지털 형식으로 간직할 수
                있게 됩니다.
              </p>
            </p>
            <p>
              사용자 친화적인 인터페이스와 소셜 기능을 통해 쉽게 졸업을 기념하고
              친구들과의 유대감을 강화하는 것이 주요 목표였습니다.
            </p>
          </Description>
        </Center>

        <Subtitle>기술 스택 및 선정 이유</Subtitle>
        <IconContainer>
          <TechCard
            icon={<FaReact />}
            iconColor="#61DBFB"
            techName="React"
            version="v18.2"
            reason="컴포넌트 기반의 UI 라이브러리로, 재사용성과 유지보수성을 높이기 위해 선택했습니다."
          />
          <TechCard
            icon={<FaNodeJs />}
            iconColor="#68A063"
            techName="Node.js"
            version="v20.10.0"
            reason="서버 사이드 개발을 위해 사용하였으며, JavaScript로 풀스택 개발이 가능하도록 선택했습니다."
          />
          <TechCard
            icon={<SiMui />}
            iconColor="#007FFF"
            techName="MUI"
            version="-"
            reason="React를 위한 Material Design 기반의 UI 라이브러리로, 빠른 UI 구성과 일관성 있는 디자인을 위해 선택했습니다."
          />
          <TechCard
            icon={<SiRecoil />}
            iconColor="#f24e1e"
            techName="Recoil"
            version="v0.7.7"
            reason="React 애플리케이션의 전역 상태 관리를 위해 선택했습니다."
          />
        </IconContainer>

        <Subtitle>주요 기능</Subtitle>

        <Subtitle>🎓 졸업 사진 업로드 및 다운로드</Subtitle>
        <ContentRow>
          <Image src="/images/gif1.gif" alt="졸업 사진 업로드 GIF" />
          <Image src="/images/gif2.gif" alt="졸업 사진 다운로드 GIF" />
          <TextDescription>
            <p>
              💡 사용자가 졸업 사진을 업로드하고 다운로드할 수 있는 기능입니다.
              이를 통해 사용자는 자신의 졸업 순간을 디지털 형식으로 간직할 수
              있습니다.
            </p>
            <p>
              💡 사진 업로드 과정에서 클라이언트 측에서 이미지 리사이징을 하여
              서버의 부하를 줄이고 업로드 속도를 향상시켰습니다.
            </p>
          </TextDescription>
        </ContentRow>

        <Subtitle>💬 Kakao 소셜 로그인 및 공유</Subtitle>
        <ContentRow>
          <Image src="/images/gif3.png" alt="메시지 작성 GIF" />
          <Image src="/images/gif4.gif" alt="메시지 작성 GIF" />
          <TextDescription>
            <p>
              💡 사용자는 Kakao 소셜 로그인을 통해 쉽게 계정을 생성하고 서비스를
              이용할 수 있습니다. 또한, 친구들과 졸업 메시지를 공유할 수 있는
              기능을 제공하여 사용자 간의 상호작용을 극대화했습니다.
            </p>
            <p>
              💡 작성된 메시지는 실시간으로 반영되어 롤링 페이퍼에 기록되며,
              사용자 경험을 높이는 데 기여했습니다.
            </p>
          </TextDescription>
        </ContentRow>

        <Subtitle>🚀 성능 개선 과정</Subtitle>
        <Description>
          <p>
            ❌ 초기에는 고해상도 이미지 업로드로 인해 서버에 부하가
            발생하였습니다.
          </p>

          <p>
            🔧 이를 해결하기 위해 클라이언트 측에서 이미지 리사이징을 진행하여
            파일 크기를 줄였습니다.
          </p>

          <p>
            📌 이 과정에서 Canvas API를 사용하였으며, 이를 통해 사진 업로드
            시간이 약 27% 향상되고 서버 부하를 크게 줄일 수 있었습니다.
          </p>
        </Description>

        <Subtitle>🏆 성과</Subtitle>
        <Description>
          <p>
            ⚪️ 2주간 웹서비스 운영과 사용자 모집 등 온라인 이벤트를
            진행했습니다.
          </p>
          <p>⚪️ 총 340명의 실 사용자 유치에 성공했습니다.</p>
          <p>⚪️ SSAFY 10기에서 가장 빠르게 배포 작업을 완료했습니다.</p>
          <p>
            ⚪️ 사용자 피드백을 반영한 7번의 업데이트를 통해 서비스 개선을
            이루었습니다.
          </p>
        </Description>

        <Subtitle>📄 회고</Subtitle>
        <Description>
          <p>
            본 프로젝트를 통해 사용자 경험을 중심으로 한 서비스 개선의 중요성을
            깨달았습니다. 또한, 이미지 처리와 최적화를 통해 성능 개선을 이루며
            클라이언트와 서버 간의 효율적인 통신 방식을 구현하는 데 많은 배움을
            얻었습니다.
          </p>
        </Description>
      </Container>
    </ProjectDetailSection>
  );
}

export default Congraduation;
