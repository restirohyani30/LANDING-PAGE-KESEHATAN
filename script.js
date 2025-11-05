document.addEventListener('DOMContentLoaded', function() {
    
    // =======================================================
    // 1. ⚙️ Fungsionalitas Global (Header & Scrolling)
    // =======================================================
    
    // --- Menu Responsif & Ikon Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('#nav-menu ul li a');

    if (menuToggle && navMenu) {
        const toggleIcon = menuToggle.querySelector('i');

        menuToggle.addEventListener('click', () => {
            toggleIcon.classList.toggle('fa-bars');
            toggleIcon.classList.toggle('fa-times'); 
            navMenu.classList.toggle('active');
        });

        // Menutup menu saat link diklik (terutama di mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    toggleIcon.classList.remove('fa-times');
                    toggleIcon.classList.add('fa-bars');
                }
            });
        });
    }

    // --- Smooth Scrolling (Tautan internal #) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            if (targetId && targetId.length > 1) { 
                e.preventDefault();

                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // =======================================================
    // 2. 🏠 Fungsionalitas Halaman Utama (Index.html)
    // =======================================================
    
    // --- Animasi Judul Hero Sederhana (Fade In) ---
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('animate-fade-in'); 
    }

    // --- Fungsi Tombol Cek Kesehatan (Quiz) di Hero Section (Dgn Penundaan) ---
    const quizButton = document.getElementById('quiz-btn'); 

    if (quizButton) { 
        quizButton.addEventListener('click', (event) => {
            event.preventDefault(); 
            quizButton.textContent = "Memuat Quiz Cek Kesehatan...";
            quizButton.disabled = true;

            setTimeout(() => {
                const targetUrl = quizButton.getAttribute('href');
                window.location.href = targetUrl; 
            }, 1500); 
        });
    }

    // =======================================================
    // 3. 📝 Fungsionalitas Form Sub-Halaman
    // =======================================================
    
    // --- Form Cek Kesehatan (cek_kesehatan.html) (Dgn Penundaan) ---
    const healthQuizForm = document.getElementById('health-quiz');
    
    if (healthQuizForm) {
        healthQuizForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            
            const submitButton = healthQuizForm.querySelector('.quiz-btn');
            if (submitButton) {
                submitButton.textContent = "Menghitung Hasil...";
                submitButton.disabled = true;
            }
            
            setTimeout(() => {
                window.location.href = "hasil_cek_kesehatan.html"; 
            }, 2000); 
        });
    }
    
    // 🟢 --- Form Konsultasi Cepat (konsultasi-cepat.html) (Instan) ---
    const telemedicineForm = document.getElementById('telemedicine-form');
    
    if (telemedicineForm) {
        telemedicineForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            event.stopImmediatePropagation(); 
            
            window.location.href = "konfirmasi-konsultasi.html"; 
        });
    }

    // 💊 --- Form Telefarmasi (telefarmasi.html) (Instan) ---
    const pharmacyForm = document.getElementById('pharmacy-form'); 

    if (pharmacyForm) {
        const fileNameDisplay = document.getElementById('file-name-display');
        const fileInput = document.getElementById('file_resep');

        // Menampilkan nama file yang diunggah
        if (fileInput && fileNameDisplay) {
            fileInput.addEventListener('change', function() {
                const defaultText = 'Klik untuk mengunggah gambar resep (JPG/PNG)'; 
                
                if (fileInput.files.length > 0) {
                    fileNameDisplay.textContent = fileInput.files[0].name;
                } else {
                    fileNameDisplay.textContent = defaultText; 
                }
            });
        }
        
        pharmacyForm.addEventListener('submit', (event) => {
            // Menghentikan submit form standar
            event.preventDefault(); 
            event.stopImmediatePropagation(); 
            
            const submitButton = pharmacyForm.querySelector('.submit-btn');
            if (submitButton) {
                // Memberikan umpan balik visual singkat
                submitButton.textContent = "Pesanan Diterima...";
                submitButton.disabled = true;
            }

            // PENGALIHAN INSTAN
            window.location.href = "konfirmasi_telefarmasi.html"; 
        });
    }
});