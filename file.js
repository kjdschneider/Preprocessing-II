
/*   The beginnings of an attempt to make the
destination buttons automatically fill in 
and scroll down to that position of the page.

As you can see, I did not get very far lol.
But I'd like to come back to it at some point,
or at least keep the idea in mind to use in a
future project when I know more JS.      */


const choice = document.querySelector('#dropdown');
const userChoice = choice.options[choice.selectedIndex].value;
console.log(userChoice);