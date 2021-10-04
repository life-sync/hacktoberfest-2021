import subprocess
import wolframalpha
import pyttsx3
import tkinter
import json
import random
import operator
import speech_recognition as sr
import datetime
import wikipedia
import webbrowser
import os
# import winshell
import pyjokes
# import feedparser
import smtplib
import ctypes
import time
import requests
import shutil
from dotenv import load_dotenv
import os
from twilio.rest import Client
# from clint.textui import progress
# from ecapture import ecapture as ec
from bs4 import BeautifulSoup
import win32com.client as wincl
from urllib.request import urlopen
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials


engine = pyttsx3.init('sapi5')
load_dotenv()
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[0].id)


def speak(audio):
    engine.say(audio)
    engine.runAndWait()


def wishMe():
    hour = int(datetime.datetime.now().hour)
    if hour >= 0 and hour < 12:
        speak("Good Morning Sir !")

    elif hour >= 12 and hour < 18:
        speak("Good Afternoon Sir !")

    else:
        speak("Good Evening Sir !")

    assname = ("Spark")
    speak("I am your Assistant")
    speak(assname)


def usrname():
    speak("What should i call you sir")
    uname = takeCommand()
    speak("Welcome Mister")
    speak(uname)
    columns = shutil.get_terminal_size().columns

    print("#####################".center(columns))
    print("Welcome Mr.", uname.center(columns))
    print("#####################".center(columns))

    speak("How can i Help you, Sir")


def takeCommand():

    r = sr.Recognizer()

    with sr.Microphone() as source:

        print("Listening...")
        r.pause_threshold = 1
        audio = r.listen(source)

    try:
        print("Recognizing...")
        query = r.recognize_google(audio, language='en-in')
        print(f"User said: {query}\n")

    except Exception as e:
        print(e)
        print("Unable to Recognize your voice.")
        return "None"

    return query


def sendEmail(to, content):
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()

    # Enable low security in gmail
    server.login('your email id', 'your email password')
    server.sendmail('your email id', to, content)
    server.close()


if __name__ == '__main__':
    def clear(): return os.system('cls')

    # This Function will clean any
    # command before execution of this python file
    clear()
    wishMe()
    usrname()

    while True:

        query = takeCommand().lower()

        # All the commands said by user will be
        # stored here in 'query' and will be
        # converted to lower case for easily
        # recognition of command
        if 'wikipedia' in query:
            speak('Searching Wikipedia...')
            query = query.replace("wikipedia", "")
            results = wikipedia.summary(query, sentences=2)
            speak("According to Wikipedia")
            print(results)
            speak(results)

        elif 'open youtube' in query:
            speak("Here you go to Youtube\n")
            webbrowser.open_new_tab('https://youtube.com')

        elif 'open google' in query:
            speak("Here you go to Google\n")
            webbrowser.open("https://google.com")

        elif 'open stackoverflow' in query:
            speak("Here you go to Stack Over flow.Happy coding")
            webbrowser.open("https://stackoverflow.com")

        elif 'the time' in query:
            strTime = datetime.datetime.now().strftime("%H: %M: %S")
            speak(f"Sir, the time is {strTime}")
        elif 'the date' in query:
            strDate = datetime.datetime.now().strftime(' %d: %B: %Y')
            speak(f'The date today is {strDate}')

        elif 'how are you' in query:
            speak("I am fine, Thank you")
            speak("How are you, Sir")

        elif 'fine' in query or "good" in query:
            speak("It's good to know that your fine")

        elif "change my name to" in query:
            query = query.replace("change my name to", "")
            assname = query

        elif "change name" in query:
            speak("What would you like to call me, Sir ")
            assname = takeCommand()
            speak("Thanks for naming me")

        elif "what's your name" in query or "What is your name" in query:
            speak("My friends call me")
            speak('Spark')
            print("My friends call me", 'Spark')

        elif 'spark stop' in query:
            speak("Thanks for giving me your time")
            exit()

        elif 'joke' in query:
            speak(pyjokes.get_joke())

        elif 'search' in query or 'play' in query:

            query = query.replace("search", "")
            query = query.replace("play", "")
            webbrowser.open_new_tab(query)

        elif "who i am" in query:
            speak("If you talk then definitely your human.")

        elif 'news' in query:
            api_key = os.getenv('API_KEY_NEWS')
            try:
                jsonObj = urlopen(
                    f'https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey={api_key}')
                data = json.load(jsonObj)
                i = 1

                speak('here are some top news from the times of india')
                print('''=============== TIMES OF INDIA ============''' + '\n')

                for item in data['articles']:

                    print(str(i) + '. ' + item['title'] + '\n')
                    print(item['description'] + '\n')
                    speak(str(i) + '. ' + item['title'] + '\n')
                    i += 1
            except Exception as e:

                print(str(e))

        elif "don't listen" in query or "stop listening" in query:
            speak("for how much time you want to stop jarvis from listening commands")
            a = int(takeCommand())
            time.sleep(a)
            print(a)

        elif "weather" in query:

            # Google Open weather website
            # to get API of Open weather
            api_key = os.getenv('API_KEY_WEATHER')
            base_url = "http://api.openweathermap.org/data/2.5/weather&units=metric"
            speak(" City name ")
            print("City name : ")
            city_name = takeCommand()
            print(city_name)
            complete_url = f"{base_url}?q={city_name}&appid={api_key}"
            print(complete_url)
            response = requests.get(complete_url)
            x = response.json()

            if x["cod"] != "404":
                y = x["main"]
                current_temperature = y["temp"]
                current_pressure = y["pressure"]
                current_humidiy = y["humidity"]
                z = x["weather"]
                weather_description = z[0]["description"]
                weather = " Temperature (in kelvin unit) = " + str(current_temperature) + "\n atmospheric pressure (in hPa unit) =" + str(
                    current_pressure) + "\n humidity (in percentage) = " + str(current_humidiy) + "\n description = " + str(weather_description)
                print(weather)
                speak(weather)

            else:
                speak(" City Not Found ")

        elif "Good Morning" in query:
            speak("A warm" + query)
            speak("How are you Mister")
            speak(assname)

        elif "how are you" in query:
            speak("I'm fine, glad you me that")
        elif 'Play a song ' or 'song' in query :
            #api_key = os.getenv('GET_SONGS_API')
            speak("What song do you want me to play?")
            print("What song do you want me to play?")
            song_name = takeCommand()
            print('Playing',song_name, sep=' : ')
            sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials(client_id="",
                                                           client_secret=""))
            sp_res = sp.search(q=song_name, limit = 1)
            sp_res_link = sp_res['tracks']['items'][0]['external_urls']['spotify']
            webbrowser.open_new_tab(sp_res_link)                                  
        # elif "" in query:
            # Command go here
            # For adding more commands
