// Array of emails
const emailsList = [
    'first@email.com', 
    'second@email.com', 
    'third@email.com', 
    'fourth@email.com',
    'fifth@email.com',
    'sixth@email.com',
];

// Click event for enter email button
document.getElementById('enter').addEventListener('click',
    function() {
        // event.preventDefault();

         // Get email input from user
        const inputEmail = document.querySelector('.email').value;

        let message = document.getElementById('message');  
        let listed = false;

        // Check if user input value is included in emailsList array
        for (let i = 0; !listed && i < emailsList.length; i++) {
            if (emailsList[i] === inputEmail) {
                listed = true;
                console.log(message);
            } 
        }
        if (listed) {
            message.innerHTML = "Welcome";
            message.classList.add('text-success');
        } else {
            message.innerHTML = '<i class="fas fa-exclamation-triangle"></i>' + " Email is not listed!";
            message.classList.add('text-danger');
        }
    }
);

    // Click event for reset email button
    document.getElementById('reset').addEventListener('click', 
    function() {
        document.querySelector('.email').value = '';
        document.getElementById('message').classList.add("invisible");
    });

    // Dice Game 
    // Click event for play button
    document.getElementById('play').addEventListener('click', 
        function () {
            /* Generate a random number for the user from 1 to 6, 
            storing it in a variable called userNumber */
            const userNumber = Math.floor((Math.random() * 6) + 1);

            /* Generate a random number for the computer from 1 to 6, 
            storing it in a variable called computerNumber */
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



