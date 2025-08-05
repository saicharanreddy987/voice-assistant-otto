import webbrowser
from components.tts import speak

def perform_action(command):
    if "google" in command:
        webbrowser.open("https://google.com")
        speak("Opening Google.")
    elif "youtube" in command:
        webbrowser.open("https://youtube.com")
        speak("Opening YouTube.")
    else:
        speak("Command not recognized.")
