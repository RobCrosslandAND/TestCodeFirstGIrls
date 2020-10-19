/**
 * Projects Page
 */
const projects = [
  {
    title: "CFG Project Website",
    description:
      "I created this website with two teammates during CFG. It showcased everything we had learned and showed our teamwork to get it looking great. We came first in the competition too!",
    image_url: "./images/placeholder-cfg.png",
    link: {
      text: "See it live",
      url: "#"
    }
  },
  {
    title: "My Portfolio",
    description:
      "This is where you are right now! I created this as I was learning the content in CFG, it really helped me to see how everything fit in real use-cases, it was awesome!",
    image_url: "./images/placeholder-cfg.png"
  },
  {
    title: "My Art Website",
    description:
      "Not long after finishing CFG, I took my love for Art and decided to create a visually pleasing website to show my artwork. There's even options in there to buy my work to help support my future.",
    image_url: "./images/placeholder-cfg.png",
    link: {
      text: "Get inspired",
      url: "#"
    }
  }
];

function appendCard(project) {
  const top5Cards = document.getElementById("top5Cards");

  if (top5Cards) {
    const colDiv = document.createElement("div");
    colDiv.setAttribute("class", "col-md-6 col-lg-4");

    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card mb-3");

    const imageTag = document.createElement("img");
    imageTag.setAttribute("class", "card-img-top");
    imageTag.setAttribute("alt", project.title);
    imageTag.setAttribute("src", project.image_url);
    cardDiv.appendChild(imageTag);

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.setAttribute("class", "card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.textContent = project.title;
    cardBodyDiv.appendChild(cardTitle);

    const cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text");
    cardText.textContent = project.description;
    cardBodyDiv.appendChild(cardText);

    if (project.link) {
      const cardLink = document.createElement("a");
      cardLink.setAttribute("class", "btn btn-primary");
      cardLink.setAttribute("href", project.link.url);
      cardLink.textContent = project.link.text;
      cardBodyDiv.appendChild(cardLink);
    }

    cardDiv.appendChild(cardBodyDiv);
    colDiv.appendChild(cardDiv);
    top5Cards.appendChild(colDiv);
  }
}

for (let i = 0; i < projects.length; i++) {
  appendCard(projects[i]);
}

const addNewForm = document.getElementById("addNewForm");
addNewForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const newProject = {};
  newProject.title = document.getElementsByName("f_title")[0].value;
  newProject.description = document.getElementsByName("f_description")[0].value;

  const image = document.getElementsByName("f_file")[0].files[0];
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.addEventListener("load", function(event) {
    newProject.image_url = event.target.result;
    appendCard(newProject);
  });
});
