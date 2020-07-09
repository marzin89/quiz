let questions = ['What is the largest carnivore on land?', 'What is the second\
    \
    highest mountain <br> in the world?', 'How long is a period in ice hockey?',

    'Which famous French writer <br> was awarded the Nobel Prize in <br> Literature\
    \
    in 1964 and refused it?', 'Which war was fought mainly in <br> central Europe\
    \
    between 1618 and 1648?', 'What is the name of Charles Darwin\'s <br> famous\
    \
    book published in 1859?', 'What Indonesian island shares its name <br> with a\
    \
    programming language?', 'What color is the card shown by a <br> referee during\
    \
    a football/soccer game <br> when sending a player off?', 'Which museum would\
    \
    you visit if <br> you wanted to see the famous <br> painting Mona Lisa?', 'What\
    \
    year did Martin Luther publish <br> his 95 theses?'];

        
const nature = document.getElementById('nature-and-science');

const geography = document.getElementById('geography');

const sports = document.getElementById('sports');

const culture = document.getElementById('culture');

const history = document.getElementById('history');

const allCategories = document.getElementById('all-categories');

const easy = document.getElementById('easy');

const moderate = document.getElementById('moderate');

const hard = document.getElementById('hard');

function openNewTab() {

    if ( allCategories.checked == true && easy.checked == true ) {

        open("quiz-easy-all-categories.html");
    }
}

function submitAnswerEasyMixed() {


}

const question = document.getElementById('question');

function nextQuestionEasyMixed() {

    if ( question.innerHTML == questions[0]) {

        question.innerHTML = questions[1];

        document.getElementById('label-answer1').innerHTML = 'Kilimanjaro';

        document.getElementById('label-answer2').innerHTML = 'Aconcagua';

        document.getElementById('label-answer3').innerHTML = 'Mont Blanc';

        document.getElementById('label-answer4').innerHTML = 'K2';

    } else if ( question.innerHTML == questions[1] ) {

        question.innerHTML = questions[2];

        document.getElementById('label-answer1').innerHTML = '20 minutes';

        document.getElementById('label-answer2').innerHTML = '10 minutes';

        document.getElementById('label-answer3').innerHTML = '45 minutes';

        document.getElementById('label-answer4').innerHTML = '30 minutes';

    } else if ( question.innerHTML == questions[2] ) {

        question.innerHTML = questions[3];

        document.getElementById('label-answer1').innerHTML = 'Albert Camus';

        document.getElementById('label-answer2').innerHTML = 'Jean-Paul Sartre';

        document.getElementById('label-answer3').innerHTML = 'Marcel Proust';

        document.getElementById('label-answer4').innerHTML = 'Victor Hugo';

    } else if ( question.innerHTML == questions[3] ) {

        question.innerHTML = questions[4];

        document.getElementById('label-answer1').innerHTML = 'World War 1';

        document.getElementById('label-answer2').innerHTML = 'World War 2';

        document.getElementById('label-answer3').innerHTML = 'Hundred Years\' War';

        document.getElementById('label-answer4').innerHTML = 'Thirty Years\' War';

    } else if ( question.innerHTML == questions[4] ) {

        question.innerHTML = questions[5];

        document.getElementById('label-answer1').innerHTML = 'Physica';

        document.getElementById('label-answer2').innerHTML = 'On the Origin of Species';

        document.getElementById('label-answer3').innerHTML = 'Gorillas in the Mist';

        document.getElementById('label-answer4').innerHTML = 'Mathematical Principles\
        \
        of Natural Philosophy';

    } else if ( question.innerHTML == questions[5] ) {

        question.innerHTML = questions[6];

        document.getElementById('label-answer1').innerHTML = 'Java';

        document.getElementById('label-answer2').innerHTML = 'Ruby';

        document.getElementById('label-answer3').innerHTML = 'Sumatra';

        document.getElementById('label-answer4').innerHTML = 'Bali';

    } else if ( question.innerHTML == questions[6] ) {

        question.innerHTML = questions[7];

        document.getElementById('label-answer1').innerHTML = 'Yellow';

        document.getElementById('label-answer2').innerHTML = 'Green';

        document.getElementById('label-answer3').innerHTML = 'Red';

        document.getElementById('label-answer4').innerHTML = 'Orange';

    } else if ( question.innerHTML == questions[7] ) {

        question.innerHTML = questions[8];

        document.getElementById('label-answer1').innerHTML = 'The Rijksmuseum (Amsterdam)';

        document.getElementById('label-answer2').innerHTML = 'The National Gallery (London)';

        document.getElementById('label-answer3').innerHTML = 'The Musée d\'Orsay (Paris)';

        document.getElementById('label-answer4').innerHTML = 'The Louvre (Paris)';
    
    } else if ( question.innerHTML == questions[8] ) {

        question.innerHTML = questions[9];

        document.getElementById('label-answer1').innerHTML = '1492';

        document.getElementById('label-answer2').innerHTML = '1517';

        document.getElementById('label-answer3').innerHTML = '1789';

        document.getElementById('label-answer4').innerHTML = '1648';
    }
}