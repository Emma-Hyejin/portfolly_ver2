/* 2023-07-05 각종 컴포넌트를 담는 Card 컴포넌트 - 김다함 */
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { styled } from 'styled-components';
import tw from 'twin.macro';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

const CardContainer = styled.div`
    ${tw` w-full p-5 box-border rounded-md mb-10`}
    background-color: white;
    box-sizing: inherit;
    // box-shadow: 0 10px 24px hsla(0,0%,0%,0.05), 0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
    border: 1px solid #eee;
`;

export default function Card({ children }: CardProps) {
  return (
    <CardContainer>
      {children}
    </CardContainer>
  )
}