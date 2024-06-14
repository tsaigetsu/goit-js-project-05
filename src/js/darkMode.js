 export function darkMode() {
    const darkModeBtn = document.querySelector('#header_darkmode-toggle')
    if (localStorage.getItem('darkMode') === 'on') {
        document.body.classList.add('dark-mode-on');
        darkModeBtn.checked = true;
    }

    darkModeBtn.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode-on');
            localStorage.setItem('darkMode', 'on');
        } else {
            document.body.classList.remove('dark-mode-on');
            localStorage.removeItem('darkMode');
        }
    });
}
