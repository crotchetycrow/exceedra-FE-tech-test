# Exceedra UI tech test

## A JavaScript frontend with CSS and HTML

## Summary

The following website was designed in line with tech test requirements.

The project utilises an [mock data API](https://github.com/crotchetycrow/mock-data-api) as well as a [restcountires API](https://restcountries.com/). I considered using two other APIs (star wars and pokemon), but decided against it due to time constraints.

## Development Summary

There are some notable changes I will make to this project, namely there is a lot of whitespace on the site that could be used differently (images or other containers).

The footer has a lot of spacing between it, otherwise I'm satisfied with how it looks given how other features took over my time.

I'm particularly happy with my registration/log in feature the dynamic switching between sign up and sign in was quite a challenge to get right. In the end the posting functionality broke as well as console logging the json data. I'm not sure where that broke considering I did change any code at the time.

On that note, when it was working, I found it difficult to action my form to the welcome.html page whilst simultaneously console logging the data.

I'm disappointed I was unable to resolve the latest bug with displaying the data of my API as I worked hard getting the data to display the way I wanted to. Given another day or two I'm confident I'd have everything the way I want it.

I learnt a lot during this process and I'm pleased with what I've learnt despite being so confused for half the week with mysterious bugs.

### Bugs

I encountered many bugs whilst trying to get my dynamic registration page/sign box to cooperate - those were all resolved and that feature works as intended.

The latest bug on my main branch which has unfortunately prevented my API from displaying data has as yet been unresolved. I'm receiving

`TypeError: Cannot read properties of undefined (reading '0')`
`at appendData (welcome.js:79:189)`
`at welcome.js:93:3`

This implies that the code is being loaded before the DOM however my solutions haven't proved fruitful (document.addEventlistener('DOMContentLoaded') & moving the script tag to the bottom of the HTML). However, when I removed the nested for loop `for (var k = 0; k < data[i].preferences.length; i++)` it does display something and doesn't seem to be broken but this was working before I git committed, so I'm unsure what's gone wrong.

I think my appendData function has stopped working in some shape or form I haven't changed any code...

This project has been a series of things breaking for no apparent reason - most functionality was working before I turned on my laptop this morning.

## To Use

### `npm install`

This will install libraries used in this project:

[Postcss](https://postcss.org/) for minification of public css file, CSS variable functionality across browsers etc...

## Tech Stack

- Javascript
- HTML
- CSS
