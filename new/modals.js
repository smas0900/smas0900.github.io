const modals = [
  {
    title: 'Facebook 360',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    langs: ['Html', 'Css', 'Javascript'],
    imgCard: './images/SnapshootPortfolio.png',
    cannopy: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: '2015',
  },
  {
    title: 'Multi-Post Stories',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    langs: ['HTML', 'Ruby on rails', 'Javascript', 'CSS'],
    imgCard: './images/SnapshootPortfolio(1).png',
    cannopy: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: '2015',
  },
  {
    title: 'Tonic',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    langs: ['HTML', 'CSS', 'Javascript'],
    imgCard: './images/SnapshootPortfolio(2).png',
    cannopy: 'CANOPY',
    job: 'Back End Dev',
    year: '2015',
  },

];

const modalSection = document.querySelector('.works');
for (let i = 0; i < modals.length; i += 1) {
  modalSection.innerHTML += `
          <div class="modal ">
              
          </div>
          <div class="modal-bg ">
              <h2 class="card-title modal-title">${modals[i].title}</h2>
              <i class="fa-solid fa-xmark modal-close"></i>

              <div class="make-grid work-categories">
                <p class="canopy grid-item">${modals[i].cannopy}</p>
                <div class="circle-item grid-item"></div>
                <p class="category-text grid-item">${modals[i].job}</p>
                <div class="circle-item grid-item"></div>
                <p class="category-text grid-item">${modals[i].year}</p>
              </div>
              
              <img src="${modals[i].imgCard}" class="work-img modal-img" alt="Portfolio Image">
              <div class="make-flex modal-structure">
                <p class="card-description modal-desc">${modals[i].desc}</p>
                <div>
                  <ul class="card-languages modal-languages">
                  ${modals[i].langs.map((lang) => `<li class="language-bg card-language">${lang}</li>`).join('')}
                  </ul>

                  <div class="modal-line"></div>

                  <div class="modal-btn-group">
                    <button onClick="" class="card-button btn modal-btn">See Live <i class="fa-sharp fa-solid fa-earth-americas"></i></button>
                    <button onClick="" class="card-button btn modal-btn">See Source <i class="fa-brands fa-github"></i></button>
                  </div>
                </div>
              </div>
            </div>`;
}

const modal = document.querySelectorAll('.modal');

function ShowCloseModal(index) {
  if (index >= 0) {
    document.querySelectorAll('.modal')[index].style.display = 'block';
    document.querySelectorAll('.modal-bg')[index].style.display = 'flex';
    const modalClose = document.querySelectorAll('.modal-close')[index];
    modalClose.addEventListener('click', () => {
      modal[index].style.display = 'none';
      document.querySelectorAll('.modal-bg')[index].style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === modal[index]) {
        modal[index].style.display = 'none';
        document.querySelectorAll('.modal-bg')[index].style.display = 'none';
      }
    });
  } else {
    return 0;
  }
}
ShowCloseModal(-1);