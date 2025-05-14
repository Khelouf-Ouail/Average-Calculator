function calculateAverage(){
  
  const math_td = parseFloat(document.getElementById('math_td').value) || 0;
  const math_exam = parseFloat(document.getElementById('math_exam').value) || 0;
  
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
  
  
  const elec = elec_td*0.4+elec_exam*0.6;
  
  const elect = elect_td*0.4+elect_exam*0.6;
  
  const logic = (logic_tp*0.5+logic_td*0.5)*0.4+logic_exam*0.6;
  
  const info = info_tp*0.4+info_exam*0.6;
  
  const total = math*2+elec*3+elect*3+logic*4+info*2+etat+an+elec_tp+elect_tp;
  
  const average = total/18;
  
  document.getElementById('result').innerText = `The Average is: ${average.toFixed(2)} / 20`;
  
  
  
}

const dialog = document.getElementById('myDialog');
    const openButton = document.querySelector('.open-dialog');
    const closeButton = document.querySelector('.close-dialog');

    // فتح الديالوج
    openButton.addEventListener('click', () => {
      dialog.showModal(); // عرض الديالوج
    });

    // إغلاق الديالوج
    closeButton.addEventListener('click', () => {
      dialog.close();
    });
