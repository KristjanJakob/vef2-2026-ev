type Answers = {
    interest: string;
  };
  
  export function calculateTrait(answer: string) {
    if (answer === 'math') return 'analytical';
    if (answer === 'art') return 'creative';
    if (answer === 'people') return 'social';
    return 'hands';
  }
  