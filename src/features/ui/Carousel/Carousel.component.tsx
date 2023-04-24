import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import styled from "styled-components";
import CarousleOptions from "./carousel.options";

const CarouselWrap = styled.div<{
  padding?: {
    bottom?: number | string | undefined,
    top?: number | string | undefined,
    horizontal?: number | string | undefined,
  };
}>`
  height: 100%;

  button {
    border: none;
    cursor: pointer;
  }

  .splide {
    padding-top: ${(e) => e.padding?.top ?? 0};
    padding-bottom: ${(e) => e.padding?.bottom ?? 0};;
    padding-right: ${(e) => e.padding?.horizontal ?? 0};
    padding-left: ${(e) => e.padding?.horizontal ?? 0};

    height: 100%;
    align-items: center;
    display: flex;
  }

  .pagenation {
    display: none;
  }

  .page_button {
    width: 20px;
    height: 20px;
    padding: 5px;
    background-color: transparent;

    &:before {
      line-height: 20px;
      width: 10px;
      height: 10px;
      display: block;
      content: "";
      border-radius: 50%;
      background-color: ${(e) => e.theme.colors.lightGrayBg};
    }
  }

  .page_button.is-active {
    &:before {
      line-height: 20px;
      width: 10px;
      height: 10px;
      display: block;
      content: "";
      border-radius: 50%;
      background-color: ${(e) => e.theme.colors.primary};
    }
  }

  .custom_arrow:disabled {
    display: none;
    fill: ${(e) => e.theme.colors.primary};
  }

  .splide__arrow svg {
    fill: ${(e) => e.theme.colors.primary};

    :hover {
      fill: ${(e) => e.theme.colors.second};
    }
  }
`;

const ChildWrap = styled.div`
  height: 100%;
  display: flex;

  > img {
    /* width: 100%; */
    align-items: stretch;
    flex: 1;
    aspect-ratio: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TrackWrap = styled(SplideTrack)`
  height: 100%;
`;

export default function Carousel({
  children,
  option,
}: {
  children: React.ReactNode[];
  option?: CarousleOptions | undefined;
}) {
  const classes = {
    pagination: `splide__pagination ${option?.showPageNation ?? true ? "" : "pagenation"
      }  `,
    arrow: `splide__arrow ${option?.showDisabledArrow ?? true ? "" : "custom_arrow"
      }`,
    page: "page_button",
  };

  return (
    <CarouselWrap padding={{
      top: option?.paddingTop,
      bottom: option?.paddingBottom,
      horizontal: option?.paddingHorizontal,
    }}>
      <Splide
        hasTrack={false}
        options={{
          ...option,
          classes: classes,
        }}
      >
        <TrackWrap>
          {children.map((e, idx) => (
            <SplideSlide key={idx}>
              <ChildWrap>{e}</ChildWrap>
            </SplideSlide>
          ))}
        </TrackWrap>
      </Splide>
    </CarouselWrap>
  );
}
