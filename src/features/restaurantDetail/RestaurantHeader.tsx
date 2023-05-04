import styled from "styled-components";

const StyledRestaurantHeader = styled.header`
  padding: 0 20px;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  box-direction: normal;
  box-orient: horizontal;

  .title {
    padding-right: 50px;
    max-width: 75%;
    font-size: 1.8rem;
    line-height: 46px;
  }

  .restaurant_name {
    display: inline-block;
    max-width: 100%;
    word-break: break-all;
    font-size: 100%;
  }

  .rate-point {
    color: #ff792a;
    margin-left: 5px;
  }
`;

const Status = styled.div`
  margin: 5px 0 10px;
  color: #9b9b9b;
  font-size: 0.8rem;

  > * {
    margin-right: 15px;
    line-height: 100%;
  }

  .cnt:before {
    content: "";
    display: inline-block;
    margin: -4px 4px 0 0;
    vertical-align: middle;
  }

  .hit:before {
    content: "";
    display: inline-block;
    width: 19px;
    height: 13px;
    background-image: url(${(e) => e.theme.sprite.desktop});
    background-position: -974px -817px;
  }

  .review:before {
    content: "";
    display: inline-block;
    background-image: url(${(e) => e.theme.sprite.desktop});
    background-position: -800px -648px;
    width: 12px;
    height: 13px;
  }

  .favorite:before {
    content: "";
    display: inline-block;
    background-image: url(${(e) => e.theme.sprite.desktop});
    background-position: -828px -774px;
    width: 14px;
    height: 13px;
  }
`;

const ActionButtons = styled.div`
  margin-left: auto;
  display: flex;

  button {
    appearance: none;
    cursor: pointer;
    border: 0px;
    border-radius: 0;
    background-color: transparent;
    padding: 0;
    margin-right: 19px;
    outline: none;

    i {
      margin: auto;
    }
  }

  span {
    margin-top: 12px;
    font-size: 0.8rem;
    line-height: 1.3;
    color: #9b9b9b;
    display: block;
  }

  .review_button_icon {
    background-image: url("/icons/review_writing_icon.png");
    display: block;
    width: 32px;
    height: 32px;
  }

  .favorite_button_icon {
    background-image: url(${(e) => e.theme.sprite.desktop});
    background-position: -935px -583px;
    display: block;
    width: 32px;
    height: 32px;
  }
`;

export default function RestaurantHeader() {
  return (
    <StyledRestaurantHeader>
      <TitleWrap>
        <span className="title">
          <h1 className="restaurant_name">동순원</h1>
          <strong className="rate-point ">
            <span>4.6</span>
          </strong>
        </span>

        <ActionButtons>
          <button>
            <i className="review_button_icon" />
            <span className="review_writing_button_text">리뷰쓰기</span>
          </button>
          <button>
            <i className="favorite_button_icon" />
            <span className="review_writing_button_text">가고싶다</span>
          </button>
        </ActionButtons>
      </TitleWrap>
      <Status>
        <span className="cnt hit">4,633</span>
        <span className="cnt review">12</span>
        <span className="cnt favorite">60</span>
      </Status>
    </StyledRestaurantHeader>
  );
}
