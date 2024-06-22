import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-wrapper">
          <div className="column1">
            <div className="faq-item" onClick={() => toggleAnswer(0)}>
              <div className="question">1. Bagaimana cara merawat tanaman di dalam pot ?</div>
              <div className={`answer ${activeIndex === 0 ? 'active' : ''}`}>
                <ul>
                  <li>- Pastikan tanaman mendapatkan cukup Cahaya sesuai dengan kebutuhan jenisnya</li>
                  <li>- Air tanaman secara teratur, tetapi jangan sampai terlalu basah atau terlalu kering</li>
                  <li>- Pindahkan tanaman di pot yang lebih besar </li>
                </ul>
              </div>
            </div>
            <div className="faq-item" onClick={() => toggleAnswer(1)}>
              <div className="question">2. Apa jenis tanaman yang cocok untuk tumbuh di dalam ruangan dengan sedikit bercahaya?</div>
              <div className={`answer ${activeIndex === 1 ? 'active' : ''}`}>Beberapa tanaman yang toleran terhadap Cahaya rendah termasuk tanaman hias</div>
            </div>
            <div className="faq-item" onClick={() => toggleAnswer(2)}>
              <div className="question">3. Bagaimana cara agar tidak terjadi kesalahan ketika merawat taman kering?</div>
              <div className={`answer ${activeIndex === 2 ? 'active' : ''}`}>Merawat tanaman kering atau xeriscape garden memerlukan perencanaan dan perawatan khusus untuk memastikan tanamana tetap sehat dan tahan erhadap kondisi lingkungan yang minim air</div>
            </div>
            <div className="faq-item" onClick={() => toggleAnswer(3)}>
              <div className="question">4. Apakah tanaman dalam pot memerlukan pupuk? Jika iya seberapa sering</div>
              <div className={`answer ${activeIndex === 3 ? 'active' : ''}`}>Iya, tanaman dalam pot memerlukan pupuk untuk memberikan nutri yang diperlukan. Biasanya, pupuk dapat diberikan setiap 2-4 minggu selama musim tumbuh (musim semi dan musim panas)</div>
            </div>
            <div className="faq-item" onClick={() => toggleAnswer(4)}>
              <div className="question">5. Bagaimana cara merawat tanaman selama liburan atau ketika saya pergi dari rumah untuk waktu yang lama?</div>
              <div className={`answer ${activeIndex === 4 ? 'active' : ''}`}>Gunakan metode irigasi otomatis seperti kantong irigasi atau meminta bantuan tetangga untuk menyiram tanaman anda secara teratur</div>
            </div>
            <div className="faq-item" onClick={() => toggleAnswer(5)}>
              <div className="question">6. Apa yang harus dilakukan jika tanaman saya terlalu besar untuk potnya?</div>
              <div className={`answer ${activeIndex === 5 ? 'active' : ''}`}>Pindahkan tanaman ke pot yang lebih besar, idealnya sekitar 2-5 cm lebih besar dari pot sebelumnya. Pastikan pot baru memiliki lubang drainase yang baik</div>
            </div>
          </div>
          <div className="column2">
            <div className="faq-item" onClick={() => toggleAnswer(6)}>
              <div className="question">7.	Berapa budget yang harus saya keluarkan dalam merawat tanaman di rumah?</div>
              <div className={`answer ${activeIndex === 6 ? 'active' : ''}`}>Budget untuk merawat tanaman di rumah bisa bervariasi tergantung pada berbagai faktor seperti jumlah tanaman yang anda miliki, jenis tanaman, jenis peralatan yang di butuhkan, dan kebutuhan spesifik tanaman anda</div>
            </div>
            <div className="faq-item" onClick={() => toggleAnswer(7)}>
              <div className="question">8.	Apa yang harus dilakukan jika daun tanaman saya menguning?</div>
              <div className={`answer ${activeIndex === 7 ? 'active' : ''}`}>Daun yang menguning bisa menjadi tanda kelebihan air, kekurangan nutrisi, atau masalah dengan akar. Periksa kondisi tanah dan akar tanaman</div>
            </div>
            <div className="faq-item" onClick={() => toggleAnswer(8)}>
            <div className="question">9.	Bagaimana cara menangani hama dan penyakit pada tanaman saya ?</div>
              <div className={`answer ${activeIndex === 8 ? 'active' : ''}`}>
                <ul>
                  <li>- Perhatikan tanda-tanda hama atau penyakit seperti daun yang berubah warna atau adanya serangga.</li>
                  <li>- Gunakan pestisida organic atau insektisida yang aman untuk tanaman dalam pot</li>
                </ul>
              </div>
            </div>
            <div className="faq-item" onClick={() => toggleAnswer(9)}>
              <div className="question">10.	Apakah ada tanaman yang mudah dirawat bagi pemula?</div>
              <div className={`answer ${activeIndex === 9 ? 'active' : ''}`}>Ya, beberapa tanaman seperti pothos, spider, plant dan succulents umumnya muda di rawat dan tahan terhadapa konidisi yang berubah-ubah.</div>
            </div>
            <div className="faq-item" onClick={() => toggleAnswer(10)}>
              <div className="question">11.	Bagaimana cara mengetahui kapan waktu yang tepat untuk memindahkan tanaman ke pot lebih besar? </div>
              <div className={`answer ${activeIndex === 10 ? 'active' : ''}`}>Perhatikan apakah akar tanaman sudah mengisi seluruh pot saat ini dan apakah tanaman tumbuh terlalu besar untuk potnya.</div>
            </div>
            <div className="faq-item" onClick={() => toggleAnswer(11)}>
            <div className="question">12.	Jelaskan cara agar tanaman saya tidak cepat mati? </div>
              <div className={`answer ${activeIndex === 11 ? 'active' : ''}`}>
                <ul>
                  <li>- Penyiraman yang tepat</li>
                  <li>- Pemilihan pot dan media tanam yang sesuai</li>
                  <li>- Pencahayaan yang memadai</li>
                  <li>- Pemupukan secara teratur</li>
                  <li>- Pemantauan terhadap hama dan penyakit</li>
                  <li>- Memperhatikan kondisi lingkungan</li>
                  <li>- Pemilihan tanaman yang sesuai dengan kondisi lingkungan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FAQ;
