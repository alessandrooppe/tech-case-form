// components/Step1.tsx
import { validateStep } from '@/app/utils/validate';
import { FormEvent, useState } from 'react';
import SubTitle from '../sub-title';
import InputText from '../input-text';


interface Step1Props {
  step: number;
  nextStep: () => void;
}

export const Step1 = ({ nextStep, step }: Step1Props) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isStep1 = step === 1;
console.log('input', input)
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
      <SubTitle label={"Dati personali"}/>
      <form onSubmit={handleSubmit} className="space-y-4 mt-2 ">
        <InputText
          placeholder='Nome'
          disabled={!(isStep1)}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className='flex flex-col md:items-end sm:items-center'>
          <button disabled={!input || isLoading || !isStep1} type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-6 rounded disabled:bg-gray-400 disabled:cursor-not-allowed">
            Next
          </button>
        </div>
      </form>
      
    </div>
   
  );
}
