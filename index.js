module.exports = Phrase;

//Add reverse to all strings
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

//Add a blank check to each string
String.prototype.blank = function blank() {
  if ( this.length === 0 || this.match(/^\s+$/gm)) {
    return true;
  }
  return false;
}

//Add a last to arrays
Array.prototype.last = function last() {
  return this.slice(-1);
}

function emailParts(email) {
  return email.split("@")
}

//define a Phrase Object
function Phrase(content) {
  this.content = content;

  //Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.letters());
  }

  //Returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    if (this.letters()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }

  }

  // returns letters of the contents
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  this.louder = function louder() {
    return this.processedContent().toUpperCase();
  }

  this.processor = function(string) {
    return string.toLowerCase();
  }

}
