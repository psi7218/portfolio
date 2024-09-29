// components/Footer.js
import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

function Footer() {
  return (
    <FooterSection>
      <p>&copy; 2024 PARK SEONG IN. All rights reserved.</p>
    </FooterSection>
  );
}

export default Footer;
