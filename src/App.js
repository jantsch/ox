import React, {Component} from 'react'
import { Provider} from 'react-redux'
import {createStore, applyMiddleware,compose} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import {AsyncStorage} from 'react-native'
import { createFilter, createBlacklistFilter } from 'redux-persist-transform-filter';

import reducers from './reducers'
import Router from './Router'
import ReduxThunk from 'redux-thunk'

class App extends  Component{


// transforms: [saveSubsetBlacklistFilter]
  render(){
  	const saveSubsetBlacklistFilter = createBlacklistFilter(
	  'diary',
	  ['today']
	);
    const store = createStore(reducers,compose(applyMiddleware(ReduxThunk),autoRehydrate()))
    persistStore(store,{storage: AsyncStorage, blacklist: ['diary']  })
    return (
      <Provider store={store}>
        <Router />    
      </Provider>
    )
  }
}


export default App