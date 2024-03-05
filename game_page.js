player1name = localStorage.getItem("player_1name");
player2name = localStorage.getItem("player_2name");

player1score = 0;
player2score = 0;

document.getElementById("player_1name").innerHTML = player1name + " : ";
document.getElementById("player_2name").innerHTML = player2name + " : ";

document.getElementById("player_1score").innerHTML = player1score ;
document.getElementById("player_2score").innerHTML = player2score ;

document.getElementById("player_question").innerHTML = "Question Turn -" + player1name;
document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in Lowercase = " + word)

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);


    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    new_word1 = word.replace(charAt1, "_");
    new_word2 = new_word1.replace(charAt2, "_");
    new_word3 = new_word2.replace(charAt3, "_");
    console.log(new_word3)

    question_word = "<h4 id='word_display'>Question."+ new_word3+"</h4>"
    input_box = "<br> Answer: <input type = 'text' id = 'input_check_box'>"
    check_button = "<br><br> <button class = 'btn btn-info' onclick = 'check()'> Check </button>"
    role = question_word+input_box+check_button
    document.getElementById("output").innerHTML = role
    document.getElementById("word").value = ""
}
var question_turn = "player1name"
var answer_turn = "player2name"

function check()
{
    get_answer = document.getElementById("input_check_box").value
    answer = get_answer.toLowerCase();
    console.log("answer" + answer)
    
    if (answer == word ) {
if (answer_turn == "player1name"){
    player1score = player1score + 2
    document.getElementById("player_1score").innerHTML = player1score
}
else {
    player2score = player2score + 2
    document.getElementById("player_2score").innerHTML = player2score
}
    }
    if (question_turn == "player1name") {
        question_turn = "player2name"
        document.getElementById("player_question").innerHTML = "Question Turn -" + player2name;
    //Splited elses    

    }
    else{
        question_turn = "player1name"
        document.getElementById("player_question").innerHTML = "Question Turn -" + player1name;
    }
    


    if (answer_turn == "player1name") {
        answer_turn = "player2name"
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2name;
        

    }
    else{
        answer_turn = "player1name"
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player1name;
    }
    document.getElementById("output").innerHTML = "" 
} 