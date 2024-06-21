'use client';

import { useState } from 'react';
import { Step1 } from './components/steps/step1';
import { Step2 } from './components/steps/step2';
import { Step3 } from './components/steps/step3';
import Title from './components/title';
import { Show } from './components/show';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep(currentStep + 1);

  return (
    <div className="container mx-auto p-4 md:bg-[#f7f7f7] p-6 rounded-md m-6">
      <Show when={currentStep < 3}>
        <Title className="text-center mb-8" label="Compila con i tuoi dati!" />
        <div className="hidden md:block">
          <Step1 nextStep={nextStep} step={currentStep} />
          <hr className="my-4 border-gray-300"></hr>
          <Step2 nextStep={nextStep} step={currentStep} />
        </div>
        <div className="block md:hidden relative overflow-hidden">
          <div className={`transition-transform duration-500 ease-in-out transform ${currentStep === 1 ? 'translate-x-0' : '-translate-x-full'}`}>
            <Step1 nextStep={nextStep} step={currentStep} />
          </div>
          <div className={`transition-transform duration-500 ease-in-out transform absolute inset-0 ${currentStep === 2 ? 'translate-x-0' : 'translate-x-full'}`}>
            <Step2 nextStep={nextStep} step={currentStep} />
          </div>
        </div>
      </Show>
    
      <Show when={currentStep === 3}>
        <Step3 />
      </Show>
    </div>
  );
}
