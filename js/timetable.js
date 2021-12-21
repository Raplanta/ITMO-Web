const mondayInput = document.querySelector(".monday-form input");
const mondayButton = document.querySelector(".monday-form button");
const mondayActivities = document.querySelector(".monday-activities");

const addedActivity = localStorage.getItem("added-activity");
let allActivities = [];
if (addedActivity) {
  allActivities = JSON.parse(addedActivity);
}
showActivities();

mondayButton.onclick = () => {
  let text = mondayInput.value;
  if (text !== "") {
    allActivities.push(text);
  }
  localStorage.setItem("added-activity", JSON.stringify(allActivities));
  showActivities();
};

function deleteActivity(index) {
  allActivities.splice(index, 1);
  localStorage.setItem("added-activity", JSON.stringify(allActivities));
  showActivities();
}

function showActivities() {
  let newActivity = "";
  allActivities.forEach((element, index) => {
    newActivity += `<li> ${element} <button onclick="deleteActivity(${index})">Убрать</span></li>`;
  });
  mondayActivities.innerHTML = newActivity;
}
