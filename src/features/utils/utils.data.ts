import { checkEmailValidate, checkPasswordValidate, checkUserNameValidate } from "./utils"

const utilTestData = [
  {
    name: "패스워드 테스트",
    data: [
      ["", false],
      ["1234", false],
      ["Aa!1234", false],
      ["12345678", false],
      ["!Aa456789123456789123", false],
      ["!a456789129123", false],
      ["!Aa4567829123", true],
      ["Aa45627829123", false],
      ["!a45627829123", false],
      ["!A45627829123", false],
      ["!Aa4567822222222222222229123", false],
      ["!@1234567", false],
    ],
    function: checkPasswordValidate,
  },
  {
    name: "이메일 테스트",
    data: [
      ["test@naver.com", true],
      [".@naver.", false],
      [".naver.", false],
      [".naver.", false],
      ["test@naver.c", false],
      ["test@naver.co", true],
      ["test@naver.coooooooooooooooo", false],
      ["test@na@ver.coooooooooooooooo", false],
    ],
    function: checkEmailValidate,
  },
  {
    name: "유저 이름 테스트",
    data: [
      ["홍길동", true],
      ["홍길동전", true],
      ["홍", false],
      ["abc", false],
      ["홍a동", false],
      ["홍a", false],
    ],
    function: checkUserNameValidate,
  }
]

export {
  utilTestData
}
