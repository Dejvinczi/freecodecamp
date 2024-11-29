const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");

const cleanRawText = (rawText) => {
  const cleanPattern = /([^a-z0-9]+)/gi;
  const text = rawText.replace(cleanPattern, "").toLowerCase();

  return text;
};

const validateRawText = (rawText) => {
  if (rawText === "") throw "empty value";
  const text = cleanRawText(rawText);

  return text;
};

const isPalindrome = (text) => {
  return text === text.split("").reverse().join("");
};

const checkIsPalindrome = () => {
  const rawText = textInput.value;
  let text;

  try {
    text = validateRawText(rawText);
  } catch (err) {
    console.log(err);
    if (err === "empty value") {
      alert("Please input a value");
    }
    return;
  }

  const textIsPalindrome = isPalindrome(text);
  const resultMessage = `${rawText} is ${textIsPalindrome ? "a palindrome" : "not a palindrome"}`;
  resultText.innerText = resultMessage;
};

checkButton.addEventListener("click", checkIsPalindrome);
