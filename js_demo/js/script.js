function askName() {
    var nameReturn = document.getElementById('ask-name');
    var name= prompt ('please enter your name in the box below.');
    if (name == '') {
        alert('Please enter your name in the box below.');
    } else {
        nameReturn.innerHTML = 'Hello ' + name + '! Welcome to my website!'
        
    }
    nameReturn.style.fontSize = '30px';
    nameReturn.style.color = 'lightblue';

}
function askQuestion () {
    var p= prompt('how much wood could a wood chuck chuck if a wood chuck could chuck wood?');
    if (p !=null) {
        document.getElementById('ask-question').innerHTML = 'yikes ' + p + ' is a lot of wood!'
    }
}