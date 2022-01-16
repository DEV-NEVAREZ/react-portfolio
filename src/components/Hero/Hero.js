import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle>
      Welcome To <br />
      My Personal Portfolio
     </SectionTitle>
     <SectionText>
       The purpose of Javascript Mastery is to show pontential clients the posiblity of what I can do for them and their webistes
     </SectionText>
     <Button onClick={()=> window.location='https://google.com'}>Learn More</Button>
   </LeftSection>
 </Section>
);

export default Hero;