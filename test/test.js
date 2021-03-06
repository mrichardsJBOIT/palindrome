let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {

  describe("#palindrome", function() {

    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return false for an empty string", function() {
      let emptyPhrase = new Phrase("");
      assert(!emptyPhrase.palindrome());
    });

    it("should return true for a plain palindrome", function() {
      let nonPalindrome = new Phrase("racecar");
      assert(nonPalindrome.palindrome());
    });

    it("should return true for a mixed case palindrome", function() {
      let mixedCase = new Phrase("RaceCar");
      assert(mixedCase.palindrome());
    });

    it("should return true for a palindrome with punctuation", function() {
      let punctuatedPalindrome =  new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });

  });

  describe("#letters", function() {
    it("should return only letters ", function() {
      let punctuatedPalindrome =  new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");

    });

    it("should return empty string for non alphabetical phrase", function() {
      let nonAlpha = new Phrase("1234@#");
      assert.strictEqual(nonAlpha.letters(), "");
    });

  });

});
