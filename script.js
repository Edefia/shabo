// TypeScript
 var typing = new Typed(".text", {
    strings: ["artists.", "Drummers.", "Guitarists.", "Digital Products.", "Lessons.", "Bassists.", "Keyboard Players."],
    typeSpeed: 150,
    backSpeed: 110,
    loop: true
  });
  
  // GSAP
  gsap.registerPlugin(ScrollTrigger);
  const introsplitTypes = document.querySelectorAll(".left-part h1");
  introsplitTypes.forEach((char, i) => {
    const i_text = new SplitType(char);
    gsap.to(i_text.chars, {
      y: 0,
      stagger: 0.08, // text splitting transition
      duration: 0.3 // full text duration
    });
  });


 

  const ratings = document.querySelectorAll('.rating');

  ratings.forEach((rating) => {
      const stars = rating.querySelectorAll('.star');
      let clicked = false;
      let selectedIndex = -1;
  
      stars.forEach((star, index) => {
          star.addEventListener('click', () => {
              clicked = true;
              selectedIndex = index;
              stars.forEach((s, i) => {
                  if (i <= selectedIndex) {
                      s.classList.add('active');
                  } else {
                      s.classList.remove('active');
                  }
              });
          });
  
          star.addEventListener('mouseover', () => {
              if (!clicked) {
                  stars.forEach((s, i) => {
                      if (i <= index) {
                          s.classList.add('active');
                      } else {
                          s.classList.remove('active');
                      }
                  });
              }
          });
  
          star.addEventListener('mouseout', () => {
              if (!clicked) {
                  stars.forEach((s) => {
                      s.classList.remove('active');
                  });
              }
          });
      });
  });
