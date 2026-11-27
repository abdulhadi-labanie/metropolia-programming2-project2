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
    }
}
starGame()

function checkBorderCollison(buttonPress){
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
function checkObjectsCollison(buttonPress){
    let collides_with_item = false;
    switch(buttonPress){
        case "w":
            item_array.forEach(item=>{
                console.log(item.item_y_pos)
                if(player_y_pos==item.item_y_pos){
                    collides_with_item = true
                }
            })
            if(collides_with_item == true){
                return true
            }else{
                return false
            }
        case "s":
            item_array.forEach(item=>{
                console.log(item.item_y_pos)
                if(player_y_pos==item.item_y_pos){
                    console.log("jfsdadnkjdfks")
                    collides_with_item = true
                }
            })
            if(collides_with_item == true){
                return true
            }else{
                return false
            }
        case "a":
            item_array.forEach(item=>{
                console.log(item.item_y_pos)
                if(player_x_pos==item.item_y_pos){
                    console.log("jfsdadnkjdfks")
                    collides_with_item = true
                }
            })
            if(collides_with_item == true){
                return true
            }else{
                return false
            }
        case "d":
            item_array.forEach(item=>{
                console.log(item.item_y_pos)
                if(player_x_pos==item.item_y_pos){
                    console.log("jfsdadnkjdfks")
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
            collides_with_boder =  checkBorderCollison("w");
            collides_with_object =  checkObjectsCollison("w");
            if(collides_with_boder == false ){
                ctx.fillStyle = "red";
                ctx.clearRect(player_x_pos, player_y_pos, 50, 50);
                player_y_pos-=10;
                player = ctx.fillRect(player_x_pos, player_y_pos, 50, 50);
            }
            break
        case "a":
            collides_with_boder =  checkBorderCollison("a");
            collides_with_object =  checkObjectsCollison("a");
            if(collides_with_boder == false){
                ctx.fillStyle = "red";
                ctx.clearRect(player_x_pos, player_y_pos, 50, 50);
                player_x_pos-=10;
                player = ctx.fillRect(player_x_pos, player_y_pos, 50, 50);
            }
            break
        case "s":
            collides_with_boder =  checkBorderCollison("s");
            collides_with_object =  checkObjectsCollison("s");
            if(collides_with_boder == false){
                ctx.fillStyle = "red";
                ctx.clearRect(player_x_pos, player_y_pos, 50, 50);
                player_y_pos+=10;
                player = ctx.fillRect(player_x_pos, player_y_pos, 50, 50);
            }
            break
        case "d":
            collides_with_boder =  checkBorderCollison("d");
            collides_with_object =  checkObjectsCollison("d");
            if(collides_with_boder == false){
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
 * Purpose: Execute post-game actions once time expires (show Game Over modal and POST playerData to backend).
 * Parameters: None
 * Return: Promise<void>
 * Calls: showGameOverModal(), postPlayerResultAPI()
 */
async function handleGameOver() {

//}
