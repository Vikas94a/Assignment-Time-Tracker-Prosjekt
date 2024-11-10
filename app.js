const activities = [
  {
    title: "Work",
    daily: { current: 5, previous: 7 },
    weekly: { current: 32, previous: 36 },
    monthly: { current: 103, previous: 128 },
  },
  {
    title: "Play",
    daily: { current: 1, previous: 2 },
    weekly: { current: 10, previous: 8 },
    monthly: { current: 23, previous: 29 },
  },
  {
    title: "Study",
    daily: { current: 0, previous: 1 },
    weekly: { current: 4, previous: 7 },
    monthly: { current: 13, previous: 19 },
  },
  {
    title: "Exercise",
    daily: { current: 1, previous: 1 },
    weekly: { current: 4, previous: 5 },
    monthly: { current: 11, previous: 18 },
  },
  {
    title: "Social",
    daily: { current: 1, previous: 3 },
    weekly: { current: 5, previous: 10 },
    monthly: { current: 21, previous: 23 },
  },
  {
    title: "Self Care",
    daily: { current: 0, previous: 1 },
    weekly: { current: 2, previous: 2 },
    monthly: { current: 7, previous: 11 },
  },
];

// activity titles to their respective divs

const Work = document.querySelector("#work-timing");
const Play = document.querySelector("#play-timing");
const Study = document.querySelector("#study-timing");
const Exercise = document.querySelector("#excercise-timing");
const Social = document.querySelector("#social-timing");
const SelfCare = document.querySelector("#self-timing");

// For buttons
const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");

function updateTime(period) {
  // clear previous entries for each activity
  Work.innerText = "";
  Play.innerText = "";
  Study.innerText = "";
  Exercise.innerText = "";
  Social.innerText = "";
  SelfCare.innerText = "";

  // loop through each activity
  activities.forEach((activity) => {
    const title = activity.title;
    // create a container for title and more option

    const titleContainer = document.createElement("div");
    titleContainer.className = "title"; // class so we can do styling
    const moreOption = document.createElement("img");
    moreOption.src = "./images/icon-ellipsis.svg"; // icon for more option
    titleContainer.append(title, moreOption);
    // create an element to display the current time
    const currentNumber = document.createElement("h2");
    currentNumber.className = "current-numer";
    currentNumber.innerText = `${activity[period].current}hrs`;

    // create an element for past timing section
    const previousNumber = document.createElement("p");
    previousNumber.className = "previous-number"; // class so we can do styling
    previousNumber.innerText = `Last week- ${activity[period].previous}`;

    // check conditions for each title
    if (activity.title === "Work")
      Work.append(titleContainer, currentNumber, previousNumber);
    else if (activity.title === "Play")
      Play.append(titleContainer, currentNumber, previousNumber);
    else if (activity.title === "Study")
      Study.append(titleContainer, currentNumber, previousNumber);
    else if (activity.title === "Exercise")
      Exercise.append(titleContainer, currentNumber, previousNumber);
    else if (activity.title === "Social")
      Social.append(titleContainer, currentNumber, previousNumber);
    else if (activity.title === "Self Care")
      SelfCare.append(titleContainer, currentNumber, previousNumber);
  });
}

// page lode function to set daily timing and button style
function homePage() {
  updateTime("daily");
  daily.style.opacity = "1";
}
homePage();

// eventListner for each timing button
daily.addEventListener("click", () => {
  updateTime("daily");
  daily.style.opacity = "1";
  monthly.style.opacity = "0.3";
  weekly.style.opacity = "0.3";
});
weekly.addEventListener("click", () => {
  updateTime("weekly");
  weekly.style.opacity = "1";
  daily.style.opacity = "0.3";
  monthly.style.opacity = "0.3";
});
monthly.addEventListener("click", () => {
  updateTime("monthly");
  monthly.style.opacity = "1";
  daily.style.opacity = "0.3";
  weekly.style.opacity = "0.3";
});
