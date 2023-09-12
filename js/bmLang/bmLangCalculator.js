
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

//Title
const OurServicesTitle = document.getElementById('OurServicesTitle');
const HomeTitle = document.getElementById('HomeTitle');
const PersonalLoanCalculatorTitle = document.getElementById('PersonalLoanCalculatorTitle');

//Calculator
const PersonalLaonCalculator = document.getElementById('PersonalLaonCalculator');
const LoanAmount = document.getElementById('LoanAmount');
const TenureInMonths = document.getElementById('TenureInMonths');
const Months = document.getElementById('Months');
const YourMonthlyPayment = document.getElementById('YourMonthlyPayment');
const TotalAmount = document.getElementById('TotalAmount');
const CalculatorApplyNow = document.getElementById('CalculatorApplyNow');

//Eligibility
const LoanApplication = document.getElementById('LoanApplication');
const LoanApplicationDes = document.getElementById('LoanApplicationDes');
const MalaysianAged = document.getElementById('MalaysianAged');
const EPFContributor = document.getElementById('EPFContributor');
const EPFContributorDes = document.getElementById('EPFContributorDes');
const SalaryRequirement = document.getElementById('SalaryRequirement');
const SalaryRequirementDes = document.getElementById('SalaryRequirementDes');

//Banner
const borrowWithConfidence = document.getElementById('borrowWithConfidence');
const withOurHelp = document.getElementById('withOurHelp');
const bannerApplyNow = document.getElementById('bannerApplyNow');

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
    updateTitle('bm');
    updateCalculator('bm');
    updateEligibility('bm');
    updateBanner('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateTitle('en');
    updateCalculator('en');
    updateEligibility('en');
    updateBanner('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateTitle('bm');
        updateCalculator('bm');
        updateEligibility('bm');
        updateBanner('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateTitle('en');
        updateCalculator('en');
        updateEligibility('en');
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

function updateTitle(language) {
    if (language === 'bm') {
        OurServicesTitle.textContent = 'Perkhidmatan Kami';
        HomeTitle.textContent = 'Laman Utama';
        PersonalLoanCalculatorTitle.textContent = 'Kalkulator Pinjaman Peribadi';
    } else {
        OurServicesTitle.textContent = 'Our Services';
        HomeTitle.textContent = 'Home';
        PersonalLoanCalculatorTitle.textContent = 'Personal Loan Calculator';
    }
}

function updateCalculator(language) {
    if (language === 'bm') {
        PersonalLaonCalculator.textContent = 'Kalkulator Pinjaman Peribadi';
        LoanAmount.textContent = 'Jumlah Pinjaman:';
        TenureInMonths.textContent = 'Tempoh (dalam bulan):';
        Months.textContent = 'Bulan';
        YourMonthlyPayment.textContent = 'Bayaran Bulanan Anda:';
        TotalAmount.innerHTML = 'Jumlah yang anda bayar dalam&nbsp;<span class="loan-tenure-value"></span> &nbsp;bulan';
        CalculatorApplyNow.textContent = 'Mohon Sekarang';
    } else {
        PersonalLaonCalculator.textContent = 'Personal Loan Calculator';
        LoanAmount.textContent = 'Loan Amount:';
        TenureInMonths.textContent = 'Tenure (in months):';
        Months.textContent = 'Months';
        YourMonthlyPayment.textContent = 'Your Monthly Payment:';
        TotalAmount.innerHTML = 'Total amount you pay in&nbsp;<span class="loan-tenure-value"></span> &nbsp;months';
        CalculatorApplyNow.textContent = 'Apply Now';
    }
}

function updateEligibility(language) {
    if (language === 'bm') {
        LoanApplication.innerHTML = '<span class="theme_color">Kelayakan</span> Permohonan Pinjaman';
        LoanApplicationDes.textContent = 'Jika anda menjawab “YA” kepada semua soalan di bawah, maka anda layak! Mohon segera untuk dapatkan bantuan kewangan untuk keperluan anda';
        MalaysianAged.innerHTML = 'Adakah anda warganegara Malaysia <br>berumur 18 - 60? ';
        EPFContributor.textContent = 'Pencarum KWSP';
        EPFContributorDes.textContent = 'Adakah anda pencarum KWSP?';
        SalaryRequirement.textContent = 'Keperluan Gaji';
        SalaryRequirementDes.innerHTML = 'Adakah anda menerima gaji minimum RM1,200 dan <br>dibayar melalui akaun bank?';
    } else {
        LoanApplication.innerHTML = 'Loan Application <span class="theme_color">Eligibility</span>';
        LoanApplicationDes.textContent = 'If you answer “YES” to all the below questions, then you are eligible! Apply for our loan and get the financial relief you need.';
        MalaysianAged.textContent = 'Are you a Malaysian aged 18 - 60?';
        EPFContributor.textContent = 'EPF Contributor';
        EPFContributorDes.textContent = 'Are you a consistent EPF contributor?';
        SalaryRequirement.textContent = 'Salary Requirement';
        SalaryRequirementDes.innerHTML = 'Do you have a minimum salary of RM1,200 and you receive <br>the salary through your bank account?';
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