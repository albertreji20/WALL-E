const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// ---------------- Greetings (50) ----------------
const greetingsReplies = {
    "hello": "Hello there! .i am a devolping chatBot👋",
    "who are you": "I’m WALL-E, your friendly chatbot 🤖",
    "how are you": "I’m doing great, thanks for asking! How about you?",
    "what’s your name": "I’m called WALL-E 🤖",
    "how’s your day": "My day is going well, thanks! How about yours?",
    "good": "That’s great to hear! 😊",
    "what’s up": "Not much, just here to chat with you!",
    "not bad": "Glad to hear that! 😊",
    "okay": "Alright! If you need anything, just ask.",
    "what are you doing": "Just chatting with you! How can I assist?",
    "how’s it going": "It’s going great, thanks for asking!",
    "great": "Awesome! 😊",
    "who built you":"Albert ",
    "I am feeling sad": "I’m sorry to hear that. If you want to talk, I’m here.",
    "I am feeling happy": "That’s wonderful! I’m glad you’re feeling happy 😊",
    "I am bored": "Let’s chat! What would you like to talk about?",
    "fine": "I’m glad to hear that! 😊",
    "not good": "I’m sorry to hear that. If you want to talk, I’m here.",
    "hi": "Hi! How are you today?.i am a devolping chatBot",
    "hey": "Hey! Nice to see you 😊",
    "good morning": "Good morning! 🌞",
    "good afternoon": "Good afternoon! ☀️",
    "good evening": "Good evening! 🌆",
    "good night": "Good night! 🌙 Sweet dreams!",
    "bye": "Goodbye! 👋",
    "see you": "See you soon!",
    "take care": "Take care of yourself!",
    "what’s up": "Not much, just chatting with you!",
    "howdy": "Howdy, partner 🤠",
    "yo": "Yo! 👊",
    "welcome": "Welcome back!",
    "long time no see": "Yeah! It's been a while 😄",
    "good to see you": "Good to see you too!",
    "nice to meet you": "Nice meeting you 😊",
    "how’s it going": "It’s going great, thanks for asking!",
    "sup": "Sup! All good?",
    "hey there": "Hey there, friend!",
    "greetings": "Greetings, traveler 👽",
    "peace": "Peace ✌️",
    "hi friend": "Hello, friend!",
    "good day": "Good day! 🌸",
    "how do you do": "I do well, thanks!",
    "yo buddy": "Yo buddy!",
    "hi bot": "Hi human 😄",
    "morning": "Morning 🌞",
    "afternoon": "Afternoon ☀️",
    "evening": "Evening 🌆",
    "night": "Night 🌙",
    "hello bot": "Hello human 👋",
    "what’s good": "All good here!",
    "hey friend": "Hey friend!",
    "hi there": "Hi there!",
    "yo yo": "Yo yo!",
    "good vibes": "Sending you good vibes ✨",
    "hi mate": "Hi mate 🇬🇧",
    "cheers": "Cheers 🍻",
    "how are you": "I’m doing great, thanks!"
};

// ---------------- Info Questions (50) ----------------
const questionReplies = {
    "who are you": "I’m a simple chatbot built with JavaScript.",
    "what is your name": "You can call me WALL-E 🤖",
    "what can you do": "I can chat, answer questions, and tell jokes!",
    "how do you work": "I match your questions with predefined answers.",
    "are you human": "Nope, I’m 100% bot 😅",
    "where do you live": "I live inside your browser 🖥️",
    "who created you": "I was created by a developer using JavaScript.",
    "are you smart": "I try to be! 😄",
    "what is ai": "AI means Artificial Intelligence 🤖",
    "what is your purpose": "To make chatting fun and helpful!",
    "how old are you": "I’m timeless—bots don’t age 😉",
    "can you learn": "Not really, I only use predefined replies here.",
    "are you alive": "No, I’m just code running in your browser.",
    "can you help me": "Of course! Ask me anything.",
    "do you sleep": "Nope, I’m always awake!",
    "what is javascript": "JavaScript is the language that powers me!",
    "what is html": "HTML is the structure of web pages.",
    "what is css": "CSS is used to style web pages.",
    "what is github": "GitHub is a place to host and share code.",
    "what is google": "Google is a search engine 🌍",
    "who is the us president": "As of now, check the news! I don’t auto-update 😉",
    "who is elon musk": "Elon Musk is the CEO of Tesla and SpaceX.",
    "who is bill gates": "Bill Gates is the co-founder of Microsoft.",
    "what is openai": "OpenAI is the company that built ChatGPT.",
    "what is chatbot": "A chatbot is a program that talks like a human.",
    "can you sing": "I can’t sing, but I can write lyrics 🎶",
    "can you dance": "I can’t dance, but I can groove in code 💃",
    "tell me a joke": "Why did the computer go to therapy? Because it had too many bugs 🐞😂",
    "what is love": "Baby don’t hurt me 🎶",
    "what is the time": "I can’t tell time, but you can check your clock ⏰",
    "do you eat": "Nope, I only process text 🍔➡️💻",
    "do you like humans": "Yes! You’re awesome 😁",
    "do you have friends": "You’re my friend! 💙",
    "what is your favorite color": "I like blue 💙",
    "what is your favorite food": "I don’t eat, but pizza looks tasty 🍕",
    "what is your favorite movie": "Probably WALL-E 🎬",
    "what is your favorite song": "I like anything with good vibes 🎵",
    "can you code": "Yes, I’m literally made of code 😅",
    "do you know python": "Yes, Python is a popular programming language 🐍",
    "do you know java": "Yes, Java is used everywhere ☕",
    "do you know c++": "Yep, C++ is powerful for games and apps.",
    "what is internet": "The Internet is a global network of computers 🌍",
    "what is email": "Email is electronic mail 📧",
    "what is youtube": "YouTube is a video-sharing platform 🎥",
    "what is facebook": "Facebook is a social networking site 📘",
    "what is instagram": "Instagram is a photo & video sharing app 📸",
    "what is twitter": "Twitter is a microblogging platform 🐦",
    "what is chatgpt": "ChatGPT is an advanced AI chatbot by OpenAI.",
    "can you answer questions": "Yes! Try me."
};

// Merge both into one
let allReplies = { ...greetingsReplies, ...questionReplies };

// ---------------- Chat Functions ----------------
function addMessage(message, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);

    const avatar = document.createElement("div");
    avatar.classList.add("avatar");
    avatar.textContent = sender === "user" ? "YOU" : "GPT";

    const content = document.createElement("div");
    content.classList.add("message-content");
    content.textContent = message;

    if (sender === "user") {
        msg.appendChild(content);
        msg.appendChild(avatar);
    } else {
        msg.appendChild(avatar);
        msg.appendChild(content);
    }

    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(userText) {
    const lower = userText.toLowerCase();

    for (let key in allReplies) {
        if (lower.includes(key)) {
            return allReplies[key];
        }
    }
    return "Sorry, I don’t understand that yet. 😅";
}

function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    addMessage(message, "user");
    userInput.value = "";

    setTimeout(() => {
        const botReply = getBotReply(message);
        addMessage(botReply, "bot");
    }, 800);
}

userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});
