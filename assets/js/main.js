function getAPet(pet) {
  document.getElementById('msgLoad').classList.remove('d-none');
  document.getElementById('msgLoad').classList.add('d-flex');

  document.getElementById('dog').classList.add('d-none');
  document.getElementById('dog').classList.remove('d-flex');

  if (pet === 'dog') {
    fetchDog();
  } else {
    fetchCat()
  }
}


function fetchDog() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(T => T.json())
    .then((data) => {
      if (data.status && data.status === "success") {
        var html = `<img src="${data.message}" alt="Dog">`;
        document.getElementById('dog').innerHTML = html;
        document.getElementById('msgLoad').classList.remove('d-flex');
        document.getElementById('msgLoad').classList.add('d-none');

        document.getElementById('dog').classList.add('d-flex');
        document.getElementById('dog').classList.remove('d-none');
      } else {
        document.getElementById('message').innerHTML = "Iiiih deu certo não!! Tenta de novo";
      }
    }).catch(() => {
      document.getElementById('message').innerHTML = "Iiiih deu certo não!! Tenta de novo";
    });
}

function fetchCat() {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(T => T.json())
    .then((data) => {
      if (data.length) {
        var dados = data[0];
        var html = `<img src="${dados.url}" alt="Cat">`;
        document.getElementById('dog').innerHTML = html;
        document.getElementById('msgLoad').classList.remove('d-flex');
        document.getElementById('msgLoad').classList.add('d-none');

        document.getElementById('dog').classList.add('d-flex');
        document.getElementById('dog').classList.remove('d-none');
      } else {
        document.getElementById('message').innerHTML = "Iiiih deu certo não!! Tenta de novo";
      }
    }).catch(() => {
      document.getElementById('message').innerHTML = "Iiiih deu certo não!! Tenta de novo";
    });
}