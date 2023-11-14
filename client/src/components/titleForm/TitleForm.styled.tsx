import { styled } from 'styled-components';
import tw from 'twin.macro';

import { PortfolioEditButton, PortfolioCheckButton } from '@/pages/portfolio-edit/PortfolioEdit.styled';
import { FlexColumnWrapper, FlexWrapper } from '@/commons/styles/Containers.styled';
import { InputLabelText, SmallText } from '@/commons/atoms/text/Typography';

export const Form = styled(FlexColumnWrapper)``;
export const Row = styled(FlexWrapper)``;

export const ExplainTextArea = styled.textarea`
    ${tw`w-full h-20 px-2 py-1 border rounded-lg resize-none border-zinc-500`}
    border-color: gray;
    color: white;
    font-size: 13px;
    outline: none;
`

export const PortfolioTitleInput = styled.input`
    ${tw`w-full p-1 my-2 text-base bg-transparent border rounded-lg border-zinc-500`}
    color: black;
    &:focus{
        ${tw`outline-0`}
    }
`;

export const TitleFormContainer = styled.div`
      ${tw`flex flex-col mt-5`};
  `;

export const TagsContainer = tw.div`
  flex gap-1.5 w-fit flex-wrap z-0 my-3 flex-row
`;

export const SubmitButton = styled(PortfolioCheckButton)``;

export const GoBackButton = tw(PortfolioEditButton)`
  absolute bottom-10 right-36
`;

export const InputLabel = styled(InputLabelText)``;

export const CreatedAt = styled(SmallText)``;

//리팩토링
export const BigTitle = styled.div`
  ${tw`text-xl font-semibold `}
`;

export const SelectSendContainer = styled.div`
  ${tw`flex flex-row justify-between`}
`;