import styled from 'styled-components';
import tw from 'twin.macro';

export const PortfolioLankingWrapper = styled.div`
h1 {
  padding: 10px 100px;
  font-size: 2.5rem;
  font-weight: 300;
}
`;

export const ProlfolioLankingItemWrapper = styled.div`
  ${tw`
  flex
  items-center
  justify-around
  py-7
  `}
  background-color: rgb(255, 192, 203, 0.1);
`;

export const PortfolioLankingItem = styled.div`
  width: 100%;
  height: 300px;
  background-color: gray;
  margin: 0 30px;
  border-radius: 20px;
  padding: 10px;
  display: inline-block;
  
`;