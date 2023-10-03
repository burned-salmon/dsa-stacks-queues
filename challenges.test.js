const Challenges = require("./challenges");

describe("reverseString", function () {
    it("Correctly reverses abc123", function () {
        expect(Challenges.reverseString("abc123")).toEqual("321cba");
    });

    it("Correctly reverses Hoogly Boogly", function () {
        expect(Challenges.reverseString("Hoogly Boogly")).toEqual("ylgooB ylgooH");
    });
});
