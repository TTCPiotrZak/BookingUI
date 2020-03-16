import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";


const cache = new InMemoryCache();
const link = new HttpLink({
    // uri: 'https://graphql-pokemon.now.sh/',
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    // uri: 'http://localhost:9000/api''
})

const client = new ApolloClient({
    cache,
    link
})

console.log(client)

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

const GET_POKEMON_INFO = gql`
{
    pokemons(first: 150) {
      id
      number
      name,
      image,
      evolutions {
        id,
        number,
        name,
        image
      }
    }
  }`

  const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

const ONLY_COUNTRY = gql`
{
  bookingDetails(first: 25) {
    name
  }
}
`

  const GraphQL = (props) => {

    // const { data, loading, error } = useQuery(GET_POKEMON_INFO);
    const { data, loading, error} = useQuery(GET_POKEMON_INFO);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    const boolean = true;
  
    return(
      <div>
      {boolean ?
      <div>
      {data &&
        data.pokemons &&
        data.pokemons.map((pokemon, index) => (
          <div key={index} className="card">
            <img alt ='poke' src={pokemon.image} />
            <div class="card-body">
              <h3>{pokemon.name}</h3>
              <p>
                {pokemon.evolutions && pokemon.evolutions.length !== 0 && (
                  <p>
                    {" "}
                    Evolutions:
                    {pokemon.evolutions.map((e, indx) => {
                      return <p key={indx}> {e.name} </p>;
                    })}
                  </p>
                )}
              </p>
            </div>
          </div>
        ))}
        </div>
        : data.rates.map(({ currency, rate }) => (
          <div key={currency}>
            <p>
              {currency}: {rate}
            </p>
          </div>
        ))}
      </div>
    )
  }