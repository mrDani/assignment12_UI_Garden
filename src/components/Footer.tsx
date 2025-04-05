import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: #0a0a0a;
  color: #4db8ff;
  border-top: 1px solid #333;
`;

const Footer = () => (
  <FooterContainer>
    Daniel Babalola © 2025 - All Rights Reserved
  </FooterContainer>
);

export default Footer;
