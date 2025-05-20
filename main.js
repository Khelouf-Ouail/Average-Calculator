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
  const tech = parseFloat(document.getElementById('tech').value) || 0;
  
  const math = (math_td*0.4+math_exam*0.6);
  
  
  const elec = elec_td*0.4+elec_exam*0.6;
  
  const elect = elect_td*0.4+elect_exam*0.6;
  
  const logic = (logic_tp*0.5+logic_td*0.5)*0.4+logic_exam*0.6;
  
  const info = info_tp*0.4+info_exam*0.6;
  
  const total = math*2+elec*3+elect*3+logic*4+info*2+etat+an+tech+elec_tp+elect_tp;
  
  const average = total/19;
  
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





   
    
    
    
/////////////////



let deferredPrompt;
const installBtn = document.getElementById('installBtn');
const bottomNav = document.getElementById('bottomNav');

window.addEventListener('beforeinstallprompt', (e) => {
  // منع ظهور التثبيت التلقائي
  e.preventDefault();
  deferredPrompt = e;
  // إظهار الزر للمستخدم
  installBtn.style.display = 'block';
  bottomNav.style.display = 'block';
});

installBtn.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt(); // إظهار نافذة التثبيت
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('تم تثبيت التطبيق');
    } else {
      console.log('تم إلغاء التثبيت');
    }
    deferredPrompt = null;
    installBtn.style.display = 'none';
    bottomNav.style.display = 'none';
  }
});

// حفظ البيانات
function autoSave() {
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

  const an = parseFloat(document.getElementById('an').value) || 0;

  const tech = parseFloat(document.getElementById('tech').value) || 0;

  const etat = parseFloat(document.getElementById('etat').value) || 0;

            const data = {
                math_td:math_td,
                math_exam:math_exam,
                
                elec_td:elec_td,
                elec_exam:elec_exam,
                elec_tp:elec_tp,
                
                elect_td:elect_td,
                elect_exam:elect_exam,
                elect_tp:elect_tp,
                
                logic_td:logic_td,
                logic_exam:logic_exam,
                logic_tp:logic_tp,
                
                info_exam:info_exam,
                info_tp:info_tp,
                
                an:an,
                tech:tech,
                etat:etat,
              
            };
            localStorage.setItem('gradesData', JSON.stringify(data));
        } 
   

        // تحميل البيانات
        function loadData() {
            const data = JSON.parse(localStorage.getItem('gradesData'));
            if (data) {
                document.getElementById('math_td').value = data.math_td || '';
                document.getElementById('math_exam').value = data.math_exam || '';
               
                document.getElementById('elec_td').value = data.elec_td || '';
                document.getElementById('elec_exam').value = data.elec_exam || '';
                document.getElementById('elec_tp').value = data.elec_tp || '';
               
                document.getElementById(
                'elect_td').value = data.elect_td || '';
                document.getElementById('elect_exam').value = data.elect_exam || '';
                document.getElementById('elect_tp').value = data.elect_tp || '';
                
                document.getElementById('logic_td').value = data.logic_td || '';
                document.getElementById('logic_exam').value = data.logic_exam || '';
                document.getElementById('logic_tp').value = data.logic_tp || '';
                
                document.getElementById('info_exam').value = data.info_exam || '';
                document.getElementById('info_tp').value = data.info_tp || '';
               
                document.getElementById('an').value = data.an || '';
                document.getElementById('tech').value = data.tech || '';
                document.getElementById('etat').value = data.etat || '';
                
            }
        }

        // مسح البيانات
        function clearData() {
            localStorage.removeItem('gradesData');
            document.getElementById('math_td').value = '';
            document.getElementById('math_exam').value = '';

            document.getElementById('elec_td').value = '';
            document.getElementById('elec_exam').value = '';
            document.getElementById('elec_tp').value = '';

           document.getElementById('elect_td').value = '';
          document.getElementById('elect_exam').value = '';
          document.getElementById('elect_tp').value = '';

          document.getElementById('logic_td').value = '';
          document.getElementById('logic_exam').value = '';
          document.getElementById('logic_tp').value = '';

          document.getElementById('info_exam').value = '';
          document.getElementById('info_tp').value = '';

          document.getElementById('an').value = '';
          document.getElementById('tech').value = '';
          document.getElementById('etat').value = '';
            alert('تم مسح البيانات!');
        }

        // تحميل البيانات عند الدخول وربط الحقول بالحفظ التلقائي
        window.onload = function() {
            loadData();
            
            document.getElementById('math_td').addEventListener('input', autoSave);
            document.getElementById('math_exam').addEventListener('input', autoSave);

            document.getElementById('elec_td').addEventListener('input', autoSave);
            document.getElementById('elec_exam').addEventListener('input', autoSave);
            document.getElementById('elec_tp').addEventListener('input', autoSave);

            document.getElementById('elect_td').addEventListener('input', autoSave);
            document.getElementById('elect_exam').addEventListener('input', autoSave);
            document.getElementById('elect_tp').addEventListener('input', autoSave);

            document.getElementById('logic_td').addEventListener('input', autoSave);
            document.getElementById('logic_exam').addEventListener('input', autoSave);
            document.getElementById('logic_tp').addEventListener('input', autoSave);

            document.getElementById('info_exam').addEventListener('input', autoSave);
            document.getElementById('info_tp').addEventListener('input', autoSave);

            document.getElementById('an').addEventListener('input', autoSave);
            document.getElementById('tech').addEventListener('input', autoSave);
            document.getElementById('etat').addEventListener('input', autoSave);
        };
        
        
        
