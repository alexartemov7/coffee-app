import { useState } from 'react' //imports useState hook from the React library.
//enables state management, in other words, remembering things

export default function CoffeeList() {
    const [coffees, setCoffees] = useState() //initializes state variable named coffees with an associated setter function setCoffees
    //function getCoffees is defined and used to fetch a list of coffees based on temperature
    const getCoffees = (temperature) => {
        fetch(`https://api.sampleapis.com/coffee/${temperature}`)
          .then(res => res.json()) //converts response data into json format
          .then(data => setCoffees(data)) //sets the coffee state with data received
          .catch(alert)
    }
    //This return section below starts the section where the component defines what it will visually render.
    return (
        <main> 
            <div>
                <button onClick={() => getCoffees('hot')}>Hot</button>
                <button onClick={() => getCoffees('iced')}>Iced</button>
            </div>
            <section>
                {coffees &&
                    coffees.map(coffee => (
                        <div key={coffees.id} className='coffee-card'>
                         <img src={coffee.image} alt={coffee.title} />
                         <h2>{coffee.title}</h2>
                         <p>{coffee.description}</p>
                        </div>
                    ))
                }
            </section>
        </main>
    )
}