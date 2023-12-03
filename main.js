function Mygrade(){
    var Userscore = Number(userScore.value)
    var songfail = new Audio ("music/Asake_feat_Burna_Boy_Sungba.mp3")
    var songpass = new Audio ("music/Asake_feat_Spinall_Palazzo (1).mp3")
    var songaverage = new Audio ("music/Asake_feat_Spinall_Palazzo.mp3")
    var songcredit = new Audio ("music/Asake_Joha.mp3")
    var songgood = new Audio ("music/Zinoleesky_Rocking_9jaflaver.com_.mp3")
    var songexcellent = new Audio ("music/Zinoleesky_Ma_Pariwo_9jaflaver.com_.mp3")

    if (Userscore==""){
        Display.value = "Input your grade ↑"
    }
    else if(Userscore>=0 && Userscore<40) {
        Display.value = "F - Fail😒"
        songfail.play()
        Display.style.color = "red"
    }
    else if(Userscore>=40 && Userscore<45){
        Display.value = "E - Pass😔"
        songpass.play()
        Display.style.color = "crimson"
    }
    else if(Userscore>=45 && Userscore<50){
        Display.value = "D - Average😬"
        songaverage.play()
        Display.style.color = "orange"
    }
    else if(Userscore>=50 && Userscore<60){
        Display.value = "C - Credit🤔"
        songcredit.play()
        Display.style.color = "chartreuse"
    }
    else if(Userscore>=60 && Userscore<70){
        Display.value = "B - Good🙂"
        songgood.play()
        Display.style.color = "green"
    }

    else if(Userscore>=70 && Userscore<=100){
        Display.value = "A - Excellent😀"
        songexcellent.play()
        Display.style.color = "green"
    }
    else if(Userscore>=100){
        Display.value = "Invalid"
    }
    else if(Userscore<=0 ) {
        Display.value = "Totaly Failed"
    }
    }
