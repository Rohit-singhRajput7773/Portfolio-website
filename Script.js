  // Mobile menu toggle
  const toggle = document.getElementById('navToggle');
    const menu   = document.getElementById('mobileMenu');
    const icon   = toggle.querySelector('i');

    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      icon.className = menu.classList.contains('open')
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
    });

    function closeMenu() {
      menu.classList.remove('open');
      icon.className = 'fa-solid fa-bars';
    }

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        closeMenu();
      }
    });

    // Highlight active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a, .mobile-menu a');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--cyan)' : '';
      });
    });

    // Form submit handler
    function handleSubmit(e) {
      e.preventDefault();
      const btn = e.target.querySelector('.btn-send');
      btn.textContent = '✅ Message Sent!';
      btn.style.background = '#00c77a';
      setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-paper-plane" style="margin-right:8px"></i>Send Message';
        btn.style.background = '';
        e.target.reset();
      }, 3000);
    }



    