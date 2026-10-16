
const weatherData = {
    default: {
        icon: "🌤️",
        title: "Welcome!",
        description: "Select a weather condition to see its description.",
        background: ""
    },
    sunny: {
        icon: "☀️",
        title: "Sunny Weather",
        description: "The sky is clear and bright. Enjoy the sunshine and stay hydrated.",
        background: "sunny"
    },
    cloudy: {
        icon: "☁️",
        title: "Cloudy Weather",
        description: "Clouds cover much of the sky. The weather may feel cool and pleasant.",
        background: "cloudy"
    },
    rainy: {
        icon: "🌧️",
        title: "Rainy Weather",
        description: "Rain is falling. Carry an umbrella and take care on wet roads.",
        background: "rainy"
    },
    stormy: {
        icon: "⛈️",
        title: "Stormy Weather",
        description: "Thunderstorms may bring lightning and strong winds. Stay somewhere safe.",
        background: "stormy"
    },
    snowy: {
        icon: "❄️",
        title: "Snowy Weather",
        description: "Snow is falling. Wear warm clothes and be careful on slippery surfaces.",
        background: "snowy"
    },
    windy: {
        icon: "💨",
        title: "Windy Weather",
        description: "Strong or noticeable winds are blowing. Secure loose objects outdoors.",
        background: "windy"
    },
    foggy: {
        icon: "🌫️",
        title: "Foggy Weather",
        description: "Fog reduces visibility. Travel slowly and carefully if you go outside.",
        background: "foggy"
    }
};

const weatherSelect = document.getElementById("weatherSelect");
const weatherIcon = document.getElementById("weatherIcon");
const weatherTitle = document.getElementById("weatherTitle");
const weatherDescription = document.getElementById("weatherDescription");
const weatherCard = document.getElementById("weatherCard");

weatherSelect.addEventListener("change", function () {
    const selectedWeather = weatherSelect.value;
    const weather = weatherData[selectedWeather];

    weatherIcon.textContent = weather.icon;
    weatherTitle.textContent = weather.title;
    weatherDescription.textContent = weather.description;

    weatherCard.className = "weather-container";

    if (weather.background) {
        weatherCard.classList.add(weather.background);
    }

    weatherIcon.style.animation = "none";
    void weatherIcon.offsetWidth;
    weatherIcon.style.animation = "appear 0.4s ease";
});
