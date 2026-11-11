const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
let player_x_pos = 10;
let player_y_pos = 10;
let player = ctx.fillRect(player_x_pos, player_y_pos, 10, 10);

document.addEventListener("keydown",(button)=>{
    console.log(button.key.toLowerCase())
    switch(button.key.toLowerCase()){
        case "w":
            ctx.clearRect(player_x_pos, player_y_pos, 10, 10);
            player_y_pos-=10;
            player = ctx.fillRect(player_x_pos, player_y_pos, 10, 10);
            break
        case "a":
            ctx.clearRect(player_x_pos, player_y_pos, 10, 10);
            player_x_pos-=10;
            player = ctx.fillRect(player_x_pos, player_y_pos, 10, 10);
            break
        case "s":
            ctx.clearRect(player_x_pos, player_y_pos, 10, 10);
            player_y_pos+=10;
            player = ctx.fillRect(player_x_pos, player_y_pos, 10, 10);
            break
        case "d":
            ctx.clearRect(player_x_pos, player_y_pos, 10, 10);
            player_x_pos+=10;
            player = ctx.fillRect(player_x_pos, player_y_pos, 10, 10);
            break
    }
})