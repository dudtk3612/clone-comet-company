import { MailOutlined } from '@ant-design/icons';

import React, { useCallback } from 'react';

import useInput from '../../util/useInput';
import { Global } from '../Content/styles';
import {
  Btn,
  BtnWrapper,
  EmailInput,
  FooterBox,
  FormBox,
  MsgInput,
  TextInput,
} from './styles';

const FooterOne = () => {
  const [user, onChangeUser, setUser] = useInput('');
  const [email, onChangeEmail, setEmail] = useInput('');
  const [company, onChangeCompany, setCompany] = useInput('');
  const [msg, onChangeMsg, setMsg] = useInput('');

  const onSubmitAsk = useCallback(() => {
    alert('빠른 시일내에 연락드리겠습니다.');
    setUser('');
    setEmail('');
    setCompany('');
    setMsg('');
  }, []);

  return (
    <FooterBox>
      <Global />
      <FormBox onFinish={onSubmitAsk}>
        <span>BE ACTIVE</span>
        <div>
          <h3>
            GET IN TOUCH WITH <span>COMETS</span>
          </h3>
          <p>
            (주)&nbsp;코멧
            <br />
            경기 성남시 분당구 판교역로 240, (삼평동) 410호
            <br />
            <MailOutlined />
            &nbsp; help@comets.kr
            <br />
            <br />
            문의 사항을 남기시면 빠른 시일 내에 답변 드리겠습니다.
          </p>
        </div>
        <div className='input-box'>
          <div>
            <TextInput
              required
              name='user'
              value={user}
              onChange={onChangeUser}
              type='text'
              placeholder='이름'
            />
          </div>
          <div>
            <EmailInput
              name='email'
              value={email}
              onChange={onChangeEmail}
              type='email'
              placeholder='이메일'
              required
            />
          </div>
          <div>
            <TextInput
              required
              name='company'
              value={company}
              onChange={onChangeCompany}
              type='text'
              placeholder='회사'
            />
          </div>
          <div>
            <MsgInput
              required
              name='msg'
              value={msg}
              onChange={onChangeMsg}
              type='text'
              placeholder='메시지'
            />
          </div>
        </div>
        <BtnWrapper>
          <Btn htmlType='submit'>문의하기</Btn>
        </BtnWrapper>
      </FormBox>
    </FooterBox>
  );
};

export default FooterOne;
