const getImage = async()=>{
    const apiKey = 'tIGh4vDN5UlngpX8lhltyBM3Q2GjZjWb'
    const urlApi=`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    const resp = await fetch(urlApi)
    const{data}= await resp.json()
    console.log(data.images.original.url)
    const {url} = data.images.original;
    
    const img = document.createElement('img')
    img.src=url
    console.log(url);
    document.body.append(img)
  }
    
  getImage();