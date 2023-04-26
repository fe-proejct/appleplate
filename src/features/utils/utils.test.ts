import { checkEmailValidate, checkPasswordValidate } from "./utils";
import { utilTestData } from "./utils.data";

utilTestData.map(dataObj => {
    describe(dataObj.name, () => {
        dataObj.data.map((e: (string | boolean)[]) => {
            test(e[0].toString(), () => {
                e[1]
                    ? expect(dataObj.function(e[0].toString())).toBeTruthy()
                    : expect(dataObj.function(e[0].toString())).toBeFalsy();
            });
        })
    });
})