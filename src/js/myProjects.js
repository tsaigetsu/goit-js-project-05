import project1  from '/img/my-projects/project1(1x).jpg';
import project1_2x from '/img/my-projects/project1(2x).jpg';
import project2  from '/img/my-projects/project2(1x).jpg';
import project2_2x from '/img/my-projects/project2(2x).jpg';
import project3  from '/img/my-projects/project3(1x).jpg';
import project3_2x from '/img/my-projects/project3(2x).jpg';
import project4  from '/img/my-projects/project4(1x).jpg';
import project4_2x from '/img/my-projects/project4(2x).jpg';
import project5  from '/img/my-projects/project5(1x).jpg';
import project5_2x from '/img/my-projects/project5(2x).jpg';
import project6  from '/img/my-projects/project6(1x).jpg';
import project6_2x from '/img/my-projects/project6(2x).jpg';
import project7  from '/img/my-projects/project7(1x).jpg';
import project7_2x from '/img/my-projects/project7(2x).jpg';
import project8  from '/img/my-projects/project8(1x).jpg';
import project8_2x from '/img/my-projects/project4(2x).jpg';
import project9  from '/img/my-projects/project9(1x).jpg';
import project9_2x from '/img/my-projects/project9(2x).jpg';
import project10  from '/img/my-projects/project10(1x).jpg';
import project10_2x from '/img/my-projects/project10(2x).jpg';



const projects = [
    { name: `wallet webservice`,imageSmall: project1, imageLarge: project1_2x, link: `https://github.com/tsaigetsu/goit-js-project-05` },
    { name:`green harvest webservice`,imageSmall: project2, imageLarge: project2_2x, link: `https://github.com/tsaigetsu/goit-js-project-05` },
    { name:`English excellence website` ,imageSmall: project3, imageLarge: project3_2x,  link: `https://github.com/tsaigetsu/goit-js-project-05` },
    { name: `power pulse webservice`, imageSmall: project4, imageLarge: project4_2x, link: `https://github.com/tsaigetsu/goit-js-project-05`},
    { name:`mimino website`, imageSmall: project5, imageLarge: project5_2x,link: `https://github.com/tsaigetsu/goit-js-project-05`},
    { name:`vyshyvanka vibes Landing Page`,imageSmall: project6, imageLarge: project6_2x, link: `https://github.com/tsaigetsu/goit-js-project-05`},
    { name:`chego jewelry website`, imageSmall: project7, imageLarge: project7_2x, link: `https://github.com/tsaigetsu/goit-js-project-05` },
    { name:`energy flow webservice`,imageSmall: project8, imageLarge: project8_2x, link: `https://github.com/tsaigetsu/goit-js-project-05` },
    { name:`fruitbox online store`, imageSmall: project9, imageLarge: project9_2x,link: `https://github.com/tsaigetsu/goit-js-project-05` },
    { name:`starlight studio landing page`, imageSmall: project10, imageLarge: project10_2x,link: `https://github.com/tsaigetsu/goit-js-project-05` },
];

const projectsList = document.querySelector('.projects-list');
const btnLoadMore = document.querySelector('.load-more-btn');
let currentIndex = 0;
const projectLoad = 3;


function projectsCreated(project) {
    return `<li>

<img class="my-project-img" src="${project.imageSmall}" srcset ="${project.imageSmall} 1x, ${project.imageLarge} 2x" alt="${project.name}">

<p class="project-tech">React, JavaScript, Node JS, Git</p>
<div class="my-project-name-and-link-container">
<h3 class="project-name">${project.name}</h3>
<div class="my-project-link-container">
<a class="my-project-link" href="${project.link}">Visit<svg class="icon-arrow" width="24" height="24">
    <use href="./public/symbol-defs.svg#icon-greenArrow"></use>
  </svg></a>
  </div>
  </div>
</li>`
};

 function projectsTemplate(arr, startIndex, count) {
     return arr.slice(startIndex, startIndex + count).map(projectsCreated).join("");
}
   
projectsList.insertAdjacentHTML("beforeend", projectsTemplate(projects));

btnLoadMore.addEventListener("click", loadMore);

 export function loadMore() {

    const projectToLoad = projectsTemplate(projects, currentIndex, projectLoad);
    projectsList.insertAdjacentHTML("beforeend", projectToLoad);
    currentIndex += projectLoad;

    if (currentIndex >= projects.length) {
        btnLoadMore.style.display = "none";
    }

}
