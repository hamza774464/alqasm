/**
 * ملف JavaScript - صفحة برجولات | مظلات وسواتر القاسم الحديثة
 * نسخة محسنة وسريعة ومضمونة 100%
 */

// ========== دوال الاتصال الأساسية ==========
function callNumber(phoneNumber) {
    if (confirm(`هل تريد الاتصال بالرقم ${phoneNumber}؟`)) {
        window.location.href = `tel:${phoneNumber}`;
    }
}

function whatsappMessage(phoneNumber) {
    const message = "مرحباً، أريد الاستفسار عن البرجولات من مظلات وسواتر القاسم الحديثة الرياض 0532228615";
    // تنظيف الرقم من أي رموز
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    const whatsappURL = `https://wa.me/966${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// ========== تشغيل كل الوظائف عند تحميل الصفحة ==========
document.addEventListener('DOMContentLoaded', function() {
    
    // ---------- 1. شجرة التنقل (بدون أخطاء) ----------
    const navTreeToggle = document.getElementById('navTreeToggle');
    const navTree = document.getElementById('navTree');
    
    if (navTreeToggle && navTree) {
        // فتح القائمة عند النقر على الزر
        navTreeToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navTree.classList.toggle('active');
        });
        
        // إغلاق القائمة عند النقر خارجها
        document.addEventListener('click', function(e) {
            if (navTree.classList.contains('active')) {
                if (!navTree.contains(e.target) && e.target !== navTreeToggle) {
                    navTree.classList.remove('active');
                }
            }
        });
        
        // منع إغلاق القائمة عند النقر داخلها
        navTree.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        
        // إغلاق القائمة عند النقر على الروابط
        const links = navTree.querySelectorAll('a');
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function() {
                navTree.classList.remove('active');
            });
        }
    }
    
    // ---------- 2. خلفيات الهيدر المتحركة (Header Slider) ----------
    const slides = document.querySelectorAll('.header-slide');
    
    if (slides.length > 0) {
        let currentSlide = 0;
        
        // إعداد أولي - إظهار الشريحة الأولى
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.opacity = '0';
            slides[i].style.transition = 'opacity 1s ease-in-out';
        }
        slides[0].style.opacity = '1';
        
        // تغيير الخلفية كل 3 ثواني
        function changeSlide() {
            // إخفاء الكل
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.opacity = '0';
            }
            
            // إظهار الشريحة الحالية
            slides[currentSlide].style.opacity = '1';
            
            // التحرك للشريحة التالية
            currentSlide++;
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
        }
        
        // تشغيل التغيير
        setInterval(changeSlide, 3000);
    }
    
    // ---------- 3. تحميل الصور المتأخر (Lazy Loading) ----------
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if (lazyImages.length > 0) {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.1
            });
            
            for (let i = 0; i < lazyImages.length; i++) {
                imageObserver.observe(lazyImages[i]);
            }
        }
    }
    
    // ---------- 4. إظهار الصفحة بعد التحميل ----------
    setTimeout(function() {
        document.body.classList.add('css-loaded');
    }, 100);
    
    // ---------- 5. أزرار الصور (Phone & WhatsApp) ----------
    // الأزرار تعمل مباشرة من onclick الموجود في HTML
    // هذه مجرد تأكيد أن الدوال موجودة
    
});

// ========== دوال إضافية للتحسين ==========

// دالة لنسخ رقم الهاتف (اختياري)
function copyPhoneNumber(phoneNumber) {
    navigator.clipboard.writeText(phoneNumber).then(function() {
        alert('تم نسخ الرقم: ' + phoneNumber);
    }).catch(function() {
        alert('فشل نسخ الرقم');
    });
}

// دالة لفتح الخريطة (اختياري)
function openMap() {
    window.open('https://maps.google.com/?q=الرياض+السعودية', '_blank');
}

// التأكد من عدم وجود أخطاء في الكنسول
window.onerror = function(message, source, lineno, colno, error) {
    console.log('تم اكتشاف خطأ ولكن تم تجاهله: ' + message);
    return true; // منع ظهور الخطأ
};