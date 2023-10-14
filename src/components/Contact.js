import '../style/Contact.css';
import { openMaps, openEmail } from '../helpers';


function Contact() {
  return (
    <section id='contact-page'>
      <div id='contact-options'>
        <div id='message-form'>
          <div>
            <p id='contact-title'>CONTACT US</p>
          </div> 
          <div id='contact-info-div'>
            <div id='company-info-div'>
              <div id='location-icon-div'>
                <img src='images/icons/icons8-location-contact-96.png'></img>
              </div>
              <div id='address-div'>
                <p id='company-title'>
                  
                </p>
                <p className='link' onClick={ () => {openMaps()} }>Rruga e Dibres</p>
                <p>Tirana</p>
                <p>Albania</p>
              </div>
            </div>
            <div id='phone-mail-div'>
              <div className='contact-link'>
                <img src='images/icons/icons8-phone-contact-48.png'></img>
                <p>+355691234567</p>
              </div>
              <div className='contact-link'>
                <img src='images/icons/icons8-mail-contact-24.png'></img>
                <p className='link' onClick={() => {openEmail('kterolli@gmail.com')}}>kterolli@gmail.com</p>
              </div>
            </div>            
          </div>
          <div className='sender-info-row'>
            <input className='sender-input' type="text" placeholder="First name"></input>
            <input className='sender-input second' type="text" placeholder="Last name"></input>
          </div>
          <div className='sender-info-row'>
            <input className='sender-input' type="text" placeholder="Email"></input>
            <input className='sender-input second' type='text' placeholder='Phone'></input>
          </div>
          <textarea id='message-input' rows="20" cols="50" placeholder='Message'></textarea>
          <div>
            <p id='submit-button'>SEND MESSAGE</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;