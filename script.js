//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  // Create a new paragraph element
  const newParagraph = document.createElement("p");

  // Create a text node with the desired string
  const textContent = document.createTextNode("DOM load success);

  // Append the text node to the paragraph element
  newParagraph.appendChild(textContent);

  // Append the new paragraph element to the body of the document
  document.body.appendChild(newParagraph);
});
