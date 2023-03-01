"use strict";

const visa = applyForVisa(
  {
    name: "Eugene",
    age: 18,
    country: "Ukraine",
    profession: "tutor",
  },
  ["doc1", "doc2", "doc3"],
  { covid: false }
);
console.log("Your visa status --->>", visa);

function applyForVisa(applicationData, documents, examinationResult) {
  let application = isPermittedByApplicationData(applicationData);
  let documentAgency = isPermittedByDocumentAgency(documents);
  let examination = isPermittedByHealth(examinationResult);

  return application && documentAgency && examination
    ? "Congratulations, your visa is approved"
    : "Your visa is denied";
}
function isPermittedByApplicationData(applicationData) {
  if (
    (applicationData.country === "Ukraine" &&
    applicationData.age >= 18 &&
    applicationData.profession !== "military man")
  ) {
    return true;
  } else {
    return false;
  } 
}
function isPermittedByDocumentAgency(documents) {
  if (documents.length >= 3) {
    return true;
  } else {
    return false;
  }
}

function isPermittedByHealth(examinationResult) {
  if (examinationResult?.covid === false) {
    return true;
  } else {
    return false;
  }
}
