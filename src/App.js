import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './page/Landing';
import Hello from './page/Hello';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route exact path='/' component={<Landing />}/>
          <Route path='/hello' component={<Hello />}/>
      </BrowserRouter>
      </div>
  );
}
