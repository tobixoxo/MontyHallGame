let click =0;
let visited = [0,0,0]; 
let prize = 3;
let handleClick = function(door) {
    click++;
    if(click == 2){
        if(door == prize){
            window.alert("you won the car!!");
        }
        else{
            window.alert("Scapegoated :/")
        }
    }
    let otherDoor;
    while(true){
        
        let x = Math.floor(Math.random() * 4) ;
        console.log("x is ", x," and clicks ",click," visted :", visited)
        if(click >= 3) return;
        if(x != 0 && x != door && visited[x - 1] != 1){
            if(x == prize){
                if(click == 2){
                    otherDoor = x;
                }
                else{
                    continue;
                }
            }
            else{
                otherDoor = x;
            }
            break;
        }
    }
    console.log(otherDoor, door);
    //this otherdoor will be revealed

    //accessing the element by id
    let img = document.getElementById("d" + String(otherDoor));
    //changing the display to block from none
    img.style.display = "block";
    visited[otherDoor - 1] = 1;
    // window.alert(String(img.id))
    // alert();
    return;
}