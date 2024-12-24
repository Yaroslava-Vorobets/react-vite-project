import { Link } from "react-router-dom";


import { Section, Container, List, Button} from './Home.styled';
// import SingupForm from './components/singupForm.jsx'




function Home() { 
//  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? '');
// //  const [contacts, setContacts] = useState(() => {
// //     const savedContacts = JSON.parse(window.localStorage.getItem('contacts'));
// //     return Array.isArray(savedContacts) ? savedContacts : [
// //         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// //         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// //         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// //         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// //     ];
// //    const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? '');
//   useEffect(() => {  
//     window.localStorage.setItem('contacts', JSON.stringify(contacts)) 
//   }, [contacts])
  

  return (
    <>      
      <Section>     
        <Container>        
              {/* <SingupForm/> */}
       
          <List>
             
            <Button type= 'button' ><Link to="/newContact">create contact </Link></Button>
            <Button type= 'button' ><Link to="/findContact">find contact</Link></Button>
            <Button type= 'button' ><Link to="/deleteContact">delete contact </Link></Button>
          </List >
          </Container>
    </Section>
  
  </>
  )
}

export default Home
