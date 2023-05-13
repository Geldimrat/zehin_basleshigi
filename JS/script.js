let main = document.querySelector('.main');
let person = document.querySelector('.person');
let people = document.querySelector('.people');
let subject = document.querySelector('.subject');
let test = document.getElementById('test');
let navLeft = document.querySelector('.off');
let delet = document.querySelector('.del');
let Time = document.getElementById('demo');
let TimeText = document.getElementById('demo1');
let NavText = document.getElementById('nav-text');
let OFF = document.querySelector('.off');
let ON = document.querySelector('.left');
let NavDisplay = document.querySelector('.left12');
let startBtn = document.getElementById('btn');
let Name = document.getElementById('Name');
let Surname = document.getElementById('Surname');
let WriteName = document.getElementById('WriteName');

let NavSap1 = document.getElementById('nav-sap1');
let NavSap2 = document.getElementById('nav-sap2');
let NavSap3 = document.getElementById('nav-sap3');
let NavSap4 = document.getElementById('nav-sap4');
let NavSap5 = document.getElementById('nav-sap5');
let NavSap6 = document.getElementById('nav-sap6');

function Person() {
    main.style.display = 'none';
    person.style.display = 'block';
}
function People() {
    main.style.display = 'none';
    people.style.display = 'block';
}

function StartBtn() {
    if (Name.value != '' && Surname.value != '') {
        person.style.display = 'none';
        subject.style.display = 'block';
    }
    WriteName.innerHTML = `${Name.value} ${Surname.value}`;

}

function NavBar() {
    ON.style.marginLeft = '0px';
    OFF.style.marginLeft = '0px';
}
function NavLeft() {
    ON.style.marginLeft = '-100%';
    OFF.style.marginLeft = '-100%';
}

function Delete() {
    test.style.display = 'none';
    subject.style.display = 'block';
    san = 0;
    sanaC = 0;
    sanaI = 0;
    MsanaC = 0;
    MsanaI = 0;
}

let SoragYaz = document.getElementById('soragYaz');
let Answer = document.querySelector('.answer');
let MathImg = document.getElementById('MathImg');
let Radio1 = document.getElementById('S1');
let Radio2 = document.getElementById('S2');
let Radio3 = document.getElementById('S3');

let nextBTN = document.getElementById('next');

let WEB = [
    {
        S1: 'What is HTML stands for?',
        'true': 'HyperText Markup Language',
        'false': 'HyperTeht Markup Language',
        'false1': 'HyperTect Markup Language'
    },
    {
        S1: 'Which one is correct form of one line comment?',
        'true': '// this is comment',
        'false': '"this is comment"',
        'false1': '# this is comment'
    },
    {
        S1: 'Can you use same class(.box) more than one time in the same website?',
        'true': 'Yes',
        'false': 'Up to class name',
        'false1': 'No'
    },
    {
        S1: 'Which way is true for creating class in CSS?',
        'true': '.newclass{}',
        'false': '#newclass{}',
        'false1': 'tag newclass'
    },
    {
        S1: 'What does {flex-wrap: wrap;} do?',
        'true': 'putting all elements in one or more line relativly width',
        'false': 'putting all elements in one line',
        'false1': 'putting all elements randomly in one line'
    },
    {
        S1: 'Which one is true for {flex-direction: ___;}?',
        'true': 'row, column, row-reverse, column-reverse',
        'false': 'rows, columns',
        'false1': 'item, align, align-item'
    },
    {
        S1: 'Which one is true?',
        'true': 'overflow: scroll;',
        'false': 'display: scroll;',
        'false1': 'flex: scroll;'
    },
    {
        S1: 'Which attribute is true for linking another page?',
        'true': 'href',
        'false': 'link',
        'false1': 'src'
    },
    {
        S1: 'Which property uses for changing cursor on the website?',
        'true': 'cursor: pointer;',
        'false': 'cursur: pointer;',
        'false1': 'coursor: pointer;'
    },
    {
        S1: 'How can we remove underline of text?',
        'true': 'text-decoration: none',
        'false': 'text-style: none',
        'false1': 'list-style-type: none'
    },
    {
        S1: 'What is "*" symbol in CSS?',
        'true': 'A selector for all elements',
        'false': 'Using intead of: first-child',
        'false1': 'It means important selector in CSS'
    },
    {
        S1: 'What is action in forms?',
        'true': 'The URL to send form data to',
        'false': 'The type http request',
        'false1': 'Determines the type of inputs'
    },
    {
        S1: 'Which is correct comment in HTML?',
        'true': '!--comment--',
        'false': '/*comment*/',
        'false1': '// comment'
    },
    {
        S1: 'What is placeholder?',
        'true': 'Fills an empty input, like clue',
        'false': 'Tag like <img> for empty spaces',
        'false1': 'Tag in html for all empty spaces'
    },
    {
        S1: 'Can we use LOOP attribute both video and audio?',
        'true': 'Yes',
        'false': 'No',
        'false1': 'No, only in video'
    },
    {
        S1: 'How do we declare the horizontal line in web page?',
        'true': 'hr',
        'false': 'br',
        'false1': 'line'
    },
    {
        S1: 'Which type is true for creating input password?',
        'true': 'type="password"',
        'false': 'style="type:password"',
        'false1': 'type="number"'
    },
    {
        S1: 'Which one is not have closing tag?',
        'true': 'img',
        'false': 'font',
        'false1': 'frame'
    },
    {
        S1: 'Which of the following is the largest heading?',
        'true': 'h2',
        'false': 'h3',
        'false1': 'h4'
    },
    {
        S1: 'Which of these is an HTML attribute?',
        'true': 'border',
        'false': 'table',
        'false1': 'tr'
    }
];

let MATH = [
    {
        S1: 'IMG/Math/1.png',
        'true': '25',
    },
    {
        S1: 'IMG/Math/14.png',
        'true': '132',
    },
    {
        S1: 'IMG/Math/3.png',
        'true': '410',
    },
    {
        S1: 'IMG/Math/4.png',
        'true': '11+13+6',
    },
    {
        S1: 'IMG/Math/11.png',
        'true': '3,2,1',
    },
    {
        S1: 'IMG/Math/6.png',
        'true': '90',
    },
    {
        S1: 'IMG/Math/15.png',
        'true': '42',
    },
    {
        S1: 'IMG/Math/8.png',
        'true': '20',
    },
    {
        S1: 'IMG/Math/18.png',
        'true': '4',
    },
    {
        S1: 'IMG/Math/10.png',
        'true': '12'
    },
    {
        S1: 'IMG/Math/5.png',
        'true': '410',
    },
    {
        S1: 'IMG/Math/12.png',
        'true': '7',
    },
    {
        S1: 'IMG/Math/13.png',
        'true': 'Turkey',
    },
    {
        S1: 'IMG/Math/2.png',
        'true': '894'
    },
    {
        S1: 'IMG/Math/7.png',
        'true': '15',
    },
    {
        S1: 'IMG/Math/16.png',
        'true': '288',
    },
    {
        S1: 'IMG/Math/17.png',
        'true': '45',
    },
    {
        S1: 'IMG/Math/9.png',
        'true': '25',
    },
    {
        S1: 'IMG/Math/19.png',
        'true': '111',
    },
    {
        S1: 'IMG/Math/1.png',
        'true': '25',
    }
];

let ENG = [
    {
        S1: 'I work in ___ company that makes ___ carpets.',
        'true': 'the/---',
        'false': 'a/---',
        'false1': 'a/the'
    },
    {
        S1: 'Adults ___ go to school.',
        'true': 'have to',
        'false': 'has to',
        'false1': 'doesnt have to'
    },
    {
        S1: 'What __ one of them want?',
        'true': 'does',
        'false': 'are',
        'false1': 'do'
    },
    {
        S1: 'I lived in Ashgabat ___ three years.',
        'true': 'for',
        'false': 'last',
        'false1': 'at'
    },
    {
        S1: 'I ___ a very good program on TV last night.',
        'true': 'saw',
        'false': 'sow',
        'false1': 'was seeing'
    },
    {
        S1: 'Thank goodness we ___ a dishwasher.',
        'true': 'had',
        'false': 'did',
        'false1': 'were'
    },
    {
        S1: 'The meal ___ you cooked was delicious.',
        'true': 'which',
        'false': 'whose',
        'false1': 'where'
    },
    {
        S1: 'There were a lot of complaints ___ your behavior.',
        'true': 'about',
        'false': 'in',
        'false1': 'on'
    },
    {
        S1: 'She has been a teacher ___ 10 years.',
        'true': 'for',
        'false': 'in',
        'false1': 'since'
    },
    {
        S1: 'We expect you ___ on time.',
        'true': 'to arrive',
        'false': 'arriving',
        'false1': 'arrive'
    },
    {
        S1: 'I waited for you ___ hours.',
        'true': 'for',
        'false': 'in',
        'false1': 'since'
    },
    {
        S1: 'He is staying ___ her house.',
        'true': 'at',
        'false': 'in',
        'false1': 'on'
    },
    {
        S1: 'This is ___ than I expected',
        'true': 'harder',
        'false': 'more harder',
        'false1': 'as hard'
    },
    {
        S1: 'Volvos are ___ in Sweden.',
        'true': 'produced',
        'false': 'producing',
        'false1': 'produces'
    },
    {
        S1: 'We chose ___ by boat rather than by plane.',
        'true': 'to travel',
        'false': 'traveling',
        'false1': 'travel'
    },
    {
        S1: '___ the afternoon we went for a walk.',
        'true': 'In',
        'false': 'Last',
        'false1': 'Since'
    },
    {
        S1: 'It will be ready ___  two weeks.',
        'true': 'in',
        'false': 'for',
        'false1': 'on'
    },
    {
        S1: 'She ___ a good job.',
        'true': 'found',
        'false': 'find',
        'false1': 'is finding'
    },
    {
        S1: 'I can not stand ___ in an office.',
        'true': 'working',
        'false': 'work',
        'false1': 'to work'
    },
    {
        S1: 'He is ___ older than he looks.',
        'true': '---',
        'false': 'more',
        'false1': 'much'
    }
];

let PRO = [
    {
        S1: 'Which programming language is first introduced in 1991?',
        'true': 'Python',
        'false': 'C++',
        'false1': 'JavaScript'
    },
    {
        S1: 'Which one is not a programming language?',
        'true': 'HTML',
        'false': 'REACTJS',
        'false1': 'RUBY'
    },
    {
        S1: 'Which one is a framework?',
        'true': 'EXPRESS',
        'false': 'NODEJS',
        'false1': 'REACTJS'
    },
    {
        S1: 'Who was invented python language?',
        'true': 'Guido Van Rossum',
        'false': 'Rossum Guido',
        'false1': 'Joe Marini'
    },
    {
        S1: 'When was C# developed?',
        'true': 'In about 2000',
        'false': 'In about 2001',
        'false1': 'In about 2002'
    },
    {
        S1: 'Which language was created in 1994 by Danish-Canadian programmer Rasmus Lerdorf?',
        'true': 'PHP',
        'false': 'C#',
        'false1': 'Java'
    },
    {
        S1: 'Which language was created in 1995 by Netscape programmer named Brandan Eich?',
        'true': 'JavaScript',
        'false': 'Java',
        'false1': 'C++'
    },
    {
        S1: 'When was Java language introduced in first time?',
        'true': '1991',
        'false': '1995',
        'false1': '1990'
    },
    {
        S1: 'Who was invented the Java language?',
        'true': 'James Gosling',
        'false': 'Joe Marini',
        'false1': 'Rasmus Lerdorf'
    },
    {
        S1: 'Which language was created in 1998 by Danish computer scientist Bjarne Stroustrup?',
        'true': 'C++',
        'false': 'JavaScript',
        'false1': 'C#'
    },
    {
        S1: 'Which programming language does Flutter use?',
        'true': 'Dart',
        'false': 'JavaScript',
        'false1': 'Java'
    },
    {
        S1: 'What is React?',
        'true': 'It is a javascript library for building user interface.',
        'false': 'It is a framework for building user interface.',
        'false1': 'It is another name of javascript.'
    },
    {
        S1: 'What is Node.js?',
        'true': 'open-source, cross-platform, back-end JavaScript runtime environment.',
        'false': 'open-source, cross-platform, back-end and front-end JavaScript runtime environment.',
        'false1': 'not of them.'
    },
    {
        S1: 'Which one was invented by Ryan Dahl and introduced in 2009?',
        'true': 'Node.js',
        'false': 'React.js',
        'false1': 'Express.js'
    },
    {
        S1: 'What is Express.js?',
        'true': 'It is a back end web application framework.',
        'false': 'It is a back end web application javascript library.',
        'false1': 'It is a language like javascript for back-end web applications'
    },
    {
        S1: 'What is xamarin?',
        'true': 'It is an open-source platform for building modern iOS, Android and Windows...',
        'false': 'It is a language that supports in C#.',
        'false1': 'Not of them.'
    },
    {
        S1: 'It is a markup language created by the World Wide Web Consortium (W3C)?',
        'true': 'XML',
        'false': 'HTML"',
        'false1': 'XAMARIN'
    },
    {
        S1: 'Which framework is used to build android apps in C#?',
        'true': 'Xamarin',
        'false': 'XML',
        'false1': 'Flutter'
    },
    {
        S1: 'It is an open-source mobile application framework created by Facebook...',
        'true': 'React Native',
        'false': 'Android Studio',
        'false1': 'Xamarin'
    },
    {
        S1: 'When was React Native developed?',
        'true': '26th of March, 2015',
        'false': '26th of March, 2014',
        'false1': '16th of March, 2009'
    }
];


let GEO = [
    {
        S1: 'Where is capital city of Turkey?',
        'true': 'Ankara',
        'false': 'Istanbul',
        'false1': 'Antalya'
    },
    {
        S1: 'Where is capital city of USA?',
        'true': 'Washington, D.C',
        'false': 'New York',
        'false1': 'Chicago'
    },
    {
        S1: 'Where is capital city of Uzbekistan?',
        'true': 'Tashkent',
        'false': 'Samarkand',
        'false1': 'Bukhara'
    },
    {
        S1: 'Where is capital city of Turkmenistan?',
        'true': 'Ashgabat',
        'false': 'Dashoguz',
        'false1': 'Ahal'
    },
    {
        S1: 'Where is capital city of England?',
        'true': 'London',
        'false': 'New York',
        'false1': 'Oxford'
    },
    {
        S1: 'Where is capital city of Canada?',
        'true': 'Ottawa',
        'false': 'York',
        'false1': 'London'
    },
    {
        S1: 'Where is capital city of Kazakhstan?',
        'true': 'Astana',
        'false': 'Ankara',
        'false1': 'Tashkent'
    },
    {
        S1: 'Where is capital city of India?',
        'true': 'New Delhi',
        'false': 'Ankara',
        'false1': 'Astana'
    },
    {
        S1: 'Where is capital city of Germany?',
        'true': 'Berlin',
        'false': 'New Delhi',
        'false1': 'Astana'
    },
    {
        S1: 'Where is capital city of Afghanistan?',
        'true': 'Kabul',
        'false': 'Berlin',
        'false1': 'Ankara'
    },
    {
        S1: 'Where is capital city of Pakistan?',
        'true': 'Islamabad',
        'false': 'Kabul',
        'false1': 'Berlin'
    },
    {
        S1: 'Where is capital city of Vietnam?',
        'true': 'Hanoi',
        'false': 'Ankara',
        'false1': 'Berlin'
    },
    {
        S1: 'Where is capital city of China?',
        'true': 'Beijing',
        'false': 'Berlin',
        'false1': 'Hanoi'
    },
    {
        S1: 'Where is capital city of England?',
        'true': 'London',
        'false': 'New York',
        'false1': 'Oxford'
    },
    {
        S1: 'Where is capital city of Canada?',
        'true': 'Ottawa',
        'false': 'York',
        'false1': 'London'
    },
    {
        S1: 'Where is capital city of Kazakhstan?',
        'true': 'Astana',
        'false': 'Ankara',
        'false1': 'Tashkent'
    },
    {
        S1: 'Where is capital city of India?',
        'true': 'New Delhi',
        'false': 'Ankara',
        'false1': 'Astana'
    },
    {
        S1: 'Where is capital city of Germany?',
        'true': 'Berlin',
        'false': 'New Delhi',
        'false1': 'Astana'
    },
    {
        S1: 'Where is capital city of Afghanistan?',
        'true': 'Kabul',
        'false': 'Berlin',
        'false1': 'Ankara'
    },
    {
        S1: 'Where is capital city of Pakistan?',
        'true': 'Islamabad',
        'false': 'Kabul',
        'false1': 'Berlin'
    },
];


let x;
let san = 0;
let sanaC = 0;
let sanaI = 0;
let AA = ['true', 'false', 'false1'];
let y;
let y1;
let y2;
let RR = document.getElementById('radio');
let RR1 = document.getElementById('radio1');
let RR2 = document.getElementById('radio2');

let ResCorrect = document.getElementById('Res-C');
let ResIncorrect = document.getElementById('Res-I');

let RESDISPLAY = document.querySelector('.RESULT');
let MathRESDISPLAY = document.getElementById('MathRESULT');
let MathRESDISPLAY1 = document.getElementById('MathRESULT1');
let SORAGLER = document.querySelector('.soraglar');

let RESMARGIN = document.getElementById('Result');

function Programming() {
    SORAGLER.style.marginTop = '0px';
    SoragYaz.style.display = 'block';
    Answer.style.display = 'block';
    MathImg.style.display = 'none';
    RESDISPLAY.style.display = 'block';
    MathRESDISPLAY.style.display = 'none';
    MathRESDISPLAY1.style.display = 'none';

    NavDisplay.style.display = 'block';
    test.style.display = 'block';
    subject.style.display = 'none';
    NavText.innerHTML = "Web Programming";
    showMsg();
    startcounting();
    const rand = Math.floor(Math.random() * 20) + 1;
    const random = Math.floor(Math.random() * 3) + 1;
    if (random == 1) {
        y = AA[0];
        y1 = AA[1];
        y2 = AA[2];
    }
    else if (random == 2) {
        y = AA[1];
        y1 = AA[0];
        y2 = AA[2];
    }
    else {
        y = AA[2];
        y1 = AA[1];
        y2 = AA[0];
    }
    san += 1;
    SoragYaz.innerHTML = `${san}) ${WEB[rand - 1].S1}`;
    Radio1.innerHTML = WEB[rand - 1][y];
    Radio2.innerHTML = WEB[rand - 1][y1];
    Radio3.innerHTML = WEB[rand - 1][y2];
    x = rand - 1;
    nextBTN.setAttribute('onclick', 'Programming()');
    Correct.style.display = "none";
    Incorrect.style.display = "none";

    RR.checked = '';
    RR1.checked = '';
    RR2.checked = '';

    S1.style.color = 'black';
    S2.style.color = 'black';
    S3.style.color = 'black';

    RR.disabled = false;
    RR1.disabled = false;
    RR2.disabled = false;

    ResCorrect.innerHTML = sanaC;
    ResIncorrect.innerHTML = sanaI;
}

function Programming1() {
    san = 1;
    sanaC = 0;
    sanaI = 0;
    SORAGLER.style.marginTop = '0px';
    SoragYaz.style.display = 'block';
    Answer.style.display = 'block';
    MathImg.style.display = 'none';
    RESDISPLAY.style.display = 'block';
    MathRESDISPLAY.style.display = 'none';
    MathRESDISPLAY1.style.display = 'none';

    NavDisplay.style.display = 'block';
    test.style.display = 'block';
    subject.style.display = 'none';
    NavText.innerHTML = "Web Programming";
    showMsg();
    startcounting();
    const rand = Math.floor(Math.random() * 20) + 1;
    const random = Math.floor(Math.random() * 3) + 1;
    if (random == 1) {
        y = AA[0];
        y1 = AA[1];
        y2 = AA[2];
    }
    else if (random == 2) {
        y = AA[1];
        y1 = AA[0];
        y2 = AA[2];
    }
    else {
        y = AA[2];
        y1 = AA[1];
        y2 = AA[0];
    }
    SoragYaz.innerHTML = `${san}) ${WEB[rand - 1].S1}`;
    Radio1.innerHTML = WEB[rand - 1][y];
    Radio2.innerHTML = WEB[rand - 1][y1];
    Radio3.innerHTML = WEB[rand - 1][y2];
    x = rand - 1;
    nextBTN.setAttribute('onclick', 'Programming()');
    Correct.style.display = "none";
    Incorrect.style.display = "none";

    RR.checked = '';
    RR1.checked = '';
    RR2.checked = '';

    S1.style.color = 'black';
    S2.style.color = 'black';
    S3.style.color = 'black';

    RR.disabled = false;
    RR1.disabled = false;
    RR2.disabled = false;

    ResCorrect.innerHTML = sanaC;
    ResIncorrect.innerHTML = sanaI;
}

let MathAnswer = document.getElementById('Answer');
function Mathematic() {

    RESDISPLAY.style.display = 'none';
    MathRESDISPLAY.style.display = 'block';
    MathRESDISPLAY1.style.display = 'block';
    SORAGLER.style.marginTop = '150px';

    SoragYaz.style.display = 'none';
    Answer.style.display = 'none';
    MathImg.style.display = 'block';

    NavDisplay.style.display = 'block';
    test.style.display = 'block';
    subject.style.display = 'none';
    NavText.innerHTML = "Mathematical Problems";
    showMsg();
    startcounting();
    const rand = Math.floor(Math.random() * 20) + 1;
    x = rand - 1;

    let MathSorag = document.getElementById('MathSorag');
    MathSorag.setAttribute('src', `${MATH[x].S1}`);
    nextBTN.setAttribute('onclick', 'Input()');
    san += 1;
    MathNum.innerHTML = `${san})`;
    MathAnswer.disabled = false;

    MathAnswer.value = '';
    Correct.style.display = "none";
    Incorrect.style.display = "none";

    MathCorrect.innerHTML = MsanaC;
    MathIncorrect.innerHTML = MsanaI;
}
function Mathematic1() {

    RESDISPLAY.style.display = 'none';
    MathRESDISPLAY.style.display = 'block';
    MathRESDISPLAY1.style.display = 'block';
    SORAGLER.style.marginTop = '150px';

    SoragYaz.style.display = 'none';
    Answer.style.display = 'none';
    MathImg.style.display = 'block';

    NavDisplay.style.display = 'block';
    test.style.display = 'block';
    subject.style.display = 'none';
    NavText.innerHTML = "Mathematical Problems";
    showMsg();
    startcounting();
    const rand = Math.floor(Math.random() * 20) + 1;
    x = rand - 1;

    let MathSorag = document.getElementById('MathSorag');
    MathSorag.setAttribute('src', `${MATH[x].S1}`);
    nextBTN.setAttribute('onclick', 'Input()');
    san = 1;
    MsanaC = 0;
    MsanaI = 0;
    MathNum.innerHTML = `${san})`;
    MathAnswer.disabled = false;

    MathAnswer.value = '';
    Correct.style.display = "none";
    Incorrect.style.display = "none";

    MathCorrect.innerHTML = MsanaC;
    MathIncorrect.innerHTML = MsanaI;
}

function English() {
    SORAGLER.style.marginTop = '0px';
    SoragYaz.style.display = 'block';
    Answer.style.display = 'block';
    MathImg.style.display = 'none';
    RESDISPLAY.style.display = 'block';
    MathRESDISPLAY.style.display = 'none';
    MathRESDISPLAY1.style.display = 'none';

    NavDisplay.style.display = 'block';
    test.style.display = 'block';
    subject.style.display = 'none';
    NavText.innerHTML = "English";
    showMsg();
    startcounting();
    const rand = Math.floor(Math.random() * 20) + 1;
    const random = Math.floor(Math.random() * 3) + 1;
    if (random == 1) {
        y = AA[0];
        y1 = AA[1];
        y2 = AA[2];
    }
    else if (random == 2) {
        y = AA[1];
        y1 = AA[0];
        y2 = AA[2];
    }
    else {
        y = AA[2];
        y1 = AA[1];
        y2 = AA[0];
    }
    san += 1;
    SoragYaz.innerHTML = `${san}) ${ENG[rand - 1].S1}`;
    Radio1.innerHTML = ENG[rand - 1][y];
    Radio2.innerHTML = ENG[rand - 1][y1];
    Radio3.innerHTML = ENG[rand - 1][y2];
    x = rand - 1;
    nextBTN.setAttribute('onclick', 'English()');
    Correct.style.display = "none";
    Incorrect.style.display = "none";
    RR.checked = '';
    RR1.checked = '';
    RR2.checked = '';

    S1.style.color = 'black';
    S2.style.color = 'black';
    S3.style.color = 'black';

    RR.disabled = false;
    RR1.disabled = false;
    RR2.disabled = false;

    ResCorrect.innerHTML = sanaC;
    ResIncorrect.innerHTML = sanaI;
}

function English1() {
    san = 1;
    sanaC = 0;
    sanaI = 0;
    SORAGLER.style.marginTop = '0px';
    SoragYaz.style.display = 'block';
    Answer.style.display = 'block';
    MathImg.style.display = 'none';
    RESDISPLAY.style.display = 'block';
    MathRESDISPLAY.style.display = 'none';
    MathRESDISPLAY1.style.display = 'none';

    NavDisplay.style.display = 'block';
    test.style.display = 'block';
    subject.style.display = 'none';
    NavText.innerHTML = "English";
    showMsg();
    startcounting();
    const rand = Math.floor(Math.random() * 20) + 1;
    const random = Math.floor(Math.random() * 3) + 1;
    if (random == 1) {
        y = AA[0];
        y1 = AA[1];
        y2 = AA[2];
    }
    else if (random == 2) {
        y = AA[1];
        y1 = AA[0];
        y2 = AA[2];
    }
    else {
        y = AA[2];
        y1 = AA[1];
        y2 = AA[0];
    }
    SoragYaz.innerHTML = `${san}) ${ENG[rand - 1].S1}`;
    Radio1.innerHTML = ENG[rand - 1][y];
    Radio2.innerHTML = ENG[rand - 1][y1];
    Radio3.innerHTML = ENG[rand - 1][y2];
    x = rand - 1;
    nextBTN.setAttribute('onclick', 'English()');
    Correct.style.display = "none";
    Incorrect.style.display = "none";
    RR.checked = '';
    RR1.checked = '';
    RR2.checked = '';

    S1.style.color = 'black';
    S2.style.color = 'black';
    S3.style.color = 'black';

    RR.disabled = false;
    RR1.disabled = false;
    RR2.disabled = false;

    ResCorrect.innerHTML = sanaC;
    ResIncorrect.innerHTML = sanaI;
}

function ProLan() {

    SORAGLER.style.marginTop = '20px';
    SoragYaz.style.display = 'block';
    Answer.style.display = 'block';
    MathImg.style.display = 'none';
    RESDISPLAY.style.display = 'block';
    MathRESDISPLAY.style.display = 'none';
    MathRESDISPLAY1.style.display = 'none';

    NavDisplay.style.display = 'block';
    test.style.display = 'block';
    subject.style.display = 'none';
    NavText.innerHTML = "Programming Languages";
    showMsg();
    startcounting();
    const rand = Math.floor(Math.random() * 20) + 1;
    const random = Math.floor(Math.random() * 3) + 1;
    if (random == 1) {
        y = AA[0];
        y1 = AA[1];
        y2 = AA[2];
    }
    else if (random == 2) {
        y = AA[1];
        y1 = AA[0];
        y2 = AA[2];
    }
    else {
        y = AA[2];
        y1 = AA[1];
        y2 = AA[0];
    }
    san += 1;
    SoragYaz.innerHTML = `${san}) ${PRO[rand - 1].S1}`;
    Radio1.innerHTML = PRO[rand - 1][y];
    Radio2.innerHTML = PRO[rand - 1][y1];
    Radio3.innerHTML = PRO[rand - 1][y2];
    x = rand - 1;
    nextBTN.setAttribute('onclick', 'ProLan()');
    Correct.style.display = "none";
    Incorrect.style.display = "none";
    RR.checked = '';
    RR1.checked = '';
    RR2.checked = '';

    S1.style.color = 'black';
    S2.style.color = 'black';
    S3.style.color = 'black';

    RR.disabled = false;
    RR1.disabled = false;
    RR2.disabled = false;

    ResCorrect.innerHTML = sanaC;
    ResIncorrect.innerHTML = sanaI;
}

function ProLan1() {
    san = 1;
    sanaC = 0;
    sanaI = 0;
    SORAGLER.style.marginTop = '20px';
    SoragYaz.style.display = 'block';
    Answer.style.display = 'block';
    MathImg.style.display = 'none';
    RESDISPLAY.style.display = 'block';
    MathRESDISPLAY.style.display = 'none';
    MathRESDISPLAY1.style.display = 'none';

    NavDisplay.style.display = 'block';
    test.style.display = 'block';
    subject.style.display = 'none';
    NavText.innerHTML = "Programming Languages";
    showMsg();
    startcounting();
    const rand = Math.floor(Math.random() * 20) + 1;
    const random = Math.floor(Math.random() * 3) + 1;
    if (random == 1) {
        y = AA[0];
        y1 = AA[1];
        y2 = AA[2];
    }
    else if (random == 2) {
        y = AA[1];
        y1 = AA[0];
        y2 = AA[2];
    }
    else {
        y = AA[2];
        y1 = AA[1];
        y2 = AA[0];
    }
    SoragYaz.innerHTML = `${san}) ${ENG[rand - 1].S1}`;
    Radio1.innerHTML = PRO[rand - 1][y];
    Radio2.innerHTML = PRO[rand - 1][y1];
    Radio3.innerHTML = PRO[rand - 1][y2];
    nextBTN.setAttribute('onclick', 'ProLan()');
    Correct.style.display = "none";
    Incorrect.style.display = "none";
    RR.checked = '';
    RR1.checked = '';
    RR2.checked = '';

    S1.style.color = 'black';
    S2.style.color = 'black';
    S3.style.color = 'black';

    RR.disabled = false;
    RR1.disabled = false;
    RR2.disabled = false;

    ResCorrect.innerHTML = sanaC;
    ResIncorrect.innerHTML = sanaI;
}


function Geography() {
    SORAGLER.style.marginTop = '0px';
    SoragYaz.style.display = 'block';
    Answer.style.display = 'block';
    MathImg.style.display = 'none';
    RESDISPLAY.style.display = 'block';
    MathRESDISPLAY.style.display = 'none';
    MathRESDISPLAY1.style.display = 'none';

    NavDisplay.style.display = 'block';
    test.style.display = 'block';
    subject.style.display = 'none';
    NavText.innerHTML = "Geography";
    showMsg();
    startcounting();
    const rand = Math.floor(Math.random() * 20) + 1;
    const random = Math.floor(Math.random() * 3) + 1;
    if (random == 1) {
        y = AA[0];
        y1 = AA[1];
        y2 = AA[2];
    }
    else if (random == 2) {
        y = AA[1];
        y1 = AA[0];
        y2 = AA[2];
    }
    else {
        y = AA[2];
        y1 = AA[1];
        y2 = AA[0];
    }
    san += 1;
    SoragYaz.innerHTML = `${san}) ${GEO[rand - 1].S1}`;
    Radio1.innerHTML = GEO[rand - 1][y];
    Radio2.innerHTML = GEO[rand - 1][y1];
    Radio3.innerHTML = GEO[rand - 1][y2];
    x = rand - 1;
    nextBTN.setAttribute('onclick', 'Geography()');
    Correct.style.display = "none";
    Incorrect.style.display = "none";

    RR.checked = '';
    RR1.checked = '';
    RR2.checked = '';

    S1.style.color = 'black';
    S2.style.color = 'black';
    S3.style.color = 'black';

    RR.disabled = false;
    RR1.disabled = false;
    RR2.disabled = false;

    ResCorrect.innerHTML = sanaC;
    ResIncorrect.innerHTML = sanaI;
}

function Geography1() {
    san = 1;
    sanaC = 0;
    sanaI = 0;
    SORAGLER.style.marginTop = '0px';
    SoragYaz.style.display = 'block';
    Answer.style.display = 'block';
    MathImg.style.display = 'none';
    RESDISPLAY.style.display = 'block';
    MathRESDISPLAY.style.display = 'none';
    MathRESDISPLAY1.style.display = 'none';

    NavDisplay.style.display = 'block';
    test.style.display = 'block';
    subject.style.display = 'none';
    NavText.innerHTML = "Geography";
    showMsg();
    startcounting();
    const rand = Math.floor(Math.random() * 20) + 1;
    const random = Math.floor(Math.random() * 3) + 1;
    if (random == 1) {
        y = AA[0];
        y1 = AA[1];
        y2 = AA[2];
    }
    else if (random == 2) {
        y = AA[1];
        y1 = AA[0];
        y2 = AA[2];
    }
    else {
        y = AA[2];
        y1 = AA[1];
        y2 = AA[0];
    }
    SoragYaz.innerHTML = `${san}) ${GEO[rand - 1].S1}`;
    Radio1.innerHTML = GEO[rand - 1][y];
    Radio2.innerHTML = GEO[rand - 1][y1];
    Radio3.innerHTML = GEO[rand - 1][y2];
    x = rand - 1;
    nextBTN.setAttribute('onclick', 'Geography()');
    Correct.style.display = "none";
    Incorrect.style.display = "none";

    RR.checked = '';
    RR1.checked = '';
    RR2.checked = '';

    S1.style.color = 'black';
    S2.style.color = 'black';
    S3.style.color = 'black';

    RR.disabled = false;
    RR1.disabled = false;
    RR2.disabled = false;

    ResCorrect.innerHTML = sanaC;
    ResIncorrect.innerHTML = sanaI;
}


function ComScience() {
    SORAGLER.style.marginTop = '0px';
    SoragYaz.style.display = 'block';
    Answer.style.display = 'block';
    MathImg.style.display = 'none';
    RESDISPLAY.style.display = 'block';
    MathRESDISPLAY.style.display = 'none';
    MathRESDISPLAY1.style.display = 'none';

    NavDisplay.style.display = 'block';
    test.style.display = 'block';
    subject.style.display = 'none';
    NavText.innerHTML = "Computer Science";
    showMsg();
    startcounting();
    const rand = Math.floor(Math.random() * 20) + 1;
    const random = Math.floor(Math.random() * 3) + 1;
    if (random == 1) {
        y = AA[0];
        y1 = AA[1];
        y2 = AA[2];
    }
    else if (random == 2) {
        y = AA[1];
        y1 = AA[0];
        y2 = AA[2];
    }
    else {
        y = AA[2];
        y1 = AA[1];
        y2 = AA[0];
    }
    san += 1;
    SoragYaz.innerHTML = `${san}) ${WEB[rand - 1].S1}`;
    Radio1.innerHTML = WEB[rand - 1][y];
    Radio2.innerHTML = WEB[rand - 1][y1];
    Radio3.innerHTML = WEB[rand - 1][y2];
    x = rand - 1;
    nextBTN.setAttribute('onclick', 'ComScience()');
    Correct.style.display = "none";
    Incorrect.style.display = "none";

    RR.checked = '';
    RR1.checked = '';
    RR2.checked = '';

    S1.style.color = 'black';
    S2.style.color = 'black';
    S3.style.color = 'black';

    RR.disabled = false;
    RR1.disabled = false;
    RR2.disabled = false;

    ResCorrect.innerHTML = sanaC;
    ResIncorrect.innerHTML = sanaI;
}

function ComScience1() {
    san = 1;
    sanaC = 0;
    sanaI = 0;
    SORAGLER.style.marginTop = '0px';
    SoragYaz.style.display = 'block';
    Answer.style.display = 'block';
    MathImg.style.display = 'none';
    RESDISPLAY.style.display = 'block';
    MathRESDISPLAY.style.display = 'none';
    MathRESDISPLAY1.style.display = 'none';

    NavDisplay.style.display = 'block';
    test.style.display = 'block';
    subject.style.display = 'none';
    NavText.innerHTML = "Computer Science";
    showMsg();
    startcounting();
    const rand = Math.floor(Math.random() * 20) + 1;
    const random = Math.floor(Math.random() * 3) + 1;
    if (random == 1) {
        y = AA[0];
        y1 = AA[1];
        y2 = AA[2];
    }
    else if (random == 2) {
        y = AA[1];
        y1 = AA[0];
        y2 = AA[2];
    }
    else {
        y = AA[2];
        y1 = AA[1];
        y2 = AA[0];
    }
    SoragYaz.innerHTML = `${san}) ${WEB[rand - 1].S1}`;
    Radio1.innerHTML = WEB[rand - 1][y];
    Radio2.innerHTML = WEB[rand - 1][y1];
    Radio3.innerHTML = WEB[rand - 1][y2];
    x = rand - 1;
    nextBTN.setAttribute('onclick', 'ComScience()');
    Correct.style.display = "none";
    Incorrect.style.display = "none";

    RR.checked = '';
    RR1.checked = '';
    RR2.checked = '';

    S1.style.color = 'black';
    S2.style.color = 'black';
    S3.style.color = 'black';

    RR.disabled = false;
    RR1.disabled = false;
    RR2.disabled = false;

    ResCorrect.innerHTML = sanaC;
    ResIncorrect.innerHTML = sanaI;
}


let S1 = document.getElementById('S1');
let S2 = document.getElementById('S2');
let S3 = document.getElementById('S3');


let Correct = document.querySelector('.T1');
let Incorrect = document.querySelector('.F1');

let MathCorrect = document.getElementById('Math-C');
let MathIncorrect = document.getElementById('Math-I');

let MsanaC = 0;
let MsanaI = 0;

function Input() {
    let MathSorag = document.getElementById('MathSorag');

    if (MathAnswer.value === '') {
        nextBTN.setAttribute('onclick', 'Mathematic()');
        MathAnswer.disabled = false;
        MsanaI += 1;
    }
    else if (MathAnswer.value === MATH[x].true) {
        Correct.style.display = "block";
        Incorrect.style.display = "none";
        showMsg();
        MathSorag.setAttribute('src', `${MATH[x].S1}`);
        nextBTN.setAttribute('onclick', 'Mathematic()');
        MathAnswer.innerHTML = '';
        MsanaC += 1;
    }
    else {
        Correct.style.display = "none";
        Incorrect.style.display = "block";
        nextBTN.setAttribute('onclick', 'Mathematic()');
        MsanaI += 1;
    }
}

function Barla() {
    if (S1.textContent === WEB[x].true) {
        Correct.style.display = "block";
        Incorrect.style.display = "none";
        S1.style.color = 'yellowgreen';
        S2.style.color = 'black';
        S3.style.color = 'black';
        RR1.setAttribute('disabled', 'true');
        RR2.setAttribute('disabled', 'true');
        showMsg();
        sanaC += 1;
    }
    else if (S1.textContent === ENG[x].true) {
        Correct.style.display = "block";
        Incorrect.style.display = "none";
        S1.style.color = 'yellowgreen';
        S2.style.color = 'black';
        S3.style.color = 'black';
        RR1.setAttribute('disabled', 'true');
        RR2.setAttribute('disabled', 'true');
        showMsg();
        sanaC += 1;
    }
    else if (S1.textContent === PRO[x].true) {
        Correct.style.display = "block";
        Incorrect.style.display = "none";
        S1.style.color = 'yellowgreen';
        S2.style.color = 'black';
        S3.style.color = 'black';
        RR1.setAttribute('disabled', 'true');
        RR2.setAttribute('disabled', 'true');
        showMsg();
        sanaC += 1;
    }
    else if (S1.textContent === GEO[x].true) {
        Correct.style.display = "block";
        Incorrect.style.display = "none";
        S1.style.color = 'yellowgreen';
        S2.style.color = 'black';
        S3.style.color = 'black';
        RR1.setAttribute('disabled', 'true');
        RR2.setAttribute('disabled', 'true');
        showMsg();
        sanaC += 1;
    }
    else {
        Correct.style.display = "none";
        Incorrect.style.display = "block";
        showMsg();
        S1.style.color = 'red';
        S2.style.color = 'black';
        S3.style.color = 'black';
        RR1.setAttribute('disabled', 'true');
        RR2.setAttribute('disabled', 'true');
        sanaI += 1;
    }
}
function Barla1() {
    if (S2.textContent === WEB[x].true) {
        Correct.style.display = "block";
        Incorrect.style.display = "none";
        S2.style.color = 'yellowgreen';
        S1.style.color = 'black';
        S3.style.color = 'black';
        RR.setAttribute('disabled', 'true');
        RR2.setAttribute('disabled', 'true');
        showMsg();
        sanaC += 1;
    }
    else if (S2.textContent === MATH[x].true) {
        Correct.style.display = "block";
        Incorrect.style.display = "none";
        S2.style.color = 'yellowgreen';
        S1.style.color = 'black';
        S3.style.color = 'black';
        RR.setAttribute('disabled', 'true');
        RR2.setAttribute('disabled', 'true');
        showMsg();
        sanaC += 1;
    }
    else if (S2.textContent === ENG[x].true) {
        Correct.style.display = "block";
        Incorrect.style.display = "none";
        S2.style.color = 'yellowgreen';
        S1.style.color = 'black';
        S3.style.color = 'black';
        RR.setAttribute('disabled', 'true');
        RR2.setAttribute('disabled', 'true');
        showMsg();
        sanaC += 1;
    }
    else if (S2.textContent === PRO[x].true) {
        Correct.style.display = "block";
        Incorrect.style.display = "none";
        S2.style.color = 'yellowgreen';
        S1.style.color = 'black';
        S3.style.color = 'black';
        RR.setAttribute('disabled', 'true');
        RR2.setAttribute('disabled', 'true');
        showMsg();
        sanaC += 1;
    }
    else if (S2.textContent === GEO[x].true) {
        Correct.style.display = "block";
        Incorrect.style.display = "none";
        S2.style.color = 'yellowgreen';
        S1.style.color = 'black';
        S3.style.color = 'black';
        RR.setAttribute('disabled', 'true');
        RR2.setAttribute('disabled', 'true');
        showMsg();
        sanaC += 1;
    }
    else {
        Correct.style.display = "none";
        Incorrect.style.display = "block";
        showMsg();
        S2.style.color = 'red';
        S1.style.color = 'black';
        S3.style.color = 'black';
        RR.setAttribute('disabled', 'true');
        RR2.setAttribute('disabled', 'true');
        sanaI += 1;
    }
}
function Barla2() {
    if (S3.textContent === WEB[x].true) {
        Correct.style.display = "block";
        Incorrect.style.display = "none";
        S3.style.color = 'yellowgreen';
        S2.style.color = 'black';
        S1.style.color = 'black';
        RR.setAttribute('disabled', 'true');
        RR1.setAttribute('disabled', 'true');
        showMsg();
        sanaC += 1;
    }
    else if (S3.textContent === MATH[x].true) {
        Correct.style.display = "block";
        Incorrect.style.display = "none";
        S3.style.color = 'yellowgreen';
        S2.style.color = 'black';
        S1.style.color = 'black';
        RR.setAttribute('disabled', 'true');
        RR1.setAttribute('disabled', 'true');
        showMsg();
        sanaC += 1;
    }
    else if (S3.textContent === ENG[x].true) {
        Correct.style.display = "block";
        Incorrect.style.display = "none";
        S3.style.color = 'yellowgreen';
        S2.style.color = 'black';
        S1.style.color = 'black';
        RR.setAttribute('disabled', 'true');
        RR1.setAttribute('disabled', 'true');
        showMsg();
        sanaC += 1;
    }
    else if (S3.textContent === PRO[x].true) {
        Correct.style.display = "block";
        Incorrect.style.display = "none";
        S3.style.color = 'yellowgreen';
        S2.style.color = 'black';
        S1.style.color = 'black';
        RR.setAttribute('disabled', 'true');
        RR1.setAttribute('disabled', 'true');
        showMsg();
        sanaC += 1;
    }
    else if (S3.textContent === GEO[x].true) {
        Correct.style.display = "block";
        Incorrect.style.display = "none";
        S3.style.color = 'yellowgreen';
        S2.style.color = 'black';
        S1.style.color = 'black';
        RR.setAttribute('disabled', 'true');
        RR1.setAttribute('disabled', 'true');
        showMsg();
        sanaC += 1;
    }
    else {
        Correct.style.display = "none";
        Incorrect.style.display = "block";
        showMsg();
        S3.style.color = 'red';
        S2.style.color = 'black';
        S1.style.color = 'black';
        RR.setAttribute('disabled', 'true');
        RR1.setAttribute('disabled', 'true');
        sanaI += 1;
    }
}

var count;
var countDown;
var internalHandl;
function startcounting() {
    count = 20;
    countDown = parseInt(count);
    // var timer = (count+2)*1000;
    internalHandl = setInterval(() => {
        setCountDown()
    }, 1000);
    // setTimeout(function(){showMsg()}, timer);
}
function setCountDown() {
    Time.innerHTML = countDown;
    if (countDown === 20) {
        Time.style.color = 'black';
        TimeText.style.color = 'black';
    }
    countDown--;
    if (countDown === -2) {
        showMsg();
        Time.innerHTML = 'OUT';
        Time.style.color = 'red';
        TimeText.style.color = 'red';
        RR.setAttribute('disabled', 'true');
        RR1.setAttribute('disabled', 'true');
        RR2.setAttribute('disabled', 'true');
        sanaI += 1;
        ResIncorrect.innerHTML = sanaI;
        Incorrect.style.display = 'block';
        MathAnswer.setAttribute('disabled', 'disabled');
    }
}
function showMsg() {
    clearInterval(internalHandl);
    if (countDown !== undefined) {
        Time.innerHTML = countDown;
    }
    TimeText.style.color = 'black';
}





































































// var countDown = new Date("Jan 5, 2022 15:37:25").getTime();
// var x = setInterval(function(){
//     var now = new Date().getTime();
//     var distance = countDown - now;
//     var days = Math.floor(distance/(1000*60*60*24));
//     var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
//     var minutes = Math.floor((distance%(1000*60*60*24))/(1000*60));
//     var secundes = Math.floor((distance%(1000*60))/1000);

//     demo.innerHTML = days+"d "+hours+"h "+minutes+"m "+secundes+"s ";
// }, 1000);

// let y = 31;
// setInterval(function(){
//     y-=1;
//     if(y===-1){
//         y=1;
//     }
//     demo.innerHTML = y+"s ";
// }, 1000);