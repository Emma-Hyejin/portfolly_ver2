import { Link } from 'react-router-dom';

import {
  LoginInputWrapper,
  LoginSubmitButton,
  LoginWrapper, LogoV2Img, LoginLinkText, LinkTextWrapper, SmallInfoText, SmallPointInfoText, TextWrapper,
} from './Login.styled';
import LogoVer2 from '@/assets/logoVer2.png';
import { BottomRoundInput, TopRoundInput } from '@/components/Input/Input';
import { LiaLockSolid, LiaUserSolid } from 'react-icons/lia';




export default function Login() {

  return (
    <LoginWrapper>
      <LogoV2Img src={LogoVer2} alt={"Portfolly"}/>
      <LoginInputWrapper>
        <TopRoundInput icon={LiaUserSolid} type={"email"} placeholder={"아이디"}/>
        <BottomRoundInput icon={LiaLockSolid} type={"password"} placeholder={"비밀번호"}/>
        <LoginSubmitButton type="submit" value="로그인"/>
      </LoginInputWrapper>
      <LinkTextWrapper>
        <LoginLinkText>비밀번호 찾기</LoginLinkText>
        <LoginLinkText>아이디 찾기</LoginLinkText>
        <Link to="/signup/agree"><LoginLinkText>회원가입</LoginLinkText></Link>
      </LinkTextWrapper>
      <TextWrapper>
        <SmallInfoText>Design by 박효정 조혜진</SmallInfoText>
        <SmallInfoText><SmallPointInfoText>Portfolly </SmallPointInfoText>
          Copyright ⓒ Portfolly Corp. All Rights Reserved.
        </SmallInfoText>
      </TextWrapper>
    </LoginWrapper>
  );
}
