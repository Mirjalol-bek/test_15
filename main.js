
let questions = [
    {
      question: "Quyidagilarning qaysi biri  yuqoriroq yuridik kuchga ega?",
      variants: [
        "Qonun",
        "Vazirlar Mahkamsi qarori",
        "Konstitsiya",
        "Prezident farmoni",
      ],
      correctAnswer: "Konstitsiya",
    },
    {
      question: "Pulning qaysi vazifasi narxning shakllanishi bilan bog’liq?",
      variants: [
        "Qiymat o'lchovi",
        "Jamg'arma vositasi",
        "To'lov vositasi",
        "Muomala vositasi",
      ],
      correctAnswer: "Qiymat o'lchovi",
    },
  ];
  let stopApp = true;
  while (stopApp) {
    let a = +prompt(
      "1.Testni boshlash \n 2.Testni tahrirlash \n 3.Savollar ro'yxati\n 4.IELTS sertifikati bormi sizda.\n 0.Chiqish"
    );
  
    switch (a) {
      case 1:
        startTest (questions);
        break;
      case 2:
        let password = prompt("Parolni kiriting: ", "admin");
        if (password == "admin") editTest(questions);
        break;
      case 3:
        alert("Savollar ro'yxati: \n" + getQuestionsList(questions));
        break;
        case 4:
        let IELTS = prompt("1. ha \n 2. yoq")
        if (IELTS = ha){
          IELTS= 1.3;
        }
        else {
          IELTS = 1;
        }
      case 0:
        stopApp = false;
        break;
    }
  }
  
  function toVariant(arr) {
    let newArr = arr.map((el, i) => {
      return String.fromCharCode(65 + i) + ") " + el;
    });
  
    return newArr;
  }
  const startTime = new Date();
  function startTest(questions) {
    let counter = 0;
    for (let i = 0; i < questions.length; i++) {
      let userAnswer = prompt(
        i +
          1 +
          ") " +
          questions[i].question +
          "\n" +
          toVariant(questions[i].variants).join("\n")
      );
  
      let n = userAnswer.toLowerCase().charCodeAt(0) - 97;
      if (questions[i].variants[n] === questions[i].correctAnswer) {
        counter++;
      }
    }
    alert("Siz: " + counter + " ta savolga to`g`ri javob berdingiz");
  }
  function getQuestionsList(questions) {
    let questionsLest = "";
    for (let i = 0; i < questions.length; i++) {
      questionsLest += i + 1 + questions[i].question + "\n";
    }
    return questionsLest;
  }
  function editTest(questions) {
    let questionsLest =
      "Taxrirlamoqchoi bo'lgan savolni raqamini kiriting:\n" +
      getQuestionsList(questions);
  
    let editIndext = +prompt(questionsLest);
    questions[editIndext - 1] = {
      question: prompt("Savolni kiriting: ", questions[editIndext - 1].question),
      variants: [
        prompt("a) variantni kiriting: ", questions[editIndext - 1].variants[0]),
        prompt("b) variantni kiriting: ", questions[editIndext - 1].variants[1]),
        prompt("c) variantni kiriting: ", questions[editIndext - 1].variants[2]),
        prompt("d) variantni kiriting: ", questions[editIndext - 1].variants[3]),
      ],
      correctAnswer: prompt(
        "To'ri javobni kiriting",
        questions[editIndext - 1].correctAnswer
      ),
    };
  }

