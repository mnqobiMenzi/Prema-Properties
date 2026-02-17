document.addEventListener("DOMContentLoaded", function() {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    
    if (footerPlaceholder) {
        fetch("footer.html")
            .then(response => {
                if (!response.ok) throw new Error("Footer file not found");
                return response.text();
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(err => {
                console.warn("Footer load failed. Error:", err);
                // Fallback text so you know it's trying to work
                footerPlaceholder.innerHTML = "<p style='text-align:center; padding:20px;'>Footer Loading...</p>";
            });
    }
});

document.querySelectorAll('.faq-question').forEach(button => {
      button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
      });
    });
    
const toggleBtn = document.getElementById('mobile-toggle');
const navMenu = document.querySelector('nav'); // Targets your <nav> tag

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevents background scrolling when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});