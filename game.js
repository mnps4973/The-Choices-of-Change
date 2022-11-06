var username;
var goodNum = 0;
var badNum = 0;
var choiceplease;
var score;

function saveName(user){
    username = user;
    document.getElementById("choosename").style.display = "none";

    document.getElementById("choosepov").style.display = "block";

    var video = document.getElementById("firstvideo");

    video.play();

    document.getElementById("choosepovtext").innerHTML = "Choose the pov, " + username;
    choiceplease = "Choose an option, " + username;
    document.getElementById("usernamec1").innerHTML = choiceplease;
    document.getElementById("usernamec2").innerHTML = choiceplease;
    document.getElementById("usernamec3").innerHTML = choiceplease;
    document.getElementById("usernamet1").innerHTML = choiceplease;
    document.getElementById("usernamet2").innerHTML = choiceplease;
    document.getElementById("usernamet3").innerHTML = choiceplease;
}

function savePov(pov){
    document.getElementById("choosepov").style.display = 'none';

    var pov;
    var video;

    switch (pov){
        case "classmate":
            pov = document.getElementById("povclassmatesection1");
            video = document.getElementById("classmatefirstchoice");
            break;
        case "teacher":
            pov = document.getElementById("povteachersection1");
            video = document.getElementById("teacherfirstchoice");
            break;
    }
    
    pov.style.display = 'block';
    video.play();
}

function choiceClassmate(questionNum, choice){
    if(choice == 0){
        goodNum++;
        switch(questionNum){
            case 1:
                document.getElementById("povclassmatesection1").style.display = 'none';
                document.getElementById("povclassmategoodchoice1").style.display = 'block';
                document.getElementById("classmategoodchoice1").play();
                break;
            case 2:
                document.getElementById("povclassmatesection2").style.display = 'none';
                document.getElementById("povclassmategoodchoice2").style.display = 'block';
                document.getElementById("classmategoodchoice2").play();
                break;
            case 3:
                document.getElementById("povclassmatesection3").style.display = 'none';
                document.getElementById("povclassmategoodchoice3").style.display = 'block';
                document.getElementById("classmategoodchoice3").play();
                break;

        }
    }
    else {
        badNum++;
        switch(questionNum){
            case 1:
                document.getElementById("povclassmatesection1").style.display = 'none';
                document.getElementById("povclassmatebadchoice1").style.display = 'block';
                document.getElementById("classmatebadchoice1").play();
                break;
            case 2:
                document.getElementById("povclassmatesection2").style.display = 'none';
                document.getElementById("povclassmatebadchoice2").style.display = 'block';
                document.getElementById("classmatebadchoice2").play();
                break;
            case 3:
                document.getElementById("povclassmatesection3").style.display = 'none';
                document.getElementById("povclassmatebadchoice3").style.display = 'block';
                document.getElementById("classmatebadchoice3").play();
                break;

        }
    }
}

function choiceTeacher(questionNum, choice){
    if(choice == 0){
        goodNum++;
        switch(questionNum){
            case 1:
                document.getElementById("povteachersection1").style.display = 'none';
                document.getElementById("povteachergoodchoice1").style.display = 'block';
                document.getElementById("teachergoodchoice1").play();
                break;
            case 2:
                document.getElementById("povteachersection2").style.display = 'none';
                document.getElementById("povteachergoodchoice2").style.display = 'block';
                document.getElementById("teachergoodchoice2").play();
                break;
            case 3:
                document.getElementById("povteachersection3").style.display = 'none';
                document.getElementById("povteachergoodchoice3").style.display = 'block';
                document.getElementById("teachergoodchoice3").play();
                break;

        }
    }
    else {
        badNum++;
        switch(questionNum){
            case 1:
                document.getElementById("povteachersection1").style.display = 'none';
                document.getElementById("povteacherbadchoice1").style.display = 'block';
                document.getElementById("teacherbadchoice1").play();
                break;
            case 2:
                document.getElementById("povteachersection2").style.display = 'none';
                document.getElementById("povteacherbadchoice2").style.display = 'block';
                document.getElementById("teacherbadchoice2").play();
                break;
            case 3:
                document.getElementById("povteachersection3").style.display = 'none';
                document.getElementById("povteacherbadchoice3").style.display = 'block';
                document.getElementById("teacherbadchoice3").play();
                break;

        }
    }   
}

function ending(){
    document.getElementById('povteacherbadchoice3').style.display = 'none';
    document.getElementById('povteachergoodchoice3').style.display = 'none';
    document.getElementById('povclassmatebadchoice3').style.display = 'none';
    document.getElementById('povclassmategoodchoice3').style.display = 'none';
    score = goodNum - badNum;
    if (score > 0){
        document.getElementById("goodending").style.display = 'block';
        document.getElementById("goodendingvideo").play();
    } else {
        document.getElementById("badending").style.display = 'block';
        document.getElementById("badendingvideo").play();
    }
}

function calltoaction(){
    document.getElementById("goodending").style.display = 'none';
    document.getElementById("badending").style.display = 'none';
    var message = "";

    if(score > 0){
        message = message.concat("Your actions caused the immigrant child to feel welcome!");
        if (score != 3) message = message.concat(" However, you could have done better. Think about what your actions will mean to others around you next time.");
    } else {
        message = message.concat("Your actions caused the immigrant child to feel unwelcome.");
    }

    document.getElementById("calltoactiontext").innerHTML = message;
    document.getElementById("calltoaction").style.display = 'block';
    document.getElementById("calltoactionform").style.display = 'block';
}

function startover(){
    username = "";
    goodNum = 0;
    badNum = 0;
    document.getElementById("calltoaction").style.display = 'none';
    var forms = document.getElementsByTagName("form");
    for(let i = 0; i < forms.length; i++){
        forms[i].style.display = 'none';
    }
    document.getElementById("choosenameform").style.display= 'block';
    document.getElementById("choosename").style.display= 'block';
    
}