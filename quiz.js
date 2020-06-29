let questions = ['What is the largest carnivore on land?', 'What is the second highest mountain in the world?', 'How long is a period in ice hockey?',

        'Which famous French existentialist writer was awarded the Nobel Prize in Literature in 1964 and refused it?', 'Which war was fought mainly in central Europe between 1618 and 1648?',

        'What is the name of Charles Darwin\'s famous book published in 1859?', 'What Indonesian island shares its name with one of the biggest programming languages?', 
        
        'What color is the card shown by a referee during a football/soccer game when sending a player off?', 
        
        'Which famous museum would you visit if you wanted to see the equally famous painting Mona Lisa?', 'What year did Martin Luther publish his 95 theses?'];

    let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        
    function playRound() {

        let answer = prompt(randomQuestion);

        switch (true) {

            case randomQuestion == 'What is the largest carnivore on land?' && answer.toLowerCase() == 'Polar Bear'.toLowerCase(): alert('Correct!');

            break;

            case randomQuestion == 'What is the largest carnivore on land?' && answer.toLowerCase() == !'Polar Bear'.toLowerCase(): alert('Wrong!');

            break;

            case randomQuestion == 'What is the second highest mountain in the world?' && answer.toLowerCase() == 'K2'.toLowerCase(): alert('Correct!');

            break;

            case randomQuestion == 'What is the second highest mountain in the world?' && answer.toLowerCase() == !'K2'.toLowerCase(): alert('Wrong!');

            break;

            case randomQuestion == 'How long is a period in ice hockey?' && answer.toLowerCase() == '20 Minutes'.toLowerCase() || answer.toLowerCase() == 'Twenty Minutes'.toLowerCase(): 
            
                alert('Correct!');

            break;

            case randomQuestion == 'How long is a period in ice hockey?' && answer.toLowerCase() == !'20 Minutes'.toLowerCase() && answer.toLowerCase() == !'Twenty Minutes'.toLowerCase(): 
            
                alert('Wrong!');

            break;

            case randomQuestion == 'Which famous French existentialist writer was awarded the Nobel Prize in Literature in 1964 and refused it?' && answer.toLowerCase() == 
            
                'Jean-Paul Sartre'.toLowerCase() || answer.toLowerCase() == 'Jean Paul Sartre'.toLowerCase() || answer.toLowerCase() == 'Sartre'.toLowerCase(): alert('Correct!');

            break;

            case randomQuestion == 'Which famous French existentialist writer was awarded the Nobel Prize in Literature in 1964 and refused it?' && answer.toLowerCase() == 
            
                !'Jean-Paul Sartre'.toLowerCase() && answer.toLowerCase() == !'Jean Paul Sartre'.toLowerCase() && answer.toLowerCase() == !'Sartre'.toLowerCase(): alert('Wrong!');

            break;

            case randomQuestion == 'Which war was fought mainly in central Europe between 1618 and 1648?' && answer.toLowerCase() == '30 Years War'.toLowerCase() || answer.toLowerCase() == 
            
                '30 Years\' War'.toLowerCase() || answer.toLowerCase() == 'Thirty Years War'.toLowerCase() || answer.toLowerCase() == 'Thirty Years\' War'.toLowerCase(): alert('Correct!');

            break;

            case randomQuestion == 'Which war was fought mainly in central Europe between 1618 and 1648?' && answer.toLowerCase() == !'30 Years War'.toLowerCase() && answer.toLowerCase() == 
            
                !'30 Years\' War'.toLowerCase() && answer.toLowerCase() == !'Thirty Years War'.toLowerCase() && answer.toLowerCase() == !'Thirty Years\' War'.toLowerCase(): alert('Wrong!');

            break;

            case randomQuestion == 'What is the name of Charles Darwin\'s famous book published in 1859?' && answer.toLowerCase() == 'On The Origin Of Species'.toLowerCase() || 
            
                answer.toLowerCase() == 'The Origin Of Species'.toLowerCase() || answer.toLowerCase() == 'Origin Of Species'.toLowerCase(): alert('Correct!');

            break;

            case randomQuestion == 'What is the name of Charles Darwin\'s famous book published in 1859?' && answer.toLowerCase() == !'On The Origin Of Species'.toLowerCase() && 
            
                answer.toLowerCase() == !'The Origin Of Species'.toLowerCase() && answer.toLowerCase() == !'Origin Of Species'.toLowerCase(): alert('Wrong!');

            break;
 
            case randomQuestion == 'What Indonesian island shares its name with one of the biggest programming languages?' && answer.toLowerCase() == 'Java'.toLowerCase(): alert('Correct!');
                
            break;
                
            case randomQuestion == 'What Indonesian island shares its name with one of the biggest programming languages?' && answer.toLowerCase() == !'Java'.toLowerCase(): alert('Wrong!');

            break;

            case randomQuestion == 'What color is the card shown by a referee during a football/soccer game when sending a player off?' && answer.toLowerCase() == 'Red'.toLowerCase(): 
            
                alert('Correct!');
                
            break;
                
            case randomQuestion == 'What color is the card shown by a referee during a football/soccer game when sending a player off?' && answer.toLowerCase() == !'Red'.toLowerCase(): 
            
                alert('Wrong!');

            break;

            case randomQuestion == 'Which famous museum would you visit if you wanted to see the equally famous painting Mona Lisa?' && answer.toLowerCase() == 'The Louvre'.toLowerCase() || 
            
                answer.toLowerCase() == 'Louvre'.toLowerCase(): alert('Correct!');
                
            break;
                
            case randomQuestion == 'Which famous museum would you visit if you wanted to see the equally famous painting Mona Lisa?' && answer.toLowerCase() == !'The Louvre'.toLowerCase() && 
            
                answer.toLowerCase() == !'Louvre'.toLowerCase(): alert('Wrong!');

            break;

            case randomQuestion == 'What year did Martin Luther publish his 95 theses?' && answer.toLowerCase() == '1517': alert('Correct!'); 
                
            break;
                
            case randomQuestion == 'What year did Martin Luther publish his 95 theses?' && answer.toLowerCase() == !'1517': alert('Wrong!');

            break;
            
        }

    }