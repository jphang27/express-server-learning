const arr = ["You thought it's a new quote, but it's just me Dio!",
            "Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.",
            "Thinking you’re no-good and worthless is the worst thing you can do.",
            "Every journey begins with a single step, we just have to have patience.",
            "Life is not a game of luck. If you want to win work hard.",
            "Whatever you do, enjoy it to the fullest. That is the secret to life.",
            "Sometimes I do feel like I'm a failure. Like there's no hope for me. But even so, I'm not gonna give up. Ever!",
            "Power comes in response to a need, not a desire. You have to create that need.",
            "No matter how hard or impossible it is, never lose sight of your goal.",
            "Fools who don't respect the past are likely to repeat it."
        ];
const express = require("express")
const app = express()
const port = 3000

    // app.get('/', (req, res) => res.send(randomStr(1, arr)))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.post("/", function(req, res) {
    res.send(arr[Math.floor(Math.random() * 10)]);
});

//Random function
//Random is implemented in the Math method
//My idea is to want to randomize an array of quotes. Max 10 quotes.
//index is a integer
//arr is an array 

// function randomStr(index, arr) { 
//     let newStr = '';//intializing newStr having nothing
//     for (let i = index; i > 0; i--) { 
//         newStr += arr[Math.floor(Math.random() * arr.length)]; 
//     } 
//     return newStr; 
// } 