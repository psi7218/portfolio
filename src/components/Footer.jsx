// components/Footer.js
import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const SocialLinks = styled.div`
  margin-top: 10px;
`;

const SocialLink = styled.a`
  color: #fff;
  margin: 0 10px;
  font-size: 24px;

  &:hover {
    color: #007bff;
  }
`;

function Footer() {
  return (
    <FooterSection>
      <p>&copy; 2024 PARK SEONG IN. All rights reserved.</p>
    </FooterSection>
  );
}

export default Footer;
