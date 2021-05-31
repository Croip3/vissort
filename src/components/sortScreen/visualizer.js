export const changeBarMargin = () =>{
    console.log("margin");
    var width = document.getElementsByClassName("bar")[0].clientWidth;

    var bars = document.getElementsByClassName("bar");
    Array.from(bars).forEach(element => {
        element.style.margin = "0px " + String(width/2) + "px"
    });
    //document.getElementsByClassName("bar")[0].style.backgroundColor = "blue";//.style.margin = "1em";
}
export default changeBarMargin