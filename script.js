const translations = {
    en: {
        title: "Win $500 in our App Raffle with TD Bank!",
        desc: "Enter for a chance to win a $500 bonus by submitting an entry through your TD Bank Mobile App account. No purchase necessary. See rules for details.",
        openAccount: "Open an account",
        enroll: "Enroll in Giveaway",
        feat1Title: "Mobile First",
        feat1Desc: "Submit your entry directly through the TD Bank Mobile App.",
        feat2Title: "Secure Entry",
        feat2Desc: "Your information is protected by industry-leading security.",
        feat3Title: "Instant Rewards",
        feat3Desc: "View your coupon codes and rewards instantly upon enrollment.",
        modalTitle: "Secure Sign In",
        modalSubtitle: "Sign in to enroll in the $500 App Raffle",
        footer: "&copy; 2026 TD Bank, N.A. All Rights Reserved. Member FDIC. Equal Housing Lender.",
        success: "Registration successful! You are now enrolled."
    },
    es: {
        title: "¡Gane $500 en nuestro Sorteo por App con TD Bank!",
        desc: "Participe para tener la oportunidad de ganar un bono de $500 al enviar una entrada a través de su cuenta de TD Bank Mobile App. No se requiere compra. Consulte las reglas para obtener más detalles.",
        openAccount: "Abrir una cuenta",
        enroll: "Inscribirse en el Sorteo",
        feat1Title: "Móvil Primero",
        feat1Desc: "Envíe su entrada directamente a través de la aplicación móvil de TD Bank.",
        feat2Title: "Entrada Segura",
        feat2Desc: "Su información está protegida por seguridad líder en la industria.",
        feat3Title: "Premios Instantáneos",
        feat3Desc: "Vea sus códigos de cupón y recompensas al instante al inscribirse.",
        modalTitle: "Inicio de Sesión Seguro",
        modalSubtitle: "Inicie sesión para inscribirse en el sorteo de $500",
        footer: "&copy; 2026 TD Bank, N.A. Todos los derechos reservados. Miembro de FDIC. Prestamista de vivienda equitativa.",
        success: "¡Registro exitoso! Ya estás inscrito."
    }
};

let currentLang = 'en';

// Elements
const langEnBtn = document.getElementById('lang-en');
const langEsBtn = document.getElementById('lang-es');
const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');
const btnOpenAccount = document.getElementById('btn-open-account');
const btnEnroll = document.getElementById('btn-enroll');
const feat1Title = document.getElementById('feat-1-title');
const feat1Desc = document.getElementById('feat-1-desc');
const feat2Title = document.getElementById('feat-2-title');
const feat2Desc = document.getElementById('feat-2-desc');
const feat3Title = document.getElementById('feat-3-title');
const feat3Desc = document.getElementById('feat-3-desc');
const footerText = document.getElementById('footer-text');
const modal = document.getElementById('signin-modal');
const closeModal = document.querySelector('.close-modal');
const signinForm = document.getElementById('signin-form');
const modalTitle = document.querySelector('.signin-header h2');
const modalSubtitle = document.getElementById('modal-subtitle');
const toast = document.getElementById('toast');

// Functions
function updateLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    heroTitle.textContent = t.title;
    heroDesc.textContent = t.desc;
    btnOpenAccount.textContent = t.openAccount;
    btnEnroll.textContent = t.enroll;
    feat1Title.textContent = t.feat1Title;
    feat1Desc.textContent = t.feat1Desc;
    feat2Title.textContent = t.feat2Title;
    feat2Desc.textContent = t.feat2Desc;
    feat3Title.textContent = t.feat3Title;
    feat3Desc.textContent = t.feat3Desc;
    footerText.innerHTML = t.footer;
    modalTitle.textContent = t.modalTitle;
    modalSubtitle.textContent = t.modalSubtitle;
    
    // Update button states
    langEnBtn.classList.toggle('active', lang === 'en');
    langEsBtn.classList.toggle('active', lang === 'es');
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

function showToast(message) {
    toast.textContent = message;
    toast.className = "toast show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

// Event Listeners
langEnBtn.addEventListener('click', () => updateLanguage('en'));
langEsBtn.addEventListener('click', () => updateLanguage('es'));

btnEnroll.addEventListener('click', () => {
    modal.style.display = "block";
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = signinForm.querySelector('button');
    const originalText = btn.textContent;
    
    // Simulate loading
    btn.textContent = currentLang === 'en' ? "Signing in..." : "Iniciando sesión...";
    btn.disabled = true;
    
    setTimeout(() => {
        modal.style.display = "none";
        showToast(translations[currentLang].success);
        btn.textContent = originalText;
        btn.disabled = false;
        signinForm.reset();
    }, 1500);
});

btnOpenAccount.addEventListener('click', () => {
    window.open('https://www.td.com/us/en/personal-banking', '_blank');
});
