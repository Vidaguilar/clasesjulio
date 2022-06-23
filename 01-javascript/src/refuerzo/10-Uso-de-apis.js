//https://developers.giphy.com/

const apiKey = 'tIGh4vDN5UlngpX8lhltyBM3Q2GjZjWb'
const urlApi=`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
const peticion= fetch(urlApi);
peticion
.then(resp=>resp.json())
.then((data)=>{
  const {url} = data.data.images.original;
  const img = document.createElement('img')
  img.src=url
  console.log(url);
  document.body.append(img)
  
 
})
.catch(console.warn)



  
