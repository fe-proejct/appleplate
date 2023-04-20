import { Options } from '@splidejs/react-splide';

interface CarousleOptions extends Options {
    /**
     * 컴포넌트 높이 입니다
     */
    height?: number | string;

    /**
     * 각 페이지당 들어갈 컴포넌트의 갯수입니다
     */
    perPage?: number | undefined;

    /**
     * 더 이상 갈 수 있는 페이지가 없을때 반투명 상태의 화살표를 보여줄건지의 여부입니다
     * - default : `true`
     */
    showDisabledArrow?: boolean | undefined;

    /**
     * 페이지네이션을 보여줄건지의 여부입니다
     * - default : `true`
     */
    showPageNation?: boolean | undefined;

    /**
     * 클릭 당 이동할 컴포넌트 갯수입니다
     */
    perMove?: number | undefined;

    /**
     * 자식의 가로 길이에 자동으로 맞출지의 여부입니다.
     * - `true` 의 경우 `perPage` 와 `perMove` 옵션이 `1` 이어야 합니다.
     */
    autoWidth?: boolean;

    /**
     *  이 옵션이 `true` 이고 `focus` 옵션을 사용중이어야 합니다:
     * - `focus` 옵션에서 지정한 슬라이드랑 이어지는 듯 합니다. 지정한 슬라이드가 마지막에 도달 or 움직일 수 없을때 화살표를 비활성화 합니다
     * - 또한 이로인해 페이지 갯수에 비해 움직일 수 있는 슬라이드가 줄어드는데 그로 인한 페이지네이션 갯수를 생략합니다
     */
    omitEnd?: boolean;

    /**
    * 한 페이지에 여러개의 슬라이드가 있는 경우에 대상으로 할 슬라이드의 번호를 결정합니다
    */
    focus?: number | 'center';
}

export default CarousleOptions;