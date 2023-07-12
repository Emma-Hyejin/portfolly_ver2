/* 2023-07-04 게시물 카테고리 선택 드롭다운 컴포넌트 - 김다함 */
import { styled } from 'styled-components';
import tw from 'twin.macro';
import DropDownBox from '../atoms/dropdown/DropDownBox';
import DropDownItem from '../atoms/dropdown/DropDownItem';
import { FlexColumnWrapper } from '../styles/Containers.styled';
import { category, isOpen } from '@/modules/CategorySlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const DropDownItemContainer = styled.div`
    ${tw`w-28 flex flex-col z-10 absolute`}
    border: 1px solid #C3C3C3;
    border-top: 0;
    background-color: rgba(72, 72, 72, 0.9);
    top: 117px;
`;

export const ContegroyDropDown = () => {
  const selected = useSelector(category);
  const isOpened = useSelector(isOpen);

  return (
    <FlexColumnWrapper gap={0}>
      <DropDownBox value={selected} />
      {isOpened &&
        <DropDownItemContainer>
          <DropDownItem value='웹' />
          <DropDownItem value='앱' />
          <DropDownItem value='3D/애니메이션' />
          <DropDownItem value='디자인/일러스트' />
          <DropDownItem value='사진/영상' />
        </DropDownItemContainer>
      }
    </FlexColumnWrapper>
  )
}

export default ContegroyDropDown;
