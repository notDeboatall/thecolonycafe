const CAFE = {
    confirmed: true,
    timezone: 'Asia/Kolkata',
    // 0 = Sunday, 1 = Monday, ... 6 = Saturday
    hours: {
        0: [{ open: '10:00', close: '14:00' }, { open: '16:00', close: '23:00' }],
        1: [{ open: '10:00', close: '14:00' }, { open: '16:00', close: '23:00' }],
        2: [{ open: '10:00', close: '14:00' }, { open: '16:00', close: '23:00' }],
        3: [{ open: '10:00', close: '14:00' }, { open: '16:00', close: '23:00' }],
        4: [{ open: '10:00', close: '14:00' }, { open: '16:00', close: '23:00' }],
        5: [{ open: '10:00', close: '14:00' }, { open: '16:00', close: '23:00' }],
        6: [{ open: '10:00', close: '14:00' }, { open: '16:00', close: '23:00' }]
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
        
        const shiftsToday = CAFE.hours[currentDayIndex];
        
        for (const shift of shiftsToday) {
            if (currentTimeStr >= shift.open && currentTimeStr < shift.close) {
                status = 'open';
                text = `Open until ${formatTime(shift.close)}`;
                break;
            } else if (status === 'closed' && currentTimeStr < shift.open) {
                text = `Opens at ${formatTime(shift.open)}`;
                break;
            }
        }
        
        if (status === 'closed' && currentTimeStr >= shiftsToday[shiftsToday.length - 1].close) {
            const shiftsTomorrow = CAFE.hours[(currentDayIndex + 1) % 7];
            text = `Opens tomorrow at ${formatTime(shiftsTomorrow[0].open)}`;
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
