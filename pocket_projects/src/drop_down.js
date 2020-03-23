
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(dogsArr) {
  const dogNames = Object.keys(dogsArr);
  const dogLinks = [];
  dogNames.forEach(name => {
    const aTag = document.createElement("a");
    aTag.innerHTML = name;
    aTag.href = dogsArr[name];
    const liTag = document.createElement("li");
    liTag.className = "dog-link";
    liTag.appendChild(aTag);
    dogLinks.push(liTag);
  });
  return dogLinks;
}

function attachDogLinks() {
  const dogLinks = dogLinkCreator(dogs);
  const dropdown = Array.from(document.getElementsByClassName("drop-down-dog-list"));
  
  dogLinks.forEach(dogLink => {
    dropdown[0].appendChild(dogLink);
  });

}

function handleEnter() {
  const dogLinks = Array.from(document.getElementsByClassName("dog-link"));
  dogLinks.forEach(dogLink => {
    dogLink.classList.remove("dog-view");
  });
}

function handleLeave() {
  const dogLinks = Array.from(document.getElementsByClassName("dog-link"));
  dogLinks.forEach(dogLink => {
    dogLink.classList.add("dog-view");
  });
}

attachDogLinks();

const dogNav = document.querySelector(".drop-down-dog-nav");
dogNav.addEventListener("mouseenter", handleEnter);
dogNav.addEventListener("mouseleave", handleLeave);
