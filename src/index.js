import '../styles/index.css';

const button = document.createElement('button');
button.innerText = 'Click me!';

button.onclick = () => {
  console.log('Hello, World!');
};

document.body.appendChild(button);
