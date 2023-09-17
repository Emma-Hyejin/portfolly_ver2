import { useState } from 'react';

import { BottomRoundInput, MiddleRoundInput, TopRoundInput } from "@/components/Input/Input";
import { ContentWrapper, DivisionInput, LogoV2Img, RoleWrapper, SelectDivision, SignupInputWrapper, SignupRoleWrapper, SignupWrapper, SubmitButton, SubmitWrapper, TitleText } from "./SignUp.styled";
import {LiaLockSolid, LiaCalendarPlus, LiaUserCheckSolid, LiaUserSolid, LiaPhoneSolid } from "react-icons/lia";
import LogoV2 from '@/assets/logoVer2.png';
import AlertModal from '@/components/modal/AlertModal';
import { MainTitle, MiddleTitle, PointMainTitle, WelcomeWrapper } from './Welcome.styled';

export default function Signup () {
    const [ alert, setAlert ] = useState(true);
    const [ welcome, setWelcome ] = useState(false);

    const handleAlert = () => {
        setAlert(!alert);
    }

    const handleWelcome = () => {
        setWelcome(!welcome);
        
    }

    const handleTime = () => {

    // setTimeout(handleWelcome, 3000 );
    console.log(" 실행");
    }


    return(
        <>
        {welcome === true ? (

                <WelcomeWrapper>
                    <MiddleTitle>Welcome to Portfoly</MiddleTitle>
                    <MainTitle>환영합니다.</MainTitle>
                    <MainTitle>저희 <PointMainTitle>Portfolly</PointMainTitle> 와 함께 여행을 떠나세요. </MainTitle>
                </WelcomeWrapper>


        ): <SignupWrapper>
            <LogoV2Img src={LogoV2}/>

            <SignupInputWrapper>
                <TopRoundInput icon={LiaUserSolid} type={"email"} placeholder={"아이디"}/>
                <MiddleRoundInput icon={LiaLockSolid} type={"text"} placeholder={"비밀번호"}/>
                <BottomRoundInput icon={LiaUserCheckSolid} />
            </SignupInputWrapper>

            <SignupRoleWrapper>
                <RoleWrapper>
                    <TitleText>프리랜서</TitleText>
                    <ContentWrapper>
                        작업물을 전시하고 마음이 맞는 동료를 찾고 계신가요<br/>
                        저희 Portfolly 에서 만난 동료들과 함께 좋은 기회를 찾아 여행을 떠나세요!
                    </ContentWrapper>
                </RoleWrapper>
                <RoleWrapper>
                    <TitleText>기업 / 의뢰인</TitleText>
                    <ContentWrapper>
                        원하시는 스타일의 프리랜서 분들을 찾고 계신가요?<br/>
                        저희 Portfolly 에서 좋은 프리랜서분들과 작업물을 관리하세요.
                    </ContentWrapper>
                </RoleWrapper>
            </SignupRoleWrapper>

            <SignupInputWrapper>
                <TopRoundInput icon={LiaUserSolid} type={"text"} placeholder={"이름"}/>
                <MiddleRoundInput icon={LiaCalendarPlus} type={"date"} placeholder={"생년월일"} />

                    <SelectDivision>
                        <DivisionInput onClick={handleAlert}>남자</DivisionInput><DivisionInput>여자</DivisionInput>
                        { alert ? (
                            <AlertModal type={"etc"} onCancel={handleAlert} title={"죄송합니다,"} content={"어쩌구 저쩌구 심려를 끼쳐 어쩌구 저쩌구 저쩌구 "} clicked={"닫기"}/>
                        ) : null }
                    </SelectDivision>
                    <SelectDivision>
                        <DivisionInput>내국인</DivisionInput><DivisionInput>외국인</DivisionInput>
                    </SelectDivision>


                <BottomRoundInput icon={LiaPhoneSolid} type={"tel"} placeholder={"휴대전화 번호"}/>
            </SignupInputWrapper>

            <SubmitWrapper><SubmitButton type="submit" value="회원가입" onClick={handleWelcome}/></SubmitWrapper>

        </SignupWrapper> }</>
        
    )
}
