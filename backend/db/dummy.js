const getWeeklySlots = require("../utils/getWeeklySlots");
const slots = getWeeklySlots(10, 17);

const doctors = [
  {
    name: "Dr. Aarav Sharma",
    specialization: "Panchakarma Specialist",
    contact: 9001000001,
    email: "aarav.sharma@ayushutra.com",
    slots: slots
  },
  {
    name: "Dr. Kavya Menon",
    specialization: "Ayurvedic Dermatology (Kushta Roga)",
    contact: 9001000002,
    email: "kavya.menon@ayushutra.com",
    slots: slots
  },
  {
    name: "Dr. Raghav Rao",
    specialization: "Neurological Disorders (Vata Vyadhi)",
    contact: 9001000003,
    email: "raghav.rao@ayushutra.com",
    slots: slots
  },
  {
    name: "Dr. Meera Deshpande",
    specialization: "Bone & Joint Care (Sandhivata)",
    contact: 9001000004,
    email: "meera.deshpande@ayushutra.com",
    slots: slots
  },
  {
    name: "Dr. Aditya Nair",
    specialization: "Pediatrics (Kaumarbhritya)",
    contact: 9001000005,
    email: "aditya.nair@ayushutra.com",
    slots: slots
  },
  {
    name: "Dr. Ananya Iyer",
    specialization: "Women’s Health (Stri Roga & Prasuti Tantra)",
    contact: 9001000006,
    email: "ananya.iyer@ayushutra.com",
    slots: slots
  },
  {
    name: "Dr. Vivek Gupta",
    specialization: "Cancer Care Support (Arbuda Chikitsa)",
    contact: 9001000007,
    email: "vivek.gupta@ayushutra.com",
    slots: slots
  },
  {
    name: "Dr. Farah Khan",
    specialization: "ENT & Respiratory Disorders (Shalakya Tantra)",
    contact: 9001000008,
    email: "farah.khan@ayushutra.com",
    slots: slots
  },
  {
    name: "Dr. Suresh Reddy",
    specialization: "Digestive Health (Grahani Roga)",
    contact: 9001000009,
    email: "suresh.reddy@ayushutra.com",
    slots: slots
  },
  {
    name: "Dr. Pooja Joshi",
    specialization: "Mental Health & Wellness (Manasa Roga)",
    contact: 9001000010,
    email: "pooja.joshi@ayushutra.com",
    slots: slots
  }
];

const patients = [
  {
    fullName: "Arun Kumar",
    age: 32,
    gender: "Male",
    contact: "9876543210",
    email: "arun.kumar@example.com",
    password: "password123",
    address: "12, Ayurvedic Nagar, Delhi"
  },
  {
    fullName: "Radhika Sharma",
    age: 26,
    gender: "Female",
    contact: "9876543211",
    email: "radhika.sharma@example.com",
    password: "password123",
    address: "45, Herbal Street, Jaipur"
  },
  {
    fullName: "Vivek Patel",
    age: 41,
    gender: "Male",
    contact: "9876543212",
    email: "vivek.patel@example.com",
    password: "password123",
    address: "33, Neem Lane, Ahmedabad"
  },
  {
    fullName: "Snehal Nair",
    age: 29,
    gender: "Female",
    contact: "9876543213",
    email: "snehal.nair@example.com",
    password: "password123",
    address: "78, Ashram Road, Bangalore"
  },
  {
    fullName: "Arjun Reddy",
    age: 45,
    gender: "Male",
    contact: "9876543214",
    email: "arjun.reddy@example.com",
    password: "password123",
    address: "11, Banjara Hills, Hyderabad"
  },
  {
    fullName: "Neha Kapoor",
    age: 34,
    gender: "Female",
    contact: "9876543215",
    email: "neha.kapoor@example.com",
    password: "password123",
    address: "55, Ayurveda Enclave, Noida"
  },
  {
    fullName: "Raj Malhotra",
    age: 39,
    gender: "Male",
    contact: "9876543216",
    email: "raj.malhotra@example.com",
    password: "password123",
    address: "100, Panchakarma Marg, Mumbai"
  },
  {
    fullName: "Pooja Desai",
    age: 27,
    gender: "Female",
    contact: "9876543217",
    email: "pooja.desai@example.com",
    password: "password123",
    address: "14, Ayurveda Chowk, Ahmedabad"
  },
  {
    fullName: "Karan Verma",
    age: 30,
    gender: "Male",
    contact: "9876543218",
    email: "karan.verma@example.com",
    password: "password123",
    address: "200, Rajouri Garden, Delhi"
  },
  {
    fullName: "Anita Joseph",
    age: 36,
    gender: "Female",
    contact: "9876543219",
    email: "anita.joseph@example.com",
    password: "password123",
    address: "88, Herbal Drive, Kochi"
  }
];

module.exports = { doctors, patients };
