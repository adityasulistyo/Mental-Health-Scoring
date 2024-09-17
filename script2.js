const questions = [
  'Sakit kepala',
  'Gugup atau berdebar-debar',
  'Mengulang pikiran yang tidak mengenakkan yang sulit dihilangkan',
  'Rasa mau pingsan atau pusing',
  'Tidak ada gairah atau kehilangan sex',
  'Perasaan kritis terhadap orang lain',
  'Perasaan bahwa orang lain dapat mengontrol pikiran Anda',
  'Perasaan mau menyalahkan orang lain atas sebagian kesulitan Anda',
  'Susah mengingat sesuatu',
  'Khwatir melakukan kelalaian atau sesuatu yang kotor',
  'Perasaan mudah tersinggung',
  'Rasa sakit di daerah dada',
  'Perasaan kurang tenaga atau lambat dalam tindakan',
  'Perasaan takut di tempat-tempat luas atau di jalan-jalan',
  'Terpikir untuk mengakhiri hidup',
  'Mendengar suara di mana orang lain tidak mendengarnya',
  'Gemetar',
  'Perasaan bahwa orang lain tidak dapat dipercaya',
  'Nafsu makan menurun',
  'Mudah menangis',
  'Perasaan malu-malu atau tidak tenang dengan lawan jenis',
  'Perasaan mau dijebak atau ditangkap',
  'Perasaan mendadak takut tanpa sebab',
  'Perasaan (marah/menangis/gembira) meledak yang tidak dapat dikendalikan',
  'Perasaan takut untuk keluar rumah sendirian',
  'Menyalahkan diri sendiri untuk suatu hal',
  'Rasa sakit di daerah punggung',
  'Merasa terhalang untuk mengerjakan sesuatu',
  'Perasaan kesepian',
  'Perasaan sedih',
  'Khwatir berlebihan tentang sesuatu hal',
  'Perasaan tidak ada minat terhadap sesuatu',
  'Perasaan mudah takut',
  'Perasaan mudah terkulai',
  'Pikiran-pikiran Anda diketahui orang lain',
  'Perasaan bahwa orang-orang lain tidak mengerti Anda / tidak simpati terhadap Anda',
  'Perasaan bahwa orang-orang lain tidak ramah / tidak menyukai Anda',
  'Sangat lambat mengerjakan sesuatu supaya tidak membuat kesalahan',
  'Berdebar jantung yang kuat dan cepat',
  'Rasa mual atau kembung perut',
  'Perasaan takut atau cemas terhadap orang lain',
  'Rasa sakit-sakit pada otot',
  'Perasaan bahwa Anda diperhatikan/ dibicarakan oleh orang lain',
  'Sulit tidur',
  'Merasa harus berulang-ulang mengecek apa yang Anda kerjakan',
  'Merasa berat untuk bangun pagi',
  'Perasaan takut pergi dengan bis, kereta api atau pesawat',
  'Untuk urusan bermasalah',
  'Sangat mudah marah',
  'Harus menghindari tempat-tempat, benda-benda atau keinginan tertentu karena hal tersebut mengganggu Anda',
  'Pikiran Anda terasa kosong',
  'Hilang perasaan atau kesemutan di bagian tubuh tertentu',
  "Perasaan 'mengganjal' di tenggorokan",
  'Perasaan tidak ada harapan untuk masa depan',
  'Sukar/ sulit berkonsentrasi',
  'Perasaan tidak pada bagian-bagian tubuh tertentu',
  'Perasaan tegang atau terkapu',
  'Perasaan berat pada kedua atau tungkai',
  'Pikiran tentang kematian atau mau mati',
  'Terlalu banyak makan',
  'Perasaan tidak senang kalau diperhatikan / dibicarakan oleh orang lain',
  'Mempunyai pikiran-pikiran yang bukan milik sendiri',
  'Ada dorongan untuk memukul, melukai / merugikan orang lain',
  'Sukar tidur kembali jika terbangun terlalu pagi',
  'Merasa harus mengulang-ulang tindakan yang sama seperti menyentuh, menghitung sesuatu',
  'Tidur terganggu atau tidak puas',
  'Ada dorongan untuk memecahkan/ merusak barang',
  'Memiliki pikiran atau kepercayaan bahwa orang lain tidak mau',
  'Perasaan yang mementingkan diri sendiri dalam hubungan dengan orang lain',
  'Perasaan tidak tenang di tempat banyak orang seperti di pasar atau di gedung bioskop',
  'Perasaan bahwa sesuatu dicapainya dengan berat',
  'Perasaan seperti diteror orang atau panik',
  'Perasaan tidak bisa menikmati makan',
  'Terlibat dalam banyak perdebatan',
  'Merasa gugup kalau ditinggal sendirian',
  'Merasa orang lain tidak menghargai apa yang telah Anda capai',
  'Perasaan kesepian meskipun dengan orang lain',
  'Perasaan gelisah sehingga Anda tidak dapat duduk tenang',
  'Perasaan tidak berguna',
  'Perasaan bahwa sesuatu yang buruk akan menimpa diri Anda',
  'Berteriak-teriak atau membuang barang karena jengkel',
  'Perasaan Anda akan pingsan di tempat umum',
  'Perasaan bahwa orang lain memanfaatkan Anda bila mereka diberi kesempatan',
  'Mempunyai pikiran-pikiran terlarang tentang sex',
  'Pikiran Anda pantas mendapatkan hukuman untuk dosa-dosa yang lalu',
  'Pikiran atau khayalan yang sifatnya menakutkan',
  'Pikiran bahwa ada sesuatu yang tidak beres dalam tubuh Anda',
  'Tidak pernah dekat dengan orang lain',
  'Perasaan bersalah atau berdosa',
  'Merasa ada sesuatu yang tidak beres dalam pikiran Anda',
];

const categories = [
  { name: 'Somatosensation (SOM)', items: [1, 4, 12, 27, 40, 42, 48, 49, 52, 53, 56, 58], divisor: 48, description: 'Gejala fisik yang berhubungan dengan kecemasan.' },
  { name: 'Obsessive Compulsive (OCD)', items: [3, 9, 10, 28, 38, 45, 46, 51, 65], divisor: 40, description: 'Kecenderungan untuk terobsesi dan kompulsif.' },
  { name: 'Interpersonal Sensitivity (INT)', items: [6, 21, 34, 36, 37, 41, 61, 69, 73], divisor: 36, description: 'Sensitivitas dalam hubungan interpersonal.' },
  { name: 'Depression (DEP)', items: [2, 14, 15, 20, 22, 29, 30, 31, 32, 54, 71, 79], divisor: 52, description: 'Gejala depresi dan keputusasaan.' },
  { name: 'Anxiety (ANX)', items: [5, 17, 23, 33, 39, 57, 72, 78, 80, 86], divisor: 40, description: 'Gejala kecemasan umum.' },
  { name: 'Hostility (HOS)', items: [11, 24, 63, 67, 74, 81], divisor: 24, description: 'Kecenderungan untuk bermusuhan atau marah.' },
  { name: 'Phobia (PHOB)', items: [13, 25, 47, 50, 77, 82], divisor: 28, description: 'Rasa takut yang berlebihan atau tidak rasional.' },
  { name: 'Paranoid (PAR)', items: [8, 18, 43, 68, 76], divisor: 24, description: 'Pikiran paranoid atau kecurigaan terhadap orang lain.' },
  { name: 'Psychotic (PSY)', items: [7, 16, 35, 62, 77, 84, 85, 87, 88, 90], divisor: 40, description: 'Gejala psikotik seperti delusi atau halusinasi.' },
];

function verifyCode() {
  const code = document.getElementById('code').value;
  if (code === '1234') {
    document.querySelector('.welcome-screen').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
  } else {
    alert('Kode salah, silakan coba lagi.');
  }
}

const QUESTIONS_PER_PAGE = 30;
const userAnswers = {}; // Objek untuk menyimpan jawaban pengguna

function startQuiz() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const education = document.getElementById('education').value;
  const date = document.getElementById('date').value;

  if (name && age && education && date) {
    document.querySelector('.quiz-container').style.display = 'none';
    document.querySelector('.question-container').style.display = 'block';

    const questionsContainer = document.getElementById('questions');
    questionsContainer.innerHTML = ''; // Kosongkan kontainer soal

    const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);

    function renderPage(page) {
      questionsContainer.innerHTML = ''; // Kosongkan kontainer soal

      // Menampilkan atau menyembunyikan instruksi berdasarkan halaman
      const instructions = document.querySelectorAll('#instructions');
      instructions.forEach((instr) => {
        instr.style.display = page === 1 ? 'block' : 'none';
      });

      const start = (page - 1) * QUESTIONS_PER_PAGE;
      const end = Math.min(start + QUESTIONS_PER_PAGE, questions.length);

      for (let i = start; i < end; i++) {
        const question = questions[i];
        const questionElement = document.createElement('div');
        const savedAnswer = userAnswers[`question-${i}`] || ''; // Memuat jawaban yang sudah disimpan, jika ada

        questionElement.innerHTML = `
          <label for="question-${i}">${i + 1}. ${question}</label><br>
          <label>
            <input type="radio" name="question-${i}" value="0" ${savedAnswer === '0' ? 'checked' : ''}>
            Tidak Pernah
          </label><br>
          <label>
            <input type="radio" name="question-${i}" value="1" ${savedAnswer === '1' ? 'checked' : ''}>
            Sedikit
          </label><br>
          <label>
            <input type="radio" name="question-${i}" value="2" ${savedAnswer === '2' ? 'checked' : ''}>
            Kadang-kadang
          </label><br>
          <label>
            <input type="radio" name="question-${i}" value="3" ${savedAnswer === '3' ? 'checked' : ''}>
            Sering
          </label><br>
          <label>
            <input type="radio" name="question-${i}" value="4" ${savedAnswer === '4' ? 'checked' : ''}>
            Sangat Sering
          </label><br><br>
          `;
        questionsContainer.appendChild(questionElement);

        // Event listener untuk menyimpan jawaban ketika pengguna memilih opsi
        const radios = questionElement.querySelectorAll('input[type="radio"]');
        radios.forEach((radio) => {
          radio.addEventListener('change', () => {
            userAnswers[`question-${i}`] = radio.value;
          });
        });
      }

      // Navigasi halaman
      const navigation = document.getElementById('pagination');
      navigation.innerHTML = ''; // Kosongkan navigasi

      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'button-container';

      if (page > 1) {
        const prevButton = document.createElement('button');
        prevButton.innerText = 'Sebelumnya';
        prevButton.onclick = () => renderPage(page - 1);
        prevButton.className = 'nav-button';
        buttonContainer.appendChild(prevButton);
        window.scrollTo(0, 0);
      }

      if (page < totalPages) {
        const nextButton = document.createElement('button');
        nextButton.innerText = 'Selanjutnya';
        nextButton.onclick = () => renderPage(page + 1);
        nextButton.className = 'nav-button';
        buttonContainer.appendChild(nextButton);
        window.scrollTo(0, 0);
      }

      navigation.appendChild(buttonContainer);
    }

    renderPage(1); // Render halaman pertama
  } else {
    alert('Harap isi semua data diri sebelum memulai.');
  }
}

function submitQuiz() {
  // Debugging: Tampilkan userAnswers sebelum submit untuk melihat jawaban yang tersimpan
  console.log('User answers: ', userAnswers);

  // Ambil semua jawaban dari userAnswers sebagai array
  const answers = Object.keys(userAnswers).map((key) => userAnswers[key]);

  // Cek apakah semua pertanyaan telah dijawab
  if (answers.length !== questions.length) {
    alert('Harap menjawab semua pertanyaan sebelum submit.');
    return;
  }

  // Mulai perhitungan skor berdasarkan kategori
  let categoryScores = categories.map((category) => ({
    name: category.name,
    score: 0,
    divisor: category.divisor,
    description: category.description,
  }));

  // Loop untuk menghitung skor per kategori berdasarkan jawaban
  questions.forEach((_, index) => {
    const answer = userAnswers[`question-${index}`]; // Ambil jawaban dari userAnswers
    if (answer) {
      const answerValue = parseInt(answer);

      // Tambahkan nilai jawaban ke kategori terkait
      categories.forEach((category) => {
        if (category.items.includes(index + 1)) {
          const categoryScore = categoryScores.find((c) => c.name === category.name);
          categoryScore.score += answerValue;
        }
      });
    }
  });

  // Tampilkan hasil diagnosa di tabel
  const resultTableBody = document.querySelector('#result-table tbody');
  resultTableBody.innerHTML = ''; // Kosongkan hasil sebelumnya

  const chartLabels = ['SOM', 'OCD', 'INT', 'DEP', 'ANX', 'HOS', 'PHOB', 'PAR', 'PSY']; // Label singkat kategori
  const chartData = [];
  let clinicalThresholdCount = 0;

  // Proses dan tampilkan setiap kategori
  categoryScores.forEach((categoryScore) => {
    const percentage = (categoryScore.score / categoryScore.divisor) * 100;
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${categoryScore.name}</td>
        <td>${categoryScore.description}</td>
        <td>${percentage.toFixed(2)}%</td>
      `;
    resultTableBody.appendChild(row);

    // Simpan data untuk grafik
    chartData.push(percentage);

    // Hitung berapa kategori yang melebihi ambang klinis (75%)
    if (percentage >= 75) {
      clinicalThresholdCount++;
    }
  });

  // Tampilkan data diri pengguna
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const education = document.getElementById('education').value;
  const date = document.getElementById('date').value;
  document.getElementById('user-data').innerHTML = `
      <table border="1" style="border-collapse: collapse; width: 100%;">
        <tr><td>Nama</td><td>${name}</td></tr>
        <tr><td>Umur</td><td>${age}</td></tr>
        <tr><td>Pendidikan</td><td>${education}</td></tr>
        <tr><td>Tanggal Pelaksanaan</td><td>${date}</td></tr>
      </table>`;

  // Menampilkan grafik hasil menggunakan Chart.js
  const ctx = document.getElementById('resultChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: 'Score',
          data: chartData,
          borderColor: 'darkgreen',
          fill: false,
        },
        {
          label: 'Abnormal Threshold',
          data: new Array(chartLabels.length).fill(20),
          borderColor: 'aqua',
          borderDash: [5, 5],
          fill: false,
        },
        {
          label: 'Clinical Threshold',
          data: new Array(chartLabels.length).fill(70),
          borderColor: 'red',
          borderDash: [5, 5],
          fill: false,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
        },
      },
    },
  });

  // Tampilkan diagnosa
  const diagnosaTable = document.getElementById('diagnosa');
  diagnosaTable.innerHTML = `
      <table border="1" style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr>
            <th>Hasil Diagnosa</th>
            <th>Tindakan</th>
            <th>Simbol</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sehat secara Psikologis</td>
            <td>Normal</td>
            <td>${clinicalThresholdCount === 0 ? '&#x2705;' : ''}</td>
          </tr>
          <tr>
            <td>Ada hambatan secara Psikologis</td>
            <td>Memerlukan pendampingan Profesional Psikolog / Psikiater</td>
            <td>${clinicalThresholdCount > 0 && clinicalThresholdCount <= 2 ? '&#x2705;' : ''}</td>
          </tr>
          <tr>
            <td>Tidak sehat secara Psikologis</td>
            <td>Memerlukan pemeriksaan lebih lanjut untuk penegakan diagnosa oleh Profesional Psikolog / Psikiater</td>
            <td>${clinicalThresholdCount > 2 ? '&#x2705;' : ''}</td>
          </tr>
        </tbody>
      </table>
    `;

  // Highlight row hasil diagnosa yang sesuai
  let rowToHighlight = 0;
  if (clinicalThresholdCount === 0) {
    rowToHighlight = 0;
  } else if (clinicalThresholdCount > 0 && clinicalThresholdCount <= 2) {
    rowToHighlight = 1;
  } else {
    rowToHighlight = 2;
  }
  diagnosaTable.querySelectorAll('tbody tr')[rowToHighlight].style.backgroundColor = '#66CDAA'; // Highlight hijau muda

  // Sembunyikan kontainer soal dan tampilkan hasil
  document.querySelector('.question-container').style.display = 'none';
  document.querySelector('.result-container').style.display = 'block';
}

function downloadResult() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Warna header tabel diubah menjadi #0097b2
  const headerColor = '#0097b2';

  // Tambahkan judul di tengah halaman
  doc.setFontSize(16);
  doc.text('Mental Syntomp Screening Checklist (MSSC) RESULT', doc.internal.pageSize.getWidth() / 2, 15, null, null, 'center');

  // Ambil data pengguna dari halaman
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const education = document.getElementById('education').value;
  const date = document.getElementById('date').value;

  // Tambahkan data diri dalam tabel dengan warna header yang disesuaikan
  doc.autoTable({
    startY: 25, // Posisi y di mana tabel data diri dimulai
    head: [['Nama', 'Umur', 'Pendidikan', 'Tanggal Pelaksanaan']],
    body: [[name, age, education, date]],
    headStyles: { fillColor: headerColor }, // Ubah warna header tabel
    styles: { halign: 'center', fontSize: 12 },
    margin: { top: 10 },
  });

  // Ambil data dari tabel hasil
  const resultTable = document.getElementById('result-table');
  const tableData = [];
  resultTable.querySelectorAll('tr').forEach((row) => {
    const rowData = [];
    row.querySelectorAll('td, th').forEach((cell) => {
      rowData.push(cell.innerText);
    });
    tableData.push(rowData);
  });

  // Render tabel hasil menggunakan autoTable dengan warna header yang disesuaikan
  doc.autoTable({
    head: [tableData[0]], // Header tabel (th)
    body: tableData.slice(1), // Isi tabel (td)
    startY: doc.lastAutoTable.finalY + 10, // Posisi y di mana tabel dimulai, di bawah tabel data diri
    headStyles: { fillColor: headerColor }, // Ubah warna header tabel
    styles: {
      fontSize: 10, // Ukuran font di dalam tabel
      cellPadding: 2, // Padding di dalam sel tabel
    },
    margin: { top: 10, right: 10, bottom: 10, left: 10 }, // Margin halaman
  });

  // Ambil data dari grafik dan tambahkan ke PDF
  const resultChart = document.getElementById('resultChart');
  html2canvas(resultChart).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const finalY = doc.lastAutoTable.finalY + 5; // Menentukan posisi y akhir dari tabel untuk menempatkan grafik
    doc.addImage(imgData, 'PNG', 5, finalY, 180, 70); // Sesuaikan posisi dan ukuran gambar

    // Calculate diagnosis and clinical threshold count
    const categoryScores = categories.map((category) => ({
      name: category.name,
      score: 0,
      divisor: category.divisor,
      description: category.description,
    }));

    questions.forEach((_, index) => {
      const answer = userAnswers[`question-${index}`]; // Use userAnswers from submitQuiz
      if (answer) {
        const answerValue = parseInt(answer);
        categories.forEach((category) => {
          if (category.items.includes(index + 1)) {
            const categoryScore = categoryScores.find((c) => c.name === category.name);
            categoryScore.score += answerValue;
          }
        });
      }
    });

    let clinicalThresholdCount = 0;
    categoryScores.forEach((categoryScore) => {
      const percentage = (categoryScore.score / categoryScore.divisor) * 100;
      if (percentage >= 75) {
        clinicalThresholdCount++;
      }
    });
    // Diagnosis table with two columns
    const diagnosisTable = [
      ['Sehat secara Psikologis', clinicalThresholdCount === 0 ? 'Normal' : ''],
      ['Ada hambatan secara Psikologis', clinicalThresholdCount > 0 && clinicalThresholdCount <= 2 ? 'Memerlukan pendampingan Profesional Psikolog / Psikiater' : ''],
      ['Tidak sehat secara Psikologis', clinicalThresholdCount > 2 ? 'Memerlukan pemeriksaan lebih lanjut untuk penegakan diagnosa oleh Profesional Psikolog / Psikiater' : ''],
    ];

    // Add diagnosis table to PDF with custom styles
    doc.autoTable({
      head: [['Hasil Diagnosa', 'Tindakan']],
      body: diagnosisTable,
      startY: finalY + 80,
      headStyles: { fillColor: headerColor, halign: 'center', valign: 'middle' }, // Heading centered
      styles: {
        fontSize: 10,
        cellPadding: 1,
        halign: 'left', // Content aligned to the left
        valign: 'middle',
        lineColor: [0, 0, 0], // Black color for the border
        lineWidth: 0.05, // Border width
      },
      columnStyles: {
        0: { halign: 'left', valign: 'middle' }, // Left align for diagnosis column
        1: { halign: 'left', valign: 'middle' }, // Left align for action column
      },
      margin: { top: 10, right: 10, bottom: 10, left: 10 },
      didParseCell: function (data) {
        const rowIndex = data.row.index;
        const isHeader = data.row.section === 'head';

        // Apply background color and text color based on diagnosis (only for body, not head)
        if (!isHeader) {
          if (rowIndex === 0 && clinicalThresholdCount === 0) {
            // Green background for "Sehat secara Psikologis"
            data.cell.styles.fillColor = '#66CDAA';
            data.cell.styles.textColor = '#FFFFFF'; // White text for visibility
          } else if (rowIndex === 1 && clinicalThresholdCount > 0 && clinicalThresholdCount <= 2) {
            // Green background for "Ada hambatan"
            data.cell.styles.fillColor = '#66CDAA';
            data.cell.styles.textColor = '#FFFFFF'; // White text for visibility
          } else if (rowIndex === 2 && clinicalThresholdCount > 2) {
            // Green background for "Tidak sehat secara Psikologis"
            data.cell.styles.fillColor = '#66CDAA';
            data.cell.styles.textColor = '#FFFFFF'; // White text for visibility
          }
        }
      },
    });
    // Add logo to the top-left corner of the PDF
    const logoImg = new Image();
    logoImg.src = './img/Logo PsyCare.png';

    // Set the width and height maintaining a 10:3 aspect ratio
    const logoWidth = 20; // Set this to the desired width
    const logoHeight = logoWidth * (3 / 10); // Calculate height based on the 10:3 aspect ratio

    // Add the logo to the top-left corner of the PDF
    doc.addImage(logoImg, 'PNG', 8, 8, logoWidth, logoHeight);

    // Unduh PDF setelah semua elemen ditambahkan
    doc.save('Hasil_Kuesioner.pdf');
  });
}

// Fungsi untuk menghitung clinicalThresholdCount
// function calculateClinicalThresholdCount() {
//   let clinicalThresholdCount = 0;
//   const categoryScores = categories.map((category) => ({
//     name: category.name,
//     score: 0,
//     divisor: category.divisor,
//     description: category.description,
//   }));

//   questions.forEach((_, index) => {
//     const answer = document.querySelector(`input[name="question-${index}"]:checked`);
//     if (answer) {
//       const answerValue = parseInt(answer.value);
//       categories.forEach((category) => {
//         if (category.items.includes(index + 1)) {
//           const categoryScore = categoryScores.find((c) => c.name === category.name);
//           categoryScore.score += answerValue;
//         }
//       });
//     }
//   });

//   categoryScores.forEach((categoryScore) => {
//     const percentage = (categoryScore.score / categoryScore.divisor) * 100;
//     if (percentage >= 75) {
//       clinicalThresholdCount++;
//     }
//   });

//   return clinicalThresholdCount;
// }
