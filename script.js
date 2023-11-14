function convertTemperature() {
    let inp1 = document.getElementById("inp1").value;
    let inp2 = document.getElementById("inp2").value;
    let value = document.querySelector(".value").value;
    let result = document.querySelector(".value2");
    if (inp1 === "cel" && input2 === "fah1") {
        result.value = (value * 9 / 5) + 32;
    } else if (inp1 === "celsius" && inp2 === "kelvin1") {
        result.value = parseInt(value) + 273.15;
    } else if (inp1 === "fahrenheit" && inp2 === "celsius1") {
        result.value = (value - 32) * 5 / 9;
    } else if (inp1 === "fahrenheit" && inp2 === "kelvin1") {
        result.value = (value - 32) * 5 / 9 + 273.15;
    } else if (inp1 === "kelvin" && inp2 === "celsius1") {
        result.value = value - 273.15;
    } else if (inp1 === "kelvin" && inp2 === "fahrenheit1") {
        result.value = (value - 273.15) * 9 / 5 + 32;
    } else {
        result.value = value;
    }
}

document.querySelector(".btn1").addEventListener("click", convertTemperature);
document.querySelector(".btn2").addEventListener("click", () => {
    document.querySelector(".value").value = "";
    document.querySelector(".value2").value = "";
});