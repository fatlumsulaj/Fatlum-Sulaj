// test

const aboutMe = document.getElementById("aboutMe");
const skills = document.getElementById("skills");
const goals = document.getElementById("goals");

const aboutMeP = document.getElementById("aboutMeP");
const skillsP = document.getElementById("skillsP");
const goalsP = document.getElementById("goalsP");

const setActiveButton = (activeBtn, activeBtnP, inactiveBtn1, inactiveBtn1P, inactiveBtn2, inactiveBtn2P) => {
    activeBtnP.classList.add("aboutMe-active-p");
    inactiveBtn1P.classList.remove("aboutMe-active-p");
    inactiveBtn2P.classList.remove("aboutMe-active-p");
    activeBtn.classList.add("aboutMe-active-btn");
    inactiveBtn1.classList.remove("aboutMe-active-btn");
    inactiveBtn2.classList.remove("aboutMe-active-btn");
  };
  
  skills.addEventListener("click", () => {
    setActiveButton(skills, skillsP, aboutMe, aboutMeP, goals, goalsP);
  });
  
  aboutMe.addEventListener("click", () => {
    setActiveButton(aboutMe, aboutMeP, skills, skillsP, goals, goalsP);
  });
  
  goals.addEventListener("click", () => {
    setActiveButton(goals, goalsP, skills, skillsP, aboutMe, aboutMeP);
  });