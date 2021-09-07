import './assets/stylesheets/style.css';
import buildShows from './modules/buildShows';
import getShows from './modules/getShows.js';


const allShowsContainer = document.querySelector('.shows-list')

window.addEventListener('load', async () => {
  const shows = await getShows()
  const sixShows = shows.slice(0, 6)
  console.log(sixShows)
  
  buildShows(sixShows, allShowsContainer)
  
  const commentPopup = [...document.querySelectorAll('.comment-popup')];
  for(let i = 0; i < commentPopup.length; i += 1) {
    commentPopup[i].addEventListener('click', () => {
    const modalSection = document.createElement('section');
    modalSection.classList.add('container');
    modalSection.style.display = 'flex'
    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal-wrapper');
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('wrapper');

    const close = document.createElement('div');
    close.classList.add('close');
    close.textContent = 'X';
    close.addEventListener('click', () => {
      modalSection.style.display = 'none';
    })
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('img-wrapper')
    const img = document.createElement('img');
    img.setAttribute('src', sixShows[i].image.medium)
    const itemNumber = document.createElement('h2');
    itemNumber.classList.add('number');
    itemNumber.textContent = `${sixShows[i].name}`;
    const detailWrap = document.createElement('div');
    detailWrap.classList.add('detail-wrap')
    

    const detail1 = document.createElement('h4');
    detail1.textContent = `Language: ${sixShows[i].language}`

    const detail2 = document.createElement('h4');
    detail2.textContent = 'Movie genres: ';
    const genres = sixShows[i].genres;
    genres.forEach(genre => {
      detail2.textContent += `${genre}, `
    });
    
    const detail3 = document.createElement('h4');
    detail3.innerHTML = `Estimated time: ${sixShows[i].runtime}`;


    const detail4 = document.createElement('h4');
    detail4.textContent = `Rating: ${sixShows[i].rating.average}`
    

    const detail5 = document.createElement('h4');
    detail5.innerHTML = `Summary: ${sixShows[i].summary}`;
    detail5.classList.add('summary')

    const commentSection = document.createElement('h3');
    commentSection.classList.add('number');
    commentSection.textContent = `Comments (${sixShows.length})`;

    const addComment = document.createElement('h3');
    addComment.textContent = 'Add a comment';
    const commentForm = document.createElement('form');
    commentForm.classList.add('form');
    const userName = document.createElement('input');
    userName.classList.add('user-name');
    userName.placeholder = 'Your name';
    const userMsg = document.createElement('textarea');
    userMsg.classList.add('user-msg')
    userMsg.placeholder = 'Your insights'
    const commentBtn = document.createElement('button');
    commentBtn.classList.add('comment-btn');
    commentBtn.textContent = 'Comment';

    document.body.appendChild(modalSection);
    modalSection.appendChild(modalWrapper);
    modalWrapper.appendChild(modalDiv)
    modalDiv.append(close, imgWrapper, itemNumber, detailWrap, detail5, commentSection, commentForm);
    
    detailWrap.append(detail1, detail2, detail3, detail4)
    imgWrapper.appendChild(img);

    commentForm.append(userName, userMsg, commentBtn)
    })
  }
})

