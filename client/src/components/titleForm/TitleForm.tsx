import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { Tag } from '@/types';
import useTitleForm from '@/components/titleForm/useTitleForm';
import { categoryTags as CategoryTags } from '@/assets/data/category';
import { portfolio, setExplain, setTitle } from '@/store/portfolioSlice';

import {
  Row,
  Form,
  CreatedAt,
  SubmitButton,
  TagsContainer,
  ExplainTextArea,
  TitleFormContainer,
  PortfolioTitleInput,
  BigTitle,
  SelectSendContainer,
} from '@/components/titleForm/TitleForm.styled';
import ContegroyDropDown from '@/commons/molecules/dropdown/CategoryDropDown';
import PortfolioTag from '@/commons/molecules/tag/Tag';
import { BsCheck2 } from 'react-icons/bs';

export default function TitleForm( ) {
  const [categoryTags, setCategoryTags] = useState(CategoryTags);

  const savedPortfolio = useSelector(portfolio);
  const selectedCategory = savedPortfolio.category;
  const selectedTags = savedPortfolio.tags;

  const dispatch = useDispatch();

  const { submitPortfolio } = useTitleForm();

  useEffect(() => {
    const copiedCurrentTags = JSON.parse(JSON.stringify(categoryTags));
    const originTags = copiedCurrentTags[selectedCategory].tags as Tag[];
    const selectedTagIds = selectedTags.map((tag: Tag) => tag.id);
    const updatedTags = originTags.map((tag: Tag) => {
      return {
        ...tag,
        isSelected: selectedTagIds.includes(tag.id)
      }
    });
    copiedCurrentTags[selectedCategory].tags = updatedTags;
    setCategoryTags(copiedCurrentTags);
  }, []);

  return (
    <TitleFormContainer>
      <BigTitle>Title</BigTitle>
      <PortfolioTitleInput placeholder='Title' value={savedPortfolio.title} onChange={(e) => dispatch(setTitle(e.target.value))} />
      <TagsContainer>
            {
              categoryTags[selectedCategory].tags.map((tag: Tag) => {
                return <PortfolioTag tag={tag} key={tag.id} categoryTags={categoryTags} setCategoryTags={setCategoryTags} />
              })
            }
      </TagsContainer>

      <Form gap={15}>
        
        <Row gap={10}>
          
          {savedPortfolio.createdAt &&
            <CreatedAt color='white' className='pt-2'>{savedPortfolio.createdAt}</CreatedAt>
          }
        </Row>

        <BigTitle>소개글</BigTitle>
        <ExplainTextArea value={savedPortfolio.explains} onChange={(e) => dispatch(setExplain(e.target.value))} />
        
        <SelectSendContainer>
          <ContegroyDropDown />
          <SubmitButton color='purple' onClick={submitPortfolio}>
            <BsCheck2 size='25' color='black' />
          </SubmitButton>
        </SelectSendContainer>
        
      </Form>
    </TitleFormContainer>

  )
}