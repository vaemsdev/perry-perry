import { Provider } from 'react-redux'
import AppBody from 'components/AppBody'
import Header from 'components/Header/Header'
import { store } from 'store/common'
import 'common.scss'

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <AppBody />
      </Provider>
    </div>
  )
}

export default App