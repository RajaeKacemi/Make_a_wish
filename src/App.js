import './App.css';
import Title from './components/Title';
import Description from './components/Description';
import PersonalDataForm from './components/PersonalDataForm';
import DonationForm from './components/DonationForm';
import SubmitBtn from './components/SubmitBtn';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (

    <div className="App">

    <Header />
    <Title />
    <Description />
    <PersonalDataForm />
    <DonationForm />
    <SubmitBtn />
    <Footer />

    </div>
  );
}

export default App;
