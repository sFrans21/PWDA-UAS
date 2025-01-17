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
    question:
      "Bagaimana demokrasi Indonesia menurut konsep Demokrasi Pancasila?",
    options: [
      "Mengutamakan kebebasan individu",
      "Berlandaskan hati nurani dan kesetaraan",
      "Bersifat formal dan administratif",
      "Mengikuti model demokrasi liberal",
    ],
    correct: "Berlandaskan hati nurani dan kesetaraan",
  },
  {
    question:
      "Apa yang dimaksud dengan ‘demokrasi prosedural’ dalam konteks Indonesia?",
    options: [
      "Demokrasi yang hanya menjalankan aturan tanpa esensi",
      "Sistem pemerintahan yang melibatkan rakyat secara aktif",
      "Demokrasi yang menekankan hak asasi manusia",
      "Pemerintahan berdasarkan ideologi tertentu",
    ],
    correct: "Demokrasi yang hanya menjalankan aturan tanpa esensi",
  },
  {
    question:
      "Sanusi (1998) menyebutkan bahwa salah satu pilar demokrasi konstitusional Indonesia adalah:",
    options: [
      "Demokrasi yang berdasarkan kebebasan penuh",
      "Demokrasi dengan kecerdasan",
      "Demokrasi yang sepenuhnya dikuasai negara",
      "Demokrasi tanpa otonomi daerah",
    ],
    correct: "Demokrasi dengan kecerdasan",
  },
  {
    question:
      "Menurut Bung Karno, demokrasi yang cocok bagi Indonesia bukanlah demokrasi Barat tetapi demokrasi berbentuk:",
    options: [
      "Liberalisme individu",
      "Permusyawaratan yang memberi hidup",
      "Kedaulatan rakyat absolut",
      "Kesepakatan berbasis ekonomi",
    ],
    correct: "Permusyawaratan yang memberi hidup",
  },
  {
    question:
      "Apa yang menjadi tujuan utama penerapan pendidikan demokrasi di Indonesia?",
    options: [
      "Mendorong rakyat berperan dalam pemilu",
      "Meningkatkan ketertiban umum",
      "Membangun warga negara yang tahu, mau, dan mampu demokrasi",
      "Menghapus perbedaan pandangan politik di masyarakat",
    ],
    correct: "Membangun warga negara yang tahu, mau, dan mampu demokrasi",
  },
  {
    question:
      "Bagaimana perbedaan utama antara demokrasi langsung dan demokrasi Pancasila?",
    options: [
      "Demokrasi langsung didasarkan pada keadilan, Pancasila pada mayoritas",
      "Demokrasi langsung mengutamakan suara mayoritas, Pancasila menggunakan musyawarah",
      "Demokrasi Pancasila tidak melibatkan rakyat dalam keputusan",
      "Demokrasi langsung hanya berlaku di Indonesia",
    ],
    correct:
      "Demokrasi langsung mengutamakan suara mayoritas, Pancasila menggunakan musyawarah",
  },
  {
    question:
      "Apa yang menjadi kendala besar dalam penerapan demokrasi berkeadaban di Indonesia menurut materi?",
    options: [
      "Kurangnya partisipasi warga negara dalam politik",
      "Liberalisme dan sekularisme yang mengancam nilai Pancasila",
      "Tingginya biaya kampanye politik",
      "Pengaruh budaya global dalam sistem pendidikan",
    ],
    correct: "Liberalisme dan sekularisme yang mengancam nilai Pancasila",
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
