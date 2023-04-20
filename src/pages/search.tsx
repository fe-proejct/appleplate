import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../store/store";
import { test } from "../store/slice/TestSlice";

export default function Search() {
    const { value } = useParams();
    const dispatch = useAppDispatch();
    const text = useAppSelector((state) => state.testReducer.value);
    return (
        <div>
            {value}
            <div>
                <button onClick={() => {
                    dispatch(test('hello world'))
                }}>버튼</button>
                검색화면
            </div>
            {text}
        </div>
    )
}