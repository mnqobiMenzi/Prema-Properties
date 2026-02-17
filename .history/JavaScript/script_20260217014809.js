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

const burger = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
    });
});