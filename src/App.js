import React, {Component} from 'react'
import { Provider} from 'react-redux'
import {createStore, applyMiddleware,compose} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import {AsyncStorage} from 'react-native'

import reducers from './reducers'
import Router from './Router'
import ReduxThunk from 'redux-thunk'

class App extends  Component{

  render(){
    const store = createStore(reducers,compose(applyMiddleware(ReduxThunk),autoRehydrate()))
    persistStore(store,{storage: AsyncStorage})
    return (
      <Provider store={store}>
        <Router />    
      </Provider>
    )
  }
}


export default App