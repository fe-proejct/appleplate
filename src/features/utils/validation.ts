
/**
 *   - 패스워드 필수
 *      - null, “ “ 둘 다 X
 *      - 영문 대,소문자와 숫자, 특수문자가 적어도 1개 이상씩 포함된 8~20자 
 *  @return 사용 가능할 시 `true` 
 */
function checkPasswordValidate(password: string): boolean {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$/.test(password);
}

function checkEmailValidate(email: string): boolean {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/.test(email);
}

function checkUserNameValidate(name: string): boolean {
    return /^[가-힝]{2,4}$/.test(name);
}

export {
    checkPasswordValidate,
    checkEmailValidate,
    checkUserNameValidate,
}
