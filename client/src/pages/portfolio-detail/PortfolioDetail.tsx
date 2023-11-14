/* 2023-07-07 포트폴리오 상세보기 페이지 - 김다함 */
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import useChangeHtmlContent from '@/hooks/useChangeHtmlContent';
import { call } from '@/utils';
import { Portfolio, Member, Tag } from '@/types';
import Image from '@/commons/atoms/image/Image';

import {
  ButtonHeader,
  ContentContainer,
  DeleteButton,
  EditButton,
  PortfolioContainer,
  UserCard,
  UserContainer,
  AskCommisionBtn,
  DetailContainer,
  SmallRowContainer,
  SmallPortfolioContainer,
} from '@/pages/portfolio-detail/PortfolioDetail.styled';
import { FlexBetweenWrapper, FlexEndWrapper, FlexWrapper, } from '@/commons/styles/Containers.styled';
import { BodyText, HeadingText, SmallText } from '@/commons/atoms/text/Typography';
import LikeButton from '@/commons/atoms/buttons/LikeButton';
import DeleteModal from '@/components/modal/DeleteModal';
import Bookmark from '@/commons/atoms/buttons/Bookmark';
import { BsArrowReturnLeft } from 'react-icons/bs';
import dummy from './dummy.data.json';
import useUserImageHandler from '@/hooks/useUserImageHandler';
import { ItemUserName } from '@/components/communityItem/CommunityItem.styled';

export default function PortfolioDetail() {
  // console.log(dummy[0].data);
  const temp = dummy[0].data;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [portfolio, setPortfolio] = useState<any>(temp);
  const [createdAt, setCreatedAt] = useState<string>('');
  const [member, setMember] = useState<Member>();

  const [sanitize, setElementInlineStyle] = useChangeHtmlContent();
  const { portfolio_id: portfolioId } = useParams();
  const navigate = useNavigate();

  const deletePortfolio = () => call(`/portfolios/${portfolioId}`, 'DELETE');
  const getPortfolio = () => call(`/portfolios/${portfolioId}`, 'GET');

  const onEditButtonClick = () => window.location.href = `/portfolio/edit?portfolioId=${portfolioId}`;
  const openDeleteModal = () => setIsModalOpen(!isModalOpen);
  const deletePortfolioHandler = () => {
    // deletePortfolio();
    navigate('/main');
  };
  // useEffect(() => {
  //   getPortfolio().then((res) => {
  //     console.log(res.data);
  //     console.log(res.data.content);
  //     setPortfolio(res.data);
  //     setMember(res.data.member);
  //     setCreatedAt(changeDateFormat(res.data.createdAt));
  //   });
  // }, []);

  const [userProfileImage, _] = useState<string | JSX.Element>(useUserImageHandler(12));
  const pic = typeof userProfileImage === 'string' ? userProfileImage : undefined;
  
  return (
    <DetailContainer >
      <ButtonHeader>
        <BsArrowReturnLeft size={30} color="black" className="cursor-pointer" onClick={() => navigate(-1)} />
      </ButtonHeader>
      <ContentContainer>
        <UserContainer>
          <Image src={pic} url={`/`} shape="circle" size={65} />
          <UserCard>
            <HeadingText color="black">{portfolio.title}</HeadingText>
            <SmallRowContainer>
              <ItemUserName>{portfolio.member.name}</ItemUserName>
              <SmallText color="gray">{portfolio.createdAt}</SmallText>
            </SmallRowContainer>
          </UserCard>
          <AskCommisionBtn>의뢰 요청</AskCommisionBtn>
        </UserContainer>
        <BodyText color="black">{portfolio.explains}</BodyText>

        {portfolio?.writer && (
          <FlexEndWrapper>
            <EditButton onClick={openDeleteModal} />
            <DeleteButton onClick={openDeleteModal} />
          </FlexEndWrapper>
        )}

        <PortfolioContainer>
          {portfolio && (
            <div
              dangerouslySetInnerHTML={{
                __html: sanitize(setElementInlineStyle(portfolio.content)),
              }}
            ></div>
          )}
        </PortfolioContainer>

        <FlexBetweenWrapper>
                {portfolio && (
                  <>
                    <LikeButton
                      portfolioId={portfolio.id}
                      currentLikes={portfolio.countLikes}
                      isToggled={portfolio.liked}
                    />
                    <FlexWrapper gap={20}>
                      <SmallText color="white">views · {portfolio.view}</SmallText>
                      <Bookmark portfolioId={portfolio.id} isToggled={portfolio.marked} />
                    </FlexWrapper>
                  </>
                )}
        </FlexBetweenWrapper>

        <SmallPortfolioContainer></SmallPortfolioContainer>
        
      </ContentContainer>
      {isModalOpen && <DeleteModal onConfirm={deletePortfolio} onCancel={openDeleteModal} />}
    </DetailContainer>
  );
}
