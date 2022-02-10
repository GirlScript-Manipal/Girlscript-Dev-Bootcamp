const correctAnswers = ["B", "A", "B", "A"];
const form = document.querySelector(".quiz-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //check answers
  userAnswers.forEach((answer, index) => {
    if (correctAnswers[index] === answer) {
      score += 25;
    }
  });

  scrollTo(0, 0);

  const spand = document.querySelector("span");
  spand.innerText = `${score}%`;

  const result = document.querySelector(".result");
  result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
