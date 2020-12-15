const postTemplate = document.getElementById('post');
const postsContainer = document.getElementById('posts');

const postTemplateClone = document.importNode(postTemplate.content, true);
postTemplateClone.querySelector('h2').textContent += ' ' + 'My first post';
const post1TemplateClone = postTemplate.content.cloneNode(true);

postsContainer.appendChild(postTemplateClone);
postsContainer.appendChild(post1TemplateClone);

// nested templates
const tmp = document.getElementById('header');
const clone = document.importNode(tmp.content, true);
document.querySelector('body').appendChild(clone);

const tmpBody = document.getElementById('body');
const cloneBody = document.importNode(tmpBody.content, true);
document.querySelector('body').appendChild(cloneBody);

// card temp with slots
