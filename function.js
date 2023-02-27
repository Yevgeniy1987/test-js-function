"use strict";

const visa = applyForVisa(true, true, true);
console.log("Your visa status --->>", visa);

function applyForVisa(isCompleted, areSubmitted, isExamined) {
  let application = isApplicationFilled(isCompleted);
  let documents = areDocumentsSubmitted(areSubmitted);
  let examination = isHealthExamined(isExamined);

  return application && documents && examination
    ? "Congratulations, your visa is approved"
    : "Your visa is denied";
}
function isApplicationFilled(isCompleted) {
  if (isCompleted) {
    return true;
  } else {
    return false;
  }
}
function areDocumentsSubmitted(areSubmitted) {
  if (areSubmitted) {
    return true;
  } else {
    return false;
  }
}

function isHealthExamined(isExamined) {
  if (isExamined) {
    return true;
  } else {
    return false;
  }
}
