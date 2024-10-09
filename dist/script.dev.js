"use strict";

// TypeScript
var typing = new Typed(".text", {
  strings: ["artists.", "Drummers.", "Guitarists.", "Digital Products.", "Lessons.", "Bassists.", "Keyboard Players."],
  typeSpeed: 150,
  backSpeed: 110,
  loop: true
}); // GSAP

gsap.registerPlugin(ScrollTrigger);
var introsplitTypes = document.querySelectorAll(".left-part h1");
introsplitTypes.forEach(function (_char, i) {
  var i_text = new SplitType(_char);
  gsap.to(i_text.chars, {
    y: 0,
    stagger: 0.08,
    // text splitting transition
    duration: 0.3 // full text duration

  });
});