import { ChangeEventHandler } from 'react';
import { SearchBox, SearchContainer, SearchIcon } from './Search.styled';

interface SearchProps {
  setSearchValue: any;
  currentSearch: string;
  data: any;
  setSearchs: any;
  type?: string;
}

export default function Search({ setSearchValue, currentSearch, data, setSearchs, type }: SearchProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  const enterToSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isEmpty = (search: string) => search === '';
    const isEmptyCurrentSearch = isEmpty(currentSearch);

    if (isEmptyCurrentSearch) {
      return setSearchs(data);
    }

    const toLowerCasify = (text: string) => {
      if(text === undefined || text === null){
        return ''
      }
      return text.toLowerCase();
    };
    const isIncludedCurrentSearchToTitle = (text: string) => toLowerCasify(text).includes(toLowerCasify(currentSearch));
    const isIncludedCurrentSearchToContent = (text: string) => toLowerCasify(text).includes(toLowerCasify(currentSearch));
    const isIncludedCurrentSearchToMembername = (text: string) => toLowerCasify(text).includes(toLowerCasify(currentSearch));

    // early return pattern
    if (data[0].category) {
      const filteredData = data.filter((element: any) => {
        return (
          isIncludedCurrentSearchToTitle(element.title) ||
          isIncludedCurrentSearchToMembername(element.member.name)
        )
      });

      return setSearchs(filteredData);
    }

    const filteredData = data.filter((element: any) => {
      return (
        isIncludedCurrentSearchToTitle(element.title) ||
        isIncludedCurrentSearchToMembername(element.memberInfo.name) ||
        isIncludedCurrentSearchToContent(element.content)
      )
    });

    return setSearchs(filteredData);

  };

  return (
    <SearchContainer onSubmit={enterToSearch}>
      <SearchIcon />
      <SearchBox type="text" placeholder={type === "home" ? '포트폴리오 검색' :'게시글 검색'} onChange={handleChange} />
    </SearchContainer>
  );
}
