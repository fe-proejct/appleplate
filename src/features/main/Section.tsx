import styled from "styled-components";

const SectionStyle = styled.section`
  border-top: 1px solid #dbdbdb;
  padding: 38px 0 36px 0;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.438rem;
  }

  > div {
    margin: 27px 20px 0;
  }
`;

export default function Section({ title, children }: {
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
