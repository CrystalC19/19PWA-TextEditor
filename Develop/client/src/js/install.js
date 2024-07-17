const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
//  Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    
    // store the trigger events
    window.deferredPrompt = event;

    //removes the "hidden class from the button"

    butInstall.classList.toggle("hidden",false)
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if(!promptEvent){
        return;
    }

    // shows prompt
    promptEvent.prompt();

    // reset the deferred prompt variable
    window.deferredPrompt = null;

    butInstall.classList.toggle("hidden",true);

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    //clears prompt
    window.deferredPrompt = null;
});
