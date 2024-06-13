function loadContent(page) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `/dynamic-menu/load-content?page=${page}`, true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const response = JSON.parse(this.responseText);
      document.getElementById('content').innerHTML = response.content;
      setCookie('lastPage', page, 7);
    } else {
      document.getElementById('content').innerHTML = 'Error loading content.';
    }
  };
  xhr.send();
}

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cname) == 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}

window.onload = function() {
  const lastPage = getCookie('lastPage');
  if (lastPage) {
    loadContent(lastPage);
  } else {
    loadContent('home');
  }
};
