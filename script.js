
document.getElementById("idea-btn").addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      document.getElementById("activity-text").textContent = data.activity
        document.getElementById("title").textContent= "HAPPY BOT"
        document.querySelector('main').classList.add("fun")
        document.querySelector('p').classList.add("happy")
})
})




//function idea (){
 //fetch("https://apis.scrimba.com/bored/api/activity")
   // .then(response => response.json())
    //.then(data => {
      //  console.log(data)
        //document.getElementById("activity-text").textContent = `
          //  ${data.activity}  `
    //})

//}

