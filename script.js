var tabs = document.getElementsByClassName("tab")

// Paslepia visus tabus
for(var tab of tabs){
    tab.style.display = "none"
}

// Paslepia visus tabus ir rodo tik tą pagal id
function displayTab(id){
    for(var tab of tabs){
    tab.style.display = "none"
    }
    document.getElementById(id).style.display = "block"
}

// Stilius mygtukams
var buttons = document.querySelectorAll("button")
for(var button of buttons){
    button.addEventListener("click", function(){
        // Nuima klasę nuo visų
        for(var x of buttons){
            x.classList.remove("selected")
        }
        // Prideda klasę tam, kuris paspaustas
        this.classList.add("selected")
    })
}

// Fono stilius
var backgroundColors = ["#4fa3c2", "#fe9557", "#5bd5c8"]
for(var button of buttons){
    button.addEventListener("click", function(){
        var index = this.getAttribute("index")
        document.body.style.background = backgroundColors[index]
        console.log(backgroundColors[index])
    })
}