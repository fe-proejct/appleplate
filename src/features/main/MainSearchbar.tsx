import { useCallback, useState } from "react";
import styled from "styled-components";
import { MaskingPage } from "../ui/Modal/MaskingPage";
import ModalPortal from "../ui/Modal/ModalPortal";
import Tab from "../ui/Tab";

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
        background-image: url(${(e) => e.theme.sprite.desktop});
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

  @media ${(props) => props.theme.device.mobile} {
    --height: 48px;
    --sidePadding: 15px;
    --fontSize: 0.813rem;

    width: calc(100% - var(--sidePadding) * 2);
    height: var(--height);
    margin: 34px var(--sidePadding) 0;
    border-radius: calc(var(--height) / 2);

    fieldset {
      padding-left: 40px;

      label {
        .search-icon {
          background-image: url(${(e) => e.theme.sprite.mobile});
          background-position: -107px -587px;
          width: 19px;
          height: 20px;
        }

        input {
          padding: 0px 10px;
          font-size: var(--fontSize);
        }

        > button {
          font-size: 14px;
        }
      }

      > button {
        width: 110px;
        height: 100%;
        font-size: var(--fontSize);
        border-radius: calc(var(--height) / 2);
      }
    }
  }
`;

function MainSearchBar() {
  const [keyword, setKeyword] = useState("");
  const [isAutocomplete, setAutocomplete] = useState(false);

  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
    },
    []
  );

  const handleClickButton = useCallback(() => {
    setKeyword("");
  }, []);

  const openModal = useCallback(() => {
    setAutocomplete(true);
  }, []);

  const closeModal = useCallback(() => {
    setAutocomplete(false);
  }, []);

  const tabs = [
    { key: 0, content: "추천 검색어", element: <div></div> },
    { key: 1, content: "인기 검색어", element: <div></div> },
    { key: 2, content: "최근 검색어", element: <div></div> },
  ];

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
            onClick={openModal}
          />
          {keyword ? (
            <button type="button" className="clear" onClick={handleClickButton}>
              CLEAR
            </button>
          ) : null}

          {/* <div className="keywordSuggester--container">
            <div className="keywordSuggester--tab"></div>
            <div className="keywordSuggester--tabBoard"></div>
          </div> */}
          <ModalPortal>
            {isAutocomplete && (
              <MaskingPage
                open={isAutocomplete}
                onClose={closeModal}
                element={
                  <div
                    style={{
                      top: "337px",
                      left: "262px",
                      position: "absolute",
                    }}
                  >
                    <Tab tabs={tabs} />
                  </div>
                }
              />
            )}
          </ModalPortal>
        </label>
        <button type="submit">검색</button>
      </fieldset>
    </SearchBarStyle>
  );
}

export default MainSearchBar;
