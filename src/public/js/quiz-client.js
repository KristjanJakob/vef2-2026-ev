document.addEventListener('DOMContentLoaded', () => {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');

    const step2Title = document.getElementById('step2Title');
    const step3Title = document.getElementById('step3Title');
    const step2Options = document.getElementById('step2Options');
    const step3Options = document.getElementById('step3Options');
    const interestInput = document.getElementById('interestInput');
    const answer2Input = document.getElementById('answer2Input');
    const answer3Input = document.getElementById('answer3Input');
  
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
            container.querySelectorAll('.option').forEach(b => b.classList.remove('selected'));
            button.classList.add('selected');
            callback(option.value);
          });
      
          container.appendChild(button);
        });
    }
  
    document.querySelectorAll('.first-option').forEach((button) => {
        button.addEventListener('click', () => {
          const interest = button.dataset.interest;
          interestInput.value = interest;
      
          const config = questionData[interest];
      
          step2Title.textContent = config.q2.title;
          renderOptions(step2Options, config.q2.options, (value) => {
            answer2Input.value = value;
      
            step2.style.display = 'none';
            step3.style.display = 'block';
      
            step3Title.textContent = config.q3.title;
            renderOptions(step3Options, config.q3.options, (value2) => {
              answer3Input.value = value2;
            });
          });
      
          step1.style.display = 'none';
          step2.style.display = 'block';
        });
    });
  
    if (slider && confidenceValue) {
      confidenceValue.textContent = slider.value;
      slider.addEventListener('input', () => {
        confidenceValue.textContent = slider.value;
      });
    }
});