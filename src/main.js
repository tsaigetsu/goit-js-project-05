const projects = [
    { imageSmall: `./img/my-projects/project1(1x).jpg`, imageLarge: `./img/my-projects/project1(2x).jpg`, imageSmallMob: `./img/my-projects/project1mob(1x).jpg`, imageLargeMob: `./img/my-projects/project1mob(2x).jpg`, imageSmallTab: `./img/my-projects/project1tab(1x).jpg`, imageLargeTab: `./img/my-projects/project1tab(2x).jpg`, name: `wallet webservice`, link: `https://github.com/tsaigetsu/goit-js-project-05` },
    { imageSmall: `./img/my-projects/project2(1x).jpg`, imageLarge: `./img/my-projects/project2(2x).jpg`,imageSmallMob: `./img/my-projects/project2mob(1x).jpg`, imageLargeMob: `./img/my-projects/project2mob(2x).jpg`, imageSmallTab: `./img/my-projects/project2tab(1x).jpg`, imageLargeTab: `./img/my-projects/project2tab(2x).jpg`, name:`green harvest webservice`, link: `https://github.com/tsaigetsu/goit-js-project-05` },
    { imageSmall: `./img/my-projects/project3(1x).jpg`, imageLarge: `./img/my-projects/project3(2x).jpg`, imageSmallMob: `./img/my-projects/project3mob(1x).jpg`, imageLargeMob: `./img/my-projects/project3mob(2x).jpg`, imageSmallTab: `./img/my-projects/project3tab(1x).jpg`, imageLargeTab: `./img/my-projects/project3tab(2x).jpg`, name:`English excellence website` , link: `https://github.com/tsaigetsu/goit-js-project-05` },
    {imageSmall: `./img/my-projects/project4(1x).jpg`, imageLarge: `./img/my-projects/project4(2x).jpg`, imageSmallMob: `./img/my-projects/project4(1x).jpg`, imageLargeMob: `./img/my-projects/project4(2x).jpg`, imageSmallTab: `./img/my-projects/project4(1x).jpg`, imageLargeTab: `./img/my-projects/project4(2x).jpg`, name: `power pulse webservice`, link: `https://github.com/tsaigetsu/goit-js-project-05`},
    { imageSmall: `./img/my-projects/project5(1x).jpg`, imageLarge: `./img/my-projects/project5(2x).jpg`,imageSmallMob: `./img/my-projects/project5(1x).jpg`, imageLargeMob: `./img/my-projects/project5(2x).jpg`,imageSmallTab: `./img/my-projects/project5(1x).jpg`, imageLargeTab: `./img/my-projects/project5(2x).jpg`, name:`mimino website`, link: `https://github.com/tsaigetsu/goit-js-project-05`},
    { imageSmall: `./img/my-projects/project6(1x).jpg`, imageLarge: `./img/my-projects/project6(2x).jpg`,imageSmallMob: `./img/my-projects/project6(1x).jpg`, imageLargeMob: `./img/my-projects/project6(2x).jpg`, imageSmallTab: `./img/my-projects/project6(1x).jpg`, imageLargeTab: `./img/my-projects/project6(2x).jpg`,name:`vyshyvanka vibes Landing Page`, link: `https://github.com/tsaigetsu/goit-js-project-05`},
    { imageSmall: `./img/my-projects/project7(1x).jpg`, imageLarge: `./img/my-projects/project7(2x).jpg`,imageSmallMob: `./img/my-projects/project7(1x).jpg`, imageLargeMob: `./img/my-projects/project7(2x).jpg`,imageSmallTab: `./img/my-projects/project7(1x).jpg`, imageLargeTab: `./img/my-projects/project7(2x).jpg`, name:`chego jewelry website`, link: `https://github.com/tsaigetsu/goit-js-project-05` },
    { imageSmall: `./img/my-projects/project8(1x).jpg`, imageLarge: `./img/my-projects/project8(2x).jpg`,imageSmallMob: `./img/my-projects/project8(1x).jpg`, imageLargeMob: `./img/my-projects/project8(2x).jpg`, imageSmallTab: `./img/my-projects/project8(1x).jpg`, imageLargeTab: `./img/my-projects/project8(2x).jpg`,name:`energy flow webservice`, link: `https://github.com/tsaigetsu/goit-js-project-05` },
    { imageSmall: `./img/my-projects/project9(1x).jpg`, imageLarge: `./img/my-projects/project9(2x).jpg`,imageSmallMob: `./img/my-projects/project9(1x).jpg`, imageLargeMob: `./img/my-projects/project9(2x).jpg`,imageSmallTab: `./img/my-projects/project9(1x).jpg`, imageLargeTab: `./img/my-projects/project9(2x).jpg`,name:`fruitbox online store`, link: `https://github.com/tsaigetsu/goit-js-project-05` },
    { imageSmall: `./img/my-projects/project10(1x).jpg`, imageLarge: `./img/my-projects/project10(2x).jpg`,imageSmallMob: `./img/my-projects/project10(1x).jpg`, imageLargeMob: `./img/my-projects/project10(2x).jpg`, imageSmallTab: `./img/my-projects/project10(1x).jpg`, imageLargeTab: `./img/my-projects/project10(2x).jpg`,name:`starlight studio landing page`, link: `https://github.com/tsaigetsu/goit-js-project-05` },
];

const projectsList = document.querySelector(".projects-list");
const btnLoadMore = document.querySelector(".load-more-btn");
let currentIndex = 0;
const projectLoad = 3;


function projectsCreated(project) {
    return `<li>
    <picture>
<source srcset="${project.imageSmall} 1x, ${project.imageLarge} 2x" media="(min-width: 1280px)">
<source srcset="${project.imageSmallTab} 1x, ${project.imageLargeTab} 2x" media="(min-width: 768px)">
<source srcset="${project.imageSmallMob} 1x, ${project.imageLargeMob} 2x" media="(min-width: 320px)">
<img class="my-project-img" src="${project.imageSmall}" alt="${project.name}">
</picture>
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

function loadMore() {

    const projectToLoad = projectsTemplate(projects, currentIndex, projectLoad);
    projectsList.insertAdjacentHTML("beforeend", projectToLoad);
    currentIndex += projectLoad;

    if (currentIndex >= projects.length) {
        btnLoadMore.style.display = "none";
    }

}
loadMore();