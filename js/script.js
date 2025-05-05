document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const playButton = document.getElementById('playButton');
    const configButton = document.getElementById('configButton');
    const backButton = document.getElementById('backButton');
    const homeScreen = document.querySelector('.home-screen');
    const configScreen = document.getElementById('configScreen');
    
    // Navegação entre telas
    configButton.addEventListener('click', function() {
        homeScreen.classList.remove('active');
        configScreen.classList.add('active');
    });
    
    backButton.addEventListener('click', function() {
        configScreen.classList.remove('active');
        homeScreen.classList.add('active');
    });
    
    // Ações dos botões
    playButton.addEventListener('click', function() {
        alert('Jogo iniciado!');
    });
    
    // Configurações
    function saveSettings() {
        const settings = {
            volume: document.getElementById('volume').value,
            difficulty: document.getElementById('difficulty').value,
            musicEnabled: document.getElementById('musicEnabled').checked,
            soundEffectsEnabled: document.getElementById('soundEffectsEnabled').checked,
            language: document.getElementById('language').value
        };
        localStorage.setItem('appSettings', JSON.stringify(settings));
    }
    
    function loadSettings() {
        const settings = JSON.parse(localStorage.getItem('appSettings')) || {};
        
        // Valores padrão
        if(settings.musicEnabled === undefined) settings.musicEnabled = true;
        if(settings.soundEffectsEnabled === undefined) settings.soundEffectsEnabled = true;
        if(!settings.language) settings.language = 'pt';
        
        // Aplicar configurações
        document.getElementById('volume').value = settings.volume || 50;
        document.getElementById('difficulty').value = settings.difficulty || 'medium';
        document.getElementById('musicEnabled').checked = settings.musicEnabled;
        document.getElementById('soundEffectsEnabled').checked = settings.soundEffectsEnabled;
        document.getElementById('language').value = settings.language;
    }
    
    // Event listeners para configurações
    document.getElementById('volume').addEventListener('input', saveSettings);
    document.getElementById('difficulty').addEventListener('change', saveSettings);
    document.getElementById('musicEnabled').addEventListener('change', saveSettings);
    document.getElementById('soundEffectsEnabled').addEventListener('change', saveSettings);
    document.getElementById('language').addEventListener('change', saveSettings);
    
    // Carregar configurações ao iniciar
    loadSettings();
    
    // Efeitos de toque
    function setupTouchEffects(button) {
        if (!button) return;
        
        const img = button.querySelector('.button-img');
        if (!img) return;
        
        button.addEventListener('touchstart', function() {
            if (button.classList.contains('settings-button') || button.classList.contains('back-button')) {
                img.style.transform = 'scale(0.95) rotate(30deg)';
            } else {
                img.style.transform = 'scale(0.95)';
            }
        });
        
        button.addEventListener('touchend', function() {
            img.style.transform = '';
        });
    }
    
    [playButton, configButton, backButton].forEach(setupTouchEffects);
    
    // Placeholder para implementação de áudio
    function initAudio() {
        const settings = JSON.parse(localStorage.getItem('appSettings')) || {};
        
        // Implementar quando adicionar áudio:
        if(settings.musicEnabled) {
            // Iniciar música
        } else {
            // Parar música
        }
    }
    
    // Placeholder para implementação de idiomas
    function updateLanguage() {
        const language = document.getElementById('language').value;
        const translations = {
            pt: {
                title: "INÍCIO",
                play: "JOGAR",
                config: "CONFIGURAÇÕES"
            },
            en: {
                title: "HOME",
                play: "PLAY",
                config: "SETTINGS"
            }
        };
        
        // Atualizar textos (implementar completamente quando necessário)
        document.querySelector('.home-screen .app-header h1').textContent = translations[language].title;
    }
    
    // Atualizar idioma quando alterado
    document.getElementById('language').addEventListener('change', function() {
        saveSettings();
        updateLanguage();
    });
});