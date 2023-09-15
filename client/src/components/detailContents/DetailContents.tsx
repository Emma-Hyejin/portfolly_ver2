import { useNavigate } from 'react-router-dom';
import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';
import {BackToListButton} from '@/commons/atoms/buttons/Button.styled';
import { DetailCntContainer, EDBtnContainer } from './DetailContents.styled';

export default function DetailContents({ data, handleDeleteModal, id, writerId, viewerId }: any) {
  const navigate = useNavigate();

  const moveToEdit = () => {
    navigate(`/boards/edit/${id}`);
  };
  console.log(data);

  const dataDivision = data.division;

  const moveToCommunityList = () => {
    navigate(`/boards?division=${dataDivision}`)
  };
  

  return (
    <DetailCntContainer>
      <p>{data.content}</p>
      {writerId === viewerId ? (
        <EDBtnContainer>
          <PurpleBtn onClick={moveToEdit}>Edit</PurpleBtn>
          <PurpleBtn onClick={handleDeleteModal}>Delete</PurpleBtn>
        </EDBtnContainer>
      ) : ''}
      <BackToListButton onClick={moveToCommunityList}>목록으로</BackToListButton>
    </DetailCntContainer>
  );
}
