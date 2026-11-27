const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "red";
let player_x_pos = canvas.width/2 - 50;
let player_y_pos = canvas.height/2 - 50;
let player = ctx.fillRect(player_x_pos, player_y_pos, 50, 50);

const borderRight = canvas.width - 50;
const borderLeft = 0;
const borderBottom = canvas.height - 50;
const borderTop = 0;

class Item{
    constructor(type, item_x_pos, item_y_pos){
        this.type = type;
        this.item_x_pos = item_x_pos
        this.item_y_pos = item_y_pos
    }
    renderItem(){
        switch(this.type){
            case 1:
                ctx.fillStyle = "purple";//plastic
                break
            case 2:
                ctx.fillStyle = "blue";//glass
                break
            case 3:
                ctx.fillStyle = "green";//bio
                break
            case 4:
                ctx.fillStyle = "yellow";//cardboard
                break
        }
        let item = ctx.fillRect(this.item_x_pos, this.item_y_pos, 30, 30);
        console.log(this.item_x_pos, this.item_y_pos)
        return item;
    };
}

var gameOver = false;
let item_array = []
function starGame(){
    if(gameOver==false){
        let item = new Item(1, canvas.width/2-30, canvas.height/2+100)
        item.renderItem();
        item_array.push(item);
        console.log(item.item_x_pos, item.item_y_pos)
        let item2 = new Item(1, canvas.width/2-30 +100, canvas.height/2+100)
        item2.renderItem();
        item_array.push(item2);
    }
}
starGame()

function checkBorderCollision(buttonPress){
    switch(buttonPress){
        case "w":
            if(player_y_pos<=borderTop){
                return true
            }else{
                return false
            }
        case "s":
            if(player_y_pos>= borderBottom){
                return true
            }else{
                return false
            }
        case "a":
            if(player_x_pos<=borderLeft){
                return true
            }else{
                return false
            }
        case "d":
            if(player_x_pos>=borderRight){
                return true
            }else{
                return false
            }
    }
}
function checkObjectsCollision(buttonPress){
    let collides_with_item = false;
     let next_y_pos;
     let next_x_pos;
    switch(buttonPress){
        case "w":
            next_y_pos = player_y_pos-10;
            next_x_pos = player_x_pos;
            item_array.forEach(item=>{
                if(next_x_pos < item.item_x_pos + 30 &&
                    next_x_pos + 50 > item.item_x_pos &&
                    next_y_pos < item.item_y_pos + 30 &&
                    next_y_pos + 50 > item.item_y_pos){
                    collides_with_item = true
                }
            })
            if(collides_with_item == true){
                return true
            }else{
                return false
            }
        case "s":
            next_y_pos = player_y_pos+10;
            next_x_pos = player_x_pos;
            item_array.forEach(item=>{
                if(next_x_pos < item.item_x_pos + 30 &&
                    next_x_pos + 50 > item.item_x_pos &&
                    next_y_pos < item.item_y_pos + 30 &&
                    next_y_pos + 50 > item.item_y_pos){
                    collides_with_item = true
                }
            })
            if(collides_with_item == true){
                return true
            }else{
                return false
            }
        case "a":
            next_y_pos = player_y_pos;
            next_x_pos = player_x_pos-10;
            item_array.forEach(item=>{
                if(next_x_pos < item.item_x_pos + 30 &&
                    next_x_pos + 50 > item.item_x_pos &&
                    next_y_pos < item.item_y_pos + 30 &&
                    next_y_pos + 50 > item.item_y_pos){
                    collides_with_item = true
                }
            })
            if(collides_with_item == true){
                return true
            }else{
                return false
            }
        case "d":
            next_y_pos = player_y_pos;
            next_x_pos = player_x_pos+10;
            item_array.forEach(item=>{
                if(next_x_pos < item.item_x_pos + 30 &&
                    next_x_pos + 50 > item.item_x_pos &&
                    next_y_pos < item.item_y_pos + 30 &&
                    next_y_pos + 50 > item.item_y_pos){
                    collides_with_item = true
                }
            })
            if(collides_with_item == true){
                return true
            }else{
                return false
            }
        }
    }
document.addEventListener("keydown",(button)=>{
    let collides_with_boder;
    let collides_with_object;
    switch(button.key.toLowerCase()){
        case "w":
            collides_with_boder =  checkBorderCollision("w");
            collides_with_object =  checkObjectsCollision("w");
            if(collides_with_boder == false && collides_with_object==false){
                ctx.fillStyle = "red";
                ctx.clearRect(player_x_pos, player_y_pos, 50, 50);
                player_y_pos-=10;
                player = ctx.fillRect(player_x_pos, player_y_pos, 50, 50);
            }
            break
        case "a":
            collides_with_boder =  checkBorderCollision("a");
            collides_with_object =  checkObjectsCollision("a");
            if(collides_with_boder == false && collides_with_object==false){
                ctx.fillStyle = "red";
                ctx.clearRect(player_x_pos, player_y_pos, 50, 50);
                player_x_pos-=10;
                player = ctx.fillRect(player_x_pos, player_y_pos, 50, 50);
            }
            break
        case "s":
            collides_with_boder =  checkBorderCollision("s");
            collides_with_object =  checkObjectsCollision("s");
            if(collides_with_boder == false && collides_with_object==false){
                ctx.fillStyle = "red";
                ctx.clearRect(player_x_pos, player_y_pos, 50, 50);
                player_y_pos+=10;
                player = ctx.fillRect(player_x_pos, player_y_pos, 50, 50);
            }
            break
        case "d":
            collides_with_boder =  checkBorderCollision("d");
            collides_with_object =  checkObjectsCollision("d");
            if(collides_with_boder == false && collides_with_object==false){
                ctx.fillStyle = "red";
                ctx.clearRect(player_x_pos, player_y_pos, 55, 55);
                player_x_pos+=10;
                player = ctx.fillRect(player_x_pos, player_y_pos, 50, 50);
            }
            break
    }
    console.log(player_x_pos, player_y_pos, collides_with_boder, collides_with_object)
})

//export async function triggerGameOver() {
/**
 * Purpose: End the round when time reaches zero, update the local user JSON, sync it to the server via POST, and re-fetch via GET to confirm synchronization.
 * Parameters: None.
 * Return: Promise<void>
 * Calls: showGameOverScreen(), appendRoundToLocalUserJson(), syncUserJsonToAPI(), fetchUserJsonAPI(), saveUserJsonToStorage(), displayErrorMessage()
 */

//}