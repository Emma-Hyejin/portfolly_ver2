import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import usePreventRefresh from '@/hooks/usePreventRefresh';
import usePreventGoBack from '@/hooks/usePreventGoBack';
import { setPortfolio } from '@/store/portfolioSlice';
import { call, changeDateFormat } from '@/utils';

import { EditorContainer } from '@/pages/portfolio-edit/PortfolioEdit.styled';
import QuillEditor from '@/components/editor/QuillEditor';
import TitleForm from '@/components/titleForm/TitleForm';

export default function PortfolioEdit() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const portfolioId = searchParams.get("portfolioId");
  const getPortfolio = (portfolioId: string | null) => call(`/portfolios/${portfolioId}`, 'GET')

  usePreventRefresh();
  usePreventGoBack();

  useEffect(() => {
    const isModified = portfolioId ? true : false;
    if (isModified) {
      getPortfolio(portfolioId)
        .then((res) => {
          console.log(res)
          dispatch(setPortfolio({
            id: portfolioId,
            title: res.data.title,
            content: res.data.content,
            category: res.data.category.name,
            tags: res.data.portfolioTags,
            explains: res.data.explains,
            createdAt: changeDateFormat(res.data.createdAt),
          }));
        })
    }
  }, []);

  return (
    <EditorContainer>
      <TitleForm  />
      <QuillEditor isTitleFormOpen={true} />
      {/* {isTitleFormOpen &&
        <TitleForm setIsTitleFormOpen={setIsTitleFormOpen} />
      } */}
      {/* <PortfolioCheckButton
        color="black"
        onClick={() => setIsTitleFormOpen(true)}>
        <BsCheck2 size="25" color="white" />
      </PortfolioCheckButton> */}
    </EditorContainer>
  );
}
