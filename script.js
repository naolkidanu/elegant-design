const navMenu = document.querySelector('.nav-menu');
const navItem = document.querySelectorAll('.nav-item');
const more = document.querySelector('.btn-more');
const cards = document.querySelector('.cards');
const feature = document.querySelector('.feature-cards');

const team= [
  {
    name: 'Abdelmejid oumer',
    position: 'CEO',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    image: ['img/3.png'],
  },
  {
    name: 'Henok Engdashet',
    position: 'lead designer',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    image: ['img/3.png'],
  },
  {
    name: 'Nuniyat Girma',
    position: 'designer',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    image: ['img/3.png'],
  },
  {
    name: 'Nelly Kidanu',
    position: 'Marketing',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    image: ['img/3.png'],
  },
  {
    name: 'Mohammed Hussen',
    position: 'COO',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    image: ['img/3.png'],
  },
  {
    name: 'Helen Bekele',
    position: 'Project Manager',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate ex esse
    sapiente. Distinctio quae adipisci ipsum sed nihil iste tenetur, minus laboriosam,
    quos animi eligendi eos, dignissimos perferendis nesciunt?`,
    image: ['img/3.png'],
  },
];

// for (let i = 0; i < team.length; i += 1) {
//   const teamM = `<div class="team">
//       <img class="pic" src="${team[i].imageUrl}" alt="First-img" />
//       <h2 class="card-name">${team[i].name}</h2>
//       <p class="tex-sec">${team[i].description}</p>
//       <em>${team[i].position}</em>
//     </div>`;
//     team.insertAdjacentHTML('beforeend', teamM);
// }
const showLectures = (i) => {
  feature.innerHTML += `<article class="feature-card">
<div class="feature-img">
<img
src="img/top-border.png"
alt="background"
class="bg-member"/>
<img
class="mem"
src=${team[i].image}
alt="card-image"
/>
</div>
<div>
<h3 class="feture-name">${team[i].name}</h3>
<p>${team[i].position}</p>
<p class="card-content">
${team[i].description}
</p>
</div>
</article>`;
};

team.forEach((pro, i) => {
  if (i < 2 || window.innerWidth > 768) {
    showLectures(i);
  }
});

more.addEventListener('click', () => {
  team.forEach((pro, i) => {
    if (i >= 2) {
      showLectures(i);
    }
  });
  more.classList.toggle('hidden');
});

const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.header-list');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navUl.classList.toggle('active');
  log.classList.toggle('active');
});
document.querySelectorAll('.header-list').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navUl.classList.remove('active');
  log.classList.remove('active');
}));