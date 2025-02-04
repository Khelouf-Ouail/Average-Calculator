function calculateAverage(){
  
  const math_td = parseFloat(document.getElementById('math_td').value) || 0;
  const math_exam = parseFloat(document.getElementById('math_exam').value) || 0;
  
  const vib_td = parseFloat(document.getElementById('vib_td').value) || 0;
  const vib_exam = parseFloat(document.getElementById('vib_exam').value) || 0;
  const vib_tp = parseFloat(document.getElementById('vib_tp').value) || 0;
  
  const elec_td = parseFloat(document.getElementById('elec_td').value) || 0;
  const elec_exam = parseFloat(document.getElementById('elec_exam').value) || 0;
  const elec_tp = parseFloat(document.getElementById('elec_tp').value) || 0;
  
  const elect_td = parseFloat(document.getElementById('elect_td').value) || 0;
  const elect_exam = parseFloat(document.getElementById('elect_exam').value) || 0;
  const elect_tp = parseFloat(document.getElementById('elect_tp').value) || 0;
  
  const logic_td = parseFloat(document.getElementById('logic_td').value) || 0;
  const logic_exam = parseFloat(document.getElementById('logic_exam').value) || 0;
  const logic_tp = parseFloat(document.getElementById('logic_tp').value) || 0;
  
  const info_exam = parseFloat(document.getElementById('info_exam').value) || 0;
  const info_tp = parseFloat(document.getElementById('info_tp').value) || 0;
  
  const etat = parseFloat(document.getElementById('etat').value) || 0;
  
  const an = parseFloat(document.getElementById('an').value) || 0;
  
  const math = (math_td*0.4+math_exam*0.6);
  
  const vibration = (vib_td*0.5+vib_tp*0.5)*0.4+vib_exam*0.6;
  
  const elec = elec_td*0.4+elec_exam*0.6;
  
  const elect = elect_td*0.4+elect_exam*0.6;
  
  const logic = (logic_tp*0.5+logic_td*0.5)*0.4+logic_exam*0.6;
  
  const info = info_tp*0.4+info_exam*0.6;
  
  const total = math*3+vibration*3+elec*2+elect*2+logic*3+info*2+etat+an+elec_tp+elect_tp;
  
  const average = total/19;
  
  document.getElementById('result').innerText = `The average is: ${average.toFixed(2)} / 20`;
  
  
  
}

const dialog = document.getElementById('myDialog');
    const openButton = document.querySelector('.open-dialog');
    const closeButton = document.querySelector('.close-dialog');


    openButton.addEventListener('click', () => {
      dialog.showModal(); 
    });

    
    closeButton.addEventListener('click', () => {
      dialog.close();
    });
