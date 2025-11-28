document.addEventListener('DOMContentLoaded', function() {
  
  // 1. MODULEYYY 🤞
  
  const modalElement = document.getElementById("myModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDesc");
  
  const closeIcon = document.querySelector(".close-icon");
  const okButton = document.querySelector(".modal-ok-btn");


  /**
   * Opens the informational modal with dynamic content.
   * @param {string} title - The title for the modal header.
   * @param {string} desc - The detailed description for the modal body.
   */
  function openModal(title, desc) {
    modalTitle.innerText = title;
    modalDescription.innerText = desc;
    modalElement.style.display = "flex";
  }


  // Select all elements that should trigger the modal
  const triggerElements = document.querySelectorAll("button#readMoreBtn, .country__card");


  triggerElements.forEach(element => {
    element.addEventListener("click", (e) => {
       e.preventDefault();
       
       const titleText = element.getAttribute("data-title");
       const descText = element.getAttribute("data-desc");


       if(titleText && descText) {
         openModal(titleText, descText);
       }
    });
  });


  /**
   * KAKAYANIN.
   */
  function closeModal() { 
    modalElement.style.display = "none"; 
  }


  // Attach event listeners for closing the modal
  closeIcon.addEventListener("click", closeModal);
  okButton.addEventListener("click", closeModal);
  
  // Close the modal if the user clicks the overlay background
  window.addEventListener("click", (e) => { 
      if (e.target === modalElement) closeModal(); 
  });




  // 2. NAVBARETA 🤞
  
  // NAVBAR SCROLL EFFECT: Shrink navigation on scroll
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if(nav) nav.classList.toggle("nav--scrolled", window.scrollY > 20);
  });


  // MENU-DO
  const menuButton = document.querySelector(".menu-btn");
  const navLinksContainer = document.querySelector(".nav__links");
  const navLinks = document.querySelectorAll(".nav__links .link");


  if(menuButton && navLinksContainer){
    menuButton.addEventListener("click", () => {
      navLinksContainer.classList.toggle("show");
      menuButton.classList.toggle("open");
      
      // Toggle icon between menu and close
      menuButton.innerHTML = menuButton.classList.contains("open") 
        ? `<i class="ri-close-line"></i>` 
        : `<i class="ri-menu-line"></i>`;
    });
  }


  // PARA MAGING SMOOTH KA
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
        const sectionId = link.dataset.scroll;
        const targetSection = document.getElementById(sectionId);
        
        // HULING MENU-DO
        if(navLinksContainer) navLinksContainer.classList.remove("show");
        if(menuButton) {
            menuButton.classList.remove("open");
            menuButton.innerHTML = `<i class="ri-menu-line"></i>`;
        }
        
        // Set active link class
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");


        // Smooth scroll to the section
        if(targetSection) targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});