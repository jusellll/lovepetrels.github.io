// Navigasi antara section
document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".nav-btn"); // Gunakan .nav-btn untuk tombol navigasi
    const sections = document.querySelectorAll(".section");
  
    navButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.dataset.target; // Ambil target section dari atribut data-target
  
        // Sembunyikan semua section
        sections.forEach((section) => {
          section.classList.add("hidden");
          section.classList.remove("active");
        });
  
        // Tampilkan section yang sesuai dengan target
        const targetSection = document.getElementById(target);
        if (targetSection) {
          targetSection.classList.remove("hidden");
          targetSection.classList.add("active");
        }
      });
    });
  });

  // JavaScript for random love quote
  function showRandomQuote() {
    const quotes = [
      "Our love is like a rollercoaster: thrilling, wild, and full of surprises!",
      "You're the reason I look forward to every sunrise and sunset.",
      "In a world full of trends, you’re my timeless favorite."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("random-quote").textContent = randomQuote;
  }

  function showLoveVibes() {
    const vibesContainer = document.getElementById("love-vibes-container");
    const quotes = [
      "Our love is like a rollercoaster: thrilling, wild, and full of surprises!",
      "You're the reason I look forward to every sunrise and sunset.",
      "In a world full of trends, you’re my timeless favorite."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("random-quote").textContent = randomQuote;

    // Show the hidden container
    vibesContainer.style.display = "block";
  }
  
  // Fitur Love Calculator
  function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    const result = document.getElementById("love-result");
  
    if (name1 && name2) {
        const lovePercent = Math.floor(Math.random() * 101);
        let reason;
    
        if (lovePercent >= 80) {
            reason = "Chemistry kalian tuh kayak WiFi full bar, nyambung terus tanpa lag!";
        } else if (lovePercent >= 50) {
            reason = "Kalian tuh kayak playlist yang enak, tapi ada satu lagu yang skipable.";
        } else if (lovePercent >= 20) {
            reason = "Kayaknya kalian butuh sinyal ekstra deh, biar nggak cuma saling lihat doang.";
        } else {
            reason = "Jujur nih, kalian kayak air sama minyak, tapi siapa tahu next update bisa nyatu!";
        }
    
        result.textContent = `${name1} ❤️ ${name2} = ${lovePercent}% cinta!\n${reason}`;
        result.classList.remove("hidden");
    } else {
        result.textContent = "Mohon masukkan kedua nama!";
        result.classList.remove("hidden");
    }    
  }
  
  // Fitur Quote Generator
  function generateQuote() {
    const quotes = [
        "Cinta itu kayak pelangi setelah hujan, hadir dengan warna-warna yang beda tapi tetap bikin damai.",
        "Hidup itu kayak doa dari agama mana pun, indah kalau dijalani dengan niat baik dan hati yang tulus.",
        "Kamu tahu? Senyuman itu ibadah kecil yang bisa bikin semesta ikut bahagia.",
        "Tuhan menciptakan kita beda-beda supaya dunia ini punya harmoni, kayak lagu favorit yang nggak pernah bosan didengar.",
        "Hidup itu nggak harus selalu lurus, kadang belok kayak jalur sholat ied, tapi ujungnya pasti indah kok.",
        "Ketika kamu mencintai dengan tulus, itu udah kayak amal yang pahalanya nggak habis-habis.",
        "Jangan lupa, setiap langkah kecilmu yang baik itu udah kayak satu ayat doa yang nggak pernah berhenti bergema.",
        "Cinta itu kayak makanan tradisional dari tiap budaya, beda-beda bentuknya tapi selalu bikin hangat di hati.",
        "Percayalah, Tuhan nggak pernah tidur—Dia cuma kasih kita waktu buat nulis cerita yang lebih seru.",
        "Kadang kamu cuma butuh percaya, kayak nyalain lilin di malam gelap. Cahaya kecil itu bisa mengubah segalanya."
    ];
  
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const result = document.getElementById("quote-result");
    result.textContent = randomQuote;
  }
  
  // Fitur Compliment Generator
  function generateCompliment() {
    const compliments = [
        "Kamu tuh definisi orang yang bikin Monday jadi berasa weekend, parah sih keren banget!",
        "Gimana sih caramu bikin orang nyaman kayak selimut di pagi yang dingin? Legend banget vibes-mu!",
        "Setiap kamu muncul, rasanya dunia kayak dapet update premium, langsung glow up!",
        "Kayaknya bintang aja minder deh kalo disandingin sama auramu yang bersinar banget hari ini.",
        "Jujur nih, kamu tuh kayak playlist favorit, bikin mood naik tanpa pernah bosen!",
        "Seriusan deh, caramu nyapa aja udah kayak notif cashback 90%, bikin happy maksimal!",
        "Kamu tuh kayak kopi pagi, selalu berhasil bikin hari lebih semangat dan spesial!",
        "Senyummu tuh kayak matahari jam golden hour, bikin semua jadi berasa cantik banget.",
        "Kalau hidup ini film, kamu tuh pemeran utama yang selalu bikin semua scene memorable!",
        "Kehadiranmu itu kayak WiFi kenceng, semua langsung terhubung dan auto bahagia!"
    ];
  
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    const result = document.getElementById("compliment-result");
    result.textContent = randomCompliment;
  }

  //fitur gallery
  function showCaption(image) {
    const hiddenText = image.nextElementSibling.nextElementSibling;
    if (hiddenText.style.display === "block") {
      hiddenText.style.display = "none";
    } else {
      hiddenText.style.display = "block";
    }
  }
  