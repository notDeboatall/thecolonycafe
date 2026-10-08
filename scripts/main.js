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

function setupMusicPlayer() {
    const audio = document.getElementById('cafe-music');
    if (!audio) return;

    const isManuallyPaused = sessionStorage.getItem('musicPaused') === 'true';

    const btn = document.createElement('button');
    btn.className = 'music-btn';
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('aria-label', 'Play music');
    btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
        <div class="music-text-wrapper" aria-hidden="true">
            <span class="music-label">Play music</span>
            <span class="music-hint">Tap for music</span>
        </div>
    `;
    document.body.appendChild(btn);

    let isPlaying = false;
    let fadeInterval;
    const fadeDuration = 800; // ms
    const targetVolume = 0.30;
    const fps = 30;
    const steps = fadeDuration / (1000 / fps);
    const volumeStep = targetVolume / steps;

    function prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function fadeVolume(up, callback) {
        clearInterval(fadeInterval);
        if (prefersReducedMotion()) {
            audio.volume = up ? targetVolume : 0;
            if (callback) callback();
            return;
        }

        if (up) audio.volume = 0;
        fadeInterval = setInterval(() => {
            if (up) {
                if (audio.volume + volumeStep < targetVolume) {
                    audio.volume += volumeStep;
                } else {
                    audio.volume = targetVolume;
                    clearInterval(fadeInterval);
                    if (callback) callback();
                }
            } else {
                if (audio.volume - volumeStep > 0) {
                    audio.volume -= volumeStep;
                } else {
                    audio.volume = 0;
                    clearInterval(fadeInterval);
                    if (callback) callback();
                }
            }
        }, 1000 / fps);
    }

    function playMusic() {
        if (isPlaying) return;
        audio.play().then(() => {
            isPlaying = true;
            btn.setAttribute('aria-pressed', 'true');
            btn.setAttribute('aria-label', 'Pause music');
            btn.querySelector('.music-label').textContent = 'Pause music';
            fadeVolume(true);
            btn.classList.remove('show-hint');
        }).catch(() => {});
    }

    function pauseMusic(isManual = false) {
        if (!isPlaying) return;
        isPlaying = false;
        btn.setAttribute('aria-pressed', 'false');
        btn.setAttribute('aria-label', 'Play music');
        btn.querySelector('.music-label').textContent = 'Play music';
        fadeVolume(false, () => audio.pause());
        if (isManual) {
            sessionStorage.setItem('musicPaused', 'true');
        }
    }

    btn.addEventListener('click', () => {
        if (isPlaying) {
            pauseMusic(true);
        } else {
            sessionStorage.setItem('musicPaused', 'false');
            playMusic();
        }
    });

    document.addEventListener('visibilitychange', () => {
        if (document.hidden && isPlaying) {
            pauseMusic(false);
        }
    });

    // 1. Attempt to play on DOMContentLoaded
    if (!isManuallyPaused) {
        audio.play().then(() => {
            isPlaying = true;
            btn.setAttribute('aria-pressed', 'true');
            btn.setAttribute('aria-label', 'Pause music');
            btn.querySelector('.music-label').textContent = 'Pause music';
            fadeVolume(true);
        }).catch(() => {});
    }

    // 1. One-time listeners for first real interaction
    const interactionEvents = ['pointerdown', 'keydown', 'touchend'];
    function handleInteraction() {
        if (!isPlaying && sessionStorage.getItem('musicPaused') !== 'true') {
            playMusic();
        }
        interactionEvents.forEach(e => document.removeEventListener(e, handleInteraction));
    }
    interactionEvents.forEach(e => document.addEventListener(e, handleInteraction, { once: true, passive: true }));

    // 2. Passive scroll and wheel listeners
    const scrollEvents = ['scroll', 'wheel'];
    function handleScroll() {
        if (!isPlaying && sessionStorage.getItem('musicPaused') !== 'true') {
            try {
                audio.play().then(() => {
                    isPlaying = true;
                    btn.setAttribute('aria-pressed', 'true');
                    btn.setAttribute('aria-label', 'Pause music');
                    btn.querySelector('.music-label').textContent = 'Pause music';
                    fadeVolume(true);
                }).catch(() => {
                    if (!sessionStorage.getItem('hintShown')) {
                        sessionStorage.setItem('hintShown', 'true');
                        btn.classList.add('show-hint');
                        btn.setAttribute('aria-label', 'Tap for music');
                        setTimeout(() => {
                            btn.classList.remove('show-hint');
                            if (!isPlaying) {
                                btn.setAttribute('aria-label', 'Play music');
                            }
                        }, 6000);
                    }
                });
            } catch (e) {}
        }
        scrollEvents.forEach(e => window.removeEventListener(e, handleScroll));
    }
    scrollEvents.forEach(e => window.addEventListener(e, handleScroll, { passive: true }));
}

document.addEventListener('DOMContentLoaded', () => {
    updateStatusBadge();
    setupActionBar();
    highlightTodayHours();
    setupScrollReveal();
    setupMusicPlayer();
});
