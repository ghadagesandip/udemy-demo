import React from 'react';
import Person from './Person/person'

class  App extends React.Component{

    state = {
        persons:[
            { name:"Max", age: 28},
            { name:"Ravi", age: 22},
            { name:"sandip", age: 21}
        ]
    }
        
    switchNameHandler = (newName) => {
        this.setState({persons: [
            { name:newName, age: 31},
            { name:"Ravi", age: 22},
            { name:"sandip", age: 21}
        ]})
    }

    nameChangeHandler = (event) =>{
        this.setState({persons: [
            { name:'Max', age: 31},
            { name:event.target.value, age: 22},
            { name:"sandip", age: 21}
        ]})
    }
    render(){
        return (
           <div className="App"> 
           <button onClick={this.switchNameHandler.bind(this, 'Sandy')}>Switch Name</button>
           <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} />
           <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age} 
                click={this.switchNameHandler.bind(this, 'Max')}
                changed={this.nameChangeHandler}>My hobbies: Racing</Person>
           <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
           </div>
        );
    }
}

export default App;