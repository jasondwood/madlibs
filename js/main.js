const storyarea = document.querySelector("#storyarea");

function writestory() {
    var propernoun = document.querySelector("#propernoun").value;
    let noun1 = document.querySelector("#noun1").value;
    let adjective1 = document.querySelector("#adjective1").value;
    let verb1 = document.querySelector("#verb1").value;
    let adjective2 = document.querySelector("#adjective2").value;
    let animal1 = document.querySelector("#animal1").value;
    let verb2 = document.querySelector("#verb2").value;
    let color1 = document.querySelector("#color1").value;
    let verb3 = document.querySelector("#verb3").value;
    let adverb = document.querySelector("#adverb").value;
    let number1 = document.querySelector("#number1").value;
    let time = document.querySelector("#time").value;
    let color2 = document.querySelector("#color2").value;
    let animal2 = document.querySelector("#animal2").value;
    let number2 = document.querySelector("#number2").value;
    let silly = document.querySelector("#silly").value;
    let noun2 = document.querySelector("#noun2").value;

    storyarea.innerHTML = `<div><h3>Your Story</h3> <p>I\'m going camping with ${propernoun}. I packed my lantern, sleeping bag, and ${noun1}. I am so ${adjective1} to ${verb1} in a tent. I am ${adjective2} we might see a ${animal1}, they are kind of dangerous. We are going to hike, fish, and ${verb2}I have heard that the ${color1} lake is great for ${verb3}. Then we will ${adverb} hike through the forest for ${number1} ${time}. If I see a ${color2} ${animal2} while hiking, I am going to bring it home as a pet! At night we will tell ${number2} ${silly} stories and roast ${noun2} around the campfire!</p></div>`;
    
}
