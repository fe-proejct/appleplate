import { useParams } from "react-router-dom";
import styled from "styled-components";
import { test } from "../store/slice/TestSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

const StyleSearchMain = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default function Search() {
  const { value } = useParams();
  const dispatch = useAppDispatch();
  const text = useAppSelector((state) => state.testReducer.value);
  return (
    <StyleSearchMain>
      {value}
      <div>
        <button
          onClick={() => {
            dispatch(test("hello world"));
          }}
        >
          버튼
        </button>
        검색화면
      </div>
      {text}
    </StyleSearchMain>
  );
}
