var canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
var nasa_array=["nasa1.jpg","nasa2.jpg","nasa3.jpg","nasa4.jpg","nasa5.jpg"];
var random_number=Math.floor(Math.random()*5);
console.log(random_number);
var rover_width=100;
var rover_height=90;
var rover_x=10;
var rover_y=10;
var background_image=nasa_array[random_number];
console.log("Background image= "+background_image);
var rover_image="rover.png";
function add(){
    background_img_tag=new Image();
    background_img_tag.onload=upload_background;
    background_img_tag.src=background_image;
    rover_image_tag=new Image();
    rover_image_tag.onload=upload_rover;
    rover_image_tag.src=rover_image;
}
function upload_background(){
ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}
function upload_rover(){
    ctx.drawImage(rover_image_tag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_key_down);
function my_key_down(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=="38"){
        up();
        console.log("up");
    }
    if (keypressed=="40"){
        down();
        console.log("down");
    }
    if (keypressed=="37"){
        left();
        console.log("left");
    }
    if (keypressed=="39"){
        right();
        console.log("right");
    }
}
function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        console.log("When up arrow is pressed x= "+rover_x+" , y= "+rover_y);
        upload_background();
        upload_rover();
    }
}
function down(){
    if (rover_y<=600){
        rover_y=rover_y+10;
        console.log("When down arrow is pressed x= "+rover_x+" , y= "+rover_y);
        upload_background();
        upload_rover();
    }
}
function right(){
    if (rover_x<=800){
        rover_x=rover_x+10;
        console.log("When right arrow is pressed x= "+rover_x+" , y= "+rover_y);
        upload_background();
        upload_rover();
    }
}
function left(){
    if (rover_x>=0){
        rover_x=rover_x-10;
        console.log("When left arrow is pressed x= "+rover_x+" , y= "+rover_y);
        upload_background();
        upload_rover();
    }
}