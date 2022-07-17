import React from 'react';
import { useFetch } from './hook/useFetch';

export const App = () => {

  let url = 'https://jsonplaceholder.typicode.com/users';
  const {data, loading} = useFetch(url);
  console.log(loading);

 
  return (
    <div>
      <div>
        <h1>App que consume un api rest</h1>
        <h2>Con un url fijo</h2>
        <h3>Resultado:</h3>
      </div>
      <div> 
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Street</th>
              <th>Suite</th>
              <th>City</th>
              <th>Zipcode</th>
              <th>Latitude</th>
              <th>Longitud</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company Name</th>
              <th>Company Catch</th>
              <th>company BS</th>
            </tr>
          </thead>
          <tbody>
            {data.map( data => 
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.address.street}</td>
                <td>{data.address.suite}</td>
                <td>{data.address.city}</td>
                <td>{data.address.zipcode}</td>
                <td>{data.address.geo.lat}</td>
                <td>{data.address.geo.lng}</td>
                <td>{data.phone}</td>
                <td>{data.website}</td>
                <td>{data.company.name}</td>
                <td>{data.company.catchPhrase}</td>
                <td>{data.company.bs}</td>
              </tr>
            )}
          </tbody>                
        </table>
      </div>
    </div>
  )
}




/*const gifs = data.map(img => {
  return {
      id: img.id,
      title: img.title,
      url:img.images?.downsized_medium.url
  }
})*/

/*      <form onSubmit={handleUrl}>
        <button
          type='submit'
        
        >
          Cargar Url
        </button>
      </form>*/
