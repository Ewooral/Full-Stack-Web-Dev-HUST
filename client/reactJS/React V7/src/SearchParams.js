import { useState, useEffect, useReducer, useContext } from "react"
// import Pet from "./Pet";
import Results from "./Results";
import useBreedList from "./useBreedList";
import ThemeContext from "./ThemeContext";
// import React from "react"




const Firstname = ["Elijah", "Elisha", "Mary", "Emmanuel", "David", "Moses", "John"]
const Lastname = ['Boahen', 'Jackson', 'Dawson', 'Asante', 'Owusu', 'Ajapong', 'Tumu']

const Name = ({ login }) => {
  const [firstname, updateFirstname] = useState("")
  const [lastname, updateLastname] = useState("")
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  )
  const [data, updateData] = useState(null)
 

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(updateData)
  }, [login])

  if (data) {
    return (<div>
      <h3> {data.name}</h3>
      <h4> {data.location}</h4>
      <img className="image-container" src={data.avatar_url} alt={data.login} />
    </div>
    )
  }

  return (
    <>
      <div>No Github user available</div>
      <label htmlFor="check">
        Check
        <div>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            value={checked}
            onChange={toggle}
          />

          <h2>{checked ? "Checked!" : "Not Checked!"}</h2>
        </div>

      </label>
      {/* ....................................FIRSTNAME................................... */}
      <label htmlFor="firstname">
        FIRSTNAME

        <select
          name="firstname"
          id="firstname"
          value={firstname}
          onChange={(e) => updateFirstname(e.target.value)}
        >
          <option />
          {Firstname.map((firstname) => (
            <option key={firstname} value={firstname}>
              {firstname}
            </option>
          ))}

        </select>

      </label>

      {/* ....................................LASTNAME................................... */}
      <label htmlFor="lastname">
        LASTNAME

        <select
          name="lastname"
          id="lastname"
          value={lastname}
          onChange={(e) => updateLastname(e.target.value)}
        >
          <option />
          {Lastname.map((lastname) => (
            <option key={lastname} value={lastname}>
              {lastname}
            </option>
          ))}

        </select>
      </label>



    </>
)
}


const ANIMALS = ["bird", "cat", "dog", "rabbit", "fish"];

const SearchParams = () => {
  const [location, setLocation] = useState("")
  const [animal, setAnimal] = useState("")
  const [breed, setBreed] = useState("")
  const [breeds] = useBreedList(animal)
  const [theme, setTheme] = useContext(ThemeContext)



  const [pets, setPets] = useState([])

  useEffect(() => {
    requestPets();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps


  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    )
    const json = await res.json();

    setPets(json.pets)
  }



  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >

        {/* ............................LOCATION....................... */}
        <label htmlFor="location">
          Location
          {/* {location} */}
          <input type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>


        {/* ...........................ANIMAL.......................... */}
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={e => {
              setAnimal(e.target.value)
              setBreed("")
            }}

            onBlur={e => {
              setAnimal(e.target.value)
              setBreed("")
            }}
          >

            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}

          </select>
        </label>

        {/* .......................BREED........................ */}
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map(allBreed => (
              <option key={allBreed} value={allBreed}>
                {allBreed}
              </option>
            ))}

          </select>
        </label>

        {/* .......................Theme........................ */}

        <label htmlFor="theme">
              Theme 
          <select
          value={theme}
          onChange={e => setTheme(e.target.value)}
          onBlur={e => setTheme(e.target.value)}
          >
          <option value="peru">Peru</option>
          <option value="darkblue">Dark Blue</option>
          <option value="Chartreuse">Chartreuse</option>
          <option value="mediumorchid">Medium Orchid</option>
          <option value="#f06d06">Fog Dog</option>

          </select>

        </label>

        {/* .......................END LABEL........................ */}
        <button style={{ backgroundColor: theme}}>Submit</button>

      </form>
      {/* ........................PETS................................. */}

      <Results pets={pets} />
      <h2><Name login="Ewooral" /></h2>

    </div>
  )
}


export default SearchParams  