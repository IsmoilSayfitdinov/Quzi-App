const quizData = [
        {
            question: "HTML nima uchun ishlatiladi?",
            a: "Veb-sahifalar yaratish uchun",
            b: "Ma'lumotlar bazasini boshqarish uchun",
            c: "Serverlarni boshqarish uchun",
            d: "Mobil ilovalarni yaratish uchun",
            correct: "a",
        },
        {
            question: "CSS nima qiladi?",
            a: "Serverlarni boshqaradi",
            b: "Veb-sahifalar uslublarini belgilaydi",
            c: "Ma'lumotlar bazasini boshqaradi",
            d: "Mobil ilovalarni yaratadi",
            correct: "b",
        },
        {
            question: "JavaScript nima?",
            a: "Dasturlash tili",
            b: "Veb-brauzer",
            c: "Ma'lumotlar bazasi",
            d: "Server",
            correct: "a",
        },
        {
            question: "DOM nima?",
            a: "Ma'lumotlar ombori",
            b: "Veb-sahifa tuzilmasi",
            c: "JavaScript kutubxonasi",
            d: "CSS fayli",
            correct: "b",
        },
        {
            question: "Python dasturlash tili qaysi turdagi?",
            a: "Oliy darajadagi dasturlash tili",
            b: "Past darajadagi dasturlash tili",
            c: "O'rta darajadagi dasturlash tili",
            d: "Mashina tilidagi dasturlash tili",
            correct: "a",
        },
        {
            question: "Java dasturlash tili qaysi kompaniya tomonidan ishlab chiqilgan?",
            a: "Microsoft",
            b: "Apple",
            c: "Sun Microsystems",
            d: "IBM",
            correct: "c",
        },
        {
            question: "Git nima?",
            a: "Versiyalar boshqaruv tizimi",
            b: "Dasturlash tili",
            c: "Veb-brauzer",
            d: "Mobil ilova",
            correct: "a",
        },
        {
            question: "SQL qaysi maqsadda ishlatiladi?",
            a: "Veb-sahifalarni yaratish",
            b: "Ma'lumotlar bazasini boshqarish",
            c: "Grafik dizayn",
            d: "O'yin ishlab chiqish",
            correct: "b",
        },
        {
            question: "React.js nima?",
            a: "Ma'lumotlar bazasi",
            b: "Dasturlash tili",
            c: "JavaScript kutubxonasi",
            d: "Server",
            correct: "c",
        },
        {
            question: "OOP (Object-Oriented Programming) ning asosiy tamoyillari qaysilar?",
            a: "Abstraction, Encapsulation, Inheritance, Polymorphism",
            b: "HTML, CSS, JavaScript",
            c: "Variables, Loops, Functions, Conditions",
            d: "TCP, IP, HTTP, HTTPS",
            correct: "a",
        },
        {
            question: "C++ dasturlash tili kim tomonidan ishlab chiqilgan?",
            a: "James Gosling",
            b: "Bjarne Stroustrup",
            c: "Guido van Rossum",
            d: "Dennis Ritchie",
            correct: "b",
        },
        {
            question: "Ruby on Rails nima?",
            a: "JavaScript kutubxonasi",
            b: "Python frameworki",
            c: "Ruby frameworki",
            d: "PHP kutubxonasi",
            correct: "c",
        },
        {
            question: "HTTP so'rovining qaysi turi ma'lumotlarni serverdan olish uchun ishlatiladi?",
            a: "POST",
            b: "GET",
            c: "PUT",
            d: "DELETE",
            correct: "b",
        },
        {
            question: "API nima?",
            a: "Application Programming Interface",
            b: "Advanced Programming Integration",
            c: "Automatic Process Implementation",
            d: "Artificial Programming Intelligence",
            correct: "a",
        },
        {
            question: "Kotlin dasturlash tili qaysi platforma uchun ishlab chiqilgan?",
            a: "Web",
            b: "Desktop",
            c: "Android",
            d: "iOS",
            correct: "c",
        },
        {
            question: "Docker nima uchun ishlatiladi?",
            a: "Veb-sahifalarni yaratish",
            b: "Konteynerizatsiya qilish va ilovalarni izolyatsiya qilish",
            c: "Ma'lumotlar bazasini boshqarish",
            d: "Grafik dizayn",
            correct: "b",
        },
        {
            question: "Node.js nima?",
            a: "Frontend kutubxonasi",
            b: "Backend platformasi",
            c: "Ma'lumotlar bazasi",
            d: "Veb-server",
            correct: "b",
        },
        {
            question: "PHP qaysi maqsadda ishlatiladi?",
            a: "Veb-dasturlash",
            b: "Grafik dizayn",
            c: "Ma'lumotlar tahlili",
            d: "Mobil ilova ishlab chiqish",
            correct: "a",
        },
        {
            question: "Swift dasturlash tili qaysi kompaniya tomonidan ishlab chiqilgan?",
            a: "Microsoft",
            b: "Google",
            c: "Apple",
            d: "IBM",
            correct: "c",
        },
        {
            question: "AngularJS nima?",
            a: "JavaScript kutubxonasi",
            b: "JavaScript frameworki",
            c: "CSS frameworki",
            d: "HTML kutubxonasi",
            correct: "b",
        },
        {
            question: "Sass nima?",
            a: "CSS preprocessori",
            b: "JavaScript frameworki",
            c: "HTML kutubxonasi",
            d: "Ma'lumotlar bazasi",
            correct: "a",
        },
        {
            question: "AJAX qaysi maqsadda ishlatiladi?",
            a: "Sinxron web so'rovlar yuborish uchun",
            b: "Asinxron web so'rovlar yuborish uchun",
            c: "Veb sahifalarni uslublarini belgilash uchun",
            d: "Ma'lumotlarni saqlash uchun",
            correct: "b",
        },
        {
            question: "Bootstrap nima?",
            a: "JavaScript kutubxonasi",
            b: "CSS frameworki",
            c: "HTML preprocessori",
            d: "Ma'lumotlar bazasi",
            correct: "b",
        },
        {
            question: "RESTful API nima?",
            a: "Veb-sahifalar yaratish usuli",
            b: "Asinxron web so'rovlar yuborish uchun",
            c: "Server va mijoz orasidagi ma'lumot almashish protokoli",
            d: "Ma'lumotlar bazasini boshqarish usuli",
            correct: "c",
        },
        {
            question: "Jenkins nima uchun ishlatiladi?",
            a: "Kontentni boshqarish",
            b: "Veb sahifalarni yaratish",
            c: "CI/CD pipeline boshqarish",
            d: "Ma'lumotlarni tahlil qilish",
            correct: "c",
        },
        {
            question: "TypeScript nima?",
            a: "JavaScript frameworki",
            b: "JavaScript preprocessori",
            c: "JavaScript superset",
            d: "JavaScript kutubxonasi",
            correct: "c",
        },
        {
            question: "Kubernetes nima?",
            a: "Veb sahifalar yaratish platformasi",
            b: "Ma'lumotlar bazasi",
            c: "Kontainer orkestratsiyasi tizimi",
            d: "JavaScript kutubxonasi",
            correct: "c",
        },
        {
            question: "Flask qaysi dasturlash tilida yozilgan?",
            a: "JavaScript",
            b: "Python",
            c: "Ruby",
            d: "PHP",
            correct: "b",
        },
        {
            question: "Vue.js nima?",
            a: "CSS frameworki",
            b: "JavaScript kutubxonasi",
            c: "JavaScript frameworki",
            d: "HTML preprocessori",
            correct: "c",
        },
        {
            question: "SQL da qaysi buyruq ma'lumotlar bazasida jadval yaratish uchun ishlatiladi?",
            a: "CREATE TABLE",
            b: "INSERT INTO",
            c: "SELECT",
            d: "UPDATE",
            correct: "a",
        },
        {
            question: "Java dasturlash tilida qaysi kalit so'z sinfni yaratish uchun ishlatiladi?",
            a: "function",
            b: "class",
            c: "def",
            d: "new",
            correct: "b",
        }
    
] // sovolar toplami

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0; // sovolar etapi
let score = 0; // sovolar togri topilgan bal

loadQuiz(); // functiani oldindan chaqirish

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Siz ${quizData.length} savoldan ${score} tasiga to'g'ri javob berdingiz.</h2>
                <button onclick="location.reload()">Qayta boshlash</button>
            `;
        }
    }
});