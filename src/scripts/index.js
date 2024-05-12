const btnSearch = document.querySelector('#btn-search')

btnSearch.addEventListener('click', () => {
  const cep = document.getElementById("cep").value;
  cep.replace(/\D/g, '')

  if (!isCepValid(cep)) {
    console.log('error!')
    return
  }

  const url = `https://viacep.com.br/ws/${cep}/json`
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }
  fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
    .catch((error) => {
      console.log(error)
    })
})

function isCepValid(cep) {
  const regexCep = /^[0-9]{8}$/;

  if (regexCep.test(cep)) {
    return true
  }

  return false
}