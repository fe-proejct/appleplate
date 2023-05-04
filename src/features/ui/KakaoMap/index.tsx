import { Map, MapMarker } from "react-kakao-maps-sdk";
import { KakaoMapOptions, Marker } from "./KakaoMap.options";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { loadKakaoMapscript } from "./KakaoMap.load";
import styled from "styled-components";


const MapContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export default function KakaoMap({
    options
}: {
    options: KakaoMapOptions
}) {
    // const [map, setMap] = useState<kakao.maps.Map>();
    const container = useRef(null);

    useEffect(() => {
        if (container.current == null) return;
        loadKakaoMapscript(container.current, onCreate);
    }, []);



    const setMarker = (markerPosition: Marker, map?: kakao.maps.Map) => {
        if (map == null) return;
        const position = new kakao.maps.LatLng(markerPosition.lat, markerPosition.lng);
        const marker = new kakao.maps.Marker({ position });
        marker.setMap(map);
    }

    const onCreate = (map: kakao.maps.Map) => {
        options.markers?.forEach(e => setMarker(e, map));
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

    // const centerPosition = useMemo(() => {
    //     // if (map == null) return null;
    //     const [s, n, w, e] = getSNWE();
    //     const center = new kakao.maps.LatLng(
    //         (w + e) / 2,
    //         (n + s) / 2,
    //     );

    //     return center;
    // }, [options.markers]);

    const setBounds = (map: kakao.maps.Map) => {
        const [s, n, w, e] = getSNWE();
        const sw: kakao.maps.LatLng = new kakao.maps.LatLng(w, s);
        const ne: kakao.maps.LatLng = new kakao.maps.LatLng(e, n);
        const bounds: kakao.maps.LatLngBounds = new kakao.maps.LatLngBounds(sw, ne);

        map.setBounds(bounds, 20);
    }

    return (<MapContainer ref={container} />)
}