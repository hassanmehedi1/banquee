import Banner from './Components/Banner'
import Brands from './Components/Brands'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Notification from './Components/Notification'
import OneApp from './Components/OneApp'
import SavingAccount from './Components/SavingAccount'
import SendAndReceive from './Components/SendAndReceive'
import Tools from './Components/Tools'

function App() {

  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <OneApp></OneApp>
      <SendAndReceive></SendAndReceive>
      <SavingAccount></SavingAccount>
      <Notification></Notification>
      <Brands></Brands>
      <Tools></Tools>
      <Footer></Footer>
    </div>
  )
}

export default App
