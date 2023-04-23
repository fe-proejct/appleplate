import styled from "styled-components";

const HeaderStyle = styled.header`
  position: relative;
  padding: 150px 0;
  background-image: url("https://mp-seoul-image-production-s3.mangoplate.com/a4283e5725fb56755b9bbeb8f285d0dc.jpg");
  background-position: center;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  > p,
  h1 {
    position: relative;
    z-index: 1;

    line-height: 1.5;
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.second};
    text-align: center;
    font-weight: 600;
  }
`;

export default function MainHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HeaderStyle>
      <p>솔직한 리뷰, 믿을 수 있는 평점!</p>
      <h1>망고플레이트</h1>
      {children}
    </HeaderStyle>
  );
}
