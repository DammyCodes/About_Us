const imageDiv = document.querySelector('.image-div')
const history = document.getElementById('history')
const vision = document.getElementById('vision')
const goals = document.getElementById('goals')


const aboutUsPara = document.querySelector('.about-us-para')
history.addEventListener('click', renderHistoryParagraph)
vision.addEventListener('click', renderVisionParagraph)
goals.addEventListener('click', renderGoalsParagraph)

function renderHistoryParagraph() {
    let historyParagraph = ``

    historyParagraph += `
    
        <p class="injected-para">
            Many skills and abilities separate effective strategic leaders like Howard Schultz from poor strategic leaders. One of them is the ability to inspire employees to work hard to improve their organization’s performance. Effective strategic leaders are able to convince employees to embrace lofty ambitions and move the organization forward. In contrast, poor strategic leaders struggle to rally their people and channel their collective energy in a positive, focused direction.
        </p>
    `
aboutUsPara.innerHTML = historyParagraph
imageDiv.style.backgroundImage = `url("images/street.jpg")`
}

function renderVisionParagraph() {
    let visionParagraph = ``

    visionParagraph += `
        <p class="injected-para">
            An organization’s vision describes what the organization hopes to become in the future. Well-constructed visions clearly articulate an organization’s aspirations. Our mission is to organize the world’s information and make it universally accessible and useful. We expand on its vision by listing “Ten things we know,” including “Focus on the user and all else will follow,” “It’s best to do one thing really, really well,” and  “Fast is better than slow”.
        </p>
    `
    aboutUsPara.innerHTML = visionParagraph
    imageDiv.style.backgroundImage = `url("images/hill.jpg")`
}

function renderGoalsParagraph() {
    let goalsParagraph = ``

    goalsParagraph += `
        <p class="injected-para">
        To work toward achieving our overall aspirations, we need to create goals—narrower aims that should provide clear and tangible guidance to employees as they perform their work on a daily basis. The most effective goals are those that are Specific, Measurable, Achievable, Realistic, and Time-bound.
        WestJet committed to growing responsibly and ensuring that it is an environmentally sustainable airline, and supports the IATA goal of carbon neutral growth in its industry beyond 2020. WestJet already operates one of the most modern and fuel-efficient fleets in North America.
        </p>
    `
    aboutUsPara.innerHTML = goalsParagraph

    imageDiv.style.backgroundImage = `url("images/success.webp")`
}