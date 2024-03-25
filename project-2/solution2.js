// speedDectetor
var speedLimit = 70;
var kmPerDemeritPoint =5;
let speed
 speed = prompt("please input your speed in km/hr");
function tester(speed) {
    const okay =  Math.floor(speedLimit - speed);
    if(speed <= speedLimit) {
        console.log('speed is okay'+speed);
    }else{
        const points= Math.floor(speed - speedLimit)/kmPerDemeritPoint;
        if (points>+12){
            console.log('license suspended');
        }else{console.log(`Points:${points}`);
    }
        
    }
    }
    tester(speed);