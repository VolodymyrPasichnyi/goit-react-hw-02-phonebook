import { Component } from "react"
import { Form } from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";
import { Section } from "./Sections/Section";


export class App extends Component {
  // state = {
  //   contacts: [],
  //   name: '',
  // }



  sendData = (data) => {
    console.log(data)
  }


    render() {
      return (
        <div>
          <Section title="Phonebook" />
          <Form 
            send={this.sendData}
          />
          <Section title="Contacts" />
          <Contacts />
        </div>
      )
    }
};
