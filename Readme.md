#Vanilla(Older) Redux => DON"T MUTATE STATE, returning was mandatory
const newState = [...state];
newState.items.push(action.payload);
return newState;

Redux Toolkit
We have to mutate the state here
Redux Toolkit uses immer Behind the scene
state.items.push(action.payload);

state = [] // This means we are creating a reference of state means we are modifying locally not the actual state

state.items.length = 0 //return {items: []};
Here we are mutating the actual state

Readux toolkit says either mutate the existing state or return a new state;
