import { darkMode } from './js/darkMode';
import { mobileMenu } from './js/mobileMenu';
import { loadMore } from './js/myProjects';
import initializeAccordion from './js/faq';
import './js/reviews';
import { workTogether } from './js/workTogether'
darkMode();
mobileMenu();
loadMore();
initializeAccordion();
AOS.init();
workTogether()
