// تاريخ البداية (تاريخ لقائكم الأول)
const startDate = new Date("2021-04-04T00:00:00");

function updateCounter() {
    const now = new Date();
    let diff = now - startDate;

    // حساب السنوات والأشهر والأيام والساعات
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    
    // تعديل الشهور والأيام إذا كانت النتيجة سالبة
    if (days < 0) {
        months--;
        let previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    const hours = now.getHours();

    // عرض النتائج في الـ HTML
    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
}

// تحديث العداد كل ثانية
setInterval(updateCounter, 1000);
updateCounter();

// التحكم في قلب الكروت التفاعلية
function flipCard(card) {
    card.classList.toggle('flipped');
}

// التحكم في مشغل الموسيقى
function togglePlay() {
    const audio = document.getElementById("myAudio");
    const btn = document.getElementById("playBtn");
    const status = document.getElementById("trackStatus");

    if (audio.paused) {
        audio.play();
        btn.innerText = "⏸️ إيقاف";
        status.innerText = "يعرض الآن.. ❤️";
    } else {
        audio.pause();
        btn.innerText = "▶️ تشغيل";
        status.innerText = "متوقف الآن";
    }
}

// توليد تأثير قلوب متحركة في الخلفية تلقائياً
function createHeart() {
    const container = document.getElementById('heartsContainer');
    if(!container) return;
    
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    heart.style.fontSize = Math.random() * 15 + 15 + 'px';
    
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}
setInterval(createHeart, 4000);
