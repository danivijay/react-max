import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
      state = {
            persons: [
                  {
                        id: 'dsfasfas',
                        name: 'seth',
                        age: 20,
                  },
                  {
                        id: 'afasfas',
                        name: 'matt',
                        age: 26,
                  },
                  {
                        id: 'sdfwefwa',
                        name: 'jeff',
                        age: 23,
                  },
            ],
            otherState: 'some other value',
            showPersons: false,
      };

      switchNameHandler = (newName) => {
            this.setState({
                  persons: [{ name: newName, age: 20 }, { name: 'matt', age: 26 }, { name: 'jeff', age: 22 }],
            });
      };

      nameChangedHandler = (e, id) => {
            const personIndex = this.state.persons.findIndex((p) => {
                  return p.id === id;
            });

            const person = {
                  ...this.state.persons[personIndex],
            };

            person.name = e.target.value;

            const persons = [...this.state.persons];

            persons[personIndex] = person;

            this.setState({
                  persons,
            });
      };

      togglePersonsHandler = () => {
            const doesShow = this.state.showPersons;
            this.setState({
                  showPersons: !doesShow,
            });
      };

      deletePersonHandler = (personIndex) => {
            let persons = [...this.state.persons];
            persons.splice(personIndex, 1);
            this.setState({
                  persons,
            });
      };

      render() {
            const style = {
                  backgroundColor: 'green',
                  color: 'white',
                  font: 'inherit',
                  border: '1px solid blue',
                  padding: '8px',
                  cursor: 'pointer',
            };

            let persons = null;

            if (this.state.showPersons) {
                  persons = (
                        <div>
                              {this.state.persons.map((person, i) => {
                                    return (
                                          <Person
                                                click={this.deletePersonHandler.bind(this, i)}
                                                name={person.name}
                                                age={person.age}
                                                key={person.id}
                                                changed={(e) => this.nameChangedHandler(e, person.id)}
                                          />
                                    );
                              })}
                        </div>
                  );
                  style.backgroundColor = 'red';
            }

            let classes = [];
            if (this.state.persons.length <= 2) {
                  classes.push('red');
            }
            if (this.state.persons.length <= 1) {
                  classes.push('bold');
            }

            return (
                  <div className="App">
                        <h1>Hello React</h1>
                        <p className={classes.join(' ')}>this is really working</p>
                        <button style={style} onClick={this.togglePersonsHandler}>
                              Switch Name
                        </button>
                        {persons}
                  </div>
            );
      }
}

export default App;
