"use client";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Link from 'next/link';

interface ContactusformProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Contactusform: React.FC<ContactusformProps> = ({ isOpen, closeModal }) => {

  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: ''
  });

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setInputValues(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '18586efc-2896-4d66-98ff-ea546e339a07',
          input1: inputValues.input1,
          input2: inputValues.input2,
          input3: inputValues.input3,
          input4: inputValues.input4
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setInputValues({
          input1: '',
          input2: '',
          input3: '',
          input4: ''
        });
        closeModal();
      } else {
        alert('There was an error submitting your form. Please try again.');
        console.error('Form submission failed:', data);
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  const isDisabled = ['input1', 'input3', 'input4'].some(key => {
    return inputValues[key as keyof typeof inputValues] === '' ||
           (key === 'input4' && !(inputValues[key as keyof typeof inputValues].length === 10 &&
           /^\d+$/.test(inputValues[key as keyof typeof inputValues])));
  });

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <button onClick={closeModal} className="text-black text-xl mb-4">✖ Close</button>
                <h3 className="text-center text-2xl font-semibold">Astro Rajesh Sharma</h3>
                <h3 className="text-center text-2xl font-semibold">Contact Us</h3>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <input type="hidden" name="access_key" value="18586efc-2896-4d66-98ff-ea546e339a07" />
                  
                  <div>
                    <label className="block mb-2">Your Name</label>
                    <input name="input1" value={inputValues.input1} onChange={handleChange} type="text" placeholder="Name" required className="border p-2 w-full"/>
                  </div>
                  <div>
                    <label className="block mb-2">Your Phone Number</label>
                    <input name="input4" value={inputValues.input4} onChange={handleChange} type="tel" minLength={10} maxLength={10} required className="border p-2 w-full"/>
                  </div>
                  <div>
                    <label className="block mb-2">Your Email (Optional)</label>
                    <input name="input2" value={inputValues.input2} onChange={handleChange} type="email" placeholder="example@mail.com" className="border p-2 w-full"/>
                  </div>
                  <div>
                    <label className="block mb-2">Your Message</label>
                    <textarea name="input3" value={inputValues.input3} onChange={handleChange} placeholder="Leave a message" className="border p-2 w-full"/>
                  </div>
                  <div className="flex justify-center">
                    <button type="submit" disabled={isDisabled} className="bg-blue text-white py-2 px-4 rounded disabled:opacity-80">Send Message</button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Contactusform;
