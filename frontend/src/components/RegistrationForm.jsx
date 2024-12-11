import React, { useState } from 'react';
import EmailPasswordPage from './EmailPasswordPage';
import PersonalInfoPage from './PersonalInfoPage';
import AddressPage from './AddressPage';
import ReviewPage from './ReviewPage';
import WelcomePage from './WelcomePage';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const editPersonal = () => setStep(2);
  const editAddress = () => setStep(3);

  switch (step) {
    case 1:
      return <EmailPasswordPage nextStep={nextStep} />;
    case 2:
      return <PersonalInfoPage nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <AddressPage nextStep={nextStep} prevStep={prevStep} />;
    case 4:
      return <ReviewPage nextStep={nextStep} editPersonal={editPersonal} editAddress={editAddress} />;
    case 5:
      return <WelcomePage />;
    default:
      return <EmailPasswordPage nextStep={nextStep} />;
  }
};

export default RegistrationForm;
