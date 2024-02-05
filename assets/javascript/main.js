const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='


function params(){
  const url_params = new URLSearchParams(window.location.search)
  return url_params.get('q')
}


async function search(){
  let query = API_URL+params()
  
  let receita = await fetch(query).then(response => {
    return response.json()
  })

  alert(receita.meals[0].strMeal)
}

search()


