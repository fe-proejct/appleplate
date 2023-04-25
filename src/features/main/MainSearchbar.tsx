import { useCallback, useState } from "react";
import styled from "styled-components";

const SearchBarStyle = styled.form`
  --height: 54px;

  position: relative;
  z-index: 1;
  height: var(--height);
  width: 738px;
  margin: 45px auto 0 auto;
  background: white;
  border: 2px solid red;
  border-radius: calc(var(--height) / 2);

  fieldset {
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding-left: 40px;

    label {
      display: flex;
      flex-shrink: 1;
      height: 100%;
      width: 100%;
      align-items: center;

      .search-icon {
        display: flex;
        flex-shrink: 0;
        background-image: url(https://mp-seoul-image-production-s3.mangoplate.com/web/resources/2018022864551sprites_desktop.png);
        background-position: -935px -620px;
        width: 30px;
        height: 31px;
      }

      input {
        flex-shrink: 1;
        height: 100%;
        width: 100%;
        padding: 0 16px;
        font-size: 1.1rem;
        border: oldlace;
        background: transparent;
      }

      > button {
        flex-shrink: 0;
        background: transparent;
        color: #dbdbdb;
        cursor: pointer;
        font-size: 14px;
      }
    }

    > button {
      flex-shrink: 0;
      width: 180px;
      height: 100%;
      font-size: 1.313rem;
      font-weight: bold;
      border-radius: calc(var(--height) / 2);
      color: white;
      background: ${({ theme }) => theme.colors.primary};
      cursor: pointer;
    }
  }

  legend {
    display: none;
  }
`;

function MainSearchBar() {
  const [keyword, setKeyword] = useState("");

  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
    },
    []
  );

  const handleClickButton = useCallback(() => {
    setKeyword("");
  }, []);

  return (
    <SearchBarStyle
      onSubmit={(e) => {
        e.preventDefault();
        // console.log(e.target.value);
      }}
    >
      <fieldset>
        <legend>전체 검색</legend>
        <label>
          <span className="search-icon"></span>
          <input
            type="text"
            name="keyword"
            value={keyword}
            placeholder="지역, 식당 또는 음식"
            onChange={handleChangeInput}
          />
          {keyword ? (
            <button type="button" className="clear" onClick={handleClickButton}>
              CLEAR
            </button>
          ) : null}

          <div className="keywordSuggester--container">
            <div className="keywordSuggester--tab"></div>
            <div className="keywordSuggester--tabBoard"></div>
          </div>
        </label>
        <button type="submit">검색</button>
      </fieldset>
    </SearchBarStyle>
  );
}

export default MainSearchBar;
