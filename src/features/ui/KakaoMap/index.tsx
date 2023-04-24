import { Map, MapMarker } from "react-kakao-maps-sdk";
import { KakaoMapOptions } from "./KakaoMap.options";
import { useCallback, useMemo, useRef } from "react";

export default function KakaoMap({
    options
}: {
    options: KakaoMapOptions
}) {
    const map = useRef<kakao.maps.Map>(null);


    const onCreate = (map: kakao.maps.Map) => {
        setBounds(map);
    }

    const getSNWE = useCallback(() => {
        if (options.markers == null) return [0, 0, 0, 0];

        const lngs = options.markers.map(e => e.lng);
        const [s, n] = [
            Math.min(...lngs),
            Math.max(...lngs),
        ]

        const lats = options.markers.map(e => e.lat);
        const [w, e] = [
            Math.min(...lats),
            Math.max(...lats),
        ]

        return [s, n, w, e];

    }, [options.markers]);


    const centerPosition = useMemo(() => {
        const [s, n, w, e] = getSNWE();
        const center = new kakao.maps.LatLng(
            (w + e) / 2,
            (n + s) / 2,
        );

        return center;
    }, [options.markers]);

    const setBounds = (map: kakao.maps.Map) => {
        const [s, n, w, e] = getSNWE();
        const sw: kakao.maps.LatLng = new kakao.maps.LatLng(w, s);
        const ne: kakao.maps.LatLng = new kakao.maps.LatLng(e, n);
        const bounds: kakao.maps.LatLngBounds = new kakao.maps.LatLngBounds(sw, ne);

        map.setBounds(bounds, 20);
    }

    return (
        <Map
            ref={map}
            onCreate={onCreate}
            center={{
                lat: centerPosition?.getLat(),
                lng: centerPosition?.getLng()
            }}
            style={{ width: "100%", height: "100%" }} >
            {
                options.markers?.map(e => {
                    return <MapMarker key={e.lat + e.lng}
                        position={{ lat: e.lat, lng: e.lng }} />
                })
            }
        </Map>
    )
}