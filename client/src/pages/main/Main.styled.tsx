import tw from 'twin.macro';
import styled from 'styled-components';
import { Purpletype } from '@/commons/atoms/buttons/Button.styled';

export const WebItemsContainer = styled.div`
  ${tw`
    flex 
    flex-wrap 
    justify-center
    mt-10
    md:(flex-row)
    sm:(flex-col)
    bg-contain
    bg-no-repeat
    bg-center
  `}

  height: 80vh;
`;

export const NodataImage = styled.img`
  ${tw`
    flex
    justify-center
    items-center
  `}
  width: 350px;
  height: 350px;
  margin-top: 60px;
`;

export const TitleSection = styled.div`
  ${tw`
    flex
    items-center
    justify-between
    mt-10
    mb-5
  `}
  padding: 0 100px;

  h1 {
    font-size: 2rem;
    font-weight: 300;
  }
`;

export const CategorySection = styled(TitleSection)`
  .currentPick {
    ${tw`
      text-BASIC_PURPLE
    `}
  }
`;

export const WriteButton = styled(Purpletype)`
  ${tw`
    text-BASIC_PURPLE
    bg-neutral-200
    px-5
    py-2
  `}
  border-radius: 5px;

  &:hover{
    ${tw`
      text-white
    `}
  }
`

export const FilterWrapper = styled.ul`
  ${tw`
  flex
  items-center
  justify-between
  `}

  width: 100px;
`;
