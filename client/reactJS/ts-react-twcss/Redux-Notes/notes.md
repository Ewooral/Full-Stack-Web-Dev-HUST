# What is redux?
 A predictable state container for JavaScript apps
 It was inspired by Flux, Elm, Immutable and ...
 It makes state mutations predictable

# Three main principles of Redux
 Single source of truth: 
	single state object tree within a single store
 State is read-only(only getters, no setters)
	Changes should only be done through actions
 Changes are made with pure functions
	Take previous state and action and return next state
	No mutation of the previous state 


redux is a uni-directional data flow

Action       dispatch
             reducer  store
View         state





# Redux Concepts
0. State: stored in plain JS object
1. Action: plain JS object with a type field that specifies how to change something
in the state
2. Reducer: pure funcions that take the current state and action and return
a new state. update data immutably.
3. Store: Holds the current state value. it is created using createStore()
It supplies three methods:
- dispatch(): states state update with the provided action object
- getState(): returns the current stored state value
- subscribe() accepts a callback function that will be run every time an 
action is dispatched

# React with redux
- Use the react-redux package for bindings between React and Redux
- connect(): generates a wrapper "container" component that subscribes to
 the store
- Surround your app root with <Provider>
    Takes the store as an attribute
    Makes store accessible to all connected components
- The connect() function takes two optional arguments:
	.mapStateToProps(): 
	 called every time store state changes
	 Returns an object full of data with each field being a prop for
	 the wrapped component
	.mapDispatchToProps(): 
	 receives the dispatch() method and should 
	 return an object full of functions that use dispatch()
