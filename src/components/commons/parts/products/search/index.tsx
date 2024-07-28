import styled from "@emotion/styled";

const SearchWrap = styled.section`
  display: flex;
  justify-content: center;
  margin: 80px 0;
`;
const Keyword = styled.span`
  font-size: 3.2rem;
  font-weight: 700;
  margin-right: 10px;
  color: #eb9898;
`;
const KeywordBox = styled.div`
  font-size: 3.2rem;
  font-weight: 700;
  color: #111;
`;

export default function SearchTop(props) {
  return (
    <SearchWrap>
      <KeywordBox>
        <Keyword>{props.keyword}</Keyword>
        검색 결과
      </KeywordBox>
    </SearchWrap>
  );
}
