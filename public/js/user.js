const users = [
  {
    name: "Amit Sharma",
    email: "amit.sharma@example.com",
    city: "Delhi",
    address: "123 MG Road",
    pin: "110001",
    gender: "Male",
  },
  {
    name: "Priya Das",
    email: "priya.das@example.com",
    city: "Kolkata",
    address: "45 Salt Lake",
    pin: "700091",
    gender: "Female",
  },
  {
    name: "Rahul Verma",
    email: "rahul.verma@example.com",
    city: "Mumbai",
    address: "78 Bandra West",
    pin: "400050",
    gender: "Male",
  },
  {
    name: "Sneha Patel",
    email: "sneha.patel@example.com",
    city: "Ahmedabad",
    address: "56 CG Road",
    pin: "380009",
    gender: "Female",
  },
  {
    name: "Arjun Mehta",
    email: "arjun.mehta@example.com",
    city: "Jaipur",
    address: "19 Malviya Nagar",
    pin: "302017",
    gender: "Male",
  },
  {
    name: "Divya Rao",
    email: "divya.rao@example.com",
    city: "Bengaluru",
    address: "67 Indiranagar",
    pin: "560038",
    gender: "Female",
  },
  {
    name: "Ravi Kumar",
    email: "ravi.kumar@example.com",
    city: "Chennai",
    address: "89 T Nagar",
    pin: "600017",
    gender: "Male",
  },
  {
    name: "Neha Singh",
    email: "neha.singh@example.com",
    city: "Patna",
    address: "22 Boring Road",
    pin: "800001",
    gender: "Female",
  },
  {
    name: "Vikram Joshi",
    email: "vikram.joshi@example.com",
    city: "Pune",
    address: "13 FC Road",
    pin: "411004",
    gender: "Male",
  },
  {
    name: "Pooja Nair",
    email: "pooja.nair@example.com",
    city: "Kochi",
    address: "76 Marine Drive",
    pin: "682011",
    gender: "Female",
  },

  {
    name: "Manish Gupta",
    email: "manish.gupta@example.com",
    city: "Lucknow",
    address: "91 Gomti Nagar",
    pin: "226010",
    gender: "Male",
  },
  {
    name: "Ritika Sahu",
    email: "ritika.sahu@example.com",
    city: "Bhopal",
    address: "32 MP Nagar",
    pin: "462011",
    gender: "Female",
  },
  {
    name: "Karan Kapoor",
    email: "karan.kapoor@example.com",
    city: "Chandigarh",
    address: "48 Sector 17",
    pin: "160017",
    gender: "Male",
  },
  {
    name: "Ishita Roy",
    email: "ishita.roy@example.com",
    city: "Howrah",
    address: "52 Shibpur",
    pin: "711102",
    gender: "Female",
  },
  {
    name: "Ramesh Tiwari",
    email: "ramesh.tiwari@example.com",
    city: "Varanasi",
    address: "14 Lanka",
    pin: "221005",
    gender: "Male",
  },
  {
    name: "Anjali Sinha",
    email: "anjali.sinha@example.com",
    city: "Ranchi",
    address: "29 Main Road",
    pin: "834001",
    gender: "Female",
  },
  {
    name: "Suresh Yadav",
    email: "suresh.yadav@example.com",
    city: "Kanpur",
    address: "61 P Road",
    pin: "208001",
    gender: "Male",
  },
  {
    name: "Tina George",
    email: "tina.george@example.com",
    city: "Thiruvananthapuram",
    address: "88 Kowdiar",
    pin: "695003",
    gender: "Female",
  },
  {
    name: "Rohit Dey",
    email: "rohit.dey@example.com",
    city: "Durgapur",
    address: "34 City Center",
    pin: "713216",
    gender: "Male",
  },
  {
    name: "Megha Arora",
    email: "megha.arora@example.com",
    city: "Amritsar",
    address: "73 GT Road",
    pin: "143001",
    gender: "Female",
  },

  {
    name: "Abhishek Paul",
    email: "abhishek.paul@example.com",
    city: "Agartala",
    address: "77 Lake Road",
    pin: "799001",
    gender: "Male",
  },
  {
    name: "Kavya Iyer",
    email: "kavya.iyer@example.com",
    city: "Coimbatore",
    address: "60 RS Puram",
    pin: "641002",
    gender: "Female",
  },
  {
    name: "Harsh Bansal",
    email: "harsh.bansal@example.com",
    city: "Indore",
    address: "21 Palasia",
    pin: "452001",
    gender: "Male",
  },
  {
    name: "Anusha Reddy",
    email: "anusha.reddy@example.com",
    city: "Hyderabad",
    address: "11 Banjara Hills",
    pin: "500034",
    gender: "Female",
  },
  {
    name: "Nikhil Jain",
    email: "nikhil.jain@example.com",
    city: "Gwalior",
    address: "33 Lashkar",
    pin: "474001",
    gender: "Male",
  },
  {
    name: "Shruti Kale",
    email: "shruti.kale@example.com",
    city: "Nashik",
    address: "89 College Road",
    pin: "422005",
    gender: "Female",
  },
  {
    name: "Deepak Dubey",
    email: "deepak.dubey@example.com",
    city: "Jabalpur",
    address: "14 Wright Town",
    pin: "482001",
    gender: "Male",
  },
  {
    name: "Swati Mishra",
    email: "swati.mishra@example.com",
    city: "Raipur",
    address: "58 Shankar Nagar",
    pin: "492007",
    gender: "Female",
  },
  {
    name: "Yash Thakur",
    email: "yash.thakur@example.com",
    city: "Meerut",
    address: "44 Hapur Road",
    pin: "250002",
    gender: "Male",
  },
  {
    name: "Rina Bose",
    email: "rina.bose@example.com",
    city: "Siliguri",
    address: "17 Hill Cart Road",
    pin: "734001",
    gender: "Female",
  },

  {
    name: "Siddharth Saxena",
    email: "siddharth.saxena@example.com",
    city: "Allahabad",
    address: "83 Civil Lines",
    pin: "211001",
    gender: "Male",
  },
  {
    name: "Juhi Rawat",
    email: "juhi.rawat@example.com",
    city: "Dehradun",
    address: "28 Rajpur Road",
    pin: "248001",
    gender: "Female",
  },
  {
    name: "Tarun Khanna",
    email: "tarun.khanna@example.com",
    city: "Panipat",
    address: "95 Model Town",
    pin: "132103",
    gender: "Male",
  },
  {
    name: "Preeti Malhotra",
    email: "preeti.malhotra@example.com",
    city: "Faridabad",
    address: "62 Nehru Place",
    pin: "121001",
    gender: "Female",
  },
  {
    name: "Rajat Sen",
    email: "rajat.sen@example.com",
    city: "Asansol",
    address: "53 Burnpur Road",
    pin: "713304",
    gender: "Male",
  },
  {
    name: "Ayesha Ali",
    email: "ayesha.ali@example.com",
    city: "Guwahati",
    address: "37 GS Road",
    pin: "781005",
    gender: "Female",
  },
  {
    name: "Aman Hussain",
    email: "aman.hussain@example.com",
    city: "Noida",
    address: "15 Sector 62",
    pin: "201301",
    gender: "Male",
  },
  {
    name: "Kirti Bhatt",
    email: "kirti.bhatt@example.com",
    city: "Udaipur",
    address: "25 Fatehpura",
    pin: "313001",
    gender: "Female",
  },
  {
    name: "Mohit Rana",
    email: "mohit.rana@example.com",
    city: "Shimla",
    address: "31 Mall Road",
    pin: "171001",
    gender: "Male",
  },
  {
    name: "Lavanya Das",
    email: "lavanya.das@example.com",
    city: "Jamshedpur",
    address: "70 Bistupur",
    pin: "831001",
    gender: "Female",
  },
];

module.exports = users;
