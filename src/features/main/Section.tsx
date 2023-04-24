import styled from "styled-components";

const SectionStyle = styled.section`
  border-top: 1px solid #dbdbdb;
  padding: 38px 0 36px 0;
  max-width: 1240px;
  margin: 0 auto;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.438rem;
  }

  > div {
    margin-top: 27px;
  }

  @media ${(props) => props.theme.device.mobile} {
    padding: 26px 15px 22px 15px;
    max-width: 100%;

    h2 {
      font-size: 1.125rem;
    }

    > div {
      margin-top: 20px;
    }
  }
`;

export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <SectionStyle>
      <h2>{title}</h2>
      {children}
    </SectionStyle>
  );
}
