const more = document.querySelector('.btn-more');
const feature = document.querySelector('.feature-cards');

const team = [
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
<p class="card-title">${team[i].position}</p>
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
});
document.querySelectorAll('.header-list').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navUl.classList.remove('active');
}));