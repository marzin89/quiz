let questions = ['What is the largest carnivore on land?', 'What is the second highest mountain in the world?', 'How long is a period in ice hockey?',

        'Which famous French existentialist writer was awarded the Nobel Prize in Literature in 1964 and refused it?', 'Which war was fought mainly in central Europe between 1618 and 1648?',

        'What is the name of Charles Darwin\'s famous book published in 1859?', 'What Indonesian island shares its name with one of the biggest programming languages?', 
        
        'What color is the card shown by a referee during a football/soccer game when sending a player off?', 
        
        'Which famous museum would you visit if you wanted to see the equally famous painting Mona Lisa?', 'What year did Martin Luther publish his 95 theses?'];

        
const nature = document.getElementById('nature-and-science');

const geography = document.getElementById('geography');

const sports = document.getElementById('sports');

const culture = document.getElementById('culture');

const history = document.getElementById('history');

const allCategories = document.getElementById('all-categories');

const easy = document.getElementById('easy');

const moderate = document.getElementById('moderate');

const hard = document.getElementById('hard');

const button = document.getElementById('play');

button.addEventListener('click', openNewTab);

function openNewTab() {

    if ( allCategories.checked == true && easy.checked == true ) {

        open("quiz-easy-all-categories.html");
    }
}