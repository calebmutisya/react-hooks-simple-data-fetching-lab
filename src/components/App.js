import React,{useState, useEffect} from 'react'

function App() {
    const [dogImage, setDogImage]=useState(null)
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        //Fetch a random dog image from the API
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response)=> response.json())
            .then((data)=>{
                // Update the dogImage state with the fetched image URL
                setDogImage(data.message)
                // Set loading to false to indicate that the image has been loaded
                setLoading(false)
            })
            .catch((error)=>{
                console.error("Error fetching dog image:",error);
                //Handle any errors here if needed
                setLoading(false);
            })
    },[]);

  return (
    <div className="App">
        {loading ? (
            <p>Loading...</p>
        ):(<img src={dogImage} alt="A Random Dog"/>)}
    </div>
  )
}

export default App;
