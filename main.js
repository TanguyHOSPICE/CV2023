// Icons - i
const htmlLogo = document.querySelector('.fa-html5');
const cssLogo = document.querySelector('.fa-css3');
const jsLogo = document.querySelector('.fa-js');
const phpLogo = document.querySelector('.fa-php');
const symfonyLogo = document.querySelector('.fa-symfony');
const mongoLogo = document.querySelector('img[alt="mongoDB logo"]');
const mySqlLogo = document.querySelector('img[alt="mysql logo"]');
const bootstrapLogo = document.querySelector('.fa-bootstrap');
const reactLogo = document.querySelector('.fa-react');
const wordpressLogo = document.querySelector('.fa-wordpress');
const nodeLogo = document.querySelector('.fa-node');
const sassLogo = document.querySelector('.fa-sass');

const expressLogo = document.querySelector('img[alt="express logo"]');
const tailwindLogo = document.querySelector('img[alt="tailwind logo"]');
const jQueryLogo = document.querySelector('img[alt="jquery logo"]');
const photoshopLogo = document.querySelector('img[alt="photoshop logo"]');
const illustratorLogo = document.querySelector('img[alt="illustrator logo"]');
const microsoftOfficeLogo = document.querySelector('img[alt="microsoft office logo"]');
const autocadLogo = document.querySelector('img[alt="autocad logo"]');
const openOfficeLogo = document.querySelector('img[alt="open office logo"]');
// Spans
const htmlTxt = document.querySelector('span[data-text="HTML"]');
const cssTxt = document.querySelector('span[data-text="CSS"]');
//Global
let root = document.querySelector(':root');
let gcs = getComputedStyle(root);

let cssBg = gcs.getPropertyValue('--css-bg');
let cssTxtBg = gcs.getPropertyValue('--css-bg');
//HTML
let htmlBg = gcs.getPropertyValue('--html-bg');
let htmlTxtBg = gcs.getPropertyValue('--html-bg');
htmlLogo.style.setProperty('color', htmlBg);
htmlTxt.style.setProperty('color', htmlBg);

cssLogo.style.setProperty('color', cssBg);
cssTxt.style.setProperty('color', cssBg);
