document.addEventListener('DOMContentLoaded', () => {
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const step3 = document.getElementById('step3');
  const step4 = document.getElementById('step4');
  const step5 = document.getElementById('step5');
  const step6 = document.getElementById('step6');

  const step2Title = document.getElementById('step2Title');
  const step3Title = document.getElementById('step3Title');
  const step4Title = document.getElementById('step4Title');
  const step5Title = document.getElementById('step5Title');
  const step6Title = document.getElementById('step6Title');

  const step2Options = document.getElementById('step2Options');
  const step3Options = document.getElementById('step3Options');
  const step4Options = document.getElementById('step4Options');
  const step5Options = document.getElementById('step5Options');
  const step6Options = document.getElementById('step6Options');

  const interestInput = document.getElementById('interestInput');
  const answer2Input = document.getElementById('answer2Input');
  const answer3Input = document.getElementById('answer3Input');
  const answer4Input = document.getElementById('answer4Input');
  const answer5Input = document.getElementById('answer5Input');
  const answer6Input = document.getElementById('answer6Input');

  const backToStep1 = document.getElementById('backToStep1');
  const backToStep2 = document.getElementById('backToStep2');
  const backToStep3 = document.getElementById('backToStep3');
  const backToStep4 = document.getElementById('backToStep4');
  const backToStep5 = document.getElementById('backToStep5');

  const slider = document.getElementById('confidence');
  const confidenceValue = document.getElementById('confidenceValue');

  const questionData = {
    math: {
      q2: {
        title: '2. Hvað finnst þér skemmtilegast?',
        options: [
          { value: 'numbers', label: '🔢 Tölur og gögn' },
          { value: 'logic', label: '🧠 Rökhugsun og lausnir' },
          { value: 'patterns', label: '📊 Mynstur og greining' }
        ]
      },
      q3: {
        title: '3. Hvernig viltu helst vinna?',
        options: [
          { value: 'structured', label: '📋 Skipulega og nákvæmlega' },
          { value: 'independent', label: '🧍 Sjálfstætt' },
          { value: 'research', label: '🔍 Skoða og greina hluti' }
        ]
      },
      q4: {
        title: '4. Hvaða verkefni höfða mest til þín?',
        options: [
          { value: 'research', label: '🔬 Rannsaka og greina' },
          { value: 'solve', label: '🧩 Leysa flókin vandamál' },
          { value: 'systems', label: '⚙️ Skilja kerfi og virkni' }
        ]
      },
      q5: {
        title: '5. Hvað myndirðu helst vilja gera í starfi?',
        options: [
          { value: 'analyze', label: '📊 Greina upplýsingar' },
          { value: 'create', label: '🎨 Búa til nýjar lausnir' },
          { value: 'helppeople', label: '🤝 Hjálpa fólki' },
          { value: 'buildstuff', label: '🛠️ Smíða eða laga hluti' }
        ]
      },
      q6: {
        title: '6. Hvað hentar þér best?',
        options: [
          { value: 'theory', label: '📚 Fræði og pælingar' },
          { value: 'visual', label: '🖌️ Sjónræn vinna' },
          { value: 'peoplework', label: '👥 Vinna með fólki' },
          { value: 'practical', label: '🔧 Verkleg vinna' }
        ]
      }
    },

    art: {
      q2: {
        title: '2. Hvað viltu helst skapa?',
        options: [
          { value: 'design', label: '🎨 Hönnun og útlit' },
          { value: 'media', label: '📸 Myndir, video eða miðlun' },
          { value: 'ideas', label: '💡 Hugmyndir og skapandi vinna' }
        ]
      },
      q3: {
        title: '3. Hvernig viltu helst vinna?',
        options: [
          { value: 'creative', label: '✨ Frjálst og skapandi' },
          { value: 'projects', label: '🛠️ Verkefnamiðað' },
          { value: 'independent', label: '🧍 Sjálfstætt' }
        ]
      },
      q4: {
        title: '4. Hvaða verkefni höfða mest til þín?',
        options: [
          { value: 'invent', label: '💡 Fá nýjar hugmyndir' },
          { value: 'design', label: '🖌️ Hanna eitthvað fallegt' },
          { value: 'media', label: '🎬 Búa til efni og miðlun' }
        ]
      },
      q5: {
        title: '5. Hvað myndirðu helst vilja gera í starfi?',
        options: [
          { value: 'analyze', label: '📊 Greina upplýsingar' },
          { value: 'create', label: '🎨 Búa til nýjar lausnir' },
          { value: 'helppeople', label: '🤝 Hjálpa fólki' },
          { value: 'buildstuff', label: '🛠️ Smíða eða laga hluti' }
        ]
      },
      q6: {
        title: '6. Hvað hentar þér best?',
        options: [
          { value: 'theory', label: '📚 Fræði og pælingar' },
          { value: 'visual', label: '🖌️ Sjónræn vinna' },
          { value: 'peoplework', label: '👥 Vinna með fólki' },
          { value: 'practical', label: '🔧 Verkleg vinna' }
        ]
      }
    },

    people: {
      q2: {
        title: '2. Hvað höfðar mest til þín?',
        options: [
          { value: 'help', label: '❤️ Að hjálpa öðrum' },
          { value: 'teach', label: '📚 Að kenna og leiðbeina' },
          { value: 'communicate', label: '🗣️ Samskipti og samstarf' }
        ]
      },
      q3: {
        title: '3. Hvernig viltu helst vinna?',
        options: [
          { value: 'team', label: '👥 Með öðrum' },
          { value: 'support', label: '🤝 Með fólki sem þarf stuðning' },
          { value: 'lead', label: '📢 Að leiða eða skipuleggja' }
        ]
      },
      q4: {
        title: '4. Hvaða verkefni höfða mest til þín?',
        options: [
          { value: 'guide', label: '🧭 Leiðbeina öðrum' },
          { value: 'support', label: '🤝 Styðja fólk' },
          { value: 'teach', label: '📘 Kenna og útskýra' }
        ]
      },
      q5: {
        title: '5. Hvað myndirðu helst vilja gera í starfi?',
        options: [
          { value: 'analyze', label: '📊 Greina upplýsingar' },
          { value: 'create', label: '🎨 Búa til nýjar lausnir' },
          { value: 'helppeople', label: '🤝 Hjálpa fólki' },
          { value: 'buildstuff', label: '🛠️ Smíða eða laga hluti' }
        ]
      },
      q6: {
        title: '6. Hvað hentar þér best?',
        options: [
          { value: 'theory', label: '📚 Fræði og pælingar' },
          { value: 'visual', label: '🖌️ Sjónræn vinna' },
          { value: 'peoplework', label: '👥 Vinna með fólki' },
          { value: 'practical', label: '🔧 Verkleg vinna' }
        ]
      }
    },

    tech: {
      q2: {
        title: '2. Hvað heillar þig mest í tækni?',
        options: [
          { value: 'coding', label: '💻 Forritun og hugbúnaður' },
          { value: 'hardware', label: '🔧 Tæki og búnaður' },
          { value: 'systems', label: '⚙️ Kerfi og virkni' }
        ]
      },
      q3: {
        title: '3. Hvernig viltu helst vinna?',
        options: [
          { value: 'build', label: '🛠️ Byggja og búa til' },
          { value: 'solve', label: '🧠 Laga og leysa vandamál' },
          { value: 'analyze', label: '📊 Greina og skilja kerfi' }
        ]
      },
      q4: {
        title: '4. Hvaða verkefni höfða mest til þín?',
        options: [
          { value: 'fix', label: '🔩 Laga búnað eða tæki' },
          { value: 'systems', label: '🖥️ Vinna með kerfi' },
          { value: 'research', label: '🔍 Greina tæknileg vandamál' }
        ]
      },
      q5: {
        title: '5. Hvað myndirðu helst vilja gera í starfi?',
        options: [
          { value: 'analyze', label: '📊 Greina upplýsingar' },
          { value: 'create', label: '🎨 Búa til nýjar lausnir' },
          { value: 'helppeople', label: '🤝 Hjálpa fólki' },
          { value: 'buildstuff', label: '🛠️ Smíða eða laga hluti' }
        ]
      },
      q6: {
        title: '6. Hvað hentar þér best?',
        options: [
          { value: 'theory', label: '📚 Fræði og pælingar' },
          { value: 'visual', label: '🖌️ Sjónræn vinna' },
          { value: 'peoplework', label: '👥 Vinna með fólki' },
          { value: 'practical', label: '🔧 Verkleg vinna' }
        ]
      }
    }
  };

  function renderOptions(container, options, callback) {
    container.innerHTML = '';

    options.forEach((option) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'option';
      button.textContent = option.label;

      button.addEventListener('click', () => {
        container.querySelectorAll('.option').forEach((b) => b.classList.remove('selected'));
        button.classList.add('selected');
        callback(option.value);
      });

      container.appendChild(button);
    });
  }

  document.querySelectorAll('.first-option').forEach((button) => {
    button.addEventListener('click', () => {
      const interest = button.dataset.interest;
      const config = questionData[interest];

      interestInput.value = interest;
      answer2Input.value = '';
      answer3Input.value = '';
      answer4Input.value = '';
      answer5Input.value = '';
      answer6Input.value = '';

      step1.style.display = 'none';
      step2.style.display = 'block';
      step3.style.display = 'none';
      step4.style.display = 'none';
      step5.style.display = 'none';
      step6.style.display = 'none';

      step2Title.textContent = config.q2.title;

      renderOptions(step2Options, config.q2.options, (value) => {
        answer2Input.value = value;
      
        step2.style.display = 'none';
        step3.style.display = 'block';
      
        step3Title.textContent = config.q3.title;
      
        renderOptions(step3Options, config.q3.options, (value2) => {
          answer3Input.value = value2;
      
          step3.style.display = 'none';
          step4.style.display = 'block';
      
          step4Title.textContent = config.q4.title;
      
          renderOptions(step4Options, config.q4.options, (value3) => {
            answer4Input.value = value3;
      
            step4.style.display = 'none';
            step5.style.display = 'block';
      
            step5Title.textContent = config.q5.title;
      
            renderOptions(step5Options, config.q5.options, (value4) => {
              answer5Input.value = value4;
      
              step5.style.display = 'none';
              step6.style.display = 'block';
      
              step6Title.textContent = config.q6.title;
      
              renderOptions(step6Options, config.q6.options, (value5) => {
                answer6Input.value = value5;
              });
            });
          });
        });
      });
    });
  });

  if (slider && confidenceValue) {
    confidenceValue.textContent = slider.value;
    slider.addEventListener('input', () => {
      confidenceValue.textContent = slider.value;
    });
  }

  if (backToStep1) {
    backToStep1.addEventListener('click', () => {
      step2.style.display = 'none';
      step1.style.display = 'block';
      answer2Input.value = '';
    });
  }

  if (backToStep2) {
    backToStep2.addEventListener('click', () => {
      step3.style.display = 'none';
      step2.style.display = 'block';
      answer3Input.value = '';
    });
  }

  if (backToStep3) {
    backToStep3.addEventListener('click', () => {
      step4.style.display = 'none';
      step3.style.display = 'block';
      answer4Input.value = '';
    });
  }

  if (backToStep4) {
    backToStep4.addEventListener('click', () => {
      step5.style.display = 'none';
      step4.style.display = 'block';
      answer5Input.value = '';
    });
  }
  
  if (backToStep5) {
    backToStep5.addEventListener('click', () => {
      step6.style.display = 'none';
      step5.style.display = 'block';
      answer6Input.value = '';
    });
  }
});