let progressBar = document.querySelector(".purple"); 
    name_user = document.querySelector(".name");                 user_place = document.querySelector(".user_place");
    minutes = document.querySelector(".minutes");                distance_P1 = document.querySelector(".distance_P1");
    week_month = document.querySelector(".week_month");          distance_P2 = document.querySelector(".distance_P2");
    current_streak = document.querySelector(".current_streak");  distance_P3 = document.querySelector(".distance_P3");
    best_streak = document.querySelector(".best_streak");        distance_U = document.querySelector(".distance_U");
    first_place = document.querySelector(".FP");                 sign_P1 = document.querySelector(".sign_P1");
    second_place = document.querySelector(".second_place");      sign_P2 = document.querySelector(".sign_P2");
    third_place = document.querySelector(".third_place");        sign_P3 = document.querySelector(".sign_P3");
    circle_user = document.querySelector(".circle_user");        sign_U = document.querySelector(".sign_U");
    select = document.querySelector(".select_month_week");       in_circle = document.querySelector(".in_circle_1");
    img_P1 = document.getElementById('img_P1');                  img_P2 = document.getElementById('img_P2');
    img_P3 = document.getElementById('img_P3');                  img_P4 = document.getElementById('img_P4');
    color_First = document.querySelector('.component8');         color_Second = document.querySelector('.component9');
    color_Third = document.querySelector('.component10');        color_Last = document.querySelector('.component11');
    circle_three = document.querySelector(".circle_three");      circle_two = document.querySelector(".circle_two"); 
    circle_one = document.querySelector(".circle");    
    

let progressStartValue = 250, 
    progressEndValue = 54,
    /*Zakres od 250 do 54 to jest 100% całego okręgu czyli 196 to jest 100% 
    można użyć wzoru na oblicznie ilości kroków jeśli wiem jaka wartość jest całościowa
    czyli jeśli 12 kroków jest połową kroków to znaczy że x=(50*196)/100, z tego wynika że 98
    to jest liczba którą trzeba dodać do progressEndVaule żeby licznik dobrze wyświetlał wartość*/
    speed = 0;
    flag = 0;
class containerWeekMonth{
    constructor(name, progress, minutes, currentS, bestS, firstPlace, firstPlaceDistance, directionFirst,  secondPlace, secondPlaceDistance, directionSecond, thirdPlace, thirdPlaceDistance, directionThird, userPlaceId, userPlace, userPlaceDistance, directionUser){
        this.name = name;           this.firstPlace = firstPlace;
        this.progress= progress;    this.secondPlace = secondPlace;
        this.minutes = minutes;     this.thirdPlace = thirdPlace;
        this.currentS= currentS;    this.userPlace = userPlace;
        this.bestS = bestS;         this.firstPlaceDistance = firstPlaceDistance;
        this.secondPlaceDistance = secondPlaceDistance;
        this.thirdPlaceDistance = thirdPlaceDistance;
        this.userPlaceDistance = userPlaceDistance;
        this.directionFirst = directionFirst;
        this.directionSecond = directionSecond;
        this.directionThird = directionThird;
        this.directionUser = directionUser;
        this.userPlaceId = userPlaceId;
    }
}

const Week = new containerWeekMonth("Pedro", 38, 12, 4, 12, "Jake Skywalker", 105, "up", "You!", 52, "up", "Marty McFly", 50, "no", 7, "Doc Oc", 38, "no");
const Month = new containerWeekMonth("Pedro", 12, 186, 7, 44, "Marty McFly", 62, "no", "Annabel Ferdinand", 52, "up", "You!", 15, "up", 6, "Jake Skywalker", 12, "up");

function progressBarr(){
let progress = setInterval(() => {
    progressStartValue = progressStartValue-3;
    progressBar.style.cssText = `--offset: ${progressStartValue}`;
    
    if(progressStartValue == progressEndValue || progressStartValue < progressEndValue){
        clearInterval(progress);
    }
    }, speed);
}

function changeImageWeek() {
    if (Week.directionFirst == "up" && Week.firstPlace != "You!") {
        img_P1.src = "gif/Green_Arrow_Left.gif";
    }
    if (Week.directionFirst == "no") {
        img_P1.src = "gif/stable.gif";
    }

    if (Week.directionSecond == "up" && Week.secondPlace != "You!") {
        img_P2.src = "gif/Green_Arrow_Left.gif";
    }
    if (Week.directionSecond == "no") {
        img_P2.src = "gif/stable.gif";
    }

    if (Week.directionThird == "up" && Week.thirdPlace != "You!") {
        img_P3.src = "gif/Green_Arrow_Left.gif";
    }
    if (Week.directionThird == "no") {
        img_P3.src = "gif/stable.gif";
    }
    if (Week.directionUser == "up" && Week.userPlace != "You!") {
        img_P4.src = "gif/Green_Arrow_Left.gif";
    }
    if (Week.directionUser == "no") {
        img_P4.src = "gif/stable.gif";
    }
}

function changeImageMonth() {
    if (Month.directionFirst == "up" && Month.firstPlace != "You!") {
        img_P1.src = "gif/Green_Arrow_Left.gif";
    }
    if (Month.directionFirst == "no" ) {
        img_P1.src = "gif/stable.gif";
    }

    if (Month.directionSecond == "up" && Month.secondPlace != "You!") {
        img_P2.src = "gif/Green_Arrow_Left.gif";
    }
    if (Month.directionSecond == "no") {
        img_P2.src = "gif/stable.gif";
    }

    if (Month.directionThird == "up" && Month.thirdPlace != "You!") {
        img_P3.src = "gif/Green_Arrow_Left.gif";
    }
    if (Month.directionThird == "no") {
        img_P3.src = "gif/stable.gif";
    }
    if (Month.directionUser == "up" && Month.userPlace != "You!") {
        img_P4.src = "gif/Green_Arrow_Left.gif";
    }
    if (Month.directionUser == "no") {
        img_P4.src = "gif/stable.gif";
    }
}

function colorStart(){
    circle_one.style.color = `#2ec76e`
    circle_one.style.outlineColor = `#2ec76e`
    color_First.style.background = `#fff`;
    color_First.style.color = `#000`;
    circle_two.style.color = `#888888`
    circle_two.style.outlineColor = `#888888`
    color_Second.style.background = `#fff`;
    color_Second.style.color = `#000`;
    circle_three.style.color = `#2ec76e`
    circle_three.style.outlineColor = `#2ec76e`
    color_Third.style.background = `#fff`;
    color_Third.style.color = `#000`;
    color_Last.style.background = `#fff`;
    color_Last.style.color = `#000`;
    circle_user.style.color = `#888888`
    circle_user.style.outlineColor = `#888888`
    if (Week.userPlace != "You!"){
        Week.userPlaceId = 4;
    }
    if (Month.userPlace != "You!"){
        Month.userPlaceId = 4;
    }
}

function recolor(){
    if (Week.firstPlace == "You!" && flag == 2 || Month.firstPlace== "You!" && flag == 3) {
        colorStart();
        color_First.style.background = `#2ec76e`;
        color_First.style.color = `#fff`;
        circle_one.style.color = `#fff`
        circle_one.style.outlineColor = `#fff`
        img_P1.src = "gif/White_Arrow_Left.gif";
    }
    if (Week.secondPlace == "You!" && flag == 2 || Month.secondPlace == "You!" && flag == 3) {
        colorStart();
        color_Second.style.background = `#2ec76e`;
        color_Second.style.color = `#fff`;
        circle_two.style.color = `#fff`
        circle_two.style.outlineColor = `#fff`
        img_P2.src = "gif/White_Arrow_Left.gif";
    }
    if (Week.thirdPlace == "You!" && flag == 2 || Month.thirdPlace == "You!" && flag == 3) {
        colorStart();
        color_Third.style.background = `#2ec76e`;
        color_Third.style.color = `#fff`;
        circle_three.style.color = `#fff`
        circle_three.style.outlineColor = `#fff`
        img_P3.src = "gif/White_Arrow_Left.gif";
    }
    if (Week.userPlace == "You!" && flag == 2 || Month.userPlace == "You!" && flag == 3) {
        colorStart();
        color_Last.style.background = `#2ec76e`;
        color_Last.style.color = `#fff`;
        circle_user.style.color = `#fff`
        circle_user.style.outlineColor = `#fff`
        img_P4.src = "gif/White_Arrow_Left.gif";
    }
}

function writeWeek(){
    name_user.textContent = `${Week.name}'s goal`;
    minutes.textContent = `${Week.minutes} `;
    week_month.textContent = `weeks's Goal.`;
    in_circle.textContent = `${Week.progress}m`;
    current_streak.textContent = `${Week.currentS}`;
    best_streak.textContent = `${Week.bestS}`;
    first_place.textContent = `${Week.firstPlace}`; second_place.textContent = `${Week.secondPlace}`; third_place.textContent = `${Week.thirdPlace}`; user_place.textContent = `${Week.userPlace}`;
    distance_P1.textContent = `${Week.firstPlaceDistance}m`; distance_P2.textContent = `${Week.secondPlaceDistance}m`; distance_P3.textContent = `${Week.thirdPlaceDistance}m`; distance_U.textContent = `${Week.userPlaceDistance}m`;
    circle_user.textContent = `${Week.userPlaceId}`;
}

function writeMonth(){
    name_user.textContent = `${Month.name}'s goal`;
    minutes.textContent = `${Month.minutes} `;
    week_month.textContent = `month's Goal.`;
    in_circle.textContent = `${Month.progress}m`;
    current_streak.textContent = `${Month.currentS}`;
    best_streak.textContent = `${Month.bestS}`;
    first_place.textContent = `${Month.firstPlace}`; second_place.textContent = `${Month.secondPlace}`; third_place.textContent = `${Month.thirdPlace}`; user_place.textContent = `${Month.userPlace}`;
    distance_P1.textContent = `${Month.firstPlaceDistance}m`; distance_P2.textContent = `${Month.secondPlaceDistance}m`; distance_P3.textContent = `${Month.thirdPlaceDistance}m`; distance_U.textContent = `${Month.userPlaceDistance}m`;
    circle_user.textContent = `${Month.userPlaceId}`;
}

    if (flag==0){
        flag=2;
        recolor();
        writeWeek();
        progressStartValue = 250;
        progressEndValue = 250-((198*Week.progress*2)/100);
        progressBarr();
        changeImageWeek();
        recolor();
        flag = 1;
    }

    function selectWeekMonth(y){
        if (y.value == "Week" || flag == 0) {
            flag = 2;
            recolor();
            writeWeek();
            progressStartValue = 250;
            progressEndValue = 250-((198*Week.progress*2)/100);
            progressBarr();
            changeImageWeek();
            flag = 1;
        }
        if (y.value == "Month") {
            flag = 3;
            recolor();
            writeMonth();
            progressStartValue = 250;
            progressEndValue = 250-((198*Month.progress*2)/100);
            progressBarr();
            changeImageMonth();
        }
    }

