let joke = [
  "My wife told me to stop impersonating a flamingo. I had to put my foot down.",

  "I went to buy some camo pants but couldn’t find any.",

  "I failed math so many times at school, I can’t even count.",

  " I used to have a handle on life, but then it broke.",

  "I was wondering why the frisbee kept getting bigger and bigger, but then it hit me.",

  "I heard there were a bunch of break-ins over at the car park. That is wrong on so many levels.",
  "I want to die peacefully in my sleep, like my grandfather… Not screaming and yelling like the passengers in his car.",

  "When life gives you melons, you might be dyslexic.",

  "Don’t you hate it when someone answers their own questions? I do.",

  "It takes a lot of balls to golf the way I do.",
];

let joketext = document.getElementsByClassName("joke")[0];
let preveuse = document.getElementsByClassName("preveuse")[0];
let next = document.getElementsByClassName("next")[0];
let random = document.getElementsByClassName("random")[0];
let i = 0;
preveuse.addEventListener("click", () => {
  i--;
  joketext.innerHTML = joke[i];
  if (i < 0) {
    i = joke.length - 1;
  }
});
next.addEventListener("click", () => {
  i++;
  if (i >= joke.length) {
    i = 0;
  }
  joketext.innerHTML = joke[i];
});
random.addEventListener("click", () => {
  let num = Math.floor(Math.random() * joke.length);

  joketext.innerHTML = joke[num];
});
