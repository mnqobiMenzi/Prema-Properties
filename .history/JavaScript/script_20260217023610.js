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
    
btn.addEventListener('click', () => {
  menu.classList.toggle('active');
  btn.classList.toggle('open');
  
  // Prevents the home page from scrolling behind the menu
  document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : 'auto';
});