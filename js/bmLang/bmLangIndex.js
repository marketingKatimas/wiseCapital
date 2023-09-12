
// Navbar
const languageToggle = document.getElementById('language-toggle');
const navHome = document.getElementById('navHome');
const navAboutUs = document.getElementById('navAboutUs');
const navOurServices = document.getElementById('navOurServices');
const navPersonalLoanCalculator = document.getElementById('navPersonalLoanCalculator');
const navPersonalLoan = document.getElementById('navPersonalLoan');
const navPaydayLoan = document.getElementById('navPaydayLoan');
const navBusinessLoan = document.getElementById('navBusinessLoan');
const navDebtConsolidation = document.getElementById('navDebtConsolidation');
const navIslamicFinancing = document.getElementById('navIslamicFinancing');
const navWeddingLoan = document.getElementById('navWeddingLoan');
const navRenovationLoan = document.getElementById('navRenovationLoan');
const navMedicalLoan = document.getElementById('navMedicalLoan');
const navEducationLoan = document.getElementById('navEducationLoan');
const navContactUs = document.getElementById('navContactUs');
const navApplyNowOne = document.getElementById('navApplyNowOne');
const navApplyNowTwo = document.getElementById('navApplyNowTwo');
const stickyHeaderApplyNowOne = document.getElementById('stickyHeaderApplyNowOne');
const stickyHeaderAppyNowTwo = document.getElementById('stickyHeaderAppyNowTwo');
const mobileMenuApplyNowOne = document.getElementById('mobileMenuApplyNowOne');
const mobileMenuApplyNowTwo = document.getElementById('mobileMenuApplyNowTwo');

//Slider
const yourWisestChoice = document.getElementById('yourWisestChoice');
const slideContactUsOne = document.getElementById('slideContactUsOne');
const slideContactUsTwo = document.getElementById('slideContactUsTwo');
const shariahCompliant = document.getElementById('shariahCompliant');
const checkYourEligibilityOne = document.getElementById('checkYourEligibilityOne');
const checkYourEligibilityTwo = document.getElementById('checkYourEligibilityTwo');
const workOutYourRepayments = document.getElementById('workOutYourRepayments');
const applyNowOne = document.getElementById('applyNowOne');
const applyNowTwo = document.getElementById('applyNowTwo');

//Our Services
const ourServices = document.getElementById('ourServices');
const chooseTheBest = document.getElementById('chooseTheBest');
const personalLoanServicesOne = document.getElementById('personalLoanServicesOne');
const personalLoanServicesExplain = document.getElementById('personalLoanServicesExplain');
const personalLoanServicesTwo = document.getElementById('personalLoanServicesTwo');
const personalLoanLearnMore = document.getElementById('personalLoanLearnMore');
const paydayLoanServicesOne = document.getElementById('paydayLoanServicesOne');
const paydayLoanServicesExplain = document.getElementById('paydayLoanServicesExplain');
const paydayLoanServicesTwo = document.getElementById('paydayLoanServicesTwo');
const paydayLoanServicesLearnMore = document.getElementById('paydayLoanServicesLearnMore');
const businessLoanServicesOne = document.getElementById('businessLoanServicesOne');
const businessLoanServicesExplain = document.getElementById('businessLoanServicesExplain');
const businessLoanServicesTwo = document.getElementById('businessLoanServicesTwo');
const businessLoanLearnMore = document.getElementById('businessLoanLearnMore');
const DebtConsolidationServicesOne = document.getElementById('DebtConsolidationServicesOne');
const DebtConsolidationServicesExplain = document.getElementById('DebtConsolidationServicesExplain');
const DebtConsolidationServicesTwo = document.getElementById('DebtConsolidationServicesTwo');
const DebtConsolidationLearnMore = document.getElementById('DebtConsolidationLearnMore');
const IslamicFinancingServicesOne = document.getElementById('IslamicFinancingServicesOne');
const IslamicFinancingServicesDes = document.getElementById('IslamicFinancingServicesDes');
const IslamicFinancingServicesTwo = document.getElementById('IslamicFinancingServicesTwo');
const IslamicFinancingLearnMore = document.getElementById('IslamicFinancingLearnMore');
const WeddingLoanServicesOne = document.getElementById('WeddingLoanServicesOne');
const WeddingLoanServicesDes = document.getElementById('WeddingLoanServicesDes');
const WeddingLoanServicesTwo = document.getElementById('WeddingLoanServicesTwo');
const WeddingLoanLearnMore = document.getElementById('WeddingLoanLearnMore');
const renovationLoanServicesOne = document.getElementById('renovationLoanServicesOne');
const renovationLoanServicesDes = document.getElementById('renovationLoanServicesDes');
const renovationLoanServicesTwo = document.getElementById('renovationLoanServicesTwo');
const renovationLoanLearnMore = document.getElementById('renovationLoanLearnMore');
const medicalLoanServicesOne = document.getElementById('medicalLoanServicesOne');
const medicalLoanServicesDes = document.getElementById('medicalLoanServicesDes');
const medicalLoanServicesTwo = document.getElementById('medicalLoanServicesTwo');
const medicalLoanLearnMore = document.getElementById('medicalLoanLearnMore');
const educationLoanServicesOne = document.getElementById('educationLoanServicesOne');
const educationLoanServicesDes = document.getElementById('educationLoanServicesDes');
const educationLoanServicesTwo = document.getElementById('educationLoanServicesTwo');
const educationLoanLearnMore = document.getElementById('educationLoanLearnMore');

//Banner
const FinancingSolution = document.getElementById('FinancingSolution');
const FinancingJourney = document.getElementById('FinancingJourney');
const bannerContactUs = document.getElementById('bannerContactUs');

//Footer
const footerWiseCaspital = document.getElementById('footerWiseCaspital');
const usefulLinks = document.getElementById('usefulLinks');
const footerHome = document.getElementById('footerHome');
const footerAboutUs = document.getElementById('footerAboutUs');
const footerOurLoan = document.getElementById('footerOurLoan');
const footerContactUs = document.getElementById('footerContactUs');
const footerApplyNow = document.getElementById('footerApplyNow');
const footerOurServices = document.getElementById('footerOurServices');
const footerPersonalLoanCalculator = document.getElementById('footerPersonalLoanCalculator');
const footerPersonalLoan = document.getElementById('footerPersonalLoan');
const footerPaydayLoan = document.getElementById('footerPaydayLoan');
const footerBusinessLoan = document.getElementById('footerBusinessLoan');
const footerDebtConsolidation = document.getElementById('footerDebtConsolidation');
const footerIslamicFinancing = document.getElementById('footerIslamicFinancing');
const footerWeddingLoan = document.getElementById('footerWeddingLoan');
const footerRenovationLoan = document.getElementById('footerRenovationLoan');
const footerMedicalLoan = document.getElementById('footerMedicalLoan');
const footerEducationLoan = document.getElementById('footerEducationLoan');
const footerOurLocation = document.getElementById('footerOurLocation');
const footerOpenHours = document.getElementById('footerOpenHours');
const footerTheHour = document.getElementById('footerTheHour');


// Check the current language preference and update the switch accordingly
if (localStorage.getItem('language') === 'bm') {
    languageToggle.checked = true;
    updateNavbar('bm');
    updateSlide('bm');
    updateOurServices('bm');
    updateBanner('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateSlide('en');
    updateOurServices('en');
    updateBanner('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateSlide('bm');
        updateOurServices('bm');
        updateBanner('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateSlide('en');
        updateOurServices('en');
        updateBanner('en');
        updateFooter('en');
        localStorage.setItem('language', 'en');
    }
});

function updateNavbar(language) {
    if (language === 'bm') {
        navHome.textContent = 'Laman Utama';
        navAboutUs.textContent = 'Tentang Kami';
        navOurServices.textContent = 'Perkhidmatan Kami';
        navPersonalLoanCalculator.textContent = 'Kalkulator Pinjaman Peribadi';
        navPersonalLoan.textContent = 'Pembiayaan Peribadi';
        navPaydayLoan.textContent = 'Pembiayaan Hari Gaji';
        navBusinessLoan.textContent = 'Pembiayaan Bisnes';
        navDebtConsolidation.textContent = 'Penyatuan Hutang';
        navIslamicFinancing.textContent = 'pembiayaan Islamik';
        navWeddingLoan.textContent = 'Pembiayaan Kahwin';
        navRenovationLoan.textContent = 'Pembiayaan Renovasi';
        navMedicalLoan.textContent = 'Pembiayaan Perubatan';
        navEducationLoan.textContent = 'Pembiayaan Pendidikan';
        navContactUs.textContent = 'Hubungi Kami';
        navApplyNowOne.innerHTML = 'Mohon Sekarang <i class="fa-solid fa-arrow-right fa-fw"></i>';
        // navApplyNowTwo.innerHTML = 'Mohon Sekarang <i class="fa-solid fa-arrow-right fa-fw"></i>';
        stickyHeaderApplyNowOne.innerHTML = 'Mohon Sekarang <i class="fa-solid fa-arrow-right fa-fw"></i>';
        // stickyHeaderAppyNowTwo.innerHTML = 'Mohon Sekarang <i class="fa-solid fa-arrow-right fa-fw"></i>';
        mobileMenuApplyNowOne.innerHTML = 'Mohon Sekarang <i class="fa-solid fa-arrow-right fa-fw"></i>';
        // mobileMenuApplyNowTwo.innerHTML = 'Mohon Sekarang <i class="fa-solid fa-arrow-right fa-fw"></i>';
    } else {
        navHome.textContent = 'Home';
        navAboutUs.textContent = 'About Us';
        navOurServices.textContent = 'Our Services';
        navPersonalLoanCalculator.textContent = 'Personal Loan Calculator';
        navPersonalLoan.textContent = 'Personal Loan';
        navPaydayLoan.textContent = 'Payday Loan';
        navBusinessLoan.textContent = 'Business Loan';
        navDebtConsolidation.textContent = 'Debt Consolidation';
        navIslamicFinancing.textContent = 'Islamic Financing';
        navWeddingLoan.textContent = 'Wedding Loan';
        navRenovationLoan.textContent = 'Renovation Loan';
        navMedicalLoan.textContent = 'Medical Loan';
        navEducationLoan.textContent = 'Education Loan';
        navContactUs.textContent = 'Contact Us';
        navApplyNowOne.innerHTML = 'Apply Now <i class="fa-solid fa-arrow-right fa-fw"></i>';
        // navApplyNowTwo.innerHTML = 'Apply Now <i class="fa-solid fa-arrow-right fa-fw"></i>';
        stickyHeaderApplyNowOne.innerHTML = 'Apply Now <i class="fa-solid fa-arrow-right fa-fw"></i>';
        // stickyHeaderAppyNowTwo.innerHTML = 'Apply Now <i class="fa-solid fa-arrow-right fa-fw"></i>';
        mobileMenuApplyNowOne.innerHTML = 'Apply Now <i class="fa-solid fa-arrow-right fa-fw"></i>';
        // mobileMenuApplyNowTwo.innerHTML = 'Apply Now <i class="fa-solid fa-arrow-right fa-fw"></i>';
    }
}

function updateSlide(language) {
    if (language === 'bm') {
        yourWisestChoice.innerHTML = 'Pilihan Bijak untuk <br>Pinjaman Selamat';
        slideContactUsOne.innerHTML = 'Hubungi Kami <i class="fa-solid fa-arrow-right fa-fw"></i>';
        slideContactUsTwo.innerHTML = 'Hubungi Kami <i class="fa-solid fa-arrow-right fa-fw"></i>';
        shariahCompliant.innerHTML = 'Patuh pada Syariah untuk keperluan pembiayaan anda';
        checkYourEligibilityOne.innerHTML = 'Semak kelayakan anda <i class="fa-solid fa-arrow-right fa-fw"></i>';
        checkYourEligibilityTwo.innerHTML = 'Semak kelayakan anda <i class="fa-solid fa-arrow-right fa-fw"></i>';
        workOutYourRepayments.innerHTML = 'Ketahui bayaran balik <br>anda sebelum membuat permohonan!';
        applyNowOne.innerHTML = 'Mohon Sekarang <i class="fa-solid fa-arrow-right fa-fw"></i>';
        applyNowTwo.innerHTML = 'Mohon Sekarang <i class="fa-solid fa-arrow-right fa-fw"></i>';
    } else {
        yourWisestChoice.innerHTML = 'Your Wisest Choice <br> for Safe Financing.';
        slideContactUsOne.innerHTML = 'Contact Us <i class="fa-solid fa-arrow-right fa-fw"></i>';
        slideContactUsTwo.innerHTML = 'Contact Us <i class="fa-solid fa-arrow-right fa-fw"></i>';
        shariahCompliant.innerHTML = 'Shariah-compliant for <br> your financing needs.';
        checkYourEligibilityOne.innerHTML = 'Check your eligibility <i class="fa-solid fa-arrow-right fa-fw"></i>';
        checkYourEligibilityTwo.innerHTML = 'Check your eligibility <i class="fa-solid fa-arrow-right fa-fw"></i>';
        workOutYourRepayments.innerHTML = 'Work out your repayments <br>before anything else!';
        applyNowOne.innerHTML = 'Apply Now <i class="fa-solid fa-arrow-right fa-fw"></i>';
        applyNowTwo.innerHTML = 'Apply Now <i class="fa-solid fa-arrow-right fa-fw"></i>';
    }
}

function updateOurServices(language) {
    if (language === 'bm') {
        ourServices.textContent = '~ Perkhidmatan Kami ~';
        chooseTheBest.innerHTML = 'Pilih Syarikat Perkhidmatan Pembiayaan <span>Terbaik</span>';
        personalLoanServicesOne.textContent = 'Pembiayaan Peribadi';
        personalLoanServicesExplain.textContent = 'Pinjaman peribadi yang disesuaikan menawarkan pembayaran bulanan yang boleh diurus sejajar dengan kewangan anda.';
        personalLoanServicesTwo.textContent = 'Pembiayaan Peribadi';
        personalLoanLearnMore.textContent = 'Ketahui Lebih Lanjut';
        paydayLoanServicesOne.textContent = 'Pembiayaan Hari Gaji';
        paydayLoanServicesExplain.textContent = 'Dapatkan bantuan kewangan segera untuk perkara yang tidak dijangka dengan pinjaman hari gaji kami yang boleh diakses sehingga gaji anda yang seterusnya.';
        paydayLoanServicesTwo.textContent = 'Pembiayaan Hari Gaji';
        paydayLoanServicesLearnMore.textContent = 'Ketahui Lebih Lanjut';
        businessLoanServicesOne.textContent = 'Pembiayaan Bisnes';
        businessLoanServicesExplain.textContent = 'Perkasakan pertumbuhan perniagaan anda dengan memanfaatkan faedah pinjaman perniagaan kami yang sangat kompetitif.';
        businessLoanServicesTwo.textContent = 'Pembiayaan Bisnes';
        businessLoanLearnMore.textContent = 'Ketahui Lebih Lanjut';
        DebtConsolidationServicesOne.textContent = 'Penyatuan Hutang';
        DebtConsolidationServicesExplain.textContent = 'Permudahkan dan uruskan hutang anda dengan cekap dengan penyelesaian penyatuan komprehensif kami.';
        DebtConsolidationServicesTwo.textContent = 'Penyatuan Hutang';
        DebtConsolidationLearnMore.textContent = 'Ketahui Lebih Lanjut';
        IslamicFinancingServicesOne.textContent = 'Pembiayaan Islamik';
        IslamicFinancingServicesDes.textContent = 'Selami pengalaman beretika dan tanpa faedah sepenuhnya yang disesuaikan dengan keperluan kewangan unik anda.';
        IslamicFinancingServicesTwo.textContent = 'Pembiayaan Islamik';
        IslamicFinancingLearnMore.textContent = 'Ketahui Lebih Lanjut';
        WeddingLoanServicesOne.textContent = 'Pembiayaan Kahwin';
        WeddingLoanServicesDes.textContent = 'Ubah perkahwinan yang anda impikan menjadi kenyataan melalui pinjaman perkahwinan kami yang disesuaikan dan khusus.';
        WeddingLoanServicesTwo.textContent = 'Pembiayaan Kahwin';
        WeddingLoanLearnMore.textContent = 'Ketahui Lebih Lanjut';
        renovationLoanServicesOne.textContent = 'Pembiayaan Renovasi';
        renovationLoanServicesDes.textContent = 'Tingkatkan ruang kediaman anda dengan pinjaman pengubahsuaian kami, yang disesuaikan secara pakar untuk menjadikan visi anda menjadi realiti.';
        renovationLoanServicesTwo.textContent = 'Pembiayaan Renovasi';
        renovationLoanLearnMore.textContent = 'Ketahui Lebih Lanjut';
        medicalLoanServicesOne.textContent = 'Pembiayaan Perubatan';
        medicalLoanServicesDes.textContent = 'Lindungi penjagaan perubatan yang diperlukan tanpa kebimbangan kewangan melalui pinjaman perubatan kami yang direka khas.';
        medicalLoanServicesTwo.textContent = 'Pembiayaan Perubatan';
        medicalLoanLearnMore.textContent = 'Ketahui Lebih Lanjut';
        educationLoanServicesOne.textContent = 'Pembiayaan Pendidikan';
        educationLoanServicesDes.textContent = 'Melabur dalam pengetahuan dan prospek masa depan dengan pinjaman pendidikan kami, membuka jalan untuk kejayaan anda.';
        educationLoanServicesTwo.textContent = 'Pembiayaan Pendidikan';
        educationLoanLearnMore.textContent = 'Ketahui Lebih Lanjut';
    } else {
        ourServices.textContent = '~ Our Services ~';
        chooseTheBest.innerHTML = 'Choose <span>The Best</span> Financing <br> Service Company';
        personalLoanServicesOne.textContent = 'Personal Loan';
        personalLoanServicesExplain.textContent = 'Tailored personal loans offer manageable monthly payments aligned with your finances.';
        personalLoanServicesTwo.textContent = 'Personal Loan';
        personalLoanLearnMore.textContent = 'Learn More';
        paydayLoanServicesOne.textContent = 'Payday Loan';
        paydayLoanServicesExplain.textContent = 'Get quick financial relief for unforeseen situations with our accessible payday loans until your next paycheck.';
        paydayLoanServicesTwo.textContent = 'Payday Loan';
        paydayLoanServicesLearnMore.textContent = 'Learn More';
        businessLoanServicesOne.textContent = 'Business Loan';
        businessLoanServicesExplain.textContent = 'Empower your business growth by harnessing the benefits of our highly competitive business loans.';
        businessLoanServicesTwo.textContent = 'Business Loan';
        businessLoanLearnMore.textContent = 'Learn More';
        DebtConsolidationServicesOne.textContent = 'Debt Consolidation';
        DebtConsolidationServicesExplain.textContent = 'Efficiently simplify and manage your debts with our comprehensive consolidation solutions.';
        DebtConsolidationServicesTwo.textContent = 'Debt Consolidation';
        DebtConsolidationLearnMore.textContent = 'Learn More';
        IslamicFinancingServicesOne.textContent = 'Islamic Financing';
        IslamicFinancingServicesDes.textContent = 'Immerse in the experience of ethical and completely interest-free tailored to your unique financial needs.';
        IslamicFinancingServicesTwo.textContent = 'Islamic Financing';
        IslamicFinancingLearnMore.textContent = 'Learn More';
        WeddingLoanServicesOne.textContent = 'Wedding Loan';
        WeddingLoanServicesDes.textContent = 'Transform your envisioned wedding into reality through our tailored and specialized wedding loans.';
        WeddingLoanServicesTwo.textContent = 'Wedding Loan';
        WeddingLoanLearnMore.textContent = 'Learn More';
        renovationLoanServicesOne.textContent = 'Renovation Loan';
        renovationLoanServicesDes.textContent = 'Elevate your living space with our renovation loans, expertly tailored to turn your vision into reality.';
        renovationLoanServicesTwo.textContent = 'Renovation Loan';
        renovationLoanLearnMore.textContent = 'Learn More';
        medicalLoanServicesOne.textContent = 'Medical Loan';
        medicalLoanServicesDes.textContent = 'Secure the necessary medical care without financial worry through our purpose-built medical loans.';
        medicalLoanServicesTwo.textContent = 'Medical Loan';
        medicalLoanLearnMore.textContent = 'Learn More';
        educationLoanServicesOne.textContent = 'Education Loan';
        educationLoanServicesDes.textContent = 'Invest in knowledge and future prospects with our education loans, paving the way for your success.';
        educationLoanServicesTwo.textContent = 'Education Loan';
        educationLoanLearnMore.textContent = 'Learn More';

    }
}

function updateBanner(language) {
    if (language === 'bm') {
        FinancingSolution.textContent = 'Mencari Penyelesaian Pembiayaan Terbaik?';
        FinancingJourney.textContent = 'Wise Capital Credit membantu anda dalam perjalanan pembiayaan anda';
        bannerContactUs.textContent = 'Hubungi Kami';
    } else {
        FinancingSolution.textContent = 'Looking for the Best Financing Solutions?';
        FinancingJourney.textContent = 'Wise Capital Credit helps you in your financing journey';
        bannerContactUs.textContent = 'Contact Us';
    }
}

function updateFooter(language) {
    if (language === 'bm') {
        footerWiseCaspital.textContent = 'Wise Capital Credit Sdn Bhd ialah pilihan bijak anda untuk pinjaman yang selamat. ';
        usefulLinks.textContent = 'Pautan Berguna';
        footerHome.textContent = 'Laman Utama';
        footerAboutUs.textContent = ' Tentang Kami';
        footerOurLoan.textContent = ' Perkhidmatan Kami';
        footerContactUs.textContent = ' Hubungi Kami';
        footerApplyNow.textContent = 'Mohon Sekarang';
        footerOurServices.textContent = 'Perkhidmatan Kami';
        footerPersonalLoanCalculator.textContent = 'Kalkulator Pinjaman Peribadi';
        footerPersonalLoan.textContent = 'Pembiayaan Peribadi';
        footerPaydayLoan.textContent = 'Pembiayaan Hari Gaji';
        footerBusinessLoan.textContent = 'Pembiayaan Bisnes';
        footerDebtConsolidation.textContent = 'Penyatuan Hutang';
        footerIslamicFinancing.textContent = 'Pembiayaan Islamik';
        footerWeddingLoan.textContent = 'Pembiayaan Kahwin';
        footerRenovationLoan.textContent = 'Pembiayaan Renovasi';
        footerMedicalLoan.textContent = 'Pembiayaan Perubatan';
        footerEducationLoan.textContent = 'Pembiayaan Pendidikan';
        footerOurLocation.textContent = 'Lokasi Kami';
        footerOpenHours.textContent = 'Waktu Buka';
        footerTheHour.innerHTML = 'Isnin - Jumaat: 8:30 am - 5:30 pm, <br> Sabtu: 8:30 am - 1:30 pm,<br>Ahad: TUTUP';

    } else {
        footerWiseCaspital.textContent = 'Wise Capital Credit Sdn Bhd is your wisest choice for safe financing.';
        usefulLinks.textContent = 'Useful Links';
        footerHome.textContent = 'Home';
        footerAboutUs.textContent = 'About Us';
        footerOurLoan.textContent = 'Our Loan';
        footerContactUs.textContent = 'Contact Us';
        footerApplyNow.textContent = 'Apply Now';
        footerOurServices.textContent = 'Our Services';
        footerPersonalLoanCalculator.textContent = 'Personal Loan Calculator';
        footerPersonalLoan.textContent = 'Personal Loan';
        footerPaydayLoan.textContent = 'Payday Loan';
        footerBusinessLoan.textContent = 'Business Loan';
        footerDebtConsolidation.textContent = 'Debt Consolidation';
        footerIslamicFinancing.textContent = 'Islamic Financing';
        footerWeddingLoan.textContent = 'Wedding Loan';
        footerRenovationLoan.textContent = 'Renovation Loan';
        footerMedicalLoan.textContent = 'Medical Loan';
        footerEducationLoan.textContent = 'Education Loan';
        footerOurLocation.textContent = 'Our Location';
        footerOpenHours.textContent = 'Open Hours';
        footerTheHour.innerHTML = 'Mon - Fri: 8:30 am - 5:30 pm, <br> Sat: 8:30 am - 1:30 pm,<br>Sunday: CLOSED';
    }
}