

declare global {
    interface Window {
        kakao: any;
    }
}

const loadKakaoMapscript = (container: HTMLDivElement, onload: (map: kakao.maps.Map) => void) => {
    const body = document.querySelector(".kakao-map-sdk") as HTMLScriptElement;
    const onLoaded = () => {
        if (!window.kakao) return;
        kakao.maps.load(() => {
            const center = new kakao.maps.LatLng(37.50802, 127.062835);
            const options = {
                center,
                level: 3
            };
            const map = new kakao.maps.Map(container, options);
            onload(map);
        });
    }

    if (body === null) {
        const script = document.createElement('script');
        const apikey = import.meta.env.VITE_KAKAO_API;
        script.type = "text/javascript";
        script.className = "kakao-map-sdk";
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apikey}&libraries=services,clusterer,drawing&autoload=false`;
        script.async = true;
        script.onload = onLoaded;
        document.head.appendChild(script);
    } else {
        onLoaded();
    }
}

export { loadKakaoMapscript };