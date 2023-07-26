// fetch("https://swapi.dev/api/people/1")
// .then((res) => {
//     console.log("1then",res)
//    return res.json();
// })
// .then((data)=> { console.log("then2", data)
// return fetch("https://swapi.dev/api/people/2")
// })
// .then((res) => {
//     console.log("then3",res)
//    return res.json();
// })
// .then((data)=> { console.log("then", data)
// })
// .catch((e) => {
//     console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",e)
// })
// const afunc = async () => 
// {
//     const res = await fetch("https://swapi.dev/api/people/1")
//     const data = await res.json()
//     const bb = console.log(data)
//     const sec = await bb
//     const dres = await fetch("https://swapi.dev/api/people/2")
//     const d2 = await dres.json()
//     console.log(d2)
// }

// // afunc();
// axios.get("https://swapi.dev/api/people/1").then((res)=>{console.log("work",res)})
// DAD JOKE FILE STARTS HERE
const abbe = document.querySelector('#jokes')
const getDadJoke = async () => 
{
    const config = {headers: {Accept: 'application/json'}}
  const joke = await axios.get('https://icanhazdadjoke.com/',config )
  console.log("areuthere?",joke.data.joke)
  const newLI = document.createElement('li');
  newLI.append(joke.data.joke)
  abbe.append(newLI)
}
const button = document.querySelector('button')
button.addEventListener('click',getDadJoke)


