function changeBarMargin(){
    console.log("margin")
    var width = document.getElementsByClassName("bar").offsetWidth;
    document.getElementsByClassName("bar").style.margin = width/2 + "em"
}