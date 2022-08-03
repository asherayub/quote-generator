const quoteData = [{
        name: "Anne Frank",
        quote: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
        imageSrc: "/assets/images/anne frank.jpg"
    },
    {
        name: "Benjamin Franklin",
        quote: "I didn't fail the test. I just found 100 ways to do it wrong.",
        imageSrc: "/assets/images/Benjamin Franklin.jpg"
    },
    {
        name: "Eleanor Roosevelt",
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        imageSrc: "/assets/images/eleanor roosevelt.jpg"
    },
    {
        name: "Helen Keller",
        quote: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
        imageSrc: "/assets/images/helen keller.jpg"
    },
    {
        name: "James Cameron",
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        imageSrc: "/assets/images/james cameron.jpg"
    },
    {
        name: "John Lennon",
        quote: "Life is what happens when you're busy making other plans.",
        imageSrc: "/assets/images/john lennon.jpg"
    },
    {
        name: "Margaret Mead",
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        imageSrc: "/assets/images/margaret mead.jpg"
    },
    {
        name: "Nelson Mandela",
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        imageSrc: "/assets/images/nelsonMandela.jpg"
    },
    {
        name: "Oprah Winfrey",
        quote: "You know you are on the road to success if you would do your job and not be paid for it.",
        imageSrc: "/assets/images/oprah winfrey.jpg"
    },
    {
        name: "Steve Jobs",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        imageSrc: "/assets/images/steve jobs.jpg"
    },
    {
        name: "Walt Disney",
        quote: "The way to get started is to quit talking and begin doing.",
        imageSrc: "/assets/images/walt disney.jpg"
    },
    {
        name: "Mother Teresa",
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        imageSrc: "/assets/images/teresa.jpg"
    },
    {
        name: "John D. Rockefeller Jr.",
        quote: "The secret of success is to do the common thing uncommonly well.",
        imageSrc: "/assets/images/John D. Rockefeller Jr.jpg"
    },
]
const randomColors = ["lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue"]
const nameEl = document.querySelector(".name")
const quoteEl = document.querySelector(".quote")
const imageSelf = document.querySelector(".person-image")
const generateBtn = document.querySelector("button")


generateBtn.addEventListener("click", () => {
    // generate a random number to display random quotesData
    let randomSelect = Math.floor(Math.random() * 13)
    // background color
    document.body.style.backgroundColor = randomColors[randomSelect]
    // logo color
    document.querySelector(".logo h1").style.color = randomColors[randomSelect]
    // generate button color
    document.querySelector(".generate-quote i").style.color = randomColors[randomSelect]
    // image's border color
    document.querySelector(".person-image").style.borderColor = randomColors[randomSelect]

    // changing content
    nameEl.textContent = quoteData[randomSelect].name
    quoteEl.textContent = quoteData[randomSelect].quote
    imageSelf.setAttribute("src", quoteData[randomSelect].imageSrc)

})