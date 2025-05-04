document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const changeGreetingButton = document.getElementById('changeGreeting');

    const greetings = [
        'Hello, Windsurf World!',
        'Welcome to MCP!',
        'Greetings from the Demo Branch!',
        'AI-Powered Coding Rocks!'
    ];

    changeGreetingButton.addEventListener('click', () => {
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        greetingElement.textContent = randomGreeting;
    });
});