import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const TechCardContainer = styled(motion.div)`
  width: 150px;
  height: 180px;
  perspective: 1000px;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  ${TechCardContainer}:hover & {
    transform: rotateY(180deg);
  }
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #111;
  border-radius: 10px;
  border: 1px solid white;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardBack = styled(CardFront)`
  background-color: #1a1a1a;
  transform: rotateY(180deg);
  padding: 10px;
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

const ReasonText = styled.p`
  font-size: 14px;
  color: #fffcec;
  padding: 10px;
  text-align: center;
`;

function TechCard({ icon, iconColor, techName, version, reason }) {
  return (
    <TechCardContainer whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <CardInner>
        <CardFront>
          <Icon style={{ color: iconColor }}>{icon}</Icon>
          <TechName>{techName}</TechName>
          <Version>{version}</Version>
        </CardFront>
        <CardBack>
          <ReasonText>{reason}</ReasonText>
        </CardBack>
      </CardInner>
    </TechCardContainer>
  );
}

export default TechCard;
