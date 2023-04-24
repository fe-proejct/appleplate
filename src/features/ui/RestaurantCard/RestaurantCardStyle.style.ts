import styled from "styled-components";

const RestaurantCardStyle = styled.figure`
  .thumb {
    position: relative;
    content: "";
    display: block;
    padding-bottom: calc(4 / 6 * 100%);

    > img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  figcaption {
    padding-top: 9px;
  }

  .title {
    font-size: 1.3rem;

    &--score {
      margin-left: 5px;
      color: ${({ theme }) => theme.colors.secondText};

      &.primary {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .info {
    margin-top: 6px;
    font-size: 0.9rem;
    line-height: 1.3em;
    color: ${({ theme }) => theme.colors.secondText};
  }

  .count {
    font-size: 0.7rem;
    line-height: 1.3em;
    color: ${({ theme }) => theme.colors.thirdText};

    &--view {
      &:before {
        content: "";
        display: inline-block;
        margin-right: 3px;
        background-image: url(https://mp-seoul-image-production-s3.mangoplate.com/web/resources/2018022864551sprites_mobile.png);
        background-position: -618px -477px;
        width: 13px;
        height: 9px;
      }
    }

    &--review {
      margin-left: 6px;

      &:before {
        content: "";
        display: inline-block;
        margin-right: 2px;
        background-image: url(https://mp-seoul-image-production-s3.mangoplate.com/web/resources/2018022864551sprites_mobile.png);
        background-position: -618px -558px;
        width: 9px;
        height: 9px;
      }
    }
  }

  @media ${(props) => props.theme.device.mobile} {
    .thumb {
      padding-bottom: calc(100%);
    }

    figcaption {
      padding-top: 6px;
    }

    .title {
      display: flex;
      justify-content: space-between;

      font-size: 1rem;
      line-height: 1.3em;

      &--score {
        font-size: 1.2rem;
      }
    }

    .info {
      margin-top: 3px;
      font-size: 0.75rem;
      line-height: 1.3em;
      color: ${({ theme }) => theme.colors.secondText};
    }

    .count {
      font-size: 0.7rem;
      line-height: 1.3em;
      color: ${({ theme }) => theme.colors.thirdText};
    }
  }
`;

export default RestaurantCardStyle;
