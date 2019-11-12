
import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': 'dengz',
    'birthday': '794101',
    'gender': 'male',
    'job': 'sudent'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': 'dengz2',
    'birthday': '941017',
    'gender': 'male',
    'job': 'sudent'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': 'dengz3',
    'birthday': '094117',
    'gender': 'male',
    'job': 'sudent'
  }
]

class App extends Component {
  render(){
   return (
     <div>
      {
        customers.map(c => {
          return(
            <Customer
              key = {c.id}
              id = {c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
            />
          );
        })

      } 
      </div>
    );
  }
}

export default App;
