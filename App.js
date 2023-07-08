import { StyleSheet} from 'react-native';
import Stackk from './components/Stackk';
import {Provider} from 'react-redux';
import {store} from './components/redux/store/Store'

const App =()=> {
  return (
<Provider  store={store}>
<Stackk />
</Provider>
  );
}
const styles = StyleSheet.create({

  

});


export default App;



