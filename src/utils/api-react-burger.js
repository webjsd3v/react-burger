const API = 'https://norma.nomoreparties.space/api';

function checkApiError(res){
  if (res.ok){
    return res.json()
  }
  return Promise.reject(`Ошибка сервера -- ${res.status}`)
}

export function getApiReactBurgers(){
  return fetch(`${API}/ingredients`)
    .then(checkApiError)
    .then(data => {
      if(data.success) {
        return data.data
      }
      return Promise.reject(data)
    })
}

export default getApiReactBurgers()
