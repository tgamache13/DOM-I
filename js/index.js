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
linkOne.textContent = siteContent.nav["nav-item-1"];
let linkTwo = links[1];
linkTwo.textContent = siteContent.nav["nav-item-2"];
let linkThree = links[2];
linkThree.textContent = siteContent.nav["nav-item-3"];
let linkFour = links[3];
linkFour.textContent = siteContent.nav["nav-item-4"];
let linkFive = links[4];
linkFive.textContent =siteContent.nav["nav-item-5"];
let linkSix = links[5];
linkSix.textContent = siteContent.nav["nav-item-6"];

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
headline.textContent = siteContent.cta["h1"];

let button = document.querySelector('.cta button');
button.textContent = siteContent.cta["button"];

let mainImage = document.getElementById("cta-img");
mainImage.setAttribute('src', siteContent["cta"]["img-src"])

//top-content
let topContentHeadlines = document.querySelectorAll('.text-content, h4');

let featuresHeadline = topContentHeadlines[1];
featuresHeadline.textContent = siteContent["main-content"]["features-h4"];

let topContentParagraphs = document.querySelectorAll('.text-content, p');

let featuresParagraph = topContentParagraphs[1];
featuresParagraph.textContent =siteContent["main-content"]["features-content"];

let aboutHeadline = topContentHeadlines[3];
aboutHeadline.textContent = siteContent["main-content"]["about-h4"];

let aboutParagraph = topContentParagraphs[3];
aboutParagraph.textContent = siteContent["main-content"]["about-content"];

//middle image
let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//bottom-content
let servicesHeadline = topContentHeadlines[5];
servicesHeadline.textContent = siteContent["main-content"]["services-h4"];

let servicesParagraph = topContentParagraphs[5];
servicesParagraph.textContent = siteContent["main-content"]["services-content"];

let productHeadline = topContentHeadlines[7];
productHeadline.textContent = siteContent["main-content"]["product-h4"];

let productParagraph = topContentParagraphs[7];
productParagraph.textContent = siteContent["main-content"]["product-content"];

let visionHeadline = topContentHeadlines[9];
visionHeadline.textContent = siteContent["main-content"]["vision-h4"];

let visionParagraph = topContentParagraphs[9];
visionParagraph.textContent = siteContent["main-content"]["vision-content"];

//contact section
let contactHeadline = document.querySelector('.contact h4');
contactHeadline.textContent = siteContent["contact"]["contact-h4"];

let contactParagraphs = document.querySelectorAll('.contact p');

let contactLineOne = contactParagraphs[0];
contactLineOne.textContent = siteContent["contact"]["address"];
let contactLineTwo = contactParagraphs[1];
contactLineTwo.textContent = siteContent["contact"]["phone"];
let contactLineThree = contactParagraphs[2];
contactLineThree.textContent = siteContent["contact"]["email"];

//footer
let footer = document.querySelector('footer');
footer.textContent = siteContent["footer"]["copyright"];

//stretch goals - updating styles throughout document
headline.style.color = "purple";

button.style.backgroundColor = "black";
button.style.color = "white";
button.style.borderRadius = "20%";

//add button to update content
const newList = document.createElement('ul');
newList.textContent = "New List for Stretch Goal";
const body = document.querySelector('body');
body.append(newList);
const newListItemOne = document.createElement('li');
newListItemOne.textContent = "Item on list";
newList.append(newListItemOne);
const newButton = document.createElement('button');
newButton.textContent = "Update List";
body.append(newButton);

newButton.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = "New list item";
  newList.append(li);
})


