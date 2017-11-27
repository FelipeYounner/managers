import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component{
    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyAZS4nomFvxUw3pnUMocF9bLXQzi5CxV24',
            authDomain: 'managers-9d9b5.firebaseapp.com',
            databaseURL: 'https://managers-9d9b5.firebaseio.com',
            projectId: 'managers-9d9b5',
            storageBucket: '',
            messagingSenderId: '461274202257'
        };

        firebase.initializeApp(config);
    }


    render(){
        const store = createStore(reducers,{}, applyMiddleware(ReduxThunk));

        return(
          <Provider store ={store}>
              <Router/>
          </Provider>
        );
    }
}

export default App;