const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

function speak(text) {
  const text_speak = new SpeechSynthesisUtterance(text);

  text_speak.rate = 1;
  text_speak.volume = 1;
  text_speak.pitch = 1;

  window.speechSynthesis.speak(text_speak);
}

window.addEventListener("load", () => {
  setTimeout(() => {
    speak("i am otto,what can i do for you");
  }, 2000); // Delay for 1 second
});

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

//now we create an object to handle the speech recognition.

const recognition = new SpeechRecognition();
// Add these configurations right after initializing recognition
recognition.continuous = true; // Allows continuous speech recognition
recognition.interimResults = true; // Captures partial results
recognition.lang = "en-US"; // Ensures recognition is in English

// Now I have taught it to reconize my speech I want it to handle the input
//in a certain way.

//When the user speaks, the onresult event triggers automatically.
//it is fired when speech is recognized.
//the event object contains recognized words

//then the the transcript variable stores the recoognized speech

recognition.onresult = (event) => {
  let transcript = "";

  // in this step we basically loop through speech recontion results,
  //even.resultindex is the index where
  // the latest speech recognition results starts in the event.results list
  //in simple and short what this loop does is basically ensures that only the
  //latest recognized speech results are processed

  for (let i = event.resultIndex; i < event.results.length; i++) {
    if (event.results[i].isFinal) {
      // Only use final results
      transcript += event.results[i][0].transcript + " ";
    }
  }
  //This code takes a spoken command, removes extra spaces,
  //  displays it on the screen, and then
  // processes it as a command in lowercase.
  transcript = transcript.trim();

  if (transcript) {
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
  }
};

//lastly we just have to add an event listener to our btn, So basically
//when the .talk is clicked it updates.contentn to show listening and then starts
//voice recognition.

btn.addEventListener("click", () => {
  content.textContent = "Listening....";
  recognition.start();
});

//Lastly we are just going to add a simple function that will accept commands
//and perform the tasks.

function takeCommand(message) {
  if (
    message.includes("hey") ||
    message.includes("hello") ||
    message.includes("hello daragaya" )
  ) {
    speak("Hello Aj, hope you are doing great, How May I Help You?");
  } else if (message.includes("open google")) {
    window.open("https://google.com", "_blank");
    speak("Opening Google...");
  } else if (message.includes("thank you")) {
    speak("You are most welcome aj...");
  } else if (message.includes("open my mail")) {
    window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
    speak("Opening your Gmail...");
  } else if (message.includes("play gangster rap on youtuibe")) {
    window.open("https://www.youtube.com/watch?v=pSY3i5XHHXo", "_blank");
    setTimeout(() => speak("Here is your Gangsta Rap. Enjoy!"), 500);
  } else if (
    message.includes("open trade sheet") ||
    message.includes("open my trade sheet")
  ) {
    window.open(
      "https://docs.google.com/spreadsheets/d/1xcqYoEsBGuQ8RB7MtS29cVsolii8wTxy47c9EDs384o/edit?gid=566281844#gid=566281844",
      "_blank"
    );
    speak("Opening Trade sheet...");
  } else if (
    message.includes("open Nifty 50 chart") ||
    message.includes("open nifty 50")
  ) {
    window.open(
      "https://www.tradingview.com/chart/WJKAVFGV/?symbol=NSE%3ANIFTY",
      "_blank"
    );
    speak("Opening Nifty 50 Chart...");
  } else if (message.includes("open youtube")) {
    window.open("https://youtube.com", "_blank");
    speak("Opening Youtube...");
  } else if (message.includes("open zerodha")) {
    window.open("https://kite.zerodha.com/?next=%2Fpositions");
    speak("Opening Zerodha...");
  } else if (message.includes("open facebook")) {
    window.open("https://facebook.com", "_blank");
    speak("Opening Facebook...");
  } else if (
    message.includes("what is") ||
    message.includes("who is") ||
    message.includes("what are")
  ) {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "This is what i found on internet regarding " + message;
    speak(finalText);
  } else if (message.includes("www.google.com")) {

    window.open(
      `https://en.wikipedia.org/wiki/${message.replace("www.google.com", "")}`,
      "_blank"
    );
    const finalText = "This is what i found on wikipedia regarding " + message;
    speak(finalText);
  } else if (message.includes("time")) {
    const time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    const finalText = time;
    speak(finalText);
  } else if (message.includes("date")) {
    const date = new Date().toLocaleString(undefined, {
      month: "short",
      day: "numeric",
    });
    const finalText = date;
    speak(finalText);
  } else if (message.includes("calculator")) {
    window.open("Calculator:///");
    const finalText = "Opening Calculator";
    speak(finalText);
  } else if (message.includes("whatsapp")) {
    window.open("whatsapp:///");
    const finalText = "Opening whatsapp";
    speak(finalText);
  }else if (message.includes("file explporer")) {
    
    window.open("file explorer:///");
    const finalText = "Opening file explorer";
    speak(finalText);
  }else {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "I found some information for " + message + " on google";
    speak(finalText);
  }
}