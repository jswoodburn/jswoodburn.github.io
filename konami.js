var konamiSecret = document.getElementById('konamiSecret');
var konamiCode = ["p", "o", "t", "a", "t", "o"];
var konamiCodeLog = [];
var keystrokes = 0;

konamiSecret.addEventListener('keyboard', function (event) {
    console.log(event.key)
// check if letter being typed is the next letter in the code
    if (event.key == konamiCode[keystrokes] || konamiCodeLog[0] == konamiCode[keystrokes]) {
        // log letter that was typed
        if (konamiCodeLog.length() != 1) {
            konamiCodeLog.append(konamiCode[keystrokes])
        };
        // increment keystrokes
        keystrokes += 1;
        // if keystrokes == 6 then run konami code
        if (keystrokes == 6) {
            console.log("Konami code initiated!");
        }
    }
    else {
        // if wrong letter in code is written
        wipeKonamiCodeLog();
    }
    // wipe log if code not entered within 20 seconds of "p" being typed
        setTimeout(wipeKonamiCodeLog(), 20000) 
});

const wipeKonamiCodeLog = () => {
    konamiCodeLog = [];
    keystrokes = 0;
}