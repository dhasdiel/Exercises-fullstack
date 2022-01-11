const removeHide = (e) => {
  e.classList.remove("hide");
};
const addHide = (e) => {
  e.classList.add("hide");
};

const shuffle = (l, dict) => {
  let i;
  for (i = 0; i < l.length; i++) {
    l[i].setAttribute(
      "href",
      dict["link" + (Math.floor(Math.random() * 6) + 1)]
    );

    l[i].setAttribute("class", "a" + (Math.floor(Math.random() * 3) + 1));
    console.log(l[i]);
  }
};
let urls = {
  link1: "https://he-il.facebook.com/",
  link2: "https://www.google.com/",
  link3: "https://www.amazon.com/",
  link4: "https://he-il.facebook.com/",
  link5: "https://www.google.com/",
  link6: "https://www.amazon.com/",
};
links = document.querySelectorAll(".pageHeaderMenuLink > a");
// links.forEach(x => {
//     x.setAttribute("href", urls[x.getAttribute("blabla")]);

// });

setInterval(() => shuffle(links, urls), 5000);
