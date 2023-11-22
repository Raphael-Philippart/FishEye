import React, { useEffect, useState } from 'react';
import { IPhotographer } from '../../../../utils/types/Types';
import './ContactForm.scss';

const ContactForm = ({ photographer }: { photographer: IPhotographer }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(preState => !preState);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    console.log('SUBMIT');
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modal) {
        handleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modal]);

  return <>
    <div className='ContactForm'>
      <button className='ContactFormButton' onClick={handleModal} tabIndex={2}>Contactez-moi</button>
    </div>
    {modal &&
      <section className='ContactFormModal'>
        <header>
          <div>Contactez-moi</div>
          <div onClick={handleModal}>
            <svg viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M57 19.23L52.77 15L36 31.77L19.23 15L15 19.23L31.77 36L15 52.77L19.23 57L36 40.23L52.77 57L57 52.77L40.23 36L57 19.23Z'
                fill='white' />
            </svg>
          </div>
        </header>
        <div className='ContactFormModalContent'>
          <div>{photographer.name}</div>
          <div>
            <form action='/' method='POST'>
              <label htmlFor='firstname'>Prénom</label>
              <input type='text' id='firstname' name='firstname' tabIndex={3} />
              <label htmlFor='lastname'>Nom</label>
              <input type='text' id='lastname' name='lastname' tabIndex={4} />
              <label htmlFor='email'>Email</label>
              <input type='mail' id='email' name='email' tabIndex={5} />
              <label htmlFor='message'>Votre message</label>
              <textarea name='message' id='message' tabIndex={6}></textarea>
              <input type='submit' value='Envoyer' onClick={e => handleSubmit(e)} tabIndex={7} />
            </form>
          </div>
        </div>
      </section>
    }
  </>;
};

export default ContactForm;
