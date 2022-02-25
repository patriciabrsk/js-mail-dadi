// Array of emails
const emailsList = [
    'first@email.com', 
    'second@email.com', 
    'third@email.com', 
    'fourth@email.com',
    'fifth@email.com',
    'sixth@email.com',
];

document.getElementById('enter').addEventListener('click',
    function() {

        let notListed = "Email is not listed!";
        let welcome = "Welcome!"
        let message = document.getElementById('message');

        // Chiedi all’utente la sua email
        const inputEmail = document.querySelector('.email').value;

        // controlla che sia nella lista di chi può accedere,
        // for
        for (let i = 0; i < emailsList.length; i++) {
            if (emailsList[i] == inputEmail) {
                message.innerHTML = welcome;
                message.classList.add('text-success');
            } else {
                message.innerHTML = notListed;
                // message.classList.remove('text-success');
                message.classList.add('text-danger');
            }
        }
    });

    document.getElementById('reset').addEventListener('click', 
    function() {
        document.getElementById('message').classList.add("invisible");
    });

    document.getElementById('play').addEventListener('click', 
        function() {
            // Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
            const userNumber = Math.floor((Math.random() * 6) + 1);
            const computerNumber = Math.floor((Math.random() * 6) + 1);

            const result = document.getElementById('result');

            if (userNumber < computerNumber) {
                document.getElementById('user').innerHTML = userNumber;
                document.getElementById('computer').innerHTML = computerNumber;
                result.innerHTML = "&#128078; Game Over &#128078;";
            } else if (userNumber > computerNumber) {
                document.getElementById('user').innerHTML = userNumber;
                document.getElementById('computer').innerHTML = computerNumber;
                result.innerHTML = "&#128079; You win! &#128079;";
            }
        });



