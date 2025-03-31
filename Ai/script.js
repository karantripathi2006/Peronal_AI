const btn=document.querySelector(".btn")
const content=document.querySelector("#content")
function speak (text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en"
    window.speechSynthesis.speak(text_speak)
}
function wishme(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morgning Karan Sir")
    }
    else if(hours>=12 && hours<18){
        speak("Good AfterNoon sir")
    }
    else{
    speak("Good Evening Mr.Karan sir")
    }
}
window.addEventListener('load',()=>{
     wishme()

})
let speechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition
if (!speechRecognition) {
    alert("Speech recognition not supported in this browser.");
} else {
    let recognition = new speechRecognition();
}
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript)
    console.log(event)
}
btn.addEventListener('click',()=>{
recognition.start()
})
function takeCommand(message){
    message = message.toLowerCase();
    if(message.includes("hello")||message.includes("hi")){
        speak("hello sir")
        speak("Nice To meet you again,How can i Help You")
    }
    else if(message.includes("who are you")){
        speak("My name is Delta,and I am a Virtual Assistant.Created and Programme By Karan Tripathi")
    }
    else if(message.includes("roommate")){
        speak("My Room Parterners are Ashutosh From Baghi Ballia and DHAAAAARMEEENDRA FROM BURRRRRR AUR CHUUUCHI AND ANKIT FROM BIHAAAR") 
                                                                   
    }
}
 