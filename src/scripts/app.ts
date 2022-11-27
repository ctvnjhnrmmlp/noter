import '../styles/styles.scss';
import { toggleDark } from './constants/functions';
import { domNodes } from './constants/variables';

let clientThemePreference = matchMedia('(prefers-color-scheme: dark)');
let clientThemePreferenceIsDark = clientThemePreference.matches;
let isUIDark = false;
const toggler = document.querySelector('.toggler');
let textArea = document.querySelector('textarea');

// Inserts stored user texts to the text area
textArea.value = localStorage.getItem('userTexts');

// Controls the toggle sync of user preference theme on browser settings and the UI theme of the app
clientThemePreference.addEventListener('change', (eventObject) => {
  if(isUIDark && !eventObject.matches) {
    toggleDark(domNodes);
    isUIDark = false;
  }

  if (!isUIDark && eventObject.matches) {
    toggleDark(domNodes);
    isUIDark = true;
  }
});

// Stores user texts from the text area
textArea.addEventListener('change', () => {
  localStorage.setItem('userTexts', textArea.value);
});

// Toggles UI theme
if (toggler != null)
  toggler.addEventListener('click', () => {
    toggleDark(domNodes);
    isUIDark = !isUIDark;
  });

// Syncs the UI theme to the user preference theme on browser settings on load
if (clientThemePreferenceIsDark) {
  toggleDark(domNodes);
  isUIDark = true;
}

