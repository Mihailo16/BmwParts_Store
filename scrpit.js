const formatPrice = (value) =>
  new Intl.NumberFormat('sr-RS', { style: 'currency', currency: 'EUR' }).format(value)

const products = [
  {
    id: 1,
    oem: '07149139223',
    name: 'Stezna obruč',
    price: 8,
    category: 'Motor',
    model: 'E30',
    description: 'Stezna obruč, 2 komada, D=7MM',
    image: '07149139223.jpg',
  },
  {
    id: 2,
    oem: '61131379359',
    name: 'Držač kablova',
    price: 12,
    category: 'Motor',
    model: 'E30',
    description: 'Držač kablova, 2 komada, D=7MM',
    image: '61131379359.jpg',
  },
  {
    id: 3,
    oem: '11781310838',
    name: 'Lambda sonda',
    price: 145,
    category: 'Motor',
    model: 'E30',
    description: 'Lambda sonda, 1 komad',
    image: '11781310838.jpg',
  },
  {
    id: 4,
    oem: '11621308805',
    name: 'Ispušni kolektor',
    price: 420,
    category: 'Motor',
    model: 'E30',
    description: 'Ispušni kolektor, 42X2 + KAT, 1 komad',
    image: '11621308805.jpg',
  },
  {
    id: 5,
    oem: '07119913855',
    name: 'Šestougaoni vijak',
    price: 6,
    category: 'Motor',
    model: 'E30',
    description: 'Šestougaoni vijak M10X45, 3 komada',
    image: '07119913855.jpg',
  },
  {
    id: 6,
    oem: '11621312992',
    name: 'Brtva bez azbesta',
    price: 18,
    category: 'Motor',
    model: 'E30',
    description: 'Brtva bez azbesta, 4 komada',
    image: '11621312992.jpg',
  },
  {
    id: 7,
    oem: '18301737774',
    name: 'Šestougaona matica',
    price: 4,
    category: 'Motor',
    model: 'E30',
    description: 'Šestougaona matica M10, 3 komada',
    image: '18301737774.jpg',
  },
  {
    id: 8,
    oem: '07119919210',
    name: 'Zaptivni čep',
    price: 5,
    category: 'Motor',
    model: 'E30',
    description: 'Zaptivni čep CM8X1, 4 komada',
    image: '07119919210.jpg',
  },
  {
    id: 9,
    oem: '34111153517',
    name: 'Prednji kočioni disk',
    price: 185,
    category: 'Kočnice',
    model: 'E46',
    description: 'Prednji kočioni disk, ventilirani, 325mm',
    image: '34111153517.jpg',
  },
  {
    id: 10,
    oem: '34111153518',
    name: 'Komplet prednjih kočionih pločica',
    price: 95,
    category: 'Kočnice',
    model: 'E46',
    description: 'Komplet prednjih kočionih pločica',
    image: '34111153518.jpg',
  },
  {
    id: 11,
    oem: '51218244521',
    name: 'Prednji branik',
    price: 380,
    category: 'Eksterijer',
    model: 'E90',
    description: 'Prednji branik, OEM, bez boje',
    image: '51218244521.jpg',
  },
  {
    id: 12,
    oem: '51218244522',
    name: 'Zadnji branik',
    price: 360,
    category: 'Eksterijer',
    model: 'E90',
    description: 'Zadnji branik, OEM, bez boje',
    image: '51218244522.jpg',
  },
  {
    id: 13,
    oem: '61319238765/61319238766',
    name: 'Xenon E91 farovi',
    price: 1750,
    category: 'Elektronika',
    model: 'E91',
    description: 'Komplet Xenon farova, levi i desni, OEM',
    image: '61319238765.jpg',
  },
  {
    id: 14,
    oem: '32302229781',
    name: 'Volan',
    price: 650,
    category: 'Enterijer',
    model: 'E92',
    description: 'Volan, koža, sa M logotipom',
    image: '32302229781.jpg',
  },
  {
    id: 15,
    oem: '51418050689',
    name: 'Spoljašnja kvaka vrata',
    price: 85,
    category: 'Eksterijer',
    model: 'E92',
    description: 'Spoljašnja kvaka vrata, leva prednja',
    image: '51418050689.jpg',
  },
  {
    id: 16,
    oem: '11427837840',
    name: 'Filter ulja',
    price: 22,
    category: 'Servis',
    model: 'F80',
    description: 'Filter ulja, OEM, za S55 motor',
    image: '11427837840.jpg',
  },
  {
    id: 17,
    oem: '11427837841',
    name: 'Filter vazduha',
    price: 45,
    category: 'Servis',
    model: 'F80',
    description: 'Filter vazduha, OEM, za S55 motor',
    image: '11427837841.jpg',
  },
  {
    id: 18,
    oem: '36112284997',
    name: 'Felna 19"',
    price: 1250,
    category: 'Performanse',
    model: 'F87',
    description: 'Felna 19", M2 Competition, Jet Black',
    image: '36112284997.jpg',
    tag: 'Top izbor',
  },
  {
    id: 19,
    oem: '36112284998',
    name: 'Felna 19"',
    price: 1250,
    category: 'Performanse',
    model: 'F87',
    description: 'Felna 19", M2 Competition, Jet Black',
    image: '36112284998.jpg',
  },
  {
    id: 20,
    oem: '11427837842',
    name: 'Svećica',
    price: 95,
    category: 'Motor',
    model: 'G80',
    description: 'Svećica, OEM, za S58 motor, 6 komada',
    image: '11427837842.jpg',
  },
  {
    id: 21,
    oem: '11427837843',
    name: 'Kalem za paljenje',
    price: 320,
    category: 'Motor',
    model: 'G80',
    description: 'Kalem za paljenje, OEM, za S58 motor, 6 komada',
    image: '11427837843.jpg',
  },
  {
    id: 22,
    oem: '51418050690',
    name: 'Bubrežasta rešetka',
    price: 280,
    category: 'Eksterijer',
    model: 'G80',
    description: 'Bubrežasta rešetka, M3, crna',
    image: '51418050690.jpg',
    tag: 'Novo',
  },
  {
    id: 23,
    oem: '32302229782',
    name: 'Ručica menjača',
    price: 125,
    category: 'Enterijer',
    model: 'E60',
    description: 'Ručica menjača, koža, sa M logotipom',
    image: '32302229782.jpg',
  },
  {
    id: 24,
    oem: '51418050691',
    name: 'Spoljašnji retrovizor',
    price: 195,
    category: 'Eksterijer',
    model: 'E28',
    description: 'Spoljašnji retrovizor, levi, električni',
    image: '51418050691.jpg',
  },
  {
    id: 25,
    oem: '34111153519',
    name: 'Kočiona čeljust',
    price: 450,
    category: 'Kočnice',
    model: 'E46',
    description: 'Kočiona čeljust, prednja, leva',
    image: '34111153519.jpg',
  },
  {
    id: 26,
    oem: '61319238767',
    name: 'Zadnje svetlo',
    price: 320,
    category: 'Elektronika',
    model: 'E91',
    description: 'Zadnje svetlo, levo, LED',
    image: '61319238767.jpg',
  },
  {
    id: 27,
    oem: '32302229783',
    name: 'Presvlaka sedišta',
    price: 420,
    category: 'Enterijer',
    model: 'E92',
    description: 'Presvlaka sedišta, koža, crna, prednja leva',
    image: '32302229783.jpg',
  },
]

const state = {
  category: 'Sve',
  sort: 'recommended',
  search: '',
  cart: [],
  selectedModel: null,
  quickFilter: null,
  discountCode: null,
  discountPercent: 0,
}

const elements = {
  categoryPills: document.getElementById('categoryPills'),
  productGrid: document.getElementById('productGrid'),
  searchInput: document.getElementById('searchInput'),
  sortSelect: document.getElementById('sortSelect'),
  cartItems: document.getElementById('cartItems'),
  cartSubtitle: document.getElementById('cartSubtitle'),
  cartCount: document.getElementById('cartCount'),
  cartTotal: document.getElementById('cartTotal'),
  checkoutBtn: document.getElementById('checkoutBtn'),
  newsletterForm: document.getElementById('newsletterForm'),
  year: document.getElementById('year'),
  discountCodeInput: document.getElementById('discountCodeInput'),
  applyDiscountBtn: document.getElementById('applyDiscountBtn'),
  discountMessage: document.getElementById('discountMessage'),
  vinInput: document.getElementById('vinInput'),
  vinCheckBtn: document.getElementById('vinCheckBtn'),
  vinBimmerWorkBtn: document.getElementById('vinBimmerWorkBtn'),
  vinResult: document.getElementById('vinResult'),
  modelFilters: document.getElementById('modelFilters'),
  quickFilters: document.getElementById('quickFilters'),
  resetFiltersBtn: document.getElementById('resetFiltersBtn'),
  resultsCount: document.getElementById('resultsCount'),
  productModal: document.getElementById('productModal'),
  modalContent: document.getElementById('modalContent'),
  modalClose: document.querySelector('.modal-close'),
}

// Validacija VIN formata
const validateVinFormat = (vin) => {
  if (!vin || typeof vin !== 'string') {
    return { valid: false, error: 'VIN mora biti tekst' }
  }

  const vinUpper = vin.trim().toUpperCase()

  // Provera dužine
  if (vinUpper.length !== 17) {
    return { valid: false, error: 'VIN mora imati tačno 17 karaktera' }
  }

  // Provera zabranjenih karaktera (I, O, Q)
  if (/[IOQ]/.test(vinUpper)) {
    return { valid: false, error: 'VIN ne sme sadržati slova I, O ili Q' }
  }

  // Provera da su svi karakteri validni (samo slova i brojevi)
  if (!/^[A-HJ-NPR-Z0-9]{17}$/.test(vinUpper)) {
    return { valid: false, error: 'VIN sadrži nevalidne karaktere' }
  }

  return { valid: true, vin: vinUpper }
}

// Parsiranje VIN strukture
const parseVinStructure = (vin) => {
  if (!vin || vin.length !== 17) {
    return null
  }

  const wmi = vin.substring(0, 3)

  return {
    wmi: wmi,                        // World Manufacturer Identifier
    vds: vin.substring(3, 9),        // Vehicle Descriptor Section
    vis: vin.substring(9, 17),       // Vehicle Identifier Section
    position4: vin[3],              // Model line
    position5: vin[4],              // Series
    position6: vin[5],              // Body type
    position7: vin[6],              // Engine
    position8: vin[7],              // Restraint system
    position9: vin[8],              // Check digit
    position10: vin[9],            // Model year
    position11: vin[10],           // Plant code
    year: getModelYear(vin[9], wmi),    // Parsirani godina
  }
}

// Prepoznavanje godine iz VIN pozicije 10
// VIN koristi cikličnu mapu - karakteri se ponavljaju svakih 30 godina
// Za BMW vozila, koristimo kontekstualnu logiku na osnovu WMI i pozicija
const getModelYear = (char, wmi = null) => {
  // Ako je karakter broj (2001-2009), direktno vrati godinu
  if (/[1-9]/.test(char)) {
    return 2000 + parseInt(char)
  }

  // Za slova, koristimo mapu sa prioritetom novijih godina za BMW
  // Pošto BMW koristi WBA/WBS/5UX, većina vozila je iz 2000-ih i novijih
  const yearMap = {
    'A': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2010 : 1980,
    'B': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2011 : 1981,
    'C': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2012 : 1982,
    'D': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2013 : 1983,
    'E': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2014 : 1984,
    'F': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2015 : 1985,
    'G': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2016 : 1986,
    'H': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2017 : 1987,
    'J': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2018 : 1988,
    'K': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2019 : 1989,
    'L': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2020 : 1990,
    'M': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2021 : 1991,
    'N': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2022 : 1992,
    'P': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2023 : 1993,
    'R': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2024 : 1994,
    'S': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2025 : 1995,
    'T': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2026 : 1996,
    'V': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2027 : 1997,
    'W': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2028 : 1998,
    'X': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2029 : 1999,
    'Y': wmi === 'WBA' || wmi === 'WBS' || wmi === '5UX' ? 2030 : 2000,
  }
  
  return yearMap[char] || null
}

// Mapiranje BMW modela na VIN pattern-e
const vinModelMap = {
  E28: [
    { wmi: 'WBA', pos6: ['5', '2'], years: [1981, 1988] },
    { pattern: /^WBA[A-Z0-9]{2}[A-Z0-9]{2}[52][0-9]{2}/ },
  ],
  E30: [
    { wmi: 'WBA', pos6: ['1', '3'], years: [1982, 1994] },
    // E30 ne bi trebalo da pokriva VF kod (VF = E90)
    { pattern: /^WBA(?!VF)[A-Z0-9]{2}[A-Z0-9]{2}[13][0-9]{2}/ },
  ],
  E46: [
    { wmi: 'WBA', pos6: ['3', '4'], years: [1998, 2006] },
    { pattern: /^WBA[A-Z0-9]{2}[A-Z0-9]{2}[34][0-9]{2}/ },
  ],
  E60: [
    { wmi: 'WBA', pos6: ['5'], years: [2003, 2010] },
    { wmi: '5UX', pos6: ['5'], years: [2003, 2010] },
    { pattern: /^WBA[A-Z0-9]{2}[A-Z0-9]{2}5[0-9]{2}/ },
    { pattern: /^5UX[A-Z0-9]{2}[A-Z0-9]{2}5[0-9]{2}/ },
  ],
  E90: [
    // Prioritet: Model kod VF = 3 serija sedan = E90
    { wmi: 'WBA', modelCode: 'VF' }, // VF kod = 3 serija sedan = E90
    { wmi: 'WBA', modelCode: 'VF', pos6: ['1', '3'], years: [2005, 2012] },
    // E90 sedan - pozicija 6 može biti 1 ili 3
    { wmi: 'WBA', pos6: ['1', '3'], years: [2005, 2012] },
    { wmi: '5UX', pos6: ['1', '3'], years: [2005, 2012] },
    // Pattern matching - specifični za E90 sa VF kodom
    { pattern: /^WBAVF[0-9A-Z]{5}/ }, // Opšti pattern za VF kod (3 serija sedan = E90)
    { pattern: /^WBAVF[0-9A-Z]{2}[13][0-9A-Z]{2}/ }, // VF + pozicija 6 = 1 ili 3
    // Opšti pattern za E90
    { pattern: /^WBA[A-Z0-9]{2}[A-Z0-9]{2}[13][0-9]{2}/ },
    { pattern: /^5UX[A-Z0-9]{2}[A-Z0-9]{2}[13][0-9]{2}/ },
  ],
  E91: [
    { wmi: 'WBA', pos6: ['3'], years: [2005, 2012], bodyType: 'Touring' },
    { wmi: '5UX', pos6: ['3'], years: [2005, 2012], bodyType: 'Touring' },
    { pattern: /^WBA[A-Z0-9]{2}[A-Z0-9]{2}3[0-9]{2}/ },
    { pattern: /^5UX[A-Z0-9]{2}[A-Z0-9]{2}3[0-9]{2}/ },
  ],
  E92: [
    { wmi: 'WBA', pos6: ['3'], years: [2006, 2013], bodyType: 'Coupe' },
    { wmi: '5UX', pos6: ['3'], years: [2006, 2013], bodyType: 'Coupe' },
    { pattern: /^WBA[A-Z0-9]{2}[A-Z0-9]{2}3[0-9]{2}/ },
    { pattern: /^5UX[A-Z0-9]{2}[A-Z0-9]{2}3[0-9]{2}/ },
  ],
  F80: [
    { wmi: 'WBS', pos6: ['3'], years: [2014, 2018] },
    { pattern: /^WBS[A-Z0-9]{2}[A-Z0-9]{2}3[0-9]{2}/ },
  ],
  F87: [
    { wmi: 'WBS', pos6: ['2'], years: [2016, 2021] },
    { pattern: /^WBS[A-Z0-9]{2}[A-Z0-9]{2}2[0-9]{2}/ },
  ],
  G80: [
    { wmi: 'WBS', pos6: ['3'], years: [2021, 2030] },
    { wmi: '5UX', pos6: ['3'], years: [2021, 2030] },
    { pattern: /^WBS[A-Z0-9]{2}[A-Z0-9]{2}3[0-9]{2}/ },
    { pattern: /^5UX[A-Z0-9]{2}[A-Z0-9]{2}3[0-9]{2}/ },
  ],
}

// Glavna funkcija za prepoznavanje modela iz VIN-a
const detectModelFromVin = (vin) => {
  // Validacija formata
  const validation = validateVinFormat(vin)
  if (!validation.valid) {
    return { model: null, error: validation.error, details: null }
  }

  const vinUpper = validation.vin
  const vinData = parseVinStructure(vinUpper)

  if (!vinData) {
    return { model: null, error: 'Neuspešno parsiranje VIN strukture', details: null }
  }

  // Provera da li je BMW (WBA, WBS, 5UX su BMW kodovi)
  if (!['WBA', 'WBS', '5UX'].includes(vinData.wmi)) {
    return { model: null, error: 'VIN ne odgovara BMW vozilu', details: vinData }
  }

  // Detaljno prepoznavanje modela - PRVO strukturno sa model kodom (najspecifičnije)
  for (const [model, rules] of Object.entries(vinModelMap)) {
    for (const rule of rules) {
      // Strukturno prepoznavanje sa model kodom (najviši prioritet)
      if (rule.wmi && rule.wmi === vinData.wmi && rule.modelCode) {
        const modelCode = vinData.position4 + vinData.position5
        if (rule.modelCode === modelCode) {
          // Model kod se poklapa - proveri dodatne uslove ako postoje
          if (rule.pos6 && rule.pos6.includes(vinData.position6)) {
            if (rule.years && vinData.year) {
              const [minYear, maxYear] = rule.years
              if (vinData.year >= minYear && vinData.year <= maxYear) {
                return {
                  model: model,
                  error: null,
                  details: {
                    ...vinData,
                    detectedModel: model,
                    confidence: 'high'
                  }
                }
              }
            } else {
              return {
                model: model,
                error: null,
                details: {
                  ...vinData,
                  detectedModel: model,
                  confidence: 'high'
                }
              }
            }
          } else if (!rule.pos6) {
            // Samo model kod, bez pozicije 6
            return {
              model: model,
              error: null,
              details: {
                ...vinData,
                detectedModel: model,
                confidence: 'high'
              }
            }
          }
        }
      }
    }
  }

  // DRUGO - specifični pattern-e (kao što je VF kod)
  for (const [model, rules] of Object.entries(vinModelMap)) {
    for (const rule of rules) {
      // Specifični pattern-e koji počinju sa specifičnim kodovima
      if (rule.pattern && rule.pattern.test(vinUpper)) {
        // Proveri da li je specifičan pattern (npr. VF kod)
        const modelCode = vinData.position4 + vinData.position5
        if (rule.pattern.source.includes('VF') && modelCode === 'VF') {
          return {
            model: model,
            error: null,
            details: {
              ...vinData,
              detectedModel: model,
              confidence: 'high'
            }
          }
        }
      }
    }
  }

  // TREĆE - strukturno prepoznavanje bez model koda
  for (const [model, rules] of Object.entries(vinModelMap)) {
    for (const rule of rules) {
      if (rule.wmi && rule.wmi === vinData.wmi && !rule.modelCode) {
        // Provera pozicije 6
        if (rule.pos6 && rule.pos6.includes(vinData.position6)) {
          if (rule.years && vinData.year) {
            const [minYear, maxYear] = rule.years
            if (vinData.year >= minYear && vinData.year <= maxYear) {
              return {
                model: model,
                error: null,
                details: {
                  ...vinData,
                  detectedModel: model,
                  confidence: 'medium'
                }
              }
            }
          }
        }
      }
    }
  }

  // ČETVRTO - opšti pattern matching (najniži prioritet)
  for (const [model, rules] of Object.entries(vinModelMap)) {
    for (const rule of rules) {
      if (rule.pattern && rule.pattern.test(vinUpper)) {
        // Izbegni pattern-e koji bi mogli pogrešno da prepoznaju (npr. E30 ne bi trebalo da pokriva VF kod)
        const modelCode = vinData.position4 + vinData.position5
        if (modelCode === 'VF' && model !== 'E90') {
          // Preskoči ako je VF kod a model nije E90
          continue
        }
        
        return {
          model: model,
          error: null,
          details: {
            ...vinData,
            detectedModel: model,
            confidence: 'medium'
          }
        }
      }
    }
  }

  // Sve je već provereno u prethodnim koracima

  return {
    model: null,
    error: 'Model nije prepoznat iz VIN broja',
    details: vinData
  }
}

const extractModelFromApiResponse = (data) => {
  if (!data || !data.Results || data.Results.length === 0) {
    return null
  }

  const results = data.Results
  let modelSeries = null
  let modelYear = null
  let make = null
  let bodyClass = null

  for (const result of results) {
    if (result.Variable === 'Make' && result.Value && result.Value !== 'Not Applicable') {
      make = result.Value
    }
    if (result.Variable === 'Model' && result.Value && result.Value !== 'Not Applicable') {
      modelSeries = result.Value
    }
    if (result.Variable === 'Model Year' && result.Value && result.Value !== 'Not Applicable') {
      modelYear = result.Value
    }
    if (result.Variable === 'Body Class' && result.Value && result.Value !== 'Not Applicable') {
      bodyClass = result.Value
    }
  }

  if (!make || make.toUpperCase() !== 'BMW') {
    return null
  }

  if (!modelSeries) {
    return null
  }

  const modelSeriesUpper = modelSeries.toUpperCase()
  const bodyClassUpper = bodyClass ? bodyClass.toUpperCase() : ''

  if (modelSeriesUpper.includes('E28') || (modelSeriesUpper.includes('5 SERIES') && modelYear && parseInt(modelYear) < 1988)) {
    return 'E28'
  }
  if (modelSeriesUpper.includes('E30') || (modelSeriesUpper.includes('3 SERIES') && modelYear && parseInt(modelYear) >= 1982 && parseInt(modelYear) <= 1994)) {
    return 'E30'
  }
  if (modelSeriesUpper.includes('E46') || (modelSeriesUpper.includes('3 SERIES') && modelYear && parseInt(modelYear) >= 1998 && parseInt(modelYear) <= 2006)) {
    return 'E46'
  }
  if (modelSeriesUpper.includes('E60') || (modelSeriesUpper.includes('5 SERIES') && modelYear && parseInt(modelYear) >= 2003 && parseInt(modelYear) <= 2010)) {
    return 'E60'
  }
  if (modelSeriesUpper.includes('E90') || (modelSeriesUpper.includes('3 SERIES') && modelYear && parseInt(modelYear) >= 2005 && parseInt(modelYear) <= 2012)) {
    return 'E90'
  }
  if (modelSeriesUpper.includes('E91') || (modelSeriesUpper.includes('3 SERIES') && (bodyClassUpper.includes('WAGON') || bodyClassUpper.includes('TOURING')))) {
    return 'E91'
  }
  if (modelSeriesUpper.includes('E92') || (modelSeriesUpper.includes('3 SERIES') && bodyClassUpper.includes('COUPE'))) {
    return 'E92'
  }
  if (modelSeriesUpper.includes('F80') || (modelSeriesUpper.includes('M3') && modelYear && parseInt(modelYear) >= 2014 && parseInt(modelYear) <= 2018)) {
    return 'F80'
  }
  if (modelSeriesUpper.includes('F87') || modelSeriesUpper.includes('M2')) {
    return 'F87'
  }
  if (modelSeriesUpper.includes('G80') || (modelSeriesUpper.includes('M3') && modelYear && parseInt(modelYear) >= 2021)) {
    return 'G80'
  }

  return null
}

const checkVin = async () => {
  const vinInput = elements.vinInput.value.trim()

  if (!vinInput) {
    elements.vinResult.textContent = ''
    elements.vinResult.className = 'vin-result'
    return
  }

  // Validacija VIN formata
  const validation = validateVinFormat(vinInput)
  if (!validation.valid) {
    elements.vinResult.textContent = validation.error
    elements.vinResult.className = 'vin-result error'
    state.selectedModel = null
    buildModelFilters() // Resetuj filtere
    buildCategories() // Resetuj kategorije
    renderProducts()
    return
  }

  const vin = validation.vin

  elements.vinResult.textContent = 'Proveravam VIN...'
  elements.vinResult.className = 'vin-result'
  elements.vinCheckBtn.disabled = true

  // Prvo pokušaj lokalno prepoznavanje
  const localDetection = detectModelFromVin(vin)
  
  if (localDetection.model) {
    state.selectedModel = localDetection.model
    const yearInfo = localDetection.details?.year ? ` (${localDetection.details.year})` : ''
    const confidenceInfo = localDetection.details?.confidence === 'high' ? 'visokog' : 'srednjeg'
    elements.vinResult.innerHTML = `Prepoznat model: <strong>${localDetection.model}</strong>${yearInfo} - pouzdanost ${confidenceInfo}. Prikazani su delovi za ovaj model. <a href="https://bimmer.work/?vin=${vin}" target="_blank" style="color: var(--accent); text-decoration: underline; margin-left: 8px;">Vidi detalje na bimmer.work →</a>`
    elements.vinResult.className = 'vin-result success'
    buildModelFilters() // Ažuriraj filtere za model
    buildCategories() // Ažuriraj kategorije za filtrirani model
    renderProducts()
    elements.vinCheckBtn.disabled = false
    return
  }

  // Ako lokalno ne radi, pokušaj sa bimmer.work
  try {
    const bimmerWorkUrl = `https://bimmer.work/`
    
    const response = await fetch(bimmerWorkUrl, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      }
    })

    if (!response.ok) {
      throw new Error('Neuspešan zahtev')
    }

    const html = await response.text()
    
    const formMatch = html.match(/<form[^>]*action="([^"]*)"[^>]*>/i)
    const csrfMatch = html.match(/name="([^"]*csrf[^"]*)"[^>]*value="([^"]*)"/i)
    
    if (formMatch) {
      const formAction = formMatch[1]
      const formData = new FormData()
      formData.append('vin', vin)
      
      if (csrfMatch) {
        formData.append(csrfMatch[1], csrfMatch[2])
      }

      const decodeResponse = await fetch(formAction.startsWith('http') ? formAction : `https://bimmer.work${formAction}`, {
        method: 'POST',
        mode: 'cors',
        body: formData,
        headers: {
          'Accept': 'application/json, text/html, */*',
        }
      })

      if (decodeResponse.ok) {
        const contentType = decodeResponse.headers.get('content-type')
        if (contentType && contentType.includes('application/json')) {
          const data = await decodeResponse.json()
          const apiModel = extractModelFromBimmerWork(data)
          
          if (apiModel) {
            state.selectedModel = apiModel
            elements.vinResult.innerHTML = `Prepoznat model: <strong>${apiModel}</strong> (bimmer.work). Prikazani su delovi za ovaj model. <a href="https://bimmer.work/?vin=${vin}" target="_blank" style="color: var(--accent); text-decoration: underline; margin-left: 8px;">Vidi detalje na bimmer.work →</a>`
            elements.vinResult.className = 'vin-result success'
            buildModelFilters() // Ažuriraj filtere za model
            buildCategories() // Ažuriraj kategorije za filtrirani model
            renderProducts()
            elements.vinCheckBtn.disabled = false
            return
          }
        } else {
          const htmlResponse = await decodeResponse.text()
          const apiModel = extractModelFromBimmerWorkHTML(htmlResponse)
          
          if (apiModel) {
            state.selectedModel = apiModel
            elements.vinResult.innerHTML = `Prepoznat model: <strong>${apiModel}</strong> (bimmer.work). Prikazani su delovi za ovaj model. <a href="https://bimmer.work/?vin=${vin}" target="_blank" style="color: var(--accent); text-decoration: underline; margin-left: 8px;">Vidi detalje na bimmer.work →</a>`
            elements.vinResult.className = 'vin-result success'
            buildModelFilters() // Ažuriraj filtere za model
            buildCategories() // Ažuriraj kategorije za filtrirani model
            renderProducts()
            elements.vinCheckBtn.disabled = false
            return
          }
        }
      }
    }
  } catch (error) {
    console.error('Bimmer.work API greška:', error)
  }

  // Ako ništa ne radi, prikaži grešku
  state.selectedModel = null
  const errorMsg = localDetection.error || 'Model nije prepoznat'
  const vinDetails = localDetection.details
  let detailsInfo = ''
  
  if (vinDetails) {
    detailsInfo = `<br><small style="opacity: 0.7;">WMI: ${vinDetails.wmi} | Godina: ${vinDetails.year || 'N/A'}</small>`
  }
  
  elements.vinResult.innerHTML = `${errorMsg}. Pokušajte sa drugim VIN brojem ili <a href="https://bimmer.work/" target="_blank" style="color: #ff8888; text-decoration: underline;">pretražite na bimmer.work</a>.${detailsInfo}`
  elements.vinResult.className = 'vin-result error'
  buildModelFilters() // Resetuj filtere
  buildCategories() // Resetuj kategorije
  renderProducts()
  elements.vinCheckBtn.disabled = false
}

const extractModelFromBimmerWork = (data) => {
  if (!data) return null
  
  const modelSeries = data.modelSeries || data.series || data.model || ''
  const modelSeriesUpper = modelSeries.toUpperCase()
  
  if (modelSeriesUpper.includes('E28')) return 'E28'
  if (modelSeriesUpper.includes('E30')) return 'E30'
  if (modelSeriesUpper.includes('E46')) return 'E46'
  if (modelSeriesUpper.includes('E60')) return 'E60'
  if (modelSeriesUpper.includes('E90')) return 'E90'
  if (modelSeriesUpper.includes('E91')) return 'E91'
  if (modelSeriesUpper.includes('E92')) return 'E92'
  if (modelSeriesUpper.includes('F80')) return 'F80'
  if (modelSeriesUpper.includes('F87')) return 'F87'
  if (modelSeriesUpper.includes('G80')) return 'G80'
  
  return null
}

const extractModelFromBimmerWorkHTML = (html) => {
  if (!html) return null
  
  const modelMatch = html.match(/Series[^>]*>([^<]*E\d{2}[^<]*)</i) || 
                      html.match(/Model[^>]*>([^<]*E\d{2}[^<]*)</i) ||
                      html.match(/(E\d{2})/i)
  
  if (modelMatch) {
    const modelStr = modelMatch[1] || modelMatch[0]
    if (modelStr.includes('E28')) return 'E28'
    if (modelStr.includes('E30')) return 'E30'
    if (modelStr.includes('E46')) return 'E46'
    if (modelStr.includes('E60')) return 'E60'
    if (modelStr.includes('E90')) return 'E90'
    if (modelStr.includes('E91')) return 'E91'
    if (modelStr.includes('E92')) return 'E92'
    if (modelStr.includes('F80')) return 'F80'
    if (modelStr.includes('F87')) return 'F87'
    if (modelStr.includes('G80')) return 'G80'
  }
  
  return null
}

const buildCategories = () => {
  let filteredProducts = products
  if (state.selectedModel) {
    filteredProducts = filteredProducts.filter((item) => item.model === state.selectedModel)
  }
  const unique = ['Sve', ...new Set(filteredProducts.map((item) => item.category))]
  elements.categoryPills.innerHTML = unique
    .map(
      (category) => `
        <button class="pill ${state.category === category ? 'active' : ''}" data-category="${category}">
          ${category}
        </button>`,
    )
    .join('')
}

const applyFilters = () => {
  let filtered = [...products]

  if (state.category !== 'Sve') {
    filtered = filtered.filter((item) => item.category === state.category)
  }

  if (state.selectedModel) {
    filtered = filtered.filter((item) => item.model === state.selectedModel)
  }

  if (state.quickFilter === 'novo') {
    filtered = filtered.filter((item) => item.tag === 'Novo')
  } else if (state.quickFilter === 'top') {
    filtered = filtered.filter((item) => item.tag === 'Top izbor')
  }

  if (state.search.trim()) {
    const query = state.search.toLowerCase()
    filtered = filtered.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.oem && item.oem.toLowerCase().includes(query)) ||
        (item.model && item.model.toLowerCase().includes(query)),
    )
  }

  if (state.sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price)
  } else if (state.sort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price)
  } else if (state.sort === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name, 'sr'))
  }

  return filtered
}

const renderProducts = () => {
  const items = applyFilters()
  elements.resultsCount.textContent = `Pronađeno ${items.length} ${items.length === 1 ? 'proizvod' : items.length < 5 ? 'proizvoda' : 'proizvoda'}`
  
  elements.productGrid.innerHTML = items
    .map(
      (product) => `
        <article class="product-card" data-product-id="${product.id}">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${product.tag ? `<span class="badge">${product.tag}</span>` : ''}
          </div>
          <div class="product-body">
            <p class="category">${product.category}${product.model ? ` • ${product.model}` : ''}</p>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            ${product.oem ? `<p style="margin-top: 8px; font-size: 0.85rem; color: var(--text-muted);">OEM: ${product.oem}</p>` : ''}
          </div>
          <div class="product-footer">
            <div>
              <p class="price">${product.price > 0 ? formatPrice(product.price) : 'Cena na upit'}</p>
              <span>Na lageru • spremno za slanje</span>
            </div>
            <button data-add="${product.id}">Dodaj</button>
          </div>
        </article>`,
    )
    .join('')
}

const cartToRenderable = () =>
  state.cart
    .map((entry) => {
      const product = products.find((item) => item.id === entry.id)
      if (!product) return null
      return { ...product, quantity: entry.quantity }
    })
    .filter(Boolean)

const renderCart = () => {
  const cartItems = cartToRenderable()

  elements.cartSubtitle.textContent = cartItems.length
    ? `${cartItems.reduce((sum, item) => sum + item.quantity, 0)} artikala`
    : 'Prazna je, dodaj nešto novo.'

  elements.cartCount.textContent = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  elements.cartItems.innerHTML = cartItems
    .map(
      (item) => `
        <div class="cart-item">
          <div>
            <h4>${item.name}</h4>
            <p>${item.price > 0 ? formatPrice(item.price) : 'Cena na upit'}</p>
          </div>
          <div class="quantity-controls">
            <button data-qty="${item.id}" data-delta="-1">-</button>
            <span>${item.quantity}</span>
            <button data-qty="${item.id}" data-delta="1">+</button>
          </div>
          <button class="remove-btn" data-remove="${item.id}">×</button>
        </div>`,
    )
    .join('') || '<p>Dodaj delove kako bi zaključio ponudu.</p>'

  let subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const hasItemsWithoutPrice = cartItems.some((item) => item.price === 0)
  
  let total = subtotal
  let discountAmount = 0
  
  if (state.discountPercent > 0 && !hasItemsWithoutPrice) {
    discountAmount = subtotal * (state.discountPercent / 100)
    total = subtotal - discountAmount
  }
  
  if (state.discountPercent > 0 && !hasItemsWithoutPrice && discountAmount > 0) {
    const totalElement = elements.cartTotal.parentElement
    if (!totalElement.querySelector('.discount-info')) {
      const discountInfo = document.createElement('div')
      discountInfo.className = 'discount-info'
      discountInfo.innerHTML = `
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">
          Međuzbir: ${formatPrice(subtotal)}<br>
          Popust (${state.discountPercent}%): -${formatPrice(discountAmount)}<br>
          <strong style="color: var(--text);">Ukupno: ${formatPrice(total)}</strong>
        </p>
      `
      totalElement.appendChild(discountInfo)
    } else {
      const discountInfo = totalElement.querySelector('.discount-info')
      discountInfo.innerHTML = `
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">
          Međuzbir: ${formatPrice(subtotal)}<br>
          Popust (${state.discountPercent}%): -${formatPrice(discountAmount)}<br>
          <strong style="color: var(--text);">Ukupno: ${formatPrice(total)}</strong>
        </p>
      `
    }
  } else {
    const discountInfo = elements.cartTotal.parentElement.querySelector('.discount-info')
    if (discountInfo) {
      discountInfo.remove()
    }
  }
  
  elements.cartTotal.textContent = hasItemsWithoutPrice ? 'Cena na upit' : formatPrice(total)
  elements.checkoutBtn.disabled = !cartItems.length
  
  localStorage.setItem('bmwCart', JSON.stringify(state.cart))
}

const addToCart = (productId) => {
  const existing = state.cart.find((item) => item.id === productId)
  if (existing) {
    existing.quantity += 1
  } else {
    state.cart.push({ id: productId, quantity: 1 })
  }
  renderCart()
}

const changeQuantity = (productId, delta) => {
  state.cart = state.cart
    .map((item) =>
      item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item,
    )
    .filter((item) => item.quantity > 0)
  renderCart()
}

const removeFromCart = (productId) => {
  state.cart = state.cart.filter((item) => item.id !== productId)
  renderCart()
}

const buildModelFilters = () => {
  const models = ['Svi modeli', ...new Set(products.map((item) => item.model).filter(Boolean))]
  elements.modelFilters.innerHTML = models
    .map(
      (model) => {
        const isActive = model === 'Svi modeli' ? !state.selectedModel : state.selectedModel === model
        return `
          <button class="pill ${isActive ? 'active' : ''}" data-model="${model === 'Svi modeli' ? 'null' : model}">
            ${model}
          </button>`
      }
    )
    .join('')
}

const buildQuickFilters = () => {
  elements.quickFilters.innerHTML = `
    <button class="pill ${state.quickFilter === null ? 'active' : ''}" data-quick-filter="null">Svi proizvodi</button>
    <button class="pill ${state.quickFilter === 'novo' ? 'active' : ''}" data-quick-filter="novo">Novo</button>
    <button class="pill ${state.quickFilter === 'top' ? 'active' : ''}" data-quick-filter="top">Top izbor</button>
  `
}

const applyDiscount = () => {
  const code = elements.discountCodeInput.value.trim()
  
  if (!code) {
    elements.discountMessage.textContent = ''
    elements.discountMessage.className = 'discount-message'
    state.discountCode = null
    state.discountPercent = 0
    renderCart()
    return
  }
  
  const discountCodes = {
    'Boca': 20,
    'Mihailo': 70,
  }
  
  const upperCode = code.charAt(0).toUpperCase() + code.slice(1).toLowerCase()
  
  if (discountCodes[upperCode]) {
    state.discountCode = upperCode
    state.discountPercent = discountCodes[upperCode]
    elements.discountMessage.textContent = `✓ Popust od ${state.discountPercent}% primenjen!`
    elements.discountMessage.className = 'discount-message success'
    renderCart()
  } else {
    state.discountCode = null
    state.discountPercent = 0
    elements.discountMessage.textContent = '✗ Nevažeći kod za popust'
    elements.discountMessage.className = 'discount-message error'
    renderCart()
  }
}

const resetFilters = () => {
  state.category = 'Sve'
  state.sort = 'recommended'
  state.search = ''
  state.selectedModel = null
  state.quickFilter = null
  elements.searchInput.value = ''
  elements.sortSelect.value = 'recommended'
  elements.vinInput.value = ''
  elements.vinResult.textContent = ''
  elements.vinResult.className = 'vin-result'
  buildCategories()
  buildModelFilters()
  buildQuickFilters()
  renderProducts()
}

const showProductModal = (productId) => {
  const product = products.find((p) => p.id === productId)
  if (!product) return

  elements.modalContent.innerHTML = `
    <h2>${product.name}</h2>
    <img src="${product.image}" alt="${product.name}" class="modal-image">
    <div class="modal-details">
      <div class="modal-detail-row">
        <span class="modal-detail-label">Kategorija:</span>
        <span class="modal-detail-value">${product.category}</span>
      </div>
      ${product.model ? `
      <div class="modal-detail-row">
        <span class="modal-detail-label">Model:</span>
        <span class="modal-detail-value">${product.model}</span>
      </div>
      ` : ''}
      ${product.oem ? `
      <div class="modal-detail-row">
        <span class="modal-detail-label">OEM broj:</span>
        <span class="modal-detail-value">${product.oem}</span>
      </div>
      ` : ''}
      <div class="modal-detail-row">
        <span class="modal-detail-label">Cena:</span>
        <span class="modal-detail-value">${product.price > 0 ? formatPrice(product.price) : 'Cena na upit'}</span>
      </div>
      <div class="modal-detail-row">
        <span class="modal-detail-label">Status:</span>
        <span class="modal-detail-value">Na lageru • spremno za slanje</span>
      </div>
    </div>
    <p style="margin-top: 24px; line-height: 1.6;">${product.description}</p>
    <div style="margin-top: 32px; display: flex; gap: 12px;">
      <button class="btn primary" data-add="${product.id}" style="flex: 1;">Dodaj u korpu</button>
    </div>
  `
  elements.productModal.classList.add('show')
}

const closeProductModal = () => {
  elements.productModal.classList.remove('show')
}

const handleProductGridClick = (event) => {
  const { add } = event.target.dataset
  if (add) {
    event.stopPropagation()
    addToCart(Number(add))
    return
  }

  const productCard = event.target.closest('.product-card')
  if (productCard && !event.target.closest('button')) {
    const productId = Number(productCard.dataset.productId)
    if (productId) {
      showProductModal(productId)
    }
  }
}

const handleCartClick = (event) => {
  const { qty, delta, remove } = event.target.dataset
  if (remove) {
    removeFromCart(Number(remove))
    return
  }
  if (qty && delta) {
    changeQuantity(Number(qty), Number(delta))
  }
}

const initEvents = () => {
  elements.categoryPills.addEventListener('click', (event) => {
    const { category } = event.target.dataset
    if (!category) return
    state.category = category
    if (category === 'Sve') {
      state.selectedModel = null
      elements.vinInput.value = ''
      elements.vinResult.textContent = ''
      elements.vinResult.className = 'vin-result'
    }
    buildCategories()
    renderProducts()
  })

  elements.searchInput.addEventListener('input', (event) => {
    state.search = event.target.value
    renderProducts()
  })

  elements.sortSelect.addEventListener('change', (event) => {
    state.sort = event.target.value
    renderProducts()
  })

  elements.productGrid.addEventListener('click', handleProductGridClick)
  elements.cartItems.addEventListener('click', handleCartClick)

  elements.newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault()
    alert('Hvala! Bićeš obavešten o novim ponudama.')
    event.target.reset()
  })

  elements.checkoutBtn.addEventListener('click', () => {
    if (!state.cart.length) {
      alert('Korpa je prazna!')
      return
    }
    localStorage.setItem('bmwCart', JSON.stringify(state.cart))
    localStorage.setItem('bmwProducts', JSON.stringify(products))
    localStorage.setItem('bmwDiscount', JSON.stringify({
      code: state.discountCode,
      percent: state.discountPercent
    }))
    window.location.href = 'checkout.html'
  })

  elements.vinCheckBtn.addEventListener('click', checkVin)

  elements.vinBimmerWorkBtn.addEventListener('click', () => {
    const vin = elements.vinInput.value.trim().toUpperCase()
    if (vin && vin.length === 17) {
      window.open(`https://bimmer.work/?vin=${vin}`, '_blank')
    } else {
      window.open('https://bimmer.work/', '_blank')
    }
  })

  elements.vinInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      checkVin()
    }
  })

  elements.vinInput.addEventListener('input', (event) => {
    const vin = event.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '')
    event.target.value = vin
  })

  elements.modelFilters.addEventListener('click', (event) => {
    const { model } = event.target.dataset
    if (model === undefined) return
    state.selectedModel = model === 'null' ? null : model
    state.category = 'Sve'
    buildModelFilters()
    buildCategories()
    renderProducts()
  })

  elements.quickFilters.addEventListener('click', (event) => {
    const { quickFilter } = event.target.dataset
    if (quickFilter === undefined) return
    state.quickFilter = quickFilter === 'null' ? null : quickFilter
    buildQuickFilters()
    renderProducts()
  })

  elements.resetFiltersBtn.addEventListener('click', resetFilters)

  elements.applyDiscountBtn.addEventListener('click', applyDiscount)
  
  elements.discountCodeInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      applyDiscount()
    }
  })

  elements.modalClose.addEventListener('click', closeProductModal)

  elements.productModal.addEventListener('click', (event) => {
    if (event.target === elements.productModal) {
      closeProductModal()
    }
  })

  elements.modalContent.addEventListener('click', (event) => {
    const { add } = event.target.dataset
    if (add) {
      addToCart(Number(add))
      closeProductModal()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && elements.productModal.classList.contains('show')) {
      closeProductModal()
    }
  })
}

const init = () => {
  elements.year.textContent = new Date().getFullYear()
  
  const savedCart = localStorage.getItem('bmwCart')
  if (savedCart) {
    try {
      state.cart = JSON.parse(savedCart)
    } catch {
      state.cart = []
    }
  }
  
  buildCategories()
  buildModelFilters()
  buildQuickFilters()
  renderProducts()
  renderCart()
  initEvents()
}

init()
