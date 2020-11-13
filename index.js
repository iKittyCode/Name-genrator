//This is for the names it should pick

const { exit } = require("process")

var names = ['Chooni', 'Daddy', 'Mommy', 'Arshya', 'Kittu']

    console.log("❤🐱🦐⚒💻📱")
    console.log("☼")
    
    setInterval(() => {
    console.log(names[Math.floor(Math.random() * names.length)])
    
    }, 1000)
    setTimeout(() => {
    exit()
    }, 8000)