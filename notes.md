# React Notes
**bullet points**
* you **need** capitalization on every react component, because react says so
* reminds me of object oriented programming, i love it.

### Redux Notes
**bullet points**
* redux is basically a global variable storage.
* in redux, there are fundemental consepts to understand.  stores, reducers, and dispatchers
* to put it simply, stores are the 'global' database, dispatchers are requests to modify the database, and reducers are the interface that the dispatchers use to modify the database.

**example:**
lets create a simple add/subtract calculator with redux.

*note, i know that this is out of order, however to logicaly explain it, this order was necessary*

remember how above, i said redux is like a database?  well, now we need to initialize the database to set it up.

```js
//import redux
import { createStore } from 'redux';
```
now, redux is imported.  

we need an interface to interact with a database, and we want to conduct some logic, which in this case is adding and subtracting a number.

```js
//the interface and logic of the store
const reducer = (state, action) => {
    switch(action.type){
        case "ADD"
            state = state + action.payload;
            break;
        case "SUB"
            state = state - action.payload;
    }
};
```
as you can see above, this constant takes in a value, called the state, and an action(json), which will contain the type of action that will be conducted and the value of the action.  generally, we call the value a payload, as it is modifying the state.

now, how do we modify the state?  with a dispatcher.  a dispatcher is a method embeded inside the store that allows outside access to change the store's state.

```js
//creating a 'dispatch' to the store, to change its value.
store.dispatch({
    type: "ADD",
    payload: 10
});
```

remember the action object above?  well, redux takes this action sent from the dispatch, and gives it to the reducer, along with the original state it is in currently.

```js
//log store transactions
store.subscribe(() => {
    console.log("Store Updated!", store.getState());
});
```
this will log ths changes that the stores have made.


so the code execution flow would look something like this:

* dispatch is called with the action and the value of the action 
* redux takes the action along with the value, and puts it through the reducer 
* the reducer will execute the instructions contained in the action object, and modify the state accordingly; returning the new, modified state.
* redux will take the modified state, and overwrite the existing state with the modified state.
* redux will call the subscribe function.

the full code is located below:

```js
//import redux
import { createStore } from 'redux';

//the interface and logic of the store
const reducer = (state, action) => {
    switch(action.type){
        case "ADD"
            state = state + action.payload;
            break;
        case "SUB"
            state = state - action.payload;
    }
};

//create store
const store = createStore(reducer, 0);

//log store transactions
store.subscribe(() => {
    console.log("Store Updated!", store.getState());
});

//creating a 'dispatch' to the store, to change its value.
store.dispatch({
    type: "ADD",
    payload: 10
});
```