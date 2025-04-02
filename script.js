// Управление навигацией на главной странице
function checkAccess() {
  const task1Completed = localStorage.getItem("task1") === "completed";
  const task2Completed = localStorage.getItem("task2") === "completed";
  const task3Completed = localStorage.getItem("task3") === "completed";

  if (document.getElementById("task1Link")) {
    document.getElementById("task1Link").style.display = "block";
    document.getElementById("task2Link").style.display = task1Completed ? "block" : "none";
    document.getElementById("task3Link").style.display = task2Completed ? "block" : "none";
    document.getElementById("finalLink").style.display = task3Completed ? "block" : "none";
  }
}

// Функция форматирования кода
async function formatCode() {
  const codeEditor = document.getElementById("code");
  delete codeEditor.dataset["highlighted"];
  const code = codeEditor.textContent;
  try {
    const formatted = await prettier.format(code, { parser: "babel", plugins: prettierPlugins, tabWidth: 2 });
    codeEditor.textContent = formatted;
    hljs.highlightElement(codeEditor);
  } catch (error) {
    alert("Ошибка форматирования: " + error.message);
  }
}

// Проверка задания 1
function checkTask1() {
  const code = document.getElementById("code").textContent;
  const resultElement = document.getElementById("result");
  try {
    eval(code);
    if (reverseString("hello") === "olleh") {
      resultElement.classList.remove("error");
      localStorage.setItem("task1", "completed");
      resultElement.textContent = "Отлично! Переход к следующему заданию...";
      setTimeout(() => (window.location.href = "task2.html"), 3000);
    } else {
      resultElement.classList.add("error");
      resultElement.textContent = "Код работает неверно. Попробуй ещё!";
    }
  } catch (error) {
    resultElement.classList.add("error");
    resultElement.textContent = "Ошибка в коде: " + error.message;
  }
}

// Проверка задания 2
function checkTask2() {
  const code = document.getElementById("code").textContent;
  const resultElement = document.getElementById("result");
  try {
    eval(code);
    if (buildShelter(5, 3) === 15) {
      resultElement.classList.remove("error");
      localStorage.setItem("task2", "completed");
      resultElement.textContent = "Отлично! Переход к следующему заданию...";
      setTimeout(() => (window.location.href = "task3.html"), 3000);
    } else {
      resultElement.classList.add("error");
      resultElement.textContent = "Код работает неверно. Попробуй ещё!";
    }
  } catch (error) {
    resultElement.classList.add("error");
    resultElement.textContent = "Ошибка в коде: " + error.message;
  }
}

// Проверка задания 3
function checkTask3() {
  const code = document.getElementById("code").textContent;
  const resultElement = document.getElementById("result");
  try {
    resultElement.classList.remove("error");
    eval(code);
    if (launchSatellite(60) === true && launchSatellite(40) === false) {
      localStorage.setItem("task3", "completed");
      resultElement.textContent = "Поздравляем! Ты прошёл квест!";
      setTimeout(() => (window.location.href = "final.html"), 3000);
    } else {
      resultElement.classList.add("error");
      resultElement.textContent = "Код работает неверно. Попробуй ещё!";
    }
  } catch (error) {
    resultElement.classList.add("error");
    resultElement.textContent = "Ошибка в коде: " + error.message;
  }
}

// Инициализация на главной странице
if (document.getElementById("task1Link")) {
  window.onload = checkAccess;
}
