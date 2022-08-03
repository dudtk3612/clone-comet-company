import React from 'react';
import { AboutBox } from './styles';

const About = () => {
  return (
    <AboutBox>
      <div className='content-top'>
        <span>BE POSITIVE</span>
        <div>We are focusing on offering positive feedback.</div>
        <p>긍정적인 사고와 적극적인 행동이 새로운 가치를 만듭니다.</p>
      </div>
      <div className='content-bottom'>
        <div>
          <div className='bottom-text-top'>
            {' '}
            Creativity just connecting things.{' '}
          </div>
          <div className='bottom-text-bottom'>Steve jobs</div>
        </div>
      </div>
    </AboutBox>
  );
};

export default About;
