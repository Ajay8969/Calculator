var display = document.getElementById("display");
const one = () => {
  display.value += "1";
}
const two = () => {
  display.value += "2";
}
const three = () => {
  display.value += "3";
}
const four = () => {
  display.value += "4";
}
const five = () => {
  display.value += "5";
}
const six = () => {
  display.value += "6";
}
const seven = () => {
  display.value += "7";
}
const eight = () => {
  display.value += "8";
}
const  nine = () => {
    display.value += "9";
}
const zeroo = () => {
  display.value += "%";
}
const zero = () => {
  display.value += "0";
}
const slash = () => {
  display.value += "/";
}
const dot = () => {
  display.value += ".";
}
const mines = () => {
  display.value += "-";
}
const plus = () => {
  display.value += "+";
}
const multiply = () => {
  display.value += '*';
}
const equal = () => {
  display.value = eval(display.value);
}
const del = () => {
  display.value = display.value.toString().slice(0,-1);
}
const clears = () => {
    display.value = "";
  }