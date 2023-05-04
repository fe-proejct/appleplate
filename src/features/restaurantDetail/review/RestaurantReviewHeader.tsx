import styled from "styled-components";

const StyledHeader = styled.header`
  display: -webkit-flex;
  margin-bottom: 14px;
`;

const Title = styled.h2`
  font-size: 18px;
  line-height: 1.2;
  color: #4f4f4f;

  @media ${(e) => e.theme.device.mobile} {
    color: ${(e) => e.theme.colors.primary};
  }
`;

const FilterList = styled.ul`
  display: flex;
  margin-left: auto;

  @media ${(e) => e.theme.device.mobile} {
    display: none;
  }
`;

const FilterItem = styled.li<{ selected?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 3px;
  font-size: 16px;
  > button {
    padding-right: 3px;
    font-size: 16px;
    color: #9b9b9b;
    color: ${(e) => (e.selected ? e.theme.colors.primary : "#9b9b9b")};
  }
`;

interface FilterButtonProps {
  title: string;
  count: number;
  isSelected?: boolean;
}

function FilterButton(props: FilterButtonProps) {
  return (
    <FilterItem selected={props.isSelected}>
      <button>
        {props.title}
        <span>({props.count})</span>
      </button>
    </FilterItem>
  );
}

export default function RestaurantReviewHeader() {
  return (
    <StyledHeader>
      <Title>
        <span>동순원의 </span>
        <span>리뷰 </span>
        <span>(12)</span>
      </Title>
      <FilterList>
        <FilterButton count={12} title="전체" isSelected={true} />
        <FilterButton count={11} title="맛있다" />
        <FilterButton count={1} title="괜찮다" />
        <FilterButton count={0} title="별로" />
      </FilterList>
    </StyledHeader>
  );
}
