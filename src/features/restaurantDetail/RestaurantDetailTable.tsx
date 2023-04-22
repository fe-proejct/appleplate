import styled from "styled-components";

const StyledDetailTable = styled.table`
  padding: 20px 0;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  width: 100%;

  th {
    width: 110px;
    font-size: 0.9rem;
    color: rgba(79, 79, 79, 0.6);
    line-height: 1.7;
    text-align: left;
    vertical-align: top;
    padding-right: 10px;
    padding-bottom: 5px;
  }

  td {
    font-size: 0.9rem;
    color: #4f4f4f;
    line-height: 1.7;
    text-align: left;
    vertical-align: middle;
    padding-bottom: 5px;
  }

  .rectangle {
    border-radius: 2px;
    border: solid 1px #e9e9e9;
    padding: 0 4px;
    margin-right: 2px;
    font-size: 12px;
    color: #7f7f7f;
  }
`;

const StyledAdress = styled.tr`

`;

function Adress() {
  return <StyledAdress>
    <th>주소</th>
    <td>충청남도 천안시 서북구 성환읍 성환중앙로 33<br />
      <span className="rectangle">지번</span>
      <span >충청남도 천안시 서북구 성환읍 성환리 449-19</span>
    </td>
  </StyledAdress>
}

export default function RestaurantDetailTable() {
  return (
    <StyledDetailTable>
      <tbody>
        <tr>
          <th>주소</th>
          <td>
            충청남도 천안시 서북구 성환읍 성환중앙로 33
            <br />
            <span className="rectangle">지번</span>
            <span>충청남도 천안시 서북구 성환읍 성환리 449-19</span>
          </td>
        </tr>
        <tr>
          <th>전화번호</th>
          <td>041-581-2070</td>
        </tr>
        <tr>
          <th>음식 종류</th>
          <td>
            <span>정통 중식 / 일반 중식</span>
          </td>
        </tr>
        <tr>
          <th>가격대</th>
          <td>만원 미만</td>
        </tr>
        <tr>
          <th>주차</th>
          <td>주차공간없음 </td>
        </tr>
        <tr>
          <th>영업시간</th>
          <td>11:00 - 20:10</td>
        </tr>
        <tr>
          <th>휴일</th>
          <td>월</td>
        </tr>
      </tbody>
    </StyledDetailTable>
  );
}
