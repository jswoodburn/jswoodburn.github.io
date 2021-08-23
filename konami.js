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
// // check if letter being typed is the next letter in the code
//     if (event.key == konamiCode[keystrokes] || konamiCodeLog[0] == konamiCode[keystrokes]) {
//         // log letter that was typed
//         if (konamiCodeLog.length() != 1) {
//             konamiCodeLog.append(konamiCode[keystrokes])
//         };
//         // increment keystrokes
//         keystrokes += 1;
//         // if keystrokes == 6 then run konami code
//         if (keystrokes == 6) {
//             console.log("Konami code initiated!");
//         }
//     }
//     else {
//         // if wrong letter in code is written
//         wipeKonamiCodeLog();
//     }
//         setTimeout(wipeKonamiCodeLog(), 20000) 
});

const wipeKonamiCodeLog = () => {
    keystrokes = 0;
}