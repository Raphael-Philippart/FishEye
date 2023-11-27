import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { IFormulaireState, IPhotographer } from '../../../../utils/types/Types';
import { usePhotographerContext } from '../../../../context/PhotographerContext';
import './ContactForm.scss';

const ContactForm = ({ photographer }: { photographer: IPhotographer }) => {
  const { statusLightBox, updateStatusLightBox } = usePhotographerContext();
  const [modal, setModal] = useState(false);
  const [formulaireState, setFormulaireState] = useState<IFormulaireState>({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const handleModal = () => {
    setModal(preState => !preState);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('SUBMIT');
    console.log('FirstName: ', formulaireState.firstname);
    console.log('LastName: ', formulaireState.lastname);
    console.log('E-Mail: ', formulaireState.email);
    console.log('Message: ', formulaireState.message);
    setFormulaireState({
      firstname: '',
      lastname: '',
      email: '',
      message: '',
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormulaireState((prev) => ({ ...prev, [name]: value }));
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
    {!statusLightBox && <div className='ContactForm'>
      <button className='ContactFormButton' onClick={handleModal} tabIndex={0}
              aria-label={'Bouton contactez-moi'}>Contactez-moi
      </button>
    </div>}
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
            <form action='/' method='POST' onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor='firstname'>Prénom</label>
              <input type='text' id='firstname' name='firstname' tabIndex={0} aria-label={'Prénom'}
                     onChange={(e) => handleChange(e)} value={formulaireState.firstname} />
              <label htmlFor='lastname'>Nom</label>
              <input type='text' id='lastname' name='lastname' tabIndex={0} aria-label={'Nom'}
                     onChange={(e) => handleChange(e)} value={formulaireState.lastname} />
              <label htmlFor='email'>Email</label>
              <input type='mail' id='email' name='email' tabIndex={0} aria-label={'E-Mail'}
                     onChange={(e) => handleChange(e)} value={formulaireState.email} />
              <label htmlFor='message'>Votre message</label>
              <textarea name='message' id='message' tabIndex={0} aria-label={'Votre Message'}
                        onChange={(e) => handleChange(e)} value={formulaireState.message}></textarea>
              <input type='submit' value='Envoyer' tabIndex={0} />
            </form>
          </div>
        </div>
      </section>
    }
  </>;
};

export default ContactForm;
