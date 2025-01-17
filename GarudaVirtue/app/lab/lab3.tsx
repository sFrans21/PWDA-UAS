// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   FlatList,
// } from "react-native";

// const quizData = [
//   {
//     question: "Apa makna dari Pancasila sebagai dasar negara?",
//     options: [
//       "Ideologi tunggal",
//       "Landasan etika dan moral",
//       "Sumber kekuasaan",
//       "Pedoman hidup masyarakat",
//     ],
//     correct: "Landasan etika dan moral",
//   },
//   {
//     question:
//       "Prinsip ketuhanan yang maha esa dalam Pancasila menekankan pada?",
//     options: [
//       "Kebebasan beragama",
//       "Keberagaman agama",
//       "Pengakuan terhadap Tuhan yang satu",
//       "Penolakan terhadap agama",
//     ],
//     correct: "Pengakuan terhadap Tuhan yang satu",
//   },
//   {
//     question: "Apa tujuan dari demokrasi Pancasila?",
//     options: [
//       "Menjunjung tinggi hak asasi manusia",
//       "Menciptakan keseragaman budaya",
//       "Mengutamakan kebebasan individu",
//       "Menghapus keberagaman etnis",
//     ],
//     correct: "Menjunjung tinggi hak asasi manusia",
//   },
//   {
//     question: "Siapa yang memprakarsai Pancasila?",
//     options: ["Sukarno", "Mohammad Hatta", "Soepomo", "Ki Hadjar Dewantara"],
//     correct: "Sukarno",
//   },
//   {
//     question: "Apa sila kedua dari Pancasila?",
//     options: [
//       "Ketuhanan Yang Maha Esa",
//       "Kemanusiaan yang Adil dan Beradab",
//       "Persatuan Indonesia",
//       "Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan",
//     ],
//     correct: "Kemanusiaan yang Adil dan Beradab",
//   },
//   {
//     question: "Apa lambang sila keempat Pancasila?",
//     options: ["Bintang", "Pohon beringin", "Kepala banteng", "Rantai"],
//     correct: "Kepala banteng",
//   },
//   {
//     question: "Apa arti dari Bhineka Tunggal Ika?",
//     options: [
//       "Bersatu dalam Keberagaman",
//       "Berbeda untuk Menyeragamkan",
//       "Kesatuan yang Menyamakan",
//       "Keanekaragaman yang Dihapuskan",
//     ],
//     correct: "Bersatu dalam Keberagaman",
//   },
//   {
//     question: "Apa simbol sila ketiga Pancasila?",
//     options: ["Bintang", "Pohon beringin", "Padi dan kapas", "Kepala banteng"],
//     correct: "Pohon beringin",
//   },
//   {
//     question: "Apa tujuan Pancasila sebagai ideologi negara?",
//     options: [
//       "Menghapus keberagaman",
//       "Membentuk masyarakat adil dan makmur",
//       "Menjunjung kebebasan mutlak",
//       "Mengutamakan kepentingan individu",
//     ],
//     correct: "Membentuk masyarakat adil dan makmur",
//   },
//   {
//     question: "Apa warna dasar lambang negara Indonesia?",
//     options: ["Merah", "Hitam", "Putih", "Kuning"],
//     correct: "Kuning",
//   },
// ];

// const Lab1 = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [quizStarted, setQuizStarted] = useState(false);
//   const [showResult, setShowResult] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(17); // Timer

//   // Timer
//   useEffect(() => {
//     if (quizStarted && !showResult && timeLeft > 0) {
//       const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
//       return () => clearInterval(timer); // Cleanup
//     } else if (timeLeft === 0) {
//       handleAnswer(null); // Lanjutkan ke pertanyaan berikutnya
//     }
//   }, [quizStarted, timeLeft]);

//   const handleAnswer = (selectedOption: string | null) => {
//     if (selectedOption === quizData[currentQuestion].correct) {
//       setScore(score + 1);
//     }
//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < quizData.length) {
//       setCurrentQuestion(nextQuestion);
//       setTimeLeft(17); // Reset timer untuk pertanyaan berikutnya
//     } else {
//       setShowResult(true);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {quizStarted ? (
//         showResult ? (
//           <View style={styles.resultContainer}>
//             <Text style={styles.resultText}>
//               Skor Anda: {score}/{quizData.length}
//             </Text>
//             <TouchableOpacity
//               onPress={() => {
//                 setQuizStarted(false);
//                 setCurrentQuestion(0);
//                 setScore(0);
//                 setTimeLeft(17);
//                 setShowResult(false);
//               }}
//               style={styles.retakeButton}
//             >
//               <Text style={styles.retakeText}>Ulangi Quiz</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <View>
//             <Text style={styles.timerText}>Waktu: {timeLeft}s</Text>
//             <Text style={styles.questionText}>
//               {quizData[currentQuestion].question}
//             </Text>
//             <FlatList
//               data={quizData[currentQuestion].options}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   style={styles.optionButton}
//                   onPress={() => handleAnswer(item)}
//                 >
//                   <Text style={styles.optionText}>{item}</Text>
//                 </TouchableOpacity>
//               )}
//               keyExtractor={(item, index) => index.toString()}
//             />
//           </View>
//         )
//       ) : (
//         <View style={styles.startContainer}>
//           <Text style={styles.title}>Kuis Pancasila</Text>
//           <TouchableOpacity
//             style={styles.startButton}
//             onPress={() => setQuizStarted(true)}
//           >
//             <Text style={styles.startButtonText}>Mulai Quiz</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#560216", padding: 20 },
//   startContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
//   title: { fontSize: 24, color: "#fff", marginBottom: 20, fontWeight: "bold" },
//   startButton: { backgroundColor: "#f9eedf", padding: 12, borderRadius: 10 },
//   startButtonText: { color: "#560216", fontWeight: "bold", fontSize: 18 },
//   questionText: {
//     fontSize: 20,
//     color: "#f9eedf",
//     marginBottom: 20,
//     fontWeight: "bold",
//   },
//   timerText: {
//     fontSize: 16,
//     color: "#f9eedf",
//     textAlign: "right",
//     marginBottom: 10,
//   },
//   optionButton: {
//     backgroundColor: "#f9eedf",
//     padding: 12,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   optionText: { color: "#560216", fontWeight: "bold", textAlign: "center" },
//   resultContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
//   resultText: { fontSize: 24, color: "#f9eedf", fontWeight: "bold" },
//   retakeButton: { backgroundColor: "#f9eedf", padding: 12, borderRadius: 10 },
//   retakeText: { color: "#560216", fontWeight: "bold" },
// });

// export default Lab1;

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
const quizData = [
  {
    question: "Apa tujuan dari filsafat menurut pandangan Descartes?",
    options: [
      "Untuk mengkritik ilmu pengetahuan",
      "Untuk menemukan kebenaran absolut",
      "Untuk memahami keberadaan manusia",
      "Untuk menjadi dasar negara",
    ],
    correct: "Untuk memahami keberadaan manusia",
  },
  {
    question: "Apa arti dari nilai praksis dalam ideologi Pancasila?",
    options: [
      "Nilai-nilai dasar yang tidak berubah",
      "Pelaksanaan nilai-nilai instrumental dalam kehidupan nyata",
      "Nilai-nilai yang hanya berfungsi sementara",
      "Nilai yang berlaku di masa lalu",
    ],
    correct: "Pelaksanaan nilai-nilai instrumental dalam kehidupan nyata",
  },
  {
    question: "Menurut pandangan ideologi integralistik, negara adalah…",
    options: [
      "Kesatuan yang terdiri dari golongan yang terpisah",
      "Kumpulan individu tanpa keterkaitan",
      "Suatu susunan masyarakat yang integral dan organis",
      "Kumpulan aturan yang bersifat individualistik",
    ],
    correct: "Suatu susunan masyarakat yang integral dan organis",
  },
  {
    question: "Apa yang dimaksud dengan ideologi terbuka?",
    options: [
      "Ideologi yang dapat digantikan",
      "Ideologi yang tetap, tetapi fleksibel dalam penerapannya",
      "Ideologi yang bebas berubah sesuai kebutuhan",
      "Ideologi yang diambil dari negara lain",
    ],
    correct: "Kelangkaan komoditas tertentu",
  },
  {
    question:
      "Apa yang menjadi salah satu batasan bagi Pancasila sebagai ideologi terbuka?",
    options: [
      "Mengikuti semua perubahan global",
      "Penerimaan terhadap ideologi komunis",
      "Menghindari norma baru tanpa konsensus",
      "Menghapus nilai dasar Pancasila",
    ],
    correct: "Menghindari norma baru tanpa konsensus",
  },
  {
    question: "Bagaimana Pancasila berfungsi sebagai ideologi negara?",
    options: [
      "Sebagai perangkat hukum yang mengikat secara internasional",
      "Sebagai cita-cita yang tidak boleh diubah",
      "Sebagai pedoman yang menyatukan langkah bangsa",
      "Sebagai aturan politik tertinggi",
    ],
    correct: "Sebagai pedoman yang menyatukan langkah bangsa",
  },
  {
    question: "Apa dasar dari kajian aksiologi Pancasila?",
    options: [
      "Nilai kebebasan mutlak",
      "Hakikat manusia dalam masyarakat",
      "Manfaat praktis dari nilai-nilai Pancasila",
      "Kebenaran filosofis absolut",
    ],
    correct: "Manfaat praktis dari nilai-nilai Pancasila",
  },
];

const Lab1 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(17); // Timer
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // Untuk menyimpan jawaban yang dipilih

  // Timer
  useEffect(() => {
    if (quizStarted && !showResult && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleAnswer(null); // Pastikan pertanyaan berikutnya tidak terulang
    }
  }, [quizStarted, timeLeft]);

  // Fungsi untuk menangani jawaban
  const handleAnswer = (selectedOption: string | null) => {
    setSelectedOption(selectedOption); // Simpan jawaban yang dipilih
    if (selectedOption === quizData[currentQuestion].correct) {
      setScore(score + 1);
    }

    // Tampilkan warna selama 1 detik sebelum pindah ke pertanyaan berikutnya
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.length) {
        setCurrentQuestion(nextQuestion);
        setTimeLeft(17); // Reset timer
        setSelectedOption(null); // Reset pilihan
      } else {
        setShowResult(true);
      }
    }, 1000); // Tunggu 1 detik sebelum pindah ke pertanyaan berikutnya
  };

  return (
    <View style={styles.container}>
      {quizStarted ? (
        showResult ? (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>
              Skor Anda: {score}/{quizData.length}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setQuizStarted(false);
                setCurrentQuestion(0);
                setScore(0);
                setTimeLeft(17);
                setShowResult(false);
              }}
              style={styles.retakeButton}
            >
              <Text style={styles.retakeText}>Ulangi Quiz</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text style={styles.timerText}>Waktu: {timeLeft}s</Text>
            <Text style={styles.questionText}>
              {quizData[currentQuestion].question}
            </Text>
            <FlatList
              data={quizData[currentQuestion].options}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.optionButton,
                    selectedOption === item && {
                      backgroundColor:
                        item === quizData[currentQuestion].correct
                          ? "#4CAF50" // Hijau jika benar
                          : "#F44336", // Merah jika salah
                    },
                  ]}
                  onPress={() => handleAnswer(item)}
                  disabled={!!selectedOption} // Nonaktifkan tombol setelah memilih jawaban
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )
      ) : (
        <View style={styles.startContainer}>
          <Text style={styles.title}>Kuis Pancasila</Text>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => setQuizStarted(true)}
          >
            <Text style={styles.startButtonText}>Mulai Quiz</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#560216", padding: 20 },
  startContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, color: "#fff", marginBottom: 20, fontWeight: "bold" },
  startButton: { backgroundColor: "#f9eedf", padding: 12, borderRadius: 10 },
  startButtonText: { color: "#560216", fontWeight: "bold", fontSize: 18 },
  questionText: {
    fontSize: 20,
    color: "#f9eedf",
    marginBottom: 20,
    fontWeight: "bold",
  },
  timerText: {
    fontSize: 16,
    color: "#f9eedf",
    textAlign: "right",
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: "#f9eedf",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: { color: "#560216", fontWeight: "bold", textAlign: "center" },
  resultContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  resultText: { fontSize: 24, color: "#f9eedf", fontWeight: "bold" },
  retakeButton: { backgroundColor: "#f9eedf", padding: 12, borderRadius: 10 },
  retakeText: { color: "#560216", fontWeight: "bold" },
});

export default Lab1;
