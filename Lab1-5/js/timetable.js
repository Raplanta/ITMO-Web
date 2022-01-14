const mondayInput = document.querySelector(".monday-form input");
const mondayButton = document.querySelector(".monday-form button");
const mondayActivities = document.querySelector(".monday-activities");
var template = document.querySelector("template");

const addedActivity = localStorage.getItem("added-activity");
let allActivities = [];
if (addedActivity) {
  allActivities = JSON.parse(addedActivity);
}

showActivities()

function htmlEntities(str) {
  return String(str).replace(/</g, '&lt;');
}

mondayButton.onclick = () => {
  let text = htmlEntities(mondayInput.value);
  if (text.trim()) {
    allActivities.push(text);
    localStorage.setItem("added-activity", JSON.stringify(allActivities));
    let tmp = template.content.cloneNode(true);
    tmp.querySelector("a").innerHTML=text;
    mondayActivities.appendChild(tmp);
  }
  mondayInput.value = "";
};

function deleteActivity(el) {
  allActivities.splice(allActivities.indexOf(el.parentNode.childNodes[1].innerHTML), 1);
  localStorage.setItem("added-activity", JSON.stringify(allActivities));
  el.parentNode.parentNode.removeChild(el.parentNode)
}

function showActivities() {
  allActivities.forEach(el => {
    let tmp = template.content.cloneNode(true);
    tmp.querySelector("a").innerHTML=el
    mondayActivities.appendChild(tmp)
  })
}
