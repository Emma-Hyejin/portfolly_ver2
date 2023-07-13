/* 2023-07-05 태그 컴포넌트 - 김다함 */
import { styled, css } from 'styled-components';
import tw from 'twin.macro';

import useTagSelect from '@/hooks/useTagSelect';
import { Tag as tag } from '@/types/portfolio';

import { RxDotFilled } from 'react-icons/rx';

const tagStyle = css`
    ${tw`w-fit py-1.5 px-2.5 rounded-full select-none flex`}
`
const TagBody = styled.div<{ isSelected?: boolean }>`
    ${tagStyle}
    background-color: #484848;
    border: 0.9px solid #C3C3C3;
    color: white;
    cursor: pointer;
    &:hover {
        border-color: #dcdcdc;
    }

    ${(props) => props.isSelected &&
    css`
      border-color: #dcdcdc;
      background-color: white;
      color: #232428;
    `
  }

    .dot {
      vertical-align: middle;
      color: #484848;
    }
`;

interface TagProps {
  tag: tag;
}

export const Tag = ({ tag }: TagProps) => {
  const [isSelected, onClick] = useTagSelect({
    isSelected: false,
    tag: tag,
  });

  return (
    <TagBody isSelected={isSelected} onClick={onClick}>
      <p className='text-xs'>{tag.name}</p>
      {isSelected && <RxDotFilled className='dot' />}
    </TagBody>
  )
}

export default Tag;