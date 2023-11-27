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

  /**
   * Function to toggle the modal state.
   */
  const handleModal = () => {
    // Toggle the modal state using the previous state
    setModal(preState => !preState);
  };

  /**
   * Function to handle the submission of a form.
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Log the submission information
    console.log('SUBMIT');
    console.log('FirstName: ', formulaireState.firstname);
    console.log('LastName: ', formulaireState.lastname);
    console.log('E-Mail: ', formulaireState.email);
    console.log('Message: ', formulaireState.message);
    // Clear the form state after submission
    setFormulaireState({
      firstname: '',
      lastname: '',
      email: '',
      message: '',
    });
  };

  /**
   * Function to handle input and textarea changes in the form.
   * @param {ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The change event.
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Extract the name and value from the event target
    const { name, value } = e.target;
    // Update the form state using the previous state and the new key-value pair
    setFormulaireState((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Effect to handle the 'Escape' key press when the modal is open.
   */
  useEffect(() => {
    /**
     * Function to handle keydown events.
     * @param {KeyboardEvent} e - The keyboard event.
     */
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if the 'Escape' key is pressed and the modal is open
      if (e.key === 'Escape' && modal) {
        // Close Modal
        handleModal();
      }
    };

    // Add event listener for keydown events
    window.addEventListener('keydown', handleKeyDown);

    // Remove event listener on component unmount to avoid memory leaks
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
