
//preloader
window.onload = function () {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
  
    // Ensure the preloader displays for 3 seconds before hiding
    setTimeout(() => {
        preloader.style.display = 'none';
        content.style.display = 'block';
    }, 3000); // 3000 milliseconds = 3 seconds
  };

  
  

//onscrollanimation-left
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        // console.log(entry)
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
            console.log("add show class")
        }
        else
        {
          console.log("error")
            entry.target.classList.remove('show');
        }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.osa_left');
  
  hiddenElements.forEach((el)=>observer.observe(el));
  

  

//onscrollanimation-// Create an IntersectionObserver for right animations
const observer_right = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show_right'); // Class for right animation
        console.log("Class 'show_right' added");
      } else {
        entry.target.classList.remove('show_right');
        console.log("Class 'show_right' removed");
      }
    });
  });
  
  // Select elements with the class for right animations
  const hiddenElements_right = document.querySelectorAll('.osa_right');
  
  // Observe each hidden element
  hiddenElements_right.forEach((el) => observer_right.observe(el));
  
  