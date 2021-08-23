var konamiSecret = document.getElementById('konamiSecret');
var konamiCode = ["p", "o", "t", "a", "t", "o"];
var keystrokes = 0;

konamiSecret.addEventListener('keyboard', function (event) {
    console.log(event.key)
    if (event.key == konamiCode[keystrokes]) {
        keystrokes += 1
        
        if (keystrokes == 1) {
            // wipe log if code not entered within 20 seconds of first letter being typed
            setTimeout(wipeKonamiCodeLog(), 20000) 
        }

        if (keystrokes == konamiCode.length()) {
            console.log("Konami code initiated!");
        }
    }
    else {
        wipeKonamiCodeLog();
    }
});

const wipeKonamiCodeLog = () => {
    keystrokes = 0;
}