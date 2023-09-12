
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
const OnlineApplicationLoanTitle = document.getElementById('OnlineApplicationLoanTitle');
const HomeTitle = document.getElementById('HomeTitle');
const OnlineApplicationForm = document.getElementById('OnlineApplicationForm');

//Document Section
const DocumentSection = document.getElementById('DocumentSection');
const PrepareDocuments = document.getElementById('PrepareDocuments');
const Mykad = document.getElementById('Mykad');
const PayslipBankStatement = document.getElementById('PayslipBankStatement');
const UtilitiesBill = document.getElementById('UtilitiesBill');

//Transaction Channels
const TransactionChannels = document.getElementById('TransactionChannels');
const MadeThrough = document.getElementById('MadeThrough');
const DirectDebit = document.getElementById('DirectDebit');
const JomPay = document.getElementById('JomPay');
const FPXPayment = document.getElementById('FPXPayment');

//Apply Form
const LoanAmount = document.getElementById('LoanAmount');
const LoanAge = document.getElementById('LoanAge');
const NameAs = document.getElementById('NameAs');
const Email = document.getElementById('Email');
const Mobile = document.getElementById('Mobile');
const EmploymentSector = document.getElementById('EmploymentSector');
const PleaseSelect = document.getElementById('PleaseSelect');
const Government = document.getElementById('Government');
const GovernmentLink = document.getElementById('GovernmentLink');
const Private = document.getElementById('Private');
const MonthlyGrossSalary = document.getElementById('MonthlyGrossSalary');
const MonthlyNettSalary = document.getElementById('MonthlyNettSalary');
const SendMessageOne = document.getElementById('SendMessageOne');
const SendMessageTwo = document.getElementById('SendMessageTwo');

//Banner
const LookingFor = document.getElementById('LookingFor');
const Ourprofessional = document.getElementById('Ourprofessional');
const ApplyNowBanner = document.getElementById('ApplyNowBanner');

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
    updateDocumentSection('bm');
    updateTransactionChannels('bm');
    updateApplyForm('bm');
    updateBanner('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateTitle('en');
    updateDocumentSection('en');
    updateTransactionChannels('en');
    updateApplyForm('en');
    updateBanner('bm');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateTitle('bm');
        updateDocumentSection('bm');
        updateTransactionChannels('bm');
        updateApplyForm('bm');
        updateBanner('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateTitle('en');
        updateDocumentSection('en');
        updateTransactionChannels('en');
        updateApplyForm('en');
        updateBanner('bm');
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
        navApplyNowTwo.innerHTML = 'Mohon Sekarang <i class="fa-solid fa-arrow-right fa-fw"></i>';
        stickyHeaderApplyNowOne.innerHTML = 'Mohon Sekarang <i class="fa-solid fa-arrow-right fa-fw"></i>';
        stickyHeaderAppyNowTwo.innerHTML = 'Mohon Sekarang <i class="fa-solid fa-arrow-right fa-fw"></i>';
        mobileMenuApplyNowOne.innerHTML = 'Mohon Sekarang <i class="fa-solid fa-arrow-right fa-fw"></i>';
        mobileMenuApplyNowTwo.innerHTML = 'Mohon Sekarang <i class="fa-solid fa-arrow-right fa-fw"></i>';
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
        navApplyNowTwo.innerHTML = 'Apply Now <i class="fa-solid fa-arrow-right fa-fw"></i>';
        stickyHeaderApplyNowOne.innerHTML = 'Apply Now <i class="fa-solid fa-arrow-right fa-fw"></i>';
        stickyHeaderAppyNowTwo.innerHTML = 'Apply Now <i class="fa-solid fa-arrow-right fa-fw"></i>';
        mobileMenuApplyNowOne.innerHTML = 'Apply Now <i class="fa-solid fa-arrow-right fa-fw"></i>';
        mobileMenuApplyNowTwo.innerHTML = 'Apply Now <i class="fa-solid fa-arrow-right fa-fw"></i>';
    }
}

function updateTitle(language) {
    if (language === 'bm') {
        OnlineApplicationLoanTitle.textContent = 'Borang Permohonan Atas Talian';
        HomeTitle.textContent = 'Laman Utama';
        OnlineApplicationForm.textContent = 'Borang Permohonan Atas Talian';
    } else {
        OnlineApplicationLoanTitle.textContent = 'Online Application Form';
        HomeTitle.textContent = 'Home';
        OnlineApplicationForm.textContent = 'Online Application Form';
    }
}

function updateDocumentSection(language) {
    if (language === 'bm') {
        DocumentSection.textContent = 'Bahagian Dokumen';
        PrepareDocuments.textContent = 'Pastikan anda menyediakan dokumen ini:';
        Mykad.textContent = 'Salinan MyKad';
        PayslipBankStatement.textContent = 'Slip gaji, kenyataan bank & KWSP 3 bulan terkini';
        UtilitiesBill.textContent = 'Bil utiliti terkini (bil elektrik atau air)';
    } else {
        DocumentSection.textContent = 'Document Section';
        PrepareDocuments.textContent = 'Make sure to prepare these documents:';
        Mykad.textContent = 'Photocopy MyKad';
        PayslipBankStatement.textContent = 'Latest 3 months’ payslip, bank statements & EPF statement';
        UtilitiesBill.textContent = 'Latest Utilities bill (electric or water bill)';
    }
}

function updateTransactionChannels(language) {
    if (language === 'bm') {
        TransactionChannels.textContent = 'Saluran Transaksi';
        MadeThrough.textContent = 'Semua transaksi dibuat melalui saluran ini:';
        DirectDebit.textContent = 'Direct Debit(e-Mandate)';
        JomPay.textContent = 'JomPAY';
        FPXPayment.textContent = 'FPX Payment';
    } else {
        TransactionChannels.textContent = 'Transaction Channels';
        MadeThrough.textContent = 'All transaction are made through these channels:';
        DirectDebit.textContent = 'Direct Debit(e-Mandate)';
        JomPay.textContent = 'JomPAY';
        FPXPayment.textContent = 'FPX Payment';
    }
}

function updateApplyForm(language) {
    if (language === 'bm') {
        LoanAmount.textContent = 'Jumlah Pinjaman (RM):';
        LoanAge.textContent = 'umur:';
        NameAs.textContent = 'Nama seperti Dalam NRIC:';
        Email.textContent = 'Emel:';
        Mobile.textContent = 'Nombor telefon:';
        EmploymentSector.textContent = 'Sektor Pekerjaan:';
        PleaseSelect.textContent = 'Sila Pilih';
        Government.textContent = 'Kerajaan';
        GovernmentLink.textContent = 'Syarikat Berkaitan Kerajaan';
        Private.textContent = 'Swasta';
        MonthlyGrossSalary.textContent = 'Gaji Kasar Bulanan (RM):';
        MonthlyNettSalary.textContent = 'Gaji Bersih Bulanan (RM):';
        SendMessageOne.textContent = 'Menghantar mesej';
        SendMessageTwo.textContent = 'Menghantar mesej';
    } else {
        LoanAmount.textContent = 'Loan Amount (RM):';
        LoanAge.textContent = 'Age:';
        NameAs.textContent = 'Name as In NRIC:';
        Email.textContent = 'Email:';
        Mobile.textContent = 'Mobile Contact No.:';
        EmploymentSector.textContent = 'Employment Sector:';
        PleaseSelect.textContent = 'Please Select';
        Government.textContent = 'Government';
        GovernmentLink.textContent = 'Government Link';
        Private.textContent = 'Private';
        MonthlyGrossSalary.textContent = 'Monthly Gross Salary (RM):';
        MonthlyNettSalary.textContent = 'Monthly Nett Salary (RM):';
        SendMessageOne.textContent = 'Send message';
        SendMessageTwo.textContent = 'Send message';
    }
}

function updateBanner(language) {
    if (language === 'bm') {
        LookingFor.textContent = 'Mencari pinjaman wang mudah?';
        Ourprofessional.textContent = 'Pegawai pinjaman profesional kami hanya perlu dihubungi untuk semua keperluan kewangan anda';
        ApplyNowBanner.textContent = 'Mohon Sekarang';
    } else {
        LookingFor.textContent = 'Looking for easy money loans?';
        Ourprofessional.textContent = 'Our professional loan officers are just a call away for all your financial needs';
        ApplyNowBanner.textContent = 'Apply Now';
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