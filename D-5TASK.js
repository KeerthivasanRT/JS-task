let user = {};
  let score = 0;

  let quizQuestions = [
    { q: "8 + 5 = ?", options: ["7","11","13"], answer: "13" },
    { q: "12 - 7 = ?", options: ["5","6","8"], answer: "5" },
    { q: "3 * 3 = ?", options: ["5","6","9"], answer: "9" }
  ];

  function registerUser() {
    let n = document.getElementById("name").value;
    let e = document.getElementById("email").value;
    let a = document.getElementById("age").value;

    if(n=="" || e=="" || a=="") {
      document.getElementById("regMsg").innerText = "⚠ Please fill all fields!";
      return;
    }
    if(a < 12) {
      document.getElementById("regMsg").innerText = "⚠ Age must be 12 or above!";
      return;
    }

    user.name = n;
    user.email = e;
    user.age = a;

    document.getElementById("regMsg").innerText = "✅ Registration Successful!";
    document.getElementById("quizSection").classList.remove("hidden");
    showQuiz();
  }

  function showQuiz() {
    let qDiv = document.getElementById("questions");
    qDiv.innerHTML = "";
    quizQuestions.forEach((q, i) => {
      let html = "<p>"+(i+1)+". "+q.q+"</p>";
      q.options.forEach(opt => {
        html += "<input type='radio' name='q"+i+"' value='"+opt+"'> "+opt+" ";
      });
      qDiv.innerHTML += html;
    });
  }

  function submitQuiz() {
    score = 0;
    for(let i=0;i<quizQuestions.length;i++) {
      let opts = document.getElementsByName("q"+i);
      let selected = "";
      for(let o of opts) {
        if(o.checked) selected = o.value;
      }
      if(selected == quizQuestions[i].answer) {
        score += 10;
      }
    }
    showResult();
  }

  function showResult() {
    let percentage = (score/30)*100;
    let grade = "";
    if(percentage >= 90) grade = "A";
    else if(percentage >= 70) grade = "B";
    else if(percentage >= 50) grade = "C";
    else grade = "D";

    let now = new Date();

    document.getElementById("scoreOutput").innerText = "Score: "+score+"/30 ("+percentage+"%)";
    document.getElementById("gradeOutput").innerText = "Grade: "+grade;
    document.getElementById("timeOutput").innerText = "Time: "+now;

    user.score = score;
    user.percentage = percentage;
    user.grade = grade;
    user.timestamp = now;

    document.getElementById("jsonOutput").innerText = JSON.stringify(user);
    document.getElementById("resultSection").classList.remove("hidden");
  }