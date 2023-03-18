function OpeningCeremony() {
setTimeout(function(){console.log('Let the games begin');},1000)
var Score={red:0,blue:0,green:0,yellow:0};
setTimeout(Race100M,3000)
}

var Score={red:0,blue:0,green:0,yellow:0};
OpeningCeremony();

function Race100M(){
    console.log('race begin');
    var r=(Math.floor(Math.random()*5)+10)
    var b=(Math.floor(Math.random()*5)+10)
    var g=(Math.floor(Math.random()*5)+10)
    var y=(Math.floor(Math.random()*5)+10)
    var racetime=[r,b,g,y]
    console.log(racetime)
    racetime.sort();
    console.log(racetime)
    for(var value in racetime){
    if(racetime[0]==r){
        Score.red=Score.red+50
        break
    }
    if(racetime[0]==b){
        Score.blue=Score.blue+50
        break
    }
    if(racetime[0]==g){
        Score.green=Score.green+50
        break
    }
    if(racetime[0]==y){
        Score.yellow=Score.yellow+50
        break
    }
}
    for(var value in racetime){
        if(racetime[1]==r){
            Score.red=Score.red+25
            break
        }
        if(racetime[1]==b){
            Score.blue=Score.blue+25
            break
        }
        if(racetime[1]==g){
            Score.green=Score.green+25
            break
        }
        if(racetime[1]==y){
            Score.yellow=Score.yellow+25
            break
        }
}
    console.log(Score)
    setTimeout(LongJump,2000);
}

function LongJump(){
    var any=Score[Math.floor(Math.random()*Score.length)]
    console.log(any)
    console.log(Score)
    HighJump();

}
