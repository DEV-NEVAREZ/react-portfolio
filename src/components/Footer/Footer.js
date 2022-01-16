import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:111-111-11111">111-111-11111</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:dev.lar.scl@gmail.com">dev.lar.scl@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialIcons>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
          <SocialIcons href="https://github.com/DEV-NEVAREZ">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="http://linkedin.com">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons><SocialIcons href="https://instagram.com">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
        </CompanyContainer>
        </SocialIcons>
       </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
