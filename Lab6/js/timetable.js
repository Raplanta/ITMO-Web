const mondayActivities = document.querySelector(".monday-activities");
var template = document.querySelector("template");

const addedActivity = localStorage.getItem("added-activity");
let allActivities = [];
if (addedActivity) {
  allActivities = JSON.parse(addedActivity);
}

showActivities();

function addTask(text){
  if (text !== "") {
    allActivities.push(text);
  }
  localStorage.setItem("added-activity", JSON.stringify(allActivities));
  tmp = template.content.cloneNode(true);
  tmp.querySelector("a").innerHTML=text;
  mondayActivities.appendChild(tmp);
}

function deleteActivity(el) {
  allActivities.splice(allActivities.indexOf(el.parentNode.childNodes[1].innerHTML), 1);
  localStorage.setItem("added-activity", JSON.stringify(allActivities));
  el.parentNode.parentNode.removeChild(el.parentNode);
}

function showActivities() {
  allActivities.forEach(el => {
    tmp = template.content.cloneNode(true);
    tmp.querySelector("a").innerHTML=el;
    mondayActivities.appendChild(tmp);
  });
}
