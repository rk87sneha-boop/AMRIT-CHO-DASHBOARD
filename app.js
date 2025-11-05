// Application Data
const hwcServicesData = [
  {
    id: 1,
    name: "Care in pregnancy and child-birth",
    icon: "🤰",
    score: 82,
    status: "Good",
    color: "#22c55e"
  },
  {
    id: 2,
    name: "Neonatal and infant health care services",
    icon: "👶",
    score: 78,
    status: "Moderate",
    color: "#eab308"
  },
  {
    id: 3,
    name: "Childhood and adolescent health care services",
    icon: "👧",
    score: 75,
    status: "Moderate",
    color: "#eab308"
  },
  {
    id: 4,
    name: "Family planning, Contraceptive services and other Reproductive Health Care services",
    icon: "💊",
    score: 65,
    status: "Moderate",
    color: "#eab308"
  },
  {
    id: 5,
    name: "Management of Communicable diseases including National Health Programmes",
    icon: "🦠",
    score: 70,
    status: "Moderate",
    color: "#eab308"
  },
  {
    id: 6,
    name: "Management of Common Communicable Diseases and Outpatient care for acute simple illnesses and minor ailments",
    icon: "🏥",
    score: 74,
    status: "Moderate",
    color: "#eab308"
  },
  {
    id: 7,
    name: "Screening, Prevention, Control and Management of Non-Communicable diseases",
    icon: "💉",
    score: 78,
    status: "Moderate",
    color: "#eab308"
  },
  {
    id: 8,
    name: "Care for Common Ophthalmic and ENT problems",
    icon: "👁️",
    score: 71,
    status: "Moderate",
    color: "#eab308"
  },
  {
    id: 9,
    name: "Basic Oral health care",
    icon: "🦷",
    score: 69,
    status: "Moderate",
    color: "#eab308"
  },
  {
    id: 10,
    name: "Elderly and Palliative health care services",
    icon: "👵",
    score: 73,
    status: "Moderate",
    color: "#eab308"
  },
  {
    id: 11,
    name: "Emergency Medical Services",
    icon: "🚑",
    score: 76,
    status: "Moderate",
    color: "#eab308"
  },
  {
    id: 12,
    name: "Screening and Basic management of Mental health ailments",
    icon: "🧠",
    score: 74,
    status: "Moderate",
    color: "#eab308"
  }
];

const notificationTemplates = [
  {
    id: 1,
    name: "Inactive CHO Alert",
    subject: "Action Required: CHO Activity Alert",
    message: "Dear {cho_name}, Your activity status has been marked as inactive for the past {days} days. Please ensure regular use of AMRIT App and data entry. Contact your coordinator for support."
  },
  {
    id: 2,
    name: "Performance Recognition",
    subject: "Congratulations on Outstanding Performance",
    message: "Dear {cho_name}, Congratulations! You are among the top performers in {block_name} with {activity_rate}% activity rate. Keep up the excellent work!"
  },
  {
    id: 3,
    name: "Service Gap Alert",
    subject: "Service Quality Improvement Required",
    message: "Dear {cho_name}, Our monitoring shows gaps in {service_name}. Current performance: {performance}%. Target: {target}%. Please prioritize this service area."
  },
  {
    id: 4,
    name: "Training Reminder",
    subject: "Training Session Scheduled",
    message: "Dear {cho_name}, A training session on {topic} is scheduled for {date} at {time}. Your attendance is mandatory. Location: {venue}."
  },
  {
    id: 5,
    name: "Data Entry Reminder",
    subject: "Pending Data Entry Alert",
    message: "Dear {cho_name}, You have pending data entries for {service_count} services. Please complete data entry by {deadline} to ensure accurate monitoring."
  },
  {
    id: 6,
    name: "Weekly Summary Report",
    subject: "Weekly Performance Summary - {week}",
    message: "Dear {cho_name}, Your weekly summary: Activity Rate: {activity_rate}%, OPD: {opd_count}, Services: {services_completed}. Keep up the good work!"
  }
];

const appData = {
  timePeriods: {
    baseline: {
      name: "Baseline",
      dateRange: "Beginning - Aug 18",
      totalOpd: 854,
      activityRate: 76.2
    },
    week1: {
      name: "Week 1",
      dateRange: "Aug 14-20",
      totalOpd: 242,
      activityRate: 47.5
    },
    week2: {
      name: "Week 2",
      dateRange: "Aug 21-27",
      totalOpd: 238,
      activityRate: 49.5
    },
    week3: {
      name: "Week 3",
      dateRange: "Aug 28 - Sep 4",
      totalOpd: 222,
      activityRate: 48.5
    }
  },
  district: {
    name: "Darrang",
    state: "Assam",
    totalChos: 101,
    totalBlocks: 4,
    totalFacilities: 100,
    totalCoordinators: 8,
    totalAbha: 43
  },
  blocks: {
    kharupetia: {
      name: "KHARUPETIA",
      totalChos: 34,
      activityRate: 78.7,
      coordinators: {
        "MOHIBUL ISLAM": {
          name: "MOHIBUL ISLAM",
          chosSupervised: 20,
          activityRate: 45.0
        },
        "ABU KHAYER IFTIKAR": {
          name: "ABU KHAYER IFTIKAR",
          chosSupervised: 14,
          activityRate: 51.8
        }
      }
    },
    patharighat: {
      name: "PATHARIGHAT",
      totalChos: 17,
      activityRate: 22.1,
      coordinators: {
        "PRATAP RAJBONGSHI": {
          name: "PRATAP RAJBONGSHI",
          chosSupervised: 11,
          activityRate: 2.3
        },
        "NIRANJAN SAHARIAH": {
          name: "NIRANJAN SAHARIAH",
          chosSupervised: 6,
          activityRate: 35.3
        }
      }
    },
    sipajhar: {
      name: "SIPAJHAR",
      totalChos: 26,
      activityRate: 48.1,
      coordinators: {
        "BALODEV MEDHI": {
          name: "BALODEV MEDHI",
          chosSupervised: 15,
          activityRate: 5.0
        },
        "MUNINDRA SALOI": {
          name: "MUNINDRA SALOI",
          chosSupervised: 11,
          activityRate: 65.9
        }
      }
    },
    jaljali: {
      name: "JALJALI",
      totalChos: 24,
      activityRate: 54.2,
      coordinators: {
        "SAGARIKA PRITY BARUAH": {
          name: "SAGARIKA PRITY BARUAH",
          chosSupervised: 13,
          activityRate: 15.4
        },
        "PRIYANKA DAS": {
          name: "PRIYANKA DAS",
          chosSupervised: 10,
          activityRate: 51.6
        },
        "MOHIBUL ISLAM": {
          name: "MOHIBUL ISLAM",
          chosSupervised: 1,
          activityRate: 50.0
        }
      }
    }
  },
  coordinatorRankings: [
    { name: "MUNINDRA SALOI", activityRate: 65.9, rank: 1 },
    { name: "ABU KHAYER IFTIKAR", activityRate: 51.8, rank: 2 },
    { name: "PRIYANKA DAS", activityRate: 51.6, rank: 3 },
    { name: "NIRANJAN SAHARIAH", activityRate: 35.3, rank: 4 },
    { name: "SAGARIKA PRITY BARUAH", activityRate: 15.4, rank: 5 },
    { name: "BALODEV MEDHI", activityRate: 5.0, rank: 6 },
    { name: "PRATAP RAJBONGSHI", activityRate: 2.3, rank: 7 },
    { name: "MOHIBUL ISLAM", activityRate: 47.5, rank: 4 }
  ],
  hwcServiceCategories: [
    {
      category: "Care in pregnancy and child-birth",
      indicators: [
        "No. of ANC checkups (1st, 2nd, 3rd, 4th, additional)",
        "No. of pregnant women registrations at HWCs",
        "Proportion of PW where BP was recorded",
        "% of PW found Anaemic, severely Anaemic",
        "% of PW whose lab tests were done",
        "% of HRP cases referred",
        "No. of HRP cases by category",
        "Proportion registered in first trimester",
        "Proportion with high blood glucose",
        "Proportion with hypertension",
        "Total PW with TT immunization"
      ]
    },
    {
      category: "Neonatal and infant health care",
      indicators: [
        "No. of Infants fully immunized",
        "% low birth weight sick neonates referred",
        "Proportion referred for congenital anomaly",
        "Proportion referred for developmental delays",
        "Proportion screened for developmental delays",
        "Proportion with congenital anomalies followed up",
        "Proportion with disabilities followed up",
        "Proportion of newborns screened for anomalies",
        "Total infants given Vitamin A"
      ]
    },
    {
      category: "Childhood and adolescent health",
      indicators: [
        "Early detection of growth abnormalities",
        "Proportion assessed for ARI/diarrhoea",
        "Child/Adolescents with anaemia referred",
        "Child/Adolescents with anaemia treated",
        "Child/Adolescents screened for Anaemia",
        "Children with diarrhoea referred",
        "Children with diarrhoea treated (ORS/Zinc)",
        "Number of children immunized",
        "SAM children followed up",
        "SAM children identified",
        "SAM children referred"
      ]
    },
    {
      category: "Family planning & Reproductive Health",
      indicators: [
        "Beneficiaries counselled on FP",
        "Beneficiaries provided FP methods",
        "Follow-up FP cases ratio",
        "FP clients ratio in OPD",
        "FP cases referred"
      ]
    },
    {
      category: "Management of Communicable diseases",
      indicators: [
        "Proportion assessed for fever, ARIs, diarrhoea, infections",
        "Proportion referred for communicable diseases"
      ]
    },
    {
      category: "Outpatient care for acute illnesses",
      indicators: [
        "Drugs prescribed and dispensed",
        "BMI distribution (underweight, normal, overweight)",
        "Visit reasons distribution",
        "Gender distribution",
        "Age distribution",
        "Average visits per beneficiary",
        "No. of ABHA Created",
        "Lab tests completion by type",
        "Drop-out cases",
        "Follow-up cases per month",
        "OPD cases by Diagnosis",
        "ABHA registration status",
        "Total OPD registrations",
        "Free diagnostics availed",
        "Free medicines availed",
        "Leprosy screening",
        "TB screening"
      ]
    },
    {
      category: "NCD screening and management",
      indicators: [
        "Confirmed NCD cases (HTN, DM)",
        "Follow-up NCD cases ratio",
        "NCD cases provided treatment",
        "OPD cases screened for NCD",
        "NCD cases referred",
        "OPD screened for cancer",
        "Cancer suspects referred"
      ]
    },
    {
      category: "Ophthalmic and ENT care",
      indicators: [
        "Nasal packing procedures",
        "Wax removal procedures",
        "% blind and visually impaired referred",
        "% cataract identified and referred",
        "% congenital hearing loss",
        "% diabetic retinopathy referred",
        "% ear discharge referred",
        "% eye injuries referred",
        "% hearing loss referred",
        "Proportion blind/visually impaired",
        "Total Ophthalmic cases screened"
      ]
    },
    {
      category: "Basic Oral health care",
      indicators: [
        "Proportion received dentures",
        "Cleft lip/palate screening and treatment",
        "Emergency oral health care",
        "Gum disease referral and treatment",
        "Special cases referral (cancer, cleft)",
        "Population screened for dental problems",
        "Population screened for gum disease",
        "Oral cancer screening positive",
        "Tooth decay referral"
      ]
    },
    {
      category: "Elderly and Palliative health care",
      indicators: [
        "% elderly on treatment referred",
        "% elderly screened (Geriatric Assessment)",
        "% elderly provided physiotherapy",
        "% elderly registered at HWC",
        "% needy elderly with assistive devices"
      ]
    },
    {
      category: "Emergency Medical Services",
      indicators: [
        "AEFI cases reported",
        "Acute heart disease cases",
        "ARI/Pneumonia cases",
        "Animal bite cases",
        "Head injuries",
        "Other trauma cases",
        "Pain cases",
        "Poisoning cases",
        "RTAs and burn cases",
        "Snake bite cases",
        "Stroke cases",
        "Total trauma cases",
        "Emergency referral proportion",
        "Total emergency cases",
        "Follow-up after referral"
      ]
    },
    {
      category: "Mental health screening and management",
      indicators: [
        "Proportion undergoing treatment",
        "C&AMHD diagnosis proportion",
        "CMD diagnosis proportion",
        "Epilepsy diagnosis proportion",
        "SMD diagnosis proportion",
        "MNS screening proportion",
        "CHO referral proportion",
        "Substance Use Disorder proportion"
      ]
    }
  ],
  choDirectory: [
    { name: "Dr. Rajesh Kumar", block: "KHARUPETIA", facility: "HWC-1", coordinator: "MOHIBUL ISLAM", status: "active", contact: "+91-9876543210" },
    { name: "Dr. Priya Sharma", block: "KHARUPETIA", facility: "HWC-2", coordinator: "ABU KHAYER IFTIKAR", status: "inactive", contact: "+91-9876543211" },
    { name: "Dr. Amit Singh", block: "PATHARIGHAT", facility: "HWC-3", coordinator: "PRATAP RAJBONGSHI", status: "inactive", contact: "+91-9876543212" },
    { name: "Dr. Sunita Das", block: "SIPAJHAR", facility: "HWC-4", coordinator: "MUNINDRA SALOI", status: "active", contact: "+91-9876543213" },
    { name: "Dr. Rahul Gupta", block: "JALJALI", facility: "HWC-5", coordinator: "PRIYANKA DAS", status: "active", contact: "+91-9876543214" }
  ]
};

// Global variables
let currentTheme = 'warm';
let charts = {};
let filteredCHOs = [];
let currentFilters = {
  district: 'darrang',
  block: 'all',
  hwc: 'all',
  timePeriod: 'weekly',
  startDate: '2024-08-14',
  endDate: '2024-09-04'
};
let isFilterApplied = false;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  initializeTabs();
  initializeThemeToggle();
  initializeFilters();
  initializeCharts();
  initializeModal();
  initializeServices();
  initializeHWCServiceCards();
  initializeCHODirectory();
  populateBlockAnalysis();
  populatePerformanceMonitor();
  initializeNotificationSystem();
  initializeIndicatorCards();
  makeChartsClickable();
}

// Tab Navigation
function initializeTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      
      // Remove active class from all tabs and panes
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding pane
      btn.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
      
      // Refresh charts when switching tabs
      setTimeout(() => {
        Object.values(charts).forEach(chart => {
          if (chart && chart.resize) chart.resize();
        });
      }, 100);
    });
  });
}

// Theme Toggle
function initializeThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');
  
  themeToggle.addEventListener('click', () => {
    if (currentTheme === 'warm') {
      currentTheme = 'cool';
      document.documentElement.setAttribute('data-theme', 'cool');
      themeIcon.textContent = '☀️';
      themeText.textContent = 'Warm Theme';
    } else {
      currentTheme = 'warm';
      document.documentElement.setAttribute('data-theme', 'warm');
      themeIcon.textContent = '🌙';
      themeText.textContent = 'Cool Theme';
    }
  });
}

// Initialize Filters
function initializeFilters() {
  // Enhanced Overview tab filters
  const blockFilter = document.getElementById('blockFilter');
  const hwcFilter = document.getElementById('hwcFilter');
  const applyBtn = document.getElementById('applyFilters');
  const resetBtn = document.getElementById('resetFilters');
  const excelBtn = document.getElementById('downloadExcel');
  
  // Filter change handlers
  blockFilter.addEventListener('change', updateHWCOptions);
  
  // Apply and Reset handlers
  applyBtn.addEventListener('click', applyFilters);
  resetBtn.addEventListener('click', resetFilters);
  excelBtn.addEventListener('click', downloadExcelReport);
  
  // Date validation
  const startDateFilter = document.getElementById('startDateFilter');
  const endDateFilter = document.getElementById('endDateFilter');
  
  startDateFilter.addEventListener('change', validateDateRange);
  endDateFilter.addEventListener('change', validateDateRange);
  
  // Track filter changes
  ['districtFilter', 'blockFilter', 'hwcFilter', 'timePeriodFilter', 'startDateFilter', 'endDateFilter'].forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('change', trackFilterChanges);
    }
  });
  
  // Block Analysis filters
  const blockAnalysisFilter = document.getElementById('blockAnalysisFilter');
  const weekAnalysisFilter = document.getElementById('weekAnalysisFilter');
  
  if (blockAnalysisFilter) blockAnalysisFilter.addEventListener('change', updateBlockAnalysis);
  if (weekAnalysisFilter) weekAnalysisFilter.addEventListener('change', updateBlockAnalysis);
  
  // Performance Monitor filter
  const performanceWeekFilter = document.getElementById('performanceWeekFilter');
  if (performanceWeekFilter) performanceWeekFilter.addEventListener('change', updatePerformanceData);
  
  updateHWCOptions();
  updateActiveFiltersDisplay();
}

function updateHWCOptions() {
  const blockFilter = document.getElementById('blockFilter');
  const hwcFilter = document.getElementById('hwcFilter');
  const selectedBlock = blockFilter?.value;
  
  if (!hwcFilter) return;
  
  // Clear existing options
  hwcFilter.innerHTML = '<option value="all">All HWCs</option>';
  
  const hwcOptions = [
    'HWC Kharupetia-1', 'HWC Kharupetia-2', 'HWC Patharighat-1', 'HWC Patharighat-2',
    'HWC Sipajhar-1', 'HWC Sipajhar-2', 'HWC Jaljali-1', 'HWC Jaljali-2'
  ];
  
  if (selectedBlock !== 'all') {
    // Add HWCs for selected block
    hwcOptions.filter(hwc => hwc.toLowerCase().includes(selectedBlock)).forEach(hwc => {
      const option = document.createElement('option');
      option.value = hwc.toLowerCase().replace(/\s+/g, '-');
      option.textContent = hwc;
      hwcFilter.appendChild(option);
    });
  } else {
    // Add all HWCs
    hwcOptions.forEach(hwc => {
      const option = document.createElement('option');
      option.value = hwc.toLowerCase().replace(/\s+/g, '-');
      option.textContent = hwc;
      hwcFilter.appendChild(option);
    });
  }
}

function trackFilterChanges() {
  updateActiveFiltersDisplay();
}

function updateActiveFiltersDisplay() {
  const badge = document.getElementById('activeFilters');
  const countSpan = badge?.querySelector('.badge-count');
  
  if (!badge || !countSpan) return;
  
  let activeCount = 0;
  
  // Count non-default filters
  if (document.getElementById('blockFilter')?.value !== 'all') activeCount++;
  if (document.getElementById('hwcFilter')?.value !== 'all') activeCount++;
  if (document.getElementById('timePeriodFilter')?.value !== 'weekly') activeCount++;
  
  const startDate = document.getElementById('startDateFilter')?.value;
  const endDate = document.getElementById('endDateFilter')?.value;
  if (startDate !== '2024-08-14' || endDate !== '2024-09-04') activeCount++;
  
  countSpan.textContent = activeCount;
  
  if (activeCount > 0) {
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

function validateDateRange() {
  const startDate = new Date(document.getElementById('startDateFilter')?.value);
  const endDate = new Date(document.getElementById('endDateFilter')?.value);
  
  if (startDate && endDate && startDate > endDate) {
    alert('Start date must be before end date');
    document.getElementById('startDateFilter').value = document.getElementById('endDateFilter').value;
  }
}

function applyFilters() {
  const loadingSpinner = document.getElementById('loadingSpinner');
  const loadingState = document.getElementById('loadingState');
  const applyBtn = document.getElementById('applyFilters');
  
  // Show loading state
  loadingSpinner?.classList.remove('hidden');
  loadingState?.classList.remove('hidden');
  applyBtn.disabled = true;
  
  // Update current filters
  currentFilters = {
    district: document.getElementById('districtFilter')?.value || 'darrang',
    block: document.getElementById('blockFilter')?.value || 'all',
    hwc: document.getElementById('hwcFilter')?.value || 'all',
    timePeriod: document.getElementById('timePeriodFilter')?.value || 'weekly',
    startDate: document.getElementById('startDateFilter')?.value || '2024-08-14',
    endDate: document.getElementById('endDateFilter')?.value || '2024-09-04'
  };
  
  // Simulate loading time and update content
  setTimeout(() => {
    updateFilteredContent();
    loadingSpinner?.classList.add('hidden');
    loadingState?.classList.add('hidden');
    applyBtn.disabled = false;
    isFilterApplied = true;
    
    // Add animation to updated content
    animateContentUpdate();
  }, 1500);
}

function resetFilters() {
  document.getElementById('districtFilter').value = 'darrang';
  document.getElementById('blockFilter').value = 'all';
  document.getElementById('hwcFilter').value = 'all';
  document.getElementById('timePeriodFilter').value = 'weekly';
  document.getElementById('startDateFilter').value = '2024-08-14';
  document.getElementById('endDateFilter').value = '2024-09-04';
  
  updateHWCOptions();
  updateActiveFiltersDisplay();
  
  // Reset to original data
  currentFilters = {
    district: 'darrang',
    block: 'all',
    hwc: 'all',
    timePeriod: 'weekly',
    startDate: '2024-08-14',
    endDate: '2024-09-04'
  };
  
  updateFilteredContent();
  isFilterApplied = false;
}

function updateFilteredContent() {
  // Update metric cards
  updateMetricCards();
  
  // Update charts with filtered data
  updateChartsWithFilters();
  
  // Update block performance
  updateBlockPerformanceWithFilters();
}

function updateMetricCards() {
  const baseData = {
    chos: 101,
    blocks: 4,
    facilities: 100,
    coordinators: 8,
    opd: 1556
  };
  
  let filteredData = { ...baseData };
  
  // Apply filter logic
  if (currentFilters.block !== 'all') {
    const blockData = appData.blocks[currentFilters.block];
    if (blockData) {
      filteredData.chos = blockData.totalChos;
      filteredData.blocks = 1;
      filteredData.coordinators = Object.keys(blockData.coordinators).length;
      filteredData.opd = Math.round(baseData.opd * (blockData.totalChos / baseData.chos));
    }
  }
  
  // Update display
  document.getElementById('totalChosMetric').textContent = filteredData.chos;
  document.getElementById('totalBlocksMetric').textContent = filteredData.blocks;
  document.getElementById('totalFacilitiesMetric').textContent = filteredData.facilities;
  document.getElementById('totalCoordinatorsMetric').textContent = filteredData.coordinators;
  document.getElementById('totalOpdMetric').textContent = filteredData.opd.toLocaleString();
}

function updateChartsWithFilters() {
  // Update activity chart with data labels
  if (charts.activityChart) {
    charts.activityChart.options.plugins.datalabels = {
      display: true,
      color: '#ffffff',
      font: {
        weight: 'bold'
      },
      formatter: (value) => `${value}%`
    };
    charts.activityChart.update();
  }
  
  // Update OPD chart with data labels
  if (charts.opdChart) {
    charts.opdChart.options.plugins.datalabels = {
      display: true,
      color: '#000000',
      anchor: 'end',
      align: 'top',
      font: {
        weight: 'bold'
      }
    };
    charts.opdChart.update();
  }
  
  // Update coordinator chart with data labels
  if (charts.coordinatorChart) {
    charts.coordinatorChart.options.plugins.datalabels = {
      display: true,
      color: '#ffffff',
      anchor: 'end',
      align: 'right',
      font: {
        weight: 'bold'
      },
      formatter: (value) => `${value}%`
    };
    charts.coordinatorChart.update();
  }
}

function updateBlockPerformanceWithFilters() {
  const blockItems = document.querySelectorAll('.block-item');
  blockItems.forEach(item => {
    const blockName = item.querySelector('h4')?.textContent;
    const statsElement = item.querySelector('.block-stats');
    if (statsElement && blockName) {
      const percentage = statsElement.textContent.match(/([0-9.]+)%/)?.[1];
      if (percentage) {
        item.setAttribute('data-percentage', `${percentage}%`);
      }
    }
  });
}

function animateContentUpdate() {
  const cards = document.querySelectorAll('.metric-card, .block-item');
  cards.forEach((card, index) => {
    card.style.animation = 'none';
    setTimeout(() => {
      card.style.animation = `slideInUp 0.6s ${index * 0.1}s var(--ease-standard) both`;
    }, 50);
  });
}

function downloadExcelReport() {
  const wb = XLSX.utils.book_new();
  
  // Filter Summary Sheet
  const filterSummary = [
    ['AMRIT CHO Report - Filter Summary'],
    ['Generated on:', new Date().toLocaleDateString()],
    ['Time Period:', currentFilters.timePeriod],
    ['Date Range:', `${currentFilters.startDate} to ${currentFilters.endDate}`],
    ['District:', currentFilters.district],
    ['Block:', currentFilters.block === 'all' ? 'All Blocks' : currentFilters.block.toUpperCase()],
    ['HWC:', currentFilters.hwc === 'all' ? 'All HWCs' : currentFilters.hwc],
    [],
    ['Key Metrics Summary'],
    ['Total CHOs', document.getElementById('totalChosMetric')?.textContent || '101'],
    ['Total Blocks', document.getElementById('totalBlocksMetric')?.textContent || '4'],
    ['Total Facilities', document.getElementById('totalFacilitiesMetric')?.textContent || '100'],
    ['Total Coordinators', document.getElementById('totalCoordinatorsMetric')?.textContent || '8'],
    ['Total OPD', document.getElementById('totalOpdMetric')?.textContent || '1,556']
  ];
  
  const ws1 = XLSX.utils.aoa_to_sheet(filterSummary);
  XLSX.utils.book_append_sheet(wb, ws1, 'Filter Summary');
  
  // Block Performance Sheet
  const blockData = [
    ['Block Name', 'Total CHOs', 'Activity Rate (%)', 'Status'],
    ['KHARUPETIA', '34', '78.7', 'Excellent'],
    ['PATHARIGHAT', '17', '22.1', 'Critical'],
    ['SIPAJHAR', '26', '48.1', 'Moderate'],
    ['JALJALI', '24', '54.2', 'Good']
  ];
  
  const ws2 = XLSX.utils.aoa_to_sheet(blockData);
  XLSX.utils.book_append_sheet(wb, ws2, 'Block Performance');
  
  // Weekly Activity Data Sheet
  const weeklyData = [
    ['Period', 'Activity Rate (%)', 'Total OPD', 'Date Range'],
    ['Baseline', '76.2', '854', 'Beginning - Aug 18'],
    ['Week 1', '47.5', '242', 'Aug 14-20'],
    ['Week 2', '49.5', '238', 'Aug 21-27'],
    ['Week 3', '48.5', '222', 'Aug 28 - Sep 4']
  ];
  
  const ws3 = XLSX.utils.aoa_to_sheet(weeklyData);
  XLSX.utils.book_append_sheet(wb, ws3, 'Weekly Activity');
  
  // Coordinator Performance Sheet
  const coordinatorData = [
    ['Coordinator Name', 'Block', 'CHOs Supervised', 'Activity Rate (%)', 'Rank'],
    ...appData.coordinatorRankings.map(c => [
      c.name,
      getCoordinatorBlock(c.name),
      getCoordinatorCHOs(c.name),
      c.activityRate.toString(),
      c.rank.toString()
    ])
  ];
  
  const ws4 = XLSX.utils.aoa_to_sheet(coordinatorData);
  XLSX.utils.book_append_sheet(wb, ws4, 'Coordinator Performance');
  
  // Generate filename
  const timeSelected = currentFilters.timePeriod;
  const dateRange = `${currentFilters.startDate}_to_${currentFilters.endDate}`;
  const filename = `AMRIT_CHO_Report_${timeSelected}_${dateRange}.xlsx`;
  
  // Download file
  XLSX.writeFile(wb, filename);
}

function getCoordinatorBlock(coordinatorName) {
  for (const [blockKey, block] of Object.entries(appData.blocks)) {
    if (block.coordinators[coordinatorName]) {
      return block.name;
    }
  }
  return 'N/A';
}

function getCoordinatorCHOs(coordinatorName) {
  for (const [blockKey, block] of Object.entries(appData.blocks)) {
    if (block.coordinators[coordinatorName]) {
      return block.coordinators[coordinatorName].chosSupervised;
    }
  }
  return 0;
}

// Initialize Charts
function initializeCharts() {
  initializeActivityChart();
  initializeOPDChart();
  initializeCoordinatorChart();
  initializeAllCoordinatorsChart();
  initializeRankingCharts();
}

function initializeActivityChart() {
  const ctx = document.getElementById('activityChart');
  if (!ctx) return;
  
  const data = {
    labels: ['Baseline', 'Week 1', 'Week 2', 'Week 3'],
    datasets: [{
      label: 'Activity Rate (%)',
      data: [76.2, 47.5, 49.5, 48.5],
      borderColor: '#1FB8CD',
      backgroundColor: 'rgba(31, 184, 205, 0.1)',
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointRadius: 6,
      pointHoverRadius: 8,
      pointBackgroundColor: '#1FB8CD',
      pointBorderColor: '#ffffff',
      pointBorderWidth: 2
    }]
  };
  
  charts.activityChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      interaction: {
        intersect: false,
        mode: 'index'
      },
      plugins: {
        legend: {
          display: true
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: 'white',
          bodyColor: 'white',
          borderColor: '#1FB8CD',
          borderWidth: 1,
          callbacks: {
            label: function(context) {
              return `Activity Rate: ${context.parsed.y}%`;
            },
            afterLabel: function(context) {
              const trends = ['📈 Baseline', '📉 Decline', '📈 Slight recovery', '📊 Stabilizing'];
              return trends[context.dataIndex] || '';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          }
        }
      },
      onHover: (event, activeElements) => {
        event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
      },
      onClick: (event, activeElements) => {
        if (activeElements.length > 0) {
          const dataIndex = activeElements[0].index;
          const periods = ['baseline', 'week1', 'week2', 'week3'];
          showDetailedView(periods[dataIndex]);
        }
      }
    }
  });
}

function showDetailedView(period) {
  const periodData = appData.timePeriods[period];
  alert(`📊 Detailed View: ${periodData.name}\n\n` +
        `📅 Date Range: ${periodData.dateRange}\n` +
        `📈 Activity Rate: ${periodData.activityRate}%\n` +
        `🏥 Total OPD: ${periodData.totalOpd}\n` +
        `📊 Performance: ${getPerformanceStatus(periodData.activityRate)}`);
}

function getPerformanceStatus(rate) {
  if (rate >= 70) return 'Excellent ⭐⭐⭐';
  if (rate >= 50) return 'Good ⭐⭐';
  if (rate >= 30) return 'Needs Improvement ⭐';
  return 'Critical ⚠️';
}

function initializeOPDChart() {
  const ctx = document.getElementById('opdChart');
  if (!ctx) return;
  
  const data = {
    labels: ['Baseline', 'Week 1', 'Week 2', 'Week 3'],
    datasets: [{
      label: 'OPD Registrations',
      data: [854, 242, 238, 222],
      backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
      borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
      borderWidth: 2,
      hoverBackgroundColor: ['#0EA5E9', '#FBBF24', '#DC2626', '#D1D5DB'],
      hoverBorderWidth: 3
    }]
  };
  
  charts.opdChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      interaction: {
        intersect: false,
        mode: 'index'
      },
      plugins: {
        legend: {
          display: true
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: 'white',
          bodyColor: 'white',
          callbacks: {
            label: function(context) {
              return `OPD Registrations: ${context.parsed.y.toLocaleString()}`;
            },
            afterLabel: function(context) {
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((context.parsed.y / total) * 100).toFixed(1);
              return `Contribution: ${percentage}% of total`;
            }
          }
        },
        datalabels: {
          display: true,
          anchor: 'end',
          align: 'top',
          color: '#000000',
          font: {
            weight: 'bold',
            size: 12
          },
          formatter: (value) => value.toLocaleString()
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return value.toLocaleString();
            }
          }
        }
      },
      onHover: (event, activeElements) => {
        event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
      }
    }
  });
}

function initializeCoordinatorChart() {
  const ctx = document.getElementById('coordinatorChart');
  if (!ctx) return;
  
  const coordinators = appData.coordinatorRankings;
  
  const data = {
    labels: coordinators.map(c => c.name),
    datasets: [{
      label: 'Activity Rate (%)',
      data: coordinators.map(c => c.activityRate),
      backgroundColor: coordinators.map(c => {
        if (c.activityRate >= 50) return '#22c55e';
        if (c.activityRate >= 20) return '#eab308';
        return '#ef4444';
      }),
      borderColor: coordinators.map(c => {
        if (c.activityRate >= 50) return '#16a34a';
        if (c.activityRate >= 20) return '#ca8a04';
        return '#dc2626';
      }),
      borderWidth: 2,
      hoverBorderWidth: 3
    }]
  };
  
  charts.coordinatorChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      indexAxis: 'y',
      interaction: {
        intersect: false,
        mode: 'nearest'
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: 'white',
          bodyColor: 'white',
          callbacks: {
            title: function(context) {
              return context[0].label;
            },
            label: function(context) {
              const coordinator = coordinators[context.dataIndex];
              return [
                `Activity Rate: ${context.parsed.x}%`,
                `Rank: #${coordinator.rank}`,
                `Block: ${getCoordinatorBlock(coordinator.name)}`,
                `CHOs Supervised: ${getCoordinatorCHOs(coordinator.name)}`
              ];
            }
          }
        },
        datalabels: {
          display: true,
          anchor: 'end',
          align: 'right',
          color: 'white',
          font: {
            weight: 'bold',
            size: 11
          },
          formatter: (value) => `${value}%`
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          }
        },
        y: {
          ticks: {
            font: {
              size: 10
            }
          }
        }
      },
      onHover: (event, activeElements) => {
        event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
      }
    }
  });
}

function initializeAllCoordinatorsChart() {
  const ctx = document.getElementById('allCoordinatorsChart');
  if (!ctx) return;
  
  const coordinators = appData.coordinatorRankings;
  
  const data = {
    labels: coordinators.map(c => c.name),
    datasets: [{
      label: 'Activity Rate (%)',
      data: coordinators.map(c => c.activityRate),
      backgroundColor: coordinators.map(c => {
        if (c.activityRate >= 50) return '#22c55e';
        if (c.activityRate >= 20) return '#eab308';
        return '#ef4444';
      }),
      borderWidth: 1
    }]
  };
  
  charts.allCoordinatorsChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}

function initializeRankingCharts() {
  initializeActivityRankingChart();
  initializePerformanceRankingChart();
}

function initializeActivityRankingChart() {
  const ctx = document.getElementById('activityRankingChart');
  if (!ctx) return;
  
  const blocks = Object.values(appData.blocks);
  
  const data = {
    labels: blocks.map(b => b.name),
    datasets: [{
      label: 'Activity Rate (%)',
      data: blocks.map(b => b.activityRate),
      backgroundColor: blocks.map(b => {
        if (b.activityRate >= 70) return '#22c55e';
        if (b.activityRate >= 40) return '#eab308';
        return '#ef4444';
      }),
      borderWidth: 1
    }]
  };
  
  charts.activityRankingChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}

function initializePerformanceRankingChart() {
  const ctx = document.getElementById('performanceRankingChart');
  if (!ctx) return;
  
  const coordinators = appData.coordinatorRankings.slice(0, 5); // Top 5
  
  const data = {
    labels: coordinators.map(c => c.name),
    datasets: [{
      label: 'Performance Score',
      data: coordinators.map(c => c.activityRate * 0.4 + Math.random() * 30), // Mock weighted score
      backgroundColor: '#1FB8CD',
      borderWidth: 1
    }]
  };
  
  charts.performanceRankingChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}

// Block Analysis
function populateBlockAnalysis() {
  updateBlockAnalysis();
}

function updateBlockAnalysis() {
  const selectedBlock = document.getElementById('blockAnalysisFilter').value;
  const selectedWeek = document.getElementById('weekAnalysisFilter').value;
  
  populateBlockComparisonTable();
  populateCoordinatorDetails();
}

function populateBlockComparisonTable() {
  const tableBody = document.getElementById('blockComparisonTable');
  if (!tableBody) return;
  
  tableBody.innerHTML = '';
  
  Object.values(appData.blocks).forEach(block => {
    const row = document.createElement('tr');
    const activeChos = Math.round(block.totalChos * block.activityRate / 100);
    const avgOpd = Math.round(appData.timePeriods.week3.totalOpd / block.totalChos);
    
    row.innerHTML = `
      <td><strong>${block.name}</strong></td>
      <td>${block.totalChos}</td>
      <td>${activeChos}</td>
      <td><span class="status ${getActivityStatusClass(block.activityRate)}">${block.activityRate}%</span></td>
      <td>${appData.timePeriods.week3.totalOpd}</td>
      <td>${avgOpd}</td>
    `;
    
    tableBody.appendChild(row);
  });
}

function populateCoordinatorDetails() {
  const container = document.getElementById('coordinatorDetails');
  if (!container) return;
  
  container.innerHTML = '';
  
  Object.values(appData.blocks).forEach(block => {
    Object.values(block.coordinators).forEach(coordinator => {
      const card = document.createElement('div');
      card.className = 'coordinator-card';
      
      card.innerHTML = `
        <div class="coordinator-name">${coordinator.name}</div>
        <div class="coordinator-stats">
          <div><strong>Block:</strong> ${block.name}</div>
          <div><strong>CHOs Supervised:</strong> ${coordinator.chosSupervised}</div>
          <div><strong>Activity Rate:</strong> <span class="${getActivityStatusClass(coordinator.activityRate)}">${coordinator.activityRate}%</span></div>
        </div>
      `;
      
      container.appendChild(card);
    });
  });
}

function getActivityStatusClass(rate) {
  if (rate >= 50) return 'status--success';
  if (rate >= 20) return 'status--warning';
  return 'status--error';
}

// Initialize HWC Service Cards
function initializeHWCServiceCards() {
  const container = document.getElementById('serviceCardsGrid');
  if (!container) return;
  
  container.innerHTML = '';
  
  // Populate service filter dropdown
  const serviceFilter = document.getElementById('hwcServiceFilter');
  if (serviceFilter) {
    hwcServicesData.forEach(service => {
      const option = document.createElement('option');
      option.value = service.id;
      option.textContent = service.name;
      serviceFilter.appendChild(option);
    });
  }
  
  hwcServicesData.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.dataset.serviceId = service.id;
    
    const statusClass = service.score >= 80 ? 'perf-excellent' : 
                       service.score >= 60 ? 'perf-moderate' : 'perf-critical';
    
    card.innerHTML = `
      <div class="service-card-header">
        <div class="service-card-icon">${service.icon}</div>
        <div class="service-card-title">${service.name}</div>
      </div>
      <div class="service-card-score ${statusClass}">${service.score}%</div>
      <div class="service-card-status">Performance Score</div>
    `;
    
    card.addEventListener('click', () => selectServiceCard(service.id));
    container.appendChild(card);
  });
}

function selectServiceCard(serviceId) {
  // Remove selection from all cards
  document.querySelectorAll('.service-card').forEach(card => {
    card.classList.remove('selected');
  });
  
  // Select clicked card
  const selectedCard = document.querySelector(`[data-service-id="${serviceId}"]`);
  if (selectedCard) {
    selectedCard.classList.add('selected');
  }
  
  // Show detailed content
  showServiceDetails(serviceId);
}

function showServiceDetails(serviceId) {
  const service = hwcServicesData.find(s => s.id === serviceId);
  if (!service) return;
  
  const detailContent = document.getElementById('serviceDetailContent');
  if (!detailContent) return;
  
  detailContent.classList.remove('hidden');
  
  // Scroll to detail section
  detailContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
  // Generate content based on service
  detailContent.innerHTML = `
    <div class="service-detail-header">
      <h3>${service.icon} ${service.name}</h3>
      <button class="btn btn--outline" onclick="closeServiceDetails()">Close Details</button>
    </div>
    <div class="service-detail-sections">
      ${generateServiceIndicators(serviceId)}
    </div>
  `;
}

function closeServiceDetails() {
  const detailContent = document.getElementById('serviceDetailContent');
  if (detailContent) {
    detailContent.classList.add('hidden');
  }
  
  document.querySelectorAll('.service-card').forEach(card => {
    card.classList.remove('selected');
  });
}

function generateServiceIndicators(serviceId) {
  // Generate indicator sections based on service type
  const indicators = {
    1: generatePregnancyIndicators(),
    2: generateNeonatalIndicators(),
    3: generateChildhoodIndicators(),
    4: generateFPIndicators(),
    5: generateCDIndicators(),
    6: generateOPDIndicators(),
    7: generateNCDIndicators(),
    8: generateENTIndicators(),
    9: generateOralHealthIndicators(),
    10: generateElderlyIndicators(),
    11: generateEmergencyIndicators(),
    12: generateMentalHealthIndicators()
  };
  
  return indicators[serviceId] || '<p>Indicator details coming soon...</p>';
}

function generatePregnancyIndicators() {
  return `
    <div class="indicator-section">
      <h4>A. ANC Coverage and Timing</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable" onclick="showDrilldown('ANC Checkups', 'facility')">
          <div class="kpi-tile-value">456</div>
          <div class="kpi-tile-label">ANC Checkups Done</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('PW Registrations', 'facility')">
          <div class="kpi-tile-value">234</div>
          <div class="kpi-tile-label">PW Registrations</div>
        </div>
        <div class="kpi-tile clickable perf-excellent" onclick="showDrilldown('1st Trimester', 'facility')">
          <div class="kpi-tile-value">68%</div>
          <div class="kpi-tile-label">Registered in 1st Trimester</div>
        </div>
      </div>
      <div class="indicator-charts">
        <div class="indicator-chart">
          <canvas id="ancTrendChart" height="200"></canvas>
        </div>
      </div>
    </div>
    
    <div class="indicator-section">
      <h4>B. ANC Services Quality</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable perf-excellent" onclick="showDrilldown('BP Recording', 'facility')">
          <div class="kpi-tile-value">89%</div>
          <div class="kpi-tile-label">BP Recorded</div>
        </div>
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('Lab Tests', 'facility')">
          <div class="kpi-tile-value">76%</div>
          <div class="kpi-tile-label">Lab Tests Done</div>
        </div>
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('Anemia', 'facility')">
          <div class="kpi-tile-value">28%</div>
          <div class="kpi-tile-label">Found Anaemic</div>
        </div>
      </div>
    </div>
    
    <div class="indicator-section">
      <h4>C. High-Risk Pregnancy (HRP)</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable" onclick="showDrilldown('HRP Cases', 'block')">
          <div class="kpi-tile-value">89</div>
          <div class="kpi-tile-label">HRP Cases Identified</div>
        </div>
        <div class="kpi-tile clickable perf-excellent" onclick="showDrilldown('HRP Referrals', 'block')">
          <div class="kpi-tile-value">85%</div>
          <div class="kpi-tile-label">HRP Referred</div>
        </div>
      </div>
    </div>
    
    <div class="indicator-section">
      <h4>D. Immunization Coverage</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable perf-excellent" onclick="showDrilldown('TT Immunization', 'facility')">
          <div class="kpi-tile-value">198</div>
          <div class="kpi-tile-label">PW with TT Dose</div>
        </div>
      </div>
    </div>
  `;
}

function generateNeonatalIndicators() {
  return `
    <div class="indicator-section">
      <h4>A. Key Indicators Summary</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable perf-excellent" onclick="showDrilldown('Infant Immunization', 'facility')">
          <div class="kpi-tile-value">342</div>
          <div class="kpi-tile-label">Infants Fully Immunized</div>
        </div>
        <div class="kpi-tile clickable perf-excellent" onclick="showDrilldown('LBW Referrals', 'facility')">
          <div class="kpi-tile-value">88%</div>
          <div class="kpi-tile-label">LBW Referrals</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('Vitamin A', 'block')">
          <div class="kpi-tile-value">356</div>
          <div class="kpi-tile-label">Vitamin A Given</div>
        </div>
      </div>
    </div>
    
    <div class="indicator-section">
      <h4>B. Screening, Referral, and Follow-up</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('Dev Screening', 'facility')">
          <div class="kpi-tile-value">67%</div>
          <div class="kpi-tile-label">Screened for Delays</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('Anomaly Follow-up', 'facility')">
          <div class="kpi-tile-value">80%</div>
          <div class="kpi-tile-label">Anomaly Follow-up</div>
        </div>
      </div>
    </div>
  `;
}

function generateChildhoodIndicators() {
  return `
    <div class="indicator-section">
      <h4>A. Summary KPI Cards</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable perf-excellent" onclick="showDrilldown('Child Immunization', 'facility')">
          <div class="kpi-tile-value">456</div>
          <div class="kpi-tile-label">Children Immunized</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('SAM Identified', 'facility')">
          <div class="kpi-tile-value">30</div>
          <div class="kpi-tile-label">SAM Identified</div>
        </div>
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('SAM Follow-up', 'facility')">
          <div class="kpi-tile-value">76.7%</div>
          <div class="kpi-tile-label">SAM Follow-up</div>
        </div>
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('ORS Treatment', 'facility')">
          <div class="kpi-tile-value">78%</div>
          <div class="kpi-tile-label">Diarrhoea Treated (ORS)</div>
        </div>
      </div>
    </div>
    
    <div class="indicator-section">
      <h4>B. Anaemia Management</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable perf-excellent" onclick="showDrilldown('Anaemia Treatment', 'facility')">
          <div class="kpi-tile-value">89%</div>
          <div class="kpi-tile-label">Anaemia Treated</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('Anaemia Referral', 'facility')">
          <div class="kpi-tile-value">45</div>
          <div class="kpi-tile-label">Anaemia Referred</div>
        </div>
      </div>
    </div>
  `;
}

function generateFPIndicators() {
  return `
    <div class="indicator-section">
      <h4>A. Family Planning Summary</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('FP Counselling', 'facility')">
          <div class="kpi-tile-value">567</div>
          <div class="kpi-tile-label">Counselled on FP</div>
        </div>
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('FP Methods', 'facility')">
          <div class="kpi-tile-value">389</div>
          <div class="kpi-tile-label">Provided FP Methods</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('FP Follow-up', 'facility')">
          <div class="kpi-tile-value">60.2%</div>
          <div class="kpi-tile-label">Follow-up Rate</div>
        </div>
      </div>
    </div>
    
    <div class="indicator-section">
      <h4>B. Method-Wise Distribution</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable" onclick="showDrilldown('Condoms', 'block')">
          <div class="kpi-tile-value">123</div>
          <div class="kpi-tile-label">Condoms</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('Daily Oral', 'block')">
          <div class="kpi-tile-value">89</div>
          <div class="kpi-tile-label">Daily Oral</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('Injectable', 'block')">
          <div class="kpi-tile-value">67</div>
          <div class="kpi-tile-label">Injectable</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('IUCD', 'block')">
          <div class="kpi-tile-value">34</div>
          <div class="kpi-tile-label">IUCD</div>
        </div>
      </div>
    </div>
  `;
}

function generateCDIndicators() {
  return `
    <div class="indicator-section">
      <h4>Communicable Disease Management</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('CD Assessment', 'facility')">
          <div class="kpi-tile-value">68%</div>
          <div class="kpi-tile-label">Assessed for CD</div>
        </div>
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('CD Referral', 'facility')">
          <div class="kpi-tile-value">72%</div>
          <div class="kpi-tile-label">CD Referred</div>
        </div>
      </div>
    </div>
  `;
}

function generateOPDIndicators() {
  return `
    <div class="indicator-section">
      <h4>A. OPD Performance Metrics</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('Total OPD', 'facility')">
          <div class="kpi-tile-value">1,556</div>
          <div class="kpi-tile-label">Total OPD</div>
        </div>
        <div class="kpi-tile clickable perf-excellent" onclick="showDrilldown('Drugs Dispensed', 'facility')">
          <div class="kpi-tile-value">87%</div>
          <div class="kpi-tile-label">Drugs Dispensed</div>
        </div>
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('Free Diagnostics', 'facility')">
          <div class="kpi-tile-value">892</div>
          <div class="kpi-tile-label">Free Diagnostics</div>
        </div>
        <div class="kpi-tile clickable perf-critical" onclick="showDrilldown('ABHA Created', 'facility')">
          <div class="kpi-tile-value">43</div>
          <div class="kpi-tile-label">ABHA Created</div>
        </div>
      </div>
    </div>
    
    <div class="indicator-section">
      <h4>B. Screening Programs</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('Leprosy Screening', 'facility')">
          <div class="kpi-tile-value">456</div>
          <div class="kpi-tile-label">Leprosy Screened</div>
        </div>
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('TB Screening', 'facility')">
          <div class="kpi-tile-value">789</div>
          <div class="kpi-tile-label">TB Screened</div>
        </div>
      </div>
    </div>
  `;
}

function generateNCDIndicators() {
  return `
    <div class="indicator-section">
      <h4>A. NCD Summary Metrics</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('NCD Cases', 'facility')">
          <div class="kpi-tile-value">234</div>
          <div class="kpi-tile-label">Confirmed NCD Cases</div>
        </div>
        <div class="kpi-tile clickable perf-excellent" onclick="showDrilldown('NCD Treatment', 'facility')">
          <div class="kpi-tile-value">80.8%</div>
          <div class="kpi-tile-label">NCD Treated at HWC</div>
        </div>
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('NCD Follow-up', 'facility')">
          <div class="kpi-tile-value">76.1%</div>
          <div class="kpi-tile-label">NCD Follow-up</div>
        </div>
      </div>
    </div>
    
    <div class="indicator-section">
      <h4>B. NCD Type Breakdown</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable" onclick="showDrilldown('Hypertension', 'block')">
          <div class="kpi-tile-value">145</div>
          <div class="kpi-tile-label">Hypertension</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('Diabetes', 'block')">
          <div class="kpi-tile-value">89</div>
          <div class="kpi-tile-label">Diabetes</div>
        </div>
      </div>
    </div>
    
    <div class="indicator-section">
      <h4>C. Cancer Screening</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('Cancer Screening', 'facility')">
          <div class="kpi-tile-value">567</div>
          <div class="kpi-tile-label">Screened for Cancer</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('Cancer Suspects', 'facility')">
          <div class="kpi-tile-value">23</div>
          <div class="kpi-tile-label">Suspects Referred</div>
        </div>
      </div>
    </div>
  `;
}

function generateENTIndicators() {
  return `
    <div class="indicator-section">
      <h4>A. Ophthalmic &amp; ENT Overview</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('Eye Cases', 'facility')">
          <div class="kpi-tile-value">456</div>
          <div class="kpi-tile-label">Ophthalmic Cases Screened</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('Nasal Packing', 'facility')">
          <div class="kpi-tile-value">34</div>
          <div class="kpi-tile-label">Nasal Packing</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('Wax Removal', 'facility')">
          <div class="kpi-tile-value">67</div>
          <div class="kpi-tile-label">Wax Removal</div>
        </div>
      </div>
    </div>
    
    <div class="indicator-section">
      <h4>B. Eye Conditions</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('Cataract', 'facility')">
          <div class="kpi-tile-value">75%</div>
          <div class="kpi-tile-label">Cataract Referred</div>
        </div>
        <div class="kpi-tile clickable perf-excellent" onclick="showDrilldown('VI Blind', 'facility')">
          <div class="kpi-tile-value">82%</div>
          <div class="kpi-tile-label">VI/Blind Referred</div>
        </div>
      </div>
    </div>
    
    <div class="indicator-section">
      <h4>C. ENT Conditions</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('Hearing Loss', 'facility')">
          <div class="kpi-tile-value">74.4%</div>
          <div class="kpi-tile-label">Hearing Loss Referred</div>
        </div>
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('Ear Discharge', 'facility')">
          <div class="kpi-tile-value">74.7%</div>
          <div class="kpi-tile-label">Ear Discharge Referred</div>
        </div>
      </div>
    </div>
  `;
}

function generateOralHealthIndicators() {
  return `
    <div class="indicator-section">
      <h4>A. Oral Health Summary</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('Dental Screening', 'facility')">
          <div class="kpi-tile-value">72%</div>
          <div class="kpi-tile-label">Dental Screening</div>
        </div>
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('Dentures', 'facility')">
          <div class="kpi-tile-value">65%</div>
          <div class="kpi-tile-label">Dentures Provided</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('Cleft Treatment', 'facility')">
          <div class="kpi-tile-value">15</div>
          <div class="kpi-tile-label">Cleft Treated</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('Oral Cancer', 'facility')">
          <div class="kpi-tile-value">4</div>
          <div class="kpi-tile-label">Oral Cancer Positive</div>
        </div>
      </div>
    </div>
  `;
}

function generateElderlyIndicators() {
  return `
    <div class="indicator-section">
      <h4>A. Elderly Care Indicators</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('Elderly Registered', 'facility')">
          <div class="kpi-tile-value">78%</div>
          <div class="kpi-tile-label">Elderly Registered</div>
        </div>
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('CGA Screening', 'facility')">
          <div class="kpi-tile-value">65%</div>
          <div class="kpi-tile-label">CGA Screening</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('Physiotherapy', 'facility')">
          <div class="kpi-tile-value">40%</div>
          <div class="kpi-tile-label">Physiotherapy</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('Assistive Devices', 'facility')">
          <div class="kpi-tile-value">28%</div>
          <div class="kpi-tile-label">Assistive Devices</div>
        </div>
      </div>
    </div>
  `;
}

function generateEmergencyIndicators() {
  return `
    <div class="indicator-section">
      <h4>A. Emergency Services Overview</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('Total Emergencies', 'facility')">
          <div class="kpi-tile-value">1,256</div>
          <div class="kpi-tile-label">Total Emergencies</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('Emergency Referral', 'facility')">
          <div class="kpi-tile-value">18%</div>
          <div class="kpi-tile-label">Referred</div>
        </div>
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('Follow-up', 'facility')">
          <div class="kpi-tile-value">72%</div>
          <div class="kpi-tile-label">Follow-up After Referral</div>
        </div>
      </div>
    </div>
    
    <div class="indicator-section">
      <h4>B. Emergency Case Types</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable" onclick="showDrilldown('RTAs', 'facility')">
          <div class="kpi-tile-value">214</div>
          <div class="kpi-tile-label">RTAs &amp; Burns</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('ARI/Pneumonia', 'facility')">
          <div class="kpi-tile-value">145</div>
          <div class="kpi-tile-label">ARI/Pneumonia</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('Snake Bite', 'facility')">
          <div class="kpi-tile-value">34</div>
          <div class="kpi-tile-label">Snake Bites</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('Stroke', 'facility')">
          <div class="kpi-tile-value">45</div>
          <div class="kpi-tile-label">Stroke</div>
        </div>
      </div>
    </div>
  `;
}

function generateMentalHealthIndicators() {
  return `
    <div class="indicator-section">
      <h4>A. Mental Health Summary</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable perf-moderate" onclick="showDrilldown('MNS Screening', 'facility')">
          <div class="kpi-tile-value">3,482</div>
          <div class="kpi-tile-label">Total Screened</div>
        </div>
        <div class="kpi-tile clickable perf-excellent" onclick="showDrilldown('Treatment', 'facility')">
          <div class="kpi-tile-value">78%</div>
          <div class="kpi-tile-label">Undergoing Treatment</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('CMDs', 'facility')">
          <div class="kpi-tile-value">15%</div>
          <div class="kpi-tile-label">CMD Diagnosis</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('SMDs', 'facility')">
          <div class="kpi-tile-value">4%</div>
          <div class="kpi-tile-label">SMD Diagnosis</div>
        </div>
      </div>
    </div>
    
    <div class="indicator-section">
      <h4>B. Condition Breakdown</h4>
      <div class="kpi-tiles">
        <div class="kpi-tile clickable" onclick="showDrilldown('SUDs', 'facility')">
          <div class="kpi-tile-value">12%</div>
          <div class="kpi-tile-label">Substance Use Disorder</div>
        </div>
        <div class="kpi-tile clickable" onclick="showDrilldown('Epilepsy', 'facility')">
          <div class="kpi-tile-value">6</div>
          <div class="kpi-tile-label">Epilepsy Cases</div>
        </div>
      </div>
    </div>
  `;
}

// Drilldown Modal Functions
function showDrilldown(indicatorName, level) {
  const modal = document.getElementById('drilldownModal');
  const title = document.getElementById('drilldownTitle');
  const content = document.getElementById('drilldownContent');
  
  if (!modal || !title || !content) return;
  
  title.textContent = `${indicatorName} - ${level.charAt(0).toUpperCase() + level.slice(0)} Breakdown`;
  
  // Generate mock drill-down data
  const mockData = generateMockDrilldownData(indicatorName, level);
  
  content.innerHTML = `
    <div class="table-responsive">
      <table class="drilldown-table">
        <thead>
          <tr>
            <th>${level === 'facility' ? 'Facility Name' : 'Block Name'}</th>
            <th>Value</th>
            <th>Target</th>
            <th>Performance (%)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${mockData.map(row => `
            <tr>
              <td><strong>${row.name}</strong></td>
              <td>${row.value}</td>
              <td>${row.target}</td>
              <td>${row.performance}%</td>
              <td><span class="status status--${row.status}">${row.statusText}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    <div class="drilldown-chart">
      <canvas id="drilldownChart" height="200"></canvas>
    </div>
  `;
  
  modal.classList.add('active');
  
  // Create chart
  setTimeout(() => {
    createDrilldownChart(mockData);
  }, 100);
}

function generateMockDrilldownData(indicatorName, level) {
  if (level === 'facility') {
    return [
      { name: 'HWC Kharupetia-1', value: 45, target: 50, performance: 90, status: 'success', statusText: 'Good' },
      { name: 'HWC Kharupetia-2', value: 38, target: 50, performance: 76, status: 'warning', statusText: 'Moderate' },
      { name: 'HWC Patharighat-1', value: 12, target: 50, performance: 24, status: 'error', statusText: 'Critical' },
      { name: 'HWC Sipajhar-1', value: 32, target: 50, performance: 64, status: 'warning', statusText: 'Moderate' },
      { name: 'HWC Jaljali-1', value: 28, target: 50, performance: 56, status: 'warning', statusText: 'Moderate' }
    ];
  } else {
    return [
      { name: 'KHARUPETIA', value: 245, target: 300, performance: 81.7, status: 'success', statusText: 'Good' },
      { name: 'PATHARIGHAT', value: 89, target: 200, performance: 44.5, status: 'warning', statusText: 'Moderate' },
      { name: 'SIPAJHAR', value: 156, target: 250, performance: 62.4, status: 'warning', statusText: 'Moderate' },
      { name: 'JALJALI', value: 178, target: 250, performance: 71.2, status: 'warning', statusText: 'Moderate' }
    ];
  }
}

function createDrilldownChart(data) {
  const ctx = document.getElementById('drilldownChart');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.name),
      datasets: [{
        label: 'Performance (%)',
        data: data.map(d => d.performance),
        backgroundColor: data.map(d => {
          if (d.performance >= 80) return '#22c55e';
          if (d.performance >= 60) return '#eab308';
          return '#ef4444';
        }),
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}

function closeDrilldownModal() {
  const modal = document.getElementById('drilldownModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function exportDrilldownData() {
  alert('Exporting drill-down data to CSV...');
}

// HWC Services
function initializeServices() {
  const container = document.getElementById('servicesContent');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.hwcServiceCategories.forEach((service, index) => {
    const serviceElement = document.createElement('div');
    serviceElement.className = 'service-category';
    serviceElement.innerHTML = `
      <div class="service-header" data-index="${index}">
        <h4>${service.category}</h4>
        <span class="service-toggle">▼</span>
      </div>
      <div class="service-content" id="service-${index}">
        <div class="indicators-grid">
          ${service.indicators.map(indicator => `
            <div class="indicator-item">
              <strong>${indicator}</strong>
              <div style="margin-top: 8px; font-size: 12px; color: var(--color-text-secondary);">
                Sample data: ${Math.floor(Math.random() * 100)}${Math.random() > 0.5 ? '%' : ' cases'}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    
    container.appendChild(serviceElement);
  });
  
  // Add click handlers for service categories
  container.addEventListener('click', (e) => {
    const header = e.target.closest('.service-header');
    if (header) {
      const index = header.getAttribute('data-index');
      const content = document.getElementById(`service-${index}`);
      const category = header.closest('.service-category');
      
      if (content.classList.contains('active')) {
        content.classList.remove('active');
        category.classList.remove('expanded');
      } else {
        content.classList.add('active');
        category.classList.add('expanded');
      }
    }
  });
}

// CHO Directory
function initializeCHODirectory() {
  populateDirectoryTable();
  setupDirectoryFilters();
  setupCSVExport();
}

function populateDirectoryTable() {
  const tableBody = document.getElementById('choDirectoryTable');
  if (!tableBody) return;
  
  // Generate mock CHO data
  const choData = generateMockCHOData();
  filteredCHOs = choData;
  
  renderCHOTable(choData);
}

function generateMockCHOData() {
  const choData = [];
  let choId = 1;
  
  Object.values(appData.blocks).forEach(block => {
    Object.values(block.coordinators).forEach(coordinator => {
      for (let i = 0; i < coordinator.chosSupervised; i++) {
        choData.push({
          id: choId++,
          name: `CHO ${choId}`,
          block: block.name,
          facility: `HWC-${block.name}-${i + 1}`,
          coordinator: coordinator.name,
          status: Math.random() > 0.5 ? 'active' : 'inactive',
          contact: `+91-98765${String(43200 + choId).padStart(5, '0')}`
        });
      }
    });
  });
  
  return choData;
}

function renderCHOTable(data) {
  const tableBody = document.getElementById('choDirectoryTable');
  if (!tableBody) return;
  
  tableBody.innerHTML = '';
  
  data.forEach(cho => {
    const row = document.createElement('tr');
    if (cho.status === 'inactive') {
      row.classList.add('inactive-cho');
      row.title = 'Click to send mobile notification to use AMRIT App';
    }
    
    row.innerHTML = `
      <td>${cho.name}</td>
      <td>${cho.block}</td>
      <td>${cho.facility}</td>
      <td>${cho.coordinator}</td>
      <td><span class="status status--${cho.status === 'active' ? 'success' : 'error'}">${cho.status}</span></td>
      <td>${cho.contact}</td>
    `;
    
    tableBody.appendChild(row);
  });
}

function setupDirectoryFilters() {
  const searchInput = document.getElementById('searchCHO');
  const blockFilter = document.getElementById('blockDirectoryFilter');
  const statusFilter = document.getElementById('statusFilter');
  
  [searchInput, blockFilter, statusFilter].forEach(element => {
    if (element) {
      element.addEventListener('input', filterCHODirectory);
      element.addEventListener('change', filterCHODirectory);
    }
  });
}

function filterCHODirectory() {
  const searchTerm = document.getElementById('searchCHO').value.toLowerCase();
  const blockFilter = document.getElementById('blockDirectoryFilter').value;
  const statusFilter = document.getElementById('statusFilter').value;
  
  const allCHOs = generateMockCHOData();
  
  const filtered = allCHOs.filter(cho => {
    const matchesSearch = cho.name.toLowerCase().includes(searchTerm) || 
                         cho.coordinator.toLowerCase().includes(searchTerm);
    const matchesBlock = blockFilter === 'all' || cho.block.toLowerCase() === blockFilter;
    const matchesStatus = statusFilter === 'all' || cho.status === statusFilter;
    
    return matchesSearch && matchesBlock && matchesStatus;
  });
  
  filteredCHOs = filtered;
  renderCHOTable(filtered);
}

function setupCSVExport() {
  const exportBtn = document.getElementById('exportCSV');
  if (!exportBtn) return;
  
  exportBtn.addEventListener('click', exportToCSV);
}

function exportToCSV() {
  const headers = ['CHO Name', 'Block', 'Facility', 'Coordinator', 'Status', 'Contact'];
  const csvContent = [
    headers.join(','),
    ...filteredCHOs.map(cho => [
      cho.name,
      cho.block,
      cho.facility,
      cho.coordinator,
      cho.status,
      cho.contact
    ].join(','))
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'cho-directory.csv';
  a.click();
  window.URL.revokeObjectURL(url);
}

// Performance Monitor
function populatePerformanceMonitor() {
  updatePerformanceData();
}

function updatePerformanceData() {
  const selectedWeek = document.getElementById('performanceWeekFilter').value;
  const weekData = appData.timePeriods[selectedWeek];
  
  // Update KPI cards
  document.getElementById('activityRateKPI').textContent = `${weekData.activityRate}%`;
  document.getElementById('opdKPI').textContent = weekData.totalOpd;
  document.getElementById('abhaKPI').textContent = appData.district.totalAbha;
  document.getElementById('consistencyKPI').textContent = '45.2%';
}

// Modal functionality
function initializeModal() {
  const modal = document.getElementById('activeStatsModal');
  const btn = document.getElementById('activeStatsBtn');
  const closeBtn = document.querySelector('.modal-close');
  const resetBtn = document.getElementById('resetModalFilters');
  
  btn.addEventListener('click', () => {
    modal.classList.add('active');
    populateModalData();
  });
  
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
  
  resetBtn.addEventListener('click', resetModalFilters);
  
  // Setup modal filters
  const modalBlockFilter = document.getElementById('modalBlockFilter');
  const modalCoordinatorFilter = document.getElementById('modalCoordinatorFilter');
  
  modalBlockFilter.addEventListener('change', updateModalCoordinators);
  modalBlockFilter.addEventListener('change', updateModalData);
  modalCoordinatorFilter.addEventListener('change', updateModalData);
  
  updateModalCoordinators();
}

function populateModalData() {
  updateModalData();
}

function updateModalCoordinators() {
  const blockFilter = document.getElementById('modalBlockFilter');
  const coordinatorFilter = document.getElementById('modalCoordinatorFilter');
  const selectedBlock = blockFilter.value;
  
  coordinatorFilter.innerHTML = '<option value="all">All Coordinators</option>';
  
  if (selectedBlock !== 'all') {
    const block = appData.blocks[selectedBlock];
    if (block) {
      Object.keys(block.coordinators).forEach(coordinatorName => {
        const option = document.createElement('option');
        option.value = coordinatorName;
        option.textContent = coordinatorName;
        coordinatorFilter.appendChild(option);
      });
    }
  } else {
    // Add all coordinators
    Object.values(appData.blocks).forEach(block => {
      Object.keys(block.coordinators).forEach(coordinatorName => {
        const option = document.createElement('option');
        option.value = coordinatorName;
        option.textContent = coordinatorName;
        coordinatorFilter.appendChild(option);
      });
    });
  }
}

function updateModalData() {
  const blockFilter = document.getElementById('modalBlockFilter').value;
  const coordinatorFilter = document.getElementById('modalCoordinatorFilter').value;
  
  // Generate filtered CHO lists
  const allCHOs = generateMockCHOData();
  let filteredCHOs = allCHOs;
  
  if (blockFilter !== 'all') {
    filteredCHOs = filteredCHOs.filter(cho => cho.block.toLowerCase() === blockFilter);
  }
  
  if (coordinatorFilter !== 'all') {
    filteredCHOs = filteredCHOs.filter(cho => cho.coordinator === coordinatorFilter);
  }
  
  const activeCHOs = filteredCHOs.filter(cho => cho.status === 'active');
  const inactiveCHOs = filteredCHOs.filter(cho => cho.status === 'inactive');
  
  // Update counts
  document.getElementById('activeCount').textContent = `(${activeCHOs.length})`;
  document.getElementById('inactiveCount').textContent = `(${inactiveCHOs.length})`;
  
  // Populate lists
  populateModalCHOList('activeList', activeCHOs, 'active');
  populateModalCHOList('inactiveList', inactiveCHOs, 'inactive');
}

function populateModalCHOList(containerId, chos, status) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  
  chos.forEach(cho => {
    const item = document.createElement('div');
    item.className = `cho-item ${status}`;
    item.innerHTML = `
      <div class="status-dot ${status}"></div>
      <div>
        <div><strong>${cho.name}</strong></div>
        <div style="font-size: 11px; opacity: 0.8;">${cho.block} - ${cho.coordinator}</div>
      </div>
    `;
    container.appendChild(item);
  });
}

function resetModalFilters() {
  document.getElementById('modalBlockFilter').value = 'all';
  document.getElementById('modalCoordinatorFilter').value = 'all';
  updateModalCoordinators();
  updateModalData();
}

// Utility functions
function formatNumber(num) {
  return num.toLocaleString();
}

function getStatusColor(status) {
  const colors = {
    excellent: '#22c55e',
    good: '#84cc16',
    moderate: '#eab308',
    critical: '#ef4444'
  };
  return colors[status] || colors.moderate;
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add Chart.js datalabels plugin registration
if (typeof Chart !== 'undefined') {
  Chart.register({
    id: 'datalabels',
    beforeDraw: function(chart) {
      // Custom datalabels implementation if plugin not available
    }
  });
}

// Initialize Notification System
function initializeNotificationSystem() {
  // Email notification
  const sendEmailBtn = document.getElementById('sendEmailBtn');
  if (sendEmailBtn) {
    sendEmailBtn.addEventListener('click', () => sendNotification('email'));
  }
  
  // SMS notification
  const sendSMSBtn = document.getElementById('sendSMSBtn');
  if (sendSMSBtn) {
    sendSMSBtn.addEventListener('click', () => sendNotification('sms'));
  }
  
  // WhatsApp notification
  const sendWhatsAppBtn = document.getElementById('sendWhatsAppBtn');
  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', () => sendNotification('whatsapp'));
  }
  
  // Schedule notification
  const scheduleBtn = document.getElementById('scheduleNotification');
  if (scheduleBtn) {
    scheduleBtn.addEventListener('click', scheduleNotification);
  }
}

function sendNotification(type) {
  const typeLabels = {
    email: '📧 Email',
    sms: '📱 SMS',
    whatsapp: '👍 WhatsApp'
  };
  
  const enabled = document.getElementById(`enable${type.charAt(0).toUpperCase() + type.slice(1)}`)?.checked;
  
  if (!enabled) {
    alert(`Please enable ${typeLabels[type]} notifications first.`);
    return;
  }
  
  const recipientLevel = document.querySelector('input[name="recipientLevel"]:checked')?.value;
  const templateId = document.getElementById(`${type}Template`)?.value;
  
  // Simulate sending
  const confirmSend = confirm(`Send ${typeLabels[type]} notification to ${recipientLevel} level recipients?`);
  
  if (confirmSend) {
    // Add to notification log
    addNotificationToLog(type, recipientLevel, templateId);
    alert(`✅ ${typeLabels[type]} notification sent successfully!`);
  }
}

function scheduleNotification() {
  const dateTime = prompt('Enter date and time for scheduled notification (e.g., 2024-11-01 09:00):');
  if (dateTime) {
    alert(`✅ Notification scheduled for ${dateTime}`);
  }
}

function addNotificationToLog(type, recipients, templateId) {
  const logBody = document.getElementById('notificationLogBody');
  if (!logBody) return;
  
  const template = notificationTemplates.find(t => t.id == templateId);
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  
  const badgeClass = type === 'email' ? 'badge-email' : type === 'whatsapp' ? 'badge-whatsapp' : 'badge-sms';
  const icon = type === 'email' ? '📧' : type === 'whatsapp' ? '👍' : '📱';
  
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${dateStr}</td>
    <td><span class="badge ${badgeClass}">${icon} ${type.toUpperCase()}</span></td>
    <td>${recipients} level</td>
    <td>${template ? template.name : 'Custom'}</td>
    <td><span class="status status--success">Sent</span></td>
    <td><button class="btn btn--sm btn--outline">View Details</button></td>
  `;
  
  logBody.insertBefore(row, logBody.firstChild);
}

function sendQuickNotification(coordinatorName) {
  const confirm = window.confirm(`Send notification to ${coordinatorName}?`);
  if (confirm) {
    alert(`✅ Notification sent to ${coordinatorName}`);
  }
}

function sendBulkNotification(type, target) {
  const typeLabels = {
    email: '📧 Email',
    sms: '📱 SMS',
    whatsapp: '👍 WhatsApp'
  };
  
  const targetText = target === 'inactive' ? 'all inactive CHOs' : 'all active CHOs';
  const confirm = window.confirm(`Send bulk ${typeLabels[type]} to ${targetText}?`);
  
  if (confirm) {
    alert(`✅ Bulk ${typeLabels[type]} sent to ${targetText}!`);
    addNotificationToLog(type, targetText, 1);
  }
}

function editFollowup(id) {
  alert(`Editing follow-up #${id}`);
}

function markResolved(id) {
  const confirm = window.confirm('Mark this follow-up as resolved?');
  if (confirm) {
    alert(`✅ Follow-up #${id} marked as resolved`);
  }
}

function sendReminder(id) {
  const confirm = window.confirm('Send reminder notification?');
  if (confirm) {
    alert(`✅ Reminder sent for follow-up #${id}`);
  }
}

// Initialize Indicator Cards for Performance Monitor
function initializeIndicatorCards() {
  const container = document.getElementById('indicatorCardsGrid');
  if (!container) return;
  
  const indicators = [
    { icon: '📊', title: 'Activity Rate', value: '48.5%', color: '#1FB8CD' },
    { icon: '🏥', title: 'OPD Performance', value: '1,556', color: '#FFC185' },
    { icon: '🆔', title: 'ABHA Registration', value: '43', color: '#B4413C' },
    { icon: '✅', title: 'Service Quality', value: '87%', color: '#22c55e' },
    { icon: '🔍', title: 'Screening Coverage', value: '72%', color: '#eab308' },
    { icon: '🚀', title: 'Referral Efficiency', value: '85%', color: '#84cc16' },
    { icon: '📈', title: 'Follow-up Compliance', value: '68%', color: '#eab308' },
    { icon: '🚑', title: 'Emergency Response', value: '76%', color: '#f59e0b' }
  ];
  
  container.innerHTML = '';
  
  indicators.forEach((indicator, index) => {
    const card = document.createElement('div');
    card.className = 'indicator-category-card';
    card.dataset.indicatorId = index;
    
    card.innerHTML = `
      <div class="indicator-card-icon">${indicator.icon}</div>
      <div class="indicator-card-title">${indicator.title}</div>
      <div class="indicator-card-value" style="color: ${indicator.color}">${indicator.value}</div>
    `;
    
    card.addEventListener('click', () => selectIndicatorCard(index, indicator));
    container.appendChild(card);
  });
}

function selectIndicatorCard(id, indicator) {
  // Remove active from all
  document.querySelectorAll('.indicator-category-card').forEach(card => {
    card.classList.remove('active');
  });
  
  // Add active to selected
  const selectedCard = document.querySelector(`[data-indicator-id="${id}"]`);
  if (selectedCard) {
    selectedCard.classList.add('active');
  }
  
  // Show detailed breakdown
  showIndicatorDetails(indicator);
}

function showIndicatorDetails(indicator) {
  alert(`Showing detailed breakdown for ${indicator.title}\n\nValue: ${indicator.value}\n\nClick OK to see facility-wise performance rankings.`);
}

// Make Charts Clickable
function makeChartsClickable() {
  // Activity Chart
  if (charts.activityChart) {
    const activityCanvas = document.getElementById('activityChart');
    if (activityCanvas) {
      activityCanvas.style.cursor = 'pointer';
      activityCanvas.addEventListener('click', (evt) => {
        const points = charts.activityChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
        if (points.length) {
          const dataIndex = points[0].index;
          const periods = ['Baseline', 'Week 1', 'Week 2', 'Week 3'];
          showDrilldown(`Activity Rate - ${periods[dataIndex]}`, 'block');
        }
      });
    }
  }
  
  // OPD Chart
  if (charts.opdChart) {
    const opdCanvas = document.getElementById('opdChart');
    if (opdCanvas) {
      opdCanvas.style.cursor = 'pointer';
      opdCanvas.addEventListener('click', (evt) => {
        const points = charts.opdChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
        if (points.length) {
          const dataIndex = points[0].index;
          const periods = ['Baseline', 'Week 1', 'Week 2', 'Week 3'];
          showDrilldown(`OPD Performance - ${periods[dataIndex]}`, 'facility');
        }
      });
    }
  }
  
  // Coordinator Chart
  if (charts.coordinatorChart) {
    const coordCanvas = document.getElementById('coordinatorChart');
    if (coordCanvas) {
      coordCanvas.style.cursor = 'pointer';
      coordCanvas.addEventListener('click', (evt) => {
        const points = charts.coordinatorChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
        if (points.length) {
          const dataIndex = points[0].index;
          const coordinator = appData.coordinatorRankings[dataIndex];
          alert(`${coordinator.name}\n\nActivity Rate: ${coordinator.activityRate}%\nRank: #${coordinator.rank}\n\nClick to see detailed CHO breakdown`);
        }
      });
    }
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);