const doctors = [
  {
    name: "Dr. John Doe",
    specialization: "Cardiology",
    contact: 9001000001,
    email: "john.doe@hospital.com",
    slots: [
      { date: new Date("2025-09-20"), startTime: "10:00", endTime: "10:30" },
      { date: new Date("2025-09-20"), startTime: "11:00", endTime: "11:30" }
    ]
  },
  {
    name: "Dr. Priya Singh",
    specialization: "Dermatology",
    contact: 9001000002,
    email: "priya.singh@hospital.com",
    slots: [
      { date: new Date("2025-09-21"), startTime: "09:00", endTime: "09:30" },
      { date: new Date("2025-09-21"), startTime: "10:30", endTime: "11:00" }
    ]
  },
  {
    name: "Dr. Arjun Mehta",
    specialization: "Neurology",
    contact: 9001000003,
    email: "arjun.mehta@hospital.com",
    slots: [
      { date: new Date("2025-09-22"), startTime: "14:00", endTime: "14:30" },
      { date: new Date("2025-09-22"), startTime: "15:00", endTime: "15:30" }
    ]
  },
  {
    name: "Dr. Kavita Reddy",
    specialization: "Orthopedics",
    contact: 9001000004,
    email: "kavita.reddy@hospital.com",
    slots: [
      { date: new Date("2025-09-23"), startTime: "16:00", endTime: "16:30" }
    ]
  },
  {
    name: "Dr. Rohit Sharma",
    specialization: "Pediatrics",
    contact: 9001000005,
    email: "rohit.sharma@hospital.com",
    slots: [
      { date: new Date("2025-09-24"), startTime: "10:00", endTime: "10:30" }
    ]
  },
  {
    name: "Dr. Sneha Verma",
    specialization: "Gynecology",
    contact: 9001000006,
    email: "sneha.verma@hospital.com",
    slots: [
      { date: new Date("2025-09-24"), startTime: "12:00", endTime: "12:30" }
    ]
  },
  {
    name: "Dr. Manish Gupta",
    specialization: "Oncology",
    contact: 9001000007,
    email: "manish.gupta@hospital.com",
    slots: [
      { date: new Date("2025-09-25"), startTime: "11:00", endTime: "11:30" }
    ]
  },
  {
    name: "Dr. Aisha Khan",
    specialization: "ENT",
    contact: 9001000008,
    email: "aisha.khan@hospital.com",
    slots: [
      { date: new Date("2025-09-25"), startTime: "13:00", endTime: "13:30" }
    ]
  },
  {
    name: "Dr. Nikhil Raj",
    specialization: "General Medicine",
    contact: 9001000009,
    email: "nikhil.raj@hospital.com",
    slots: [
      { date: new Date("2025-09-26"), startTime: "10:00", endTime: "10:30" }
    ]
  },
  {
    name: "Dr. Meera Iyer",
    specialization: "Psychiatry",
    contact: 9001000010,
    email: "meera.iyer@hospital.com",
    slots: [
      { date: new Date("2025-09-27"), startTime: "15:00", endTime: "15:30" }
    ]
  }
];


const patients = [
  {
    fullName: "Amit Kumar",
    age: 29,
    gender: "Male",
    contact: "9876543210",
    email: "amit.kumar@example.com",
    password: "password123",
    address: "123, MG Road, Delhi"
  },
  {
    fullName: "Riya Sharma",
    age: 24,
    gender: "Female",
    contact: "9876543211",
    email: "riya.sharma@example.com",
    password: "password123",
    address: "45, Park Street, Kolkata"
  },
  {
    fullName: "Vikram Patel",
    age: 34,
    gender: "Male",
    contact: "9876543212",
    email: "vikram.patel@example.com",
    password: "password123",
    address: "22, CG Road, Ahmedabad"
  },
  {
    fullName: "Sneha Nair",
    age: 28,
    gender: "Female",
    contact: "9876543213",
    email: "sneha.nair@example.com",
    password: "password123",
    address: "78, MG Road, Bangalore"
  },
  {
    fullName: "Arjun Reddy",
    age: 40,
    gender: "Male",
    contact: "9876543214",
    email: "arjun.reddy@example.com",
    password: "password123",
    address: "11, Banjara Hills, Hyderabad"
  },
  {
    fullName: "Neha Kapoor",
    age: 31,
    gender: "Female",
    contact: "9876543215",
    email: "neha.kapoor@example.com",
    password: "password123",
    address: "55, Sector 18, Noida"
  },
  {
    fullName: "Raj Malhotra",
    age: 36,
    gender: "Male",
    contact: "9876543216",
    email: "raj.malhotra@example.com",
    password: "password123",
    address: "100, Parel, Mumbai"
  },
  {
    fullName: "Pooja Desai",
    age: 27,
    gender: "Female",
    contact: "9876543217",
    email: "pooja.desai@example.com",
    password: "password123",
    address: "14, Law Garden, Ahmedabad"
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
    age: 35,
    gender: "Female",
    contact: "9876543219",
    email: "anita.joseph@example.com",
    password: "password123",
    address: "88, Marine Drive, Kochi"
  }
];

module.exports = { doctors, patients };