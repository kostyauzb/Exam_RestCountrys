const loader = document.querySelector("#overlay")

function openLoader(){
    loader.classList.remove("hidden")
  }
  function closeLoader(){
    loader.classList.add("hidden")
  }

const getData = async (api) =>{
    openLoader()
    const req = await fetch(api)
    
    if(!req.ok){
        throw new Error("Something went wrong !!!")
    }

    const data = await req.json()
    closeLoader()
    return data
}

export default getData