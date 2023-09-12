
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
const mobileMenuApplyNowOne = document.getElementById('mobileMenuApplyNowOne');
const mobileMenuApplyNowTwo = document.getElementById('mobileMenuApplyNowTwo');

//About Us
const AboutUsTitle = document.getElementById('AboutUsTitle');
const headerHomeLi = document.getElementById('headerHomeLi');
const headerAboutUsLi = document.getElementById('headerAboutUsLi');
const aboutUsHeader = document.getElementById('aboutUsHeader');
const wiseChoice = document.getElementById('wiseChoice');
const ourPurpose = document.getElementById('ourPurpose');
const whatMakesUsDifferentOne = document.getElementById('whatMakesUsDifferentOne');
const fastApproval = document.getElementById('fastApproval');
const fastApprovalExplanation = document.getElementById('fastApprovalExplanation');
const fastApprovalContactUs = document.getElementById('fastApprovalContactUs');
const whatMakesUsDifferentTwo = document.getElementById('whatMakesUsDifferentTwo');
const lowInterest = document.getElementById('lowInterest');
const lowInterestExplanation = document.getElementById('lowInterestExplanation');
const lowInterestContactUs = document.getElementById('lowInterestContactUs');
const whatMakesUsDifferentThree = document.getElementById('whatMakesUsDifferentThree');
const shariahCompliant = document.getElementById('shariahCompliant');
const shariahCompliantExplanation = document.getElementById('shariahCompliantExplanation');
const shariahCompliantContactUs = document.getElementById('shariahCompliantContactUs');
const whatMakesUsDifferentFour = document.getElementById('whatMakesUsDifferentFour');
const flexible = document.getElementById('flexible');
const flexibleExplanation = document.getElementById('flexibleExplanation');
const flexibleContactUs = document.getElementById('flexibleContactUs');

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
    updateAboutUs('bm');
    updateAboutUsTwo('bm');
    updateBanner('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateAboutUs('en');
    updateAboutUsTwo('en');
    updateBanner('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateAboutUs('bm');
        updateAboutUsTwo('bm');
        updateBanner('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateAboutUs('en');
        updateAboutUsTwo('en');
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
        mobileMenuApplyNowOne.innerHTML = 'Mohon Sekarang <i class="fa-solid fa-arrow-right fa-fw"></i>';
        // mobileMenuApplyNowTwo.innerHTML = 'Mohon Sekarang <i class="fa-solid fa-arrow-right fa-fw"></i>';
        stickyHeaderApplyNowOne.innerHTML = 'Mohon Sekarang <i class="fa-solid fa-arrow-right fa-fw"></i>';
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
        mobileMenuApplyNowOne.innerHTML = 'Apply Now <i class="fa-solid fa-arrow-right fa-fw"></i>';
        // mobileMenuApplyNowTwo.innerHTML = 'Apply Now <i class="fa-solid fa-arrow-right fa-fw"></i>';
        stickyHeaderApplyNowOne.innerHTML = 'Mohon Sekarang <i class="fa-solid fa-arrow-right fa-fw"></i>';
    }
}

function updateAboutUs(language) {
    if (language === 'bm') {
        AboutUsTitle.textContent = 'Tentang Kami';
        headerHomeLi.textContent = 'Laman Utama';
        headerAboutUsLi.textContent = 'Tentang Kami';
        aboutUsHeader.textContent = 'Tentang Kami';
        wiseChoice.innerHTML = '<span>Wise Capital Credit Sdn Bhd </span><br> ialah pilihan bijak anda <br>untuk pinjaman yang selamat..';
        ourPurpose.innerHTML = 'Objektif utama kami adalah untuk membantu anda dalam perjalanan kewangan <br>anda, tidak kira apa matlamat anda. Wise Capital Credit mereka pelan khas <br>pinjaman berdasarkan pendapatan bulanan anda supaya anda tidak mengalami <br>beban kewangan.';
        whatMakesUsDifferentOne.textContent = 'Apa yang membezakan Kami';
        fastApproval.innerHTML = 'Proses Kelulusan <span class="theme_color">PANTAS</span>';
        fastApprovalExplanation.textContent = 'Proses senang & pantas membenarkan anda untuk meluangkan masa lebih untuk diri sendiri kerana kelulusan pinjaman kami hanya memakan masa yang pendek selepas penyemakan dokumen.';
        fastApprovalContactUs.textContent = 'Hubungi Kami';
        whatMakesUsDifferentTwo.textContent = 'Apa yang membezakan Kami';
        lowInterest.innerHTML = 'Kadar Faedah <span class="theme_color">RENDAH</span>';
        lowInterestExplanation.textContent = 'Buang risau dengan kadar faedah rendah untuk bayaran balik bulanan yang senang.';
        lowInterestContactUs.textContent = 'Hubungi Kami';
        whatMakesUsDifferentFour.textContent = 'Apa yang membezakan kami';
        flexible.innerHTML = 'Pelan Bayaran Balik <span class="theme_color">FLEKSIBEL</span>';
        flexibleExplanation.textContent = 'Berdasarkan kelayakan kredit & pendapatan bulanan, anda akan menerima pelan pinjaman khas dari konsultan anda untuk meringankan beban kewangan anda.';
        flexibleContactUs.textContent = 'Hubungi Kami';
    } else {
        AboutUsTitle.textContent = 'About Us';
        headerHomeLi.textContent = 'Home';
        headerAboutUsLi.textContent = 'About Us';
        aboutUsHeader.textContent = 'About Us';
        wiseChoice.innerHTML = '<span>Wise Capital Credit Sdn Bhd </span><br> is your wisest choice for safe financing.';
        ourPurpose.innerHTML = 'Our core purpose is to help you in your financial journey, regardless <br>of your goals and intentions. We will personalize a financing plan that <br> caters to your budget to ease your financial burden.';
        whatMakesUsDifferentOne.textContent = 'What Makes Us Different';
        fastApproval.innerHTML = '<span class="theme_color">FAST</span> approval process';
        fastApprovalExplanation.textContent = 'Our time-efficient & convenient process leaves you with more time to spend on yourself after document submission.';
        fastApprovalContactUs.textContent = 'Contact Us';
        whatMakesUsDifferentTwo.textContent = 'What Makes Us Different';
        lowInterest.innerHTML = '<span class="theme_color">LOW</span> interest rate';
        lowInterestExplanation.textContent = 'Throw your worries out the window with our low interest rate to ease your monthly repayments.';
        lowInterestContactUs.textContent = 'Contact Us';
        whatMakesUsDifferentFour.textContent = 'What Makes Us Different';
        flexible.innerHTML = '<span class="theme_color">FLEXIBLE</span> repayment plan';
        flexibleExplanation.textContent = 'We personalise a loan plan that caters to your needs based on your creditworthiness and income, so you won’t have to live from paycheck to paycheck every month.';
        flexibleContactUs.textContent = 'Contact Us';
    }
}

function updateAboutUsTwo(language) {
    if (language === 'bm') {
        whatMakesUsDifferentThree.textContent = 'Apa yang membezakan Kami';
        shariahCompliant.innerHTML = 'Patuh <span class="theme_color">SHARIAH</span>';
        shariahCompliantExplanation.textContent = 'Kami terapkan khidmat pinjaman yang halal dan diluluskan seiring dengan undang-undang syariah. Setiap transaksi adalah sah & selamat.';
        shariahCompliantContactUs.textContent = 'Hubungi Kami';
    } else {
        whatMakesUsDifferentThree.textContent = 'What Makes Us Different';
        shariahCompliant.innerHTML = '<span class="theme_color">SHARIAH</span> compliant';
        shariahCompliantExplanation.textContent = 'We implement a halal financing service, approved in accordance with Shariah law, to ensure every transaction is legal and safe.';
        shariahCompliantContactUs.textContent = 'Contact Us';
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