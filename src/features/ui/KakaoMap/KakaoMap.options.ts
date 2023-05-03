export interface Marker {

    /** 위도 */
    lat: number;

    /** 경도 */
    lng: number;
}

export interface KakaoMapOptions {
    /** 마커의 위치 표시 */
    markers?: Marker[],
}