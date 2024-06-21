// components/Step2.tsx
import { FormEvent, useState } from 'react';
import { validateStep } from '@/app/utils/validate';
import SubTitle from '../sub-title';
import InputText from '../input-text';

interface Step2Props {
  nextStep: () => void;
  step: number;
}

export const Step2 = ({ nextStep, step }: Step2Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');
  const isStep2 = step === 2;
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await validateStep(input);
      nextStep();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <SubTitle label={"Dati fiscali"}/>
      <form onSubmit={handleSubmit} className="space-y-4 mt-2 flex flex flex-col">
        <InputText
          placeholder='Codice fiscale'
          disabled={!(isStep2)}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <div className='flex flex-col md:items-end sm:items-center'>
          <button type="submit" disabled={!input || isLoading || !isStep2} className="bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

