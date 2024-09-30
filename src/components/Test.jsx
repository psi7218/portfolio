import React from "react";
import styled from "styled-components";

const ContactWrapper = styled.div`
  text-align: center;
  margin: 20px 0;
  font-size: 16px;
  color: #fffcec;
  font-family: suit;
`;

const ContactItem = styled.p`
  margin: 5px 0;
`;

const ContactLink = styled.a`
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;

function Test() {
  return (
    <ContactWrapper>
      <ContactItem>
        Tel: <ContactLink href="tel:01045287218">010-4528-7218</ContactLink>
      </ContactItem>
      <ContactItem>
        Email:{" "}
        <ContactLink href="mailto:psi7218@naver.com">
          psi7218@naver.com
        </ContactLink>
      </ContactItem>
    </ContactWrapper>
  );
}

export default Test;
