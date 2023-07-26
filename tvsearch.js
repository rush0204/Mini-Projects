const form = document.querySelector('#searchForm')
form.addEventListener('submit', async (e) =>
{
    e.preventDefault()
    const term = form.elements.query.value;
    const config = {params: {q: term}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows/`,config)
    display(res.data)
    // const img = document.createElement('img')
    // img.src = res.data[0].show.image.medium
    // document.body.append(img)
   

})

function display (shows) {
    
    const ip = document.querySelector('input')
    ip.value = ''
    if (document.querySelectorAll('img')){
    const ele = document.querySelectorAll('img')
    for(e of ele){e.parentNode.removeChild(e)}
    }
    for(let sow of shows)
    { const img = document.createElement('img')
       img.src = sow.show.image.medium
      document.body.append(img)
    }
}