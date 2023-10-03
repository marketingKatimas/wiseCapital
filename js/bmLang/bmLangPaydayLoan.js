
// Navbar
const languageToggle = document.getElementById('language-toggle');
const navHome = document.getElementById('navHome');
const navAboutUs = document.getElementById('navAboutUs');
const navOurServices = document.getElementById('navOurServices');
const navPersonalLoanCalculator = document.getElementById('navPersonalLoanCalculator');
const navPersonalLoan = document.getElementById('navPersonalLoan');
const navPaydayLoan = document.getElementById('navPaydayLoan');
// const navBusinessLoan = document.getElementById('navBusinessLoan');
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

//Title
const OurServicesTitle = document.getElementById('OurServicesTitle');
const HomeTitle = document.getElementById('HomeTitle');
const PaydayLoanTitle = document.getElementById('PaydayLoanTitle');

//Sidebar
const sidebarPersonalLoan = document.getElementById('sidebarPersonalLoan');
const sidebarPaydayLoan = document.getElementById('sidebarPaydayLoan');
// const sidebarBusinessLoan = document.getElementById('sidebarBusinessLoan');
const sidebarDebtConsolidation = document.getElementById('sidebarDebtConsolidation');
const sidebarIslamicFinancing = document.getElementById('sidebarIslamicFinancing');
const sidebarWeddingPlan = document.getElementById('sidebarWeddingPlan');
const sidebarRenovationLoan = document.getElementById('sidebarRenovationLoan');
const sidebarMedicalLoan = document.getElementById('sidebarMedicalLoan');
const sidebarEducationLoan = document.getElementById('sidebarEducationLoan');

//Banner
const borrowWithConfidence = document.getElementById('borrowWithConfidence');
const withOurHelp = document.getElementById('withOurHelp');
const bannerApplyNow = document.getElementById('bannerApplyNow');

//Content
const PaydayLoanServices = document.getElementById('PaydayLoanServices');
const PaydayLoanServicesDes = document.getElementById('PaydayLoanServicesDes');

//The Benefits
const TheBenefits = document.getElementById('TheBenefits');
const TheBenefitsDes = document.getElementById('TheBenefitsDes');
const BetterCreditScore = document.getElementById('BetterCreditScore');
const FlexibleLoanTenure = document.getElementById('FlexibleLoanTenure');
const EaseApplication = document.getElementById('EaseApplication');
const IncreasedConvenience = document.getElementById('IncreasedConvenience');

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
// const footerBusinessLoan = document.getElementById('footerBusinessLoan');
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
    updateTitle('bm');
    updateSidebar('bm');
    updateContent('bm');
    updateBenefits('bm');
    updateBanner('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateTitle('en');
    updateSidebar('en');
    updateContent('en');
    updateBenefits('en');
    updateBanner('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateTitle('bm');
        updateSidebar('bm');
        updateContent('bm');
        updateBenefits('bm');
        updateBanner('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateTitle('en');
        updateSidebar('en');
        updateContent('en');
        updateBenefits('en');
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
        // navBusinessLoan.textContent = 'Pembiayaan Bisnes';
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
        // navBusinessLoan.textContent = 'Business Loan';
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

function updateTitle(language) {
    if (language === 'bm') {
        OurServicesTitle.textContent = 'Perkhidmatan Kami';
        HomeTitle.textContent = 'Laman Utama';
        PaydayLoanTitle.textContent = 'Pembiayaan Hari Gaji';
    } else {
        OurServicesTitle.textContent = 'Our Services';
        HomeTitle.textContent = 'Home';
        PaydayLoanTitle.textContent = 'Payday Loan';
    }
}

function updateSidebar(language) {
    if (language === 'bm') {
        sidebarPersonalLoan.textContent = 'Pembiayaan Peribadi';
        sidebarPaydayLoan.textContent = 'Pembiayaan Hari Gaji';
        // sidebarBusinessLoan.textContent = 'Pembiayaan Bisnes';
        sidebarDebtConsolidation.textContent = 'Penyatuan Hutang';
        sidebarIslamicFinancing.textContent = 'Pembiayaan Islamik';
        sidebarWeddingPlan.textContent = 'Pembiayaan Kahwin';
        sidebarRenovationLoan.textContent = 'Pembiayaan Renovasi';
        sidebarMedicalLoan.textContent = 'Pembiayaan Perubatan';
        sidebarEducationLoan.textContent = 'Pembiayaan Pendidikan';
    } else {
        sidebarPersonalLoan.textContent = 'Personal Loan';
        sidebarPaydayLoan.textContent = 'Payday Loan';
        // sidebarBusinessLoan.textContent = 'Business Loan';
        sidebarDebtConsolidation.textContent = 'Debt Consolidation';
        sidebarIslamicFinancing.textContent = 'Islamic Financing';
        sidebarWeddingPlan.textContent = 'Wedding Loan';
        sidebarRenovationLoan.textContent = 'Renovation Loan';
        sidebarMedicalLoan.textContent = 'Medical Loan';
        sidebarEducationLoan.textContent = 'Education Loan';
    }
}

function updateContent(language) {
    if (language === 'bm') {
        PaydayLoanServices.textContent = 'Pembiayaan Hari Gaji';
        PaydayLoanServicesDes.textContent = 'Bagi situasi tidak diduga, pembiayaan hari gaji diwujudkan untuk memberi anda bantuan kewangan segera. Tangani situasi mencabar dengan pembiayaan pantas dan selamat sehingga hari gaji seterusnya.';
    } else {
        PaydayLoanServices.textContent = 'Payday Loan';
        PaydayLoanServicesDes.textContent = 'For unexpected situations, our payday loans exist to provide instant financial relief that you need. Navigate through challenging situations with fast and accessible loans until your next paycheck.';
    }
}

function updateBenefits(language) {
    if (language === 'bm') {
        TheBenefits.textContent = 'Faedah Pinjaman Peribadi dengan Kami';
        TheBenefitsDes.textContent = 'Pinjaman kami menonjol kerana kami menyediakan peminjam kami dengan pelbagai manfaat unik.';
        BetterCreditScore.innerHTML = 'Skor Kredit yang Lebih <br>Baik dan Diperbaiki';
        FlexibleLoanTenure.innerHTML = 'Tempoh Pinjaman <br>Fleksibel';
        EaseApplication.innerHTML = 'Kemudahan Permohonan <br>dan Kelulusan';
        IncreasedConvenience.innerHTML = 'Meningkatkan<br> Kemudahan';
    } else {
        TheBenefits.textContent = 'Benefits of a Personal Loan with Us';
        TheBenefitsDes.textContent = 'Our loans stand out as we provide our borrowers with a wide range of unique benefits.';
        BetterCreditScore.innerHTML = 'Better and Improved <br>Credit Score';
        FlexibleLoanTenure.innerHTML = 'Flexible <br>Loan Tenure';
        EaseApplication.innerHTML = 'Ease of Application <br>and Approval';
        IncreasedConvenience.innerHTML = 'Increased<br> Convenience';
    }
}

function updateBanner(language) {
    if (language === 'bm') {
        borrowWithConfidence.textContent = 'Pinjam Dengan Yakin. Dengan Kami, Anda Boleh.';
        withOurHelp.textContent = 'Dengan bantuan kami, buat kemajuan dalam hidup anda hari ini.';
        bannerApplyNow.textContent = 'Mohon Sekarang';
    } else {
        borrowWithConfidence.textContent = 'Borrow With Confidence. With Us, You Can.';
        withOurHelp.textContent = 'With our help, make progress in your life today.';
        bannerApplyNow.textContent = 'Apply Now';
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
        // footerBusinessLoan.textContent = 'Pembiayaan Bisnes';
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
        // footerBusinessLoan.textContent = 'Business Loan';
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