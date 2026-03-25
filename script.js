const topics = document.querySelectorAll('.topic');
const navItems = document.querySelectorAll('.nav-item');
const bcText = document.getElementById('bc-text');
const progressFill = document.getElementById('progress-fill');
const total = topics.length;

const topicSlugs = [
    'boot-process', 'real-mode', 'mbr', 'bios-interrupts', 'disk-io',
    'a20-line', 'gdt', 'protected-mode', 'memory-map', 'paging',
    'long-mode', 'elf-kernel', 'uefi'
];

let current = 0;

function showTopic(idx) {
    topics[current].classList.remove('active');
    navItems[current].classList.remove('active');
    current = idx;
    topics[current].classList.add('active');
    navItems[current].classList.add('active');
    bcText.textContent = topicSlugs[current];
    progressFill.style.width = ((current + 1) / total * 100) + '%';
    document.getElementById('main').scrollTo(0, 0);
}

navItems.forEach((item, idx) => {
    item.addEventListener('click', () => showTopic(idx));
});

function navigate(dir) {
    const next = current + dir;
    if (next >= 0 && next < total) showTopic(next);
}

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') navigate(1);
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') navigate(-1);
});