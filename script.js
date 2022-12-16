
  async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);                    
    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    console.log(hashHex);
    return hashHex;
  }

  async function submit1() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (await sha256(username) != '8dd072be6292b15d196c71b814118b870fea42f4233d02b9a5e53b1cfaa4b9e8') {
      alert("Неправильное имя пользователя");
      return;
    }
    if (await sha256(password) != '611c4fbb5e4f841a981431200f2998d35c0a53f4e51b387ea97f6a294632897a') {
      alert("Неправильный пароль");
      return;
    }
    window.location.href = "success1.html";
  }

  async function submit2() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (await sha256(username) != '8dd072be6292b15d196c71b814118b870fea42f4233d02b9a5e53b1cfaa4b9e8') {
      alert("Неправильное имя пользователя");
      return;
    }
    if (await sha256(password) != 'dbbc7cac0382dc1f8d8f3fb5e25240b4f9801806fc1f6735dd65e901365d9d0d') {
      alert("Неправильный пароль. Пароль должен содержать хотя бы одну прописную и одну строчную букву, а также цифру.");
      return;
    }
    window.location.href = "success2.html";
  }

  async function submit3() {
    const username = document.getElementById("username").value;
    if (await sha256(username) != '8dd072be6292b15d196c71b814118b870fea42f4233d02b9a5e53b1cfaa4b9e8') {
      alert("Неправильное имя пользователя");
      return;
    }
    alert("Неправильный пароль. Забыли пароль? Нажмите на ссылку под кнопкой \"Войти\"");
    const a = document.getElementById("forgotten");
    a.classList.remove("hidden");
  }

  async function submit4() {
    const band = document.getElementById("band");
    const series = document.getElementById("series");
    const lang = document.getElementById("lang");
    const els = [band, series, lang];
    const shas = ['2d559ca435bbe90d965492bf8187243d6a611e6fece6e7467f4a0a1cfdd91879', 'c0a6cc829cd08735294765c75938a7da2b0f222d52e98bff13cb237cd99deaac', 'fe1d9c7db3762da63c17852f7652e3d4a73154f90bcd90474550c7a552d3d0bf'];
    var good = true;
    for (var i = 0; i < 3; i++) {
        if (await sha256(els[i].value) == shas[i]) {
            els[i].classList.remove("wrong");
            els[i].classList.add("correct");
        } else {
          els[i].classList.add("wrong");
          els[i].classList.remove("correct");
          good = false;
        }
    }
    if (good) {
        window.location.href = "success3.html";
    } else {
        alert("Неверный ответ на один из контрольных вопросов. Для ответов используйте только английские слова.");
    }
  }

  window.onload = function() {
    var btn1 = document.getElementById("submit1");
    if (btn1) {
        btn1.onclick = submit1;
    }
    var btn2 = document.getElementById("submit2");
    if (btn2) {
        btn2.onclick = submit2;
    }
    var btn3 = document.getElementById("submit3");
    if (btn3) {
        btn3.onclick = submit3;
    }
    var btn4 = document.getElementById("submit4");
    if (btn4) {
        btn4.onclick = submit4;
    }
  };
 