function appendModal(nameValue, topicValue, messageValue) {
  if (alreadySubmitted) {
    document.getElementById("nameField").remove();
    document.getElementById("topicField").remove();
    document.getElementById("messageField").remove();
  }

  const nameField = document.createElement("p");
  nameField.setAttribute("id", "nameField");
  nameField.textContent = nameValue;

  const topicField = document.createElement("p");
  topicField.setAttribute("id", "topicField");
  topicField.textContent = topicValue;

  const messageField = document.createElement("p");
  messageField.setAttribute("id", "messageField");
  messageField.textContent = messageValue;

  document.getElementById("nameDiv").appendChild(nameField);
  document.getElementById("topicDiv").appendChild(topicField);
  document.getElementById("messageDiv").appendChild(messageField);
}

let alreadySubmitted = false;
const contactForm = document.getElementById("contactMeForm");
contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const nameValue = document.getElementsByName("f_name")[0].value;
  const topicValue = document.getElementsByName("f_topic")[0].value;
  const messageValue = document.getElementsByName("f_message")[0].value;
  appendModal(nameValue, topicValue, messageValue);
  alreadySubmitted = true;

  $("#exampleModal").modal();
});
