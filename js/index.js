const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav section
let links = document.querySelectorAll('a');
console.log(links);

let linkOne = links[0];
linkOne.textContent = "Services";
let linkTwo = links[1];
linkTwo.textContent = "Product";
let linkThree = links[2];
linkThree.textContent = "Vision";
let linkFour = links[3];
linkFour.textContent = "Features";
let linkFive = links[4];
linkFive.textContent = "About";
let linkSix = links[5];
linkSix.textContent = "Contact";

//turn links text to green
links.forEach(element => {
  element.style.color = "green";
})

// add two items to nav system
const newItemOne = document.createElement('a');
newItemOne.textContent = "New Item One";
const navigation = document.querySelector('nav');
navigation.append(newItemOne);

const newItemTwo = document.createElement('a');
newItemTwo.textContent = "New Item Two";
navigation.prepend(newItemTwo);

//cta section
let headline = document.querySelector('.cta-text h1');
headline.textContent = "DOM Is Awesome";

let button = document.querySelector('.cta button');
button.textContent = "Get Started";

let mainImage = document.getElementById("cta-img");
mainImage.setAttribute('src', siteContent["cta"]["img-src"])

//top-content
let topContentHeadlines = document.querySelectorAll('.text-content, h4');

let featuresHeadline = topContentHeadlines[1];
featuresHeadline.textContent = "Features";

let topContentParagraphs = document.querySelectorAll('.text-content, p');

let featuresParagraph = topContentParagraphs[1];
featuresParagraph.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let aboutHeadline = topContentHeadlines[3];
aboutHeadline.textContent = "About";

let aboutParagraph = topContentParagraphs[3];
aboutParagraph.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//middle image
let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//bottom-content
let servicesHeadline = topContentHeadlines[5];
servicesHeadline.textContent = "Services";

let servicesParagraph = topContentParagraphs[5];
servicesParagraph.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let productHeadline = topContentHeadlines[7];
productHeadline.textContent = "Product";

let productParagraph = topContentParagraphs[7];
productParagraph.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let visionHeadline = topContentHeadlines[9];
visionHeadline.textContent = "Vision";

let visionParagraph = topContentParagraphs[9];
visionParagraph.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//contact section
let contactHeadline = document.querySelector('.contact h4');
contactHeadline.textContent = "Contact";

let contactParagraphs = document.querySelectorAll('.contact p');

let contactLineOne = contactParagraphs[0];
contactLineOne.textContent = "123 Way 456 Street Somewhere, USA";
let contactLineTwo = contactParagraphs[1];
contactLineTwo.textContent = "1 (888) 888-8888";
let contactLineThree = contactParagraphs[2];
contactLineThree.textContent = "sales@greatidea.io";

//footer
let footer = document.querySelector('footer');
footer.textContent = "Copyright Great Idea! 2018";

//stretch goals - updating styles throughout document
headline.style.color = "purple";

button.style.backgroundColor = "black";
button.style.color = "white";
button.style.borderRadius = "20%";

