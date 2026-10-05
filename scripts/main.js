const CAFE = {
    confirmed: true,
    timezone: 'Asia/Kolkata',
    // 0 = Sunday, 1 = Monday, ... 6 = Saturday
    hours: {
        0: { open: '10:00', close: '00:00' },
        1: { open: '10:00', close: '00:00' },
        2: { open: '10:00', close: '00:00' },
        3: { open: '10:00', close: '00:00' },
        4: { open: '10:00', close: '00:00' },
        5: { open: '10:00', close: '00:00' },
        6: { open: '10:00', close: '00:00' }
    }
};

function formatTime(timeStr) {
    const [h, m] = timeStr.split(':').map(Number);
    const ampm = h >= 12 ? 'pm' : 'am';
    const hour12 = h % 12 || 12;
    return `${hour12}${m > 0 ? ':' + m.toString().padStart(2, '0') : ''} ${ampm}`;
}

function updateStatusBadge() {
    const badgeContainer = document.getElementById('badge-container');
    if (!badgeContainer) return;
    if (!CAFE.confirmed) {
        badgeContainer.style.display = 'none';
        return;
    }

    try {
        const now = new Date();
        const options = { timeZone: CAFE.timezone, hour: 'numeric', minute: 'numeric', hourCycle: 'h23' };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const parts = formatter.formatToParts(now);
        
        let currentHour = 0;
        let currentMinute = 0;
        
        for (const part of parts) {
            if (part.type === 'hour') currentHour = parseInt(part.value, 10);
            if (part.type === 'minute') currentMinute = parseInt(part.value, 10);
        }
        
        const currentTimeStr = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
        
        const dayOptions = { timeZone: CAFE.timezone, weekday: 'long' };
        const weekdayStr = new Intl.DateTimeFormat('en-US', dayOptions).format(now);
        
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDayIndex = days.indexOf(weekdayStr);
        
        let status = 'closed';
        let text = 'Closed right now';
        
        const hoursToday = CAFE.hours[currentDayIndex];
        const hoursYesterday = CAFE.hours[(currentDayIndex + 6) % 7];
        
        // Late night closing from yesterday
        if (hoursYesterday && hoursYesterday.close && hoursYesterday.open) {
            if (hoursYesterday.close < hoursYesterday.open) {
                if (currentTimeStr < hoursYesterday.close) {
                    status = 'open';
                    text = `Open until ${formatTime(hoursYesterday.close)}`;
                }
            }
        }
        
        // Today's hours
        if (status === 'closed' && hoursToday && hoursToday.open && hoursToday.close) {
            if (hoursToday.close > hoursToday.open) {
                if (currentTimeStr >= hoursToday.open && currentTimeStr < hoursToday.close) {
                    status = 'open';
                    text = `Open until ${formatTime(hoursToday.close)}`;
                } else if (currentTimeStr < hoursToday.open) {
                    text = `Opens at ${formatTime(hoursToday.open)}`;
                }
            } else {
                if (currentTimeStr >= hoursToday.open) {
                    status = 'open';
                    text = `Open until ${formatTime(hoursToday.close)}`;
                } else if (currentTimeStr > hoursYesterday.close && currentTimeStr < hoursToday.open) {
                     text = `Opens at ${formatTime(hoursToday.open)}`;
                }
            }
        }

        badgeContainer.innerHTML = `<span class="badge"><span class="badge-dot ${status}"></span>${text}</span>`;
    } catch (e) {
        console.error("Error computing open/closed status", e);
    }
}

function setupActionBar() {
    const actionBar = document.querySelector('.action-bar');
    const visitSection = document.getElementById('visit');
    
    if (!actionBar || !visitSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                actionBar.classList.add('is-hidden');
            } else {
                actionBar.classList.remove('is-hidden');
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(visitSection);
}

function highlightTodayHours() {
    try {
        const now = new Date();
        const dayOptions = { timeZone: CAFE.timezone, weekday: 'short' };
        const weekdayStr = new Intl.DateTimeFormat('en-US', dayOptions).format(now);
        
        const listItems = document.querySelectorAll('.hours-list li');
        listItems.forEach(li => {
            const daySpan = li.querySelector('span');
            if (daySpan && daySpan.textContent.trim().startsWith(weekdayStr)) {
                li.classList.add('is-today');
            }
        });
    } catch (e) {}
}

function setupScrollReveal() {
    const reveals = document.querySelectorAll('[data-reveal]');
    if (!reveals.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
    
    reveals.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
    updateStatusBadge();
    setupActionBar();
    highlightTodayHours();
    setupScrollReveal();
});
