//Ryan Ramadhan || FSW 6

const cars = [
  {
    id : "6e2bc663-5197-441a-957b-bc75e4a2da7c",
    plate: "DBH-3491",
    transmission: "Automatic",
    manufacture: "Ford",
    model: "F150",
    available: true,
    type: "Sedan",
    year: 2022,
    options: [
      "Cruise Control",
      "Tinted Glass",
      "Tinted Glass",
      "Tinted Glass",
      "AM/FM Stereo"
    ],
    specs: [
      "Brake assist",
      "Leather-wrapped shift knob",
      "Glove box lamp",
      "Air conditioning w/in-cabin microfilter",
      "Body color folding remote-controlled pwr mirrors",
      "Dual-stage front airbags w/occupant classification system"
    ]
  },
  {
    id: "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
    plate: "WXB-3984",
    transmission: "Automatic",
    manufacture: "BMW",
    model: "X5",
    available: false,
    type: "Convertible",
    year: 2019,
    options: [
      "Keyless Entry",
      "Power Windows",
      "MP3 (Single Disc)",
      "CD (Multi Disc)",
      "Navigation"
    ],
    specs: [
      "Rear passenger map pockets",
      "Electrochromic rearview mirror",
      "Dual chrome exhaust tips",
      "Locking glove box",
      "Pwr front vented disc/rear drum brakes"
    ]
  },
  {
    id: "bf6b5c43-1377-4ae0-8908-310c64266f81",
    plate: "OSL-4224",
    transmission: "Automanual",
    manufacture: "Lincoln",
    model: "MKZ",
    available: true,
    type: "Sedan",
    year: 2021,
    options: [
      "Bucket Seats",
      "Airbag: Passenger",
      "Airbag: Driver",
      "Power Seats",
      "Airbag: Side",
      "Antilock Brakes",
      "CD (Multi Disc)"
    ],
    specs: [
      "Driver & front passenger map pockets",
      "Direct-type tire pressure monitor system",
      "Cargo area lamp",
      "Glove box lamp",
      "Silver finish interior door handles",
      "Driver & front passenger advanced multistage airbags w/occupant sensors",
      "Silver accent IP trim finisher -inc: silver shifter finisher",
      "Fasten seat belt warning light/chime"
    ]
  }
]

function sortCarByYearAscendingly(cars){
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log('sebelum sort', cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // Tulis code-mu disini
  // Manual - Bubble Sort
  for (let i = 0; i <= result.length - 2; i++) {
    for (let j = i + 1; j <= result.length - 1; j++) {
      if (result[j].year < result[i].year) {
        let swap = result[j];
        result[j] = result[i];
        result[i] = swap;
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara ascending
  
  return result;
}

const cek = sortCarByYearAscendingly(cars);
console.log('');
console.log('sudah sort',cek);
