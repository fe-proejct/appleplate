import { useParams } from "react-router-dom"

export default function Search() {
    const { value } = useParams();
    return (
        <div>
            {value}
            <div>
                검색화면
            </div>
        </div>
    )
}