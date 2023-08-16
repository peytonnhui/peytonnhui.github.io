const questions = [
    "Most likely to become a successful entrepreneur?",
    "Most likely to become a professional athlete?",
    "Most likely to be the class clown?",
    "Most likely to become a bestselling author?",
    "Most likely to start their own charity?",
    "Most likely to become a world-renowned musician?",
    "Most likely to invent something revolutionary?",
    "Most likely to become a popular YouTuber?",
    "Most likely to organize the best class reunions?",
    "Most likely to become a respected scientist?",
    "Most likely to become a fashion icon?",
    "Most likely to always have the latest tech gadgets?",
    "Most likely to become a motivational speaker?",
    "Most likely to win an Oscar or Grammy?",
    "Most likely to make everyone laugh?",
    "Most likely to organize volunteer events?",
    "Most likely to keep in touch with everyone after graduation?",
    "Most likely to have a high school sweetheart?",
    "Most likely to write the best love poems?",
    "Most likely to plan the perfect surprise date?",
    "Most likely to have the longest crush?",
    "Most likely to give the cutest compliments?",
    "Most likely to have the most memorable proposal?",
    "Most likely to become a relationship guru?",
    "Most likely to have a fairytale love story?",
    "Most likely to create a scrapbook of their relationships?",
    "Most likely to be the ultimate wingman/wingwoman?",
    "Most likely to have a celebrity crush?",
    "Most likely to give the best relationship advice?",
    "Most likely to have a secret admirer?",
    "Most likely to be caught daydreaming about their crush?",
    "Most likely to plan a picture-perfect wedding on Pinterest?",
    "Most likely to write and perform a heartfelt song for their crush?",
    "Most likely to have the most adorable pet names for their partner?",
    "Most likely to have the most romantic first kiss?",
    "Most likely to organize memorable anniversary celebrations?",
    "Most likely to keep a diary filled with love stories?",
    "Most likely to become a famous actor or actress?",
    "Most likely to win a hot dog eating contest?",
    "Most likely to travel to every continent in the world?",
    "Most likely to accidentally start a dance party in a public place?",
    "Most likely to spend a whole day binge-watching their favorite TV show?",
    "Most likely to become a world-class chef?",
    "Most likely to survive a zombie apocalypse?",
    "Most likely to become a best-selling author?",
    "Most likely to adopt a dozen pets?",
    "Most likely to invent a new technology that changes the world?",
    "Most likely to win a Nobel Prize?",
    "Most likely to accidentally dye their hair a crazy color?",
    "Most likely to always be the life of the party?",
    "Most likely to become a professional athlete?",
    "Most likely to become a successful entrepreneur?",
    "Most likely to win a reality TV show competition?",
    "Most likely to have a secret talent that surprises everyone?",
    "Most likely to organize epic theme parties?",
    "Most likely to still be playing video games at 60?",
    "Most likely to become a world traveler and never settle down?",
    "Most likely to win a karaoke contest?",
    "Most likely to become a social media influencer?",
    "Most likely to become a famous stand-up comedian?",
    "Most likely to adopt a unique and unconventional fashion style?",
    "Most likely to live in a tiny house and love it?",
    "Most likely to become a professional surfer?",
    "Most likely to start a successful charity organization?",
    "Most likely to binge-read an entire book series in one weekend?",
    "Most likely to win an eating competition for their favorite food?",
    "Most likely to become a motivational speaker?",
    "Most likely to always have the best travel stories?",
    "Most likely to invent a new dance move that becomes a viral sensation?",
    "Most likely to become a famous painter or sculptor?",
    "Most likely to become a famous scientist or researcher?",
    "Most likely to have a surprise talent for playing a musical instrument?",
    "Most likely to become a world-renowned chef for their signature dish?",
    "Most likely to be caught laughing at their own jokes before they even finish telling them?",
    "Most likely to become a professional athlete in a lesser-known sport?",
    "Most likely to become a successful fashion designer?",
    "Most likely to win a game of trivia or quiz without breaking a sweat?",
    "Most likely to have their own reality TV show?",
    "Most likely to become a world-famous adventurer?",
    "Most likely to win a spelling bee competition?",
    "Most likely to start their own successful podcast?",
    "Most likely to have a career in a creative field like art, writing, or music?",
    "Most likely to spend a day at an amusement park riding every roller coaster?",
    "Most likely to win a dance-off at a party?",
    "Most likely to become a professional gamer?",
    "Most likely to befriend animals everywhere they go?",
    "Most likely to star in a blockbuster movie?",
    "Most likely to become a well-known travel blogger?",
    "Most likely to master every type of dance, from salsa to hip-hop?",
    "Most likely to discover a new planet and have it named after them?",
    "Most likely to organize the best surprise birthday party?",
    "Most likely to invent a new holiday that becomes widely celebrated?",
    "Most likely to become a famous scientist specializing in space exploration?",
    "Most likely to win a marathon or long-distance race?",
    "Most likely to write and perform a viral song about a random everyday object?",
    "Most likely to always be up-to-date with the latest fashion trends?",
    "Most likely to become a world-class magician?",
    "Most likely to start a blog or YouTube channel sharing relationship advice?",
    "Most likely to be the peacemaker in any group of friends?",
    "Most likely to call someone 'mom' or 'dad' accidentally?",
    "Most likely to fix the WiFi when it breaks?",
    "Most likely to teach you a new skill?",
    "Most likely to reply to your email within a minute?",
    "Most likely to get a good review from a customer?",
    "Most likely to calm down an upset client?",
    "Most likely to make you laugh?",
    "Most likely to be a role model for the group?",
    "Most likely to give a perfect interview?",
    "Most likely to help you bring out your best self?",
    "Most likely to immerse themselves completely in their job?",
    "Most likely to give you a compliment?",
    "Most likely to be the peacemaker?",
    "Most likely to help you solve an issue?",
    "Most likely to change the world?",
    "Most likely to be the boss one day?",
    "Most likely to not procrastinate?",
    "Most likely to be a team player at work?",
    "Most likely to make friends with everyone at work?",
    "Most likely to become the most powerful woman in the world?",
    "Most likely to remember it’s your birthday?",
    "Most likely to invent something useful?",
    "Most likely to write a best-selling book?",
    "Most likely to inspire you?",
    "Most likely to have your back?",
    "Most likely to nail a presentation?",
    "Most likely to invent a new office system?",
    "Most likely to close a hard sale?",
    "Most likely to be the most creative?",
    "Most likely to save the day?",
    "Most likely to plan the best events?",
    "Most likely to become a teacher in their subject?",
    "Most likely to help a stranger?",
    "Most likely to set up a support group?"
]

// const randomQuestion =questions[Math.floor(Math.random() *questions.length)];

// const btnQuestion = document.createElement('button');
// btnQuestion.id = 'question';
// btnQuestion.textContent = "question";
// btnQuestion.addEventListener('click',() => {
//     alert(`Your question is: ${randomQuestion}`)
// })

// document.body.appendChild(btnQuestion);

const question = document.createElement('button');
question.id = 'question';
question.textContent = "generate question";
question.addEventListener('click', () => {
    const randomQuestion =questions[Math.floor(Math.random() *questions.length)];
    console.log(randomQuestion);
    const visibleQuestion = document.getElementById("questionText");
    visibleQuestion.textContent = randomQuestion
})

document.body.appendChild(question);


// // Create the Start button element
// const question = document.createElement('button');
// question.id = 'question';
// question.className = 'entry question'; // Set the class name(s)

// Set the text content of the button
// question.textContent = 'question';

// // Add the button click event listener
// question.addEventListener('click', () => {
//     const inputValue = nickname.value; // Get the value from the input field
//     alert(`You submitted: ${inputValue}`);
//     window.location.href = "pageuno.html"
// });

// // Append the button to the document body
// document.body.appendChild(question);

