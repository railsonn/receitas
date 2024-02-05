const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='


function params(){
  const url_params = new URLSearchParams(window.location.search)
  return url_params.get('search')
}


async function search(){
  let query = API_URL+params()
  
  let receita = await fetch(query).then(response => {
    return response.json()
  })

  return receita
}


async function main(){
  var receita = await search()
  change_page_title(receita.meals[0].strMeal)
}


function change_page_title(receita){
  document.title = 'Receitas | '+receita
}


main()

