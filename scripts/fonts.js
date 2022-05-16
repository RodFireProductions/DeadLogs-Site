// Giving a font switch feature

let html = `
<form>
    <fieldset id="font" name="font">
        <legend>Toggle Font</legend>
        <label for="default">Default</label>
        <input type="radio" name="font" id="default" checked>

        <label for="opendyslexic">OpenDyslexic</label>
        <input type="radio" name="font" id="opendyslexic">
    </fieldset>
</form>
`;
document.getElementById('fonttoggle').innerHTML = html;

var checkbox = document.getElementById("font")
checkbox.addEventListener('change', function() {
    if (document.querySelector("input[id=default]").checked == true) {
        document.documentElement.style.setProperty("--font-main", "sans-serif");
        document.documentElement.style.setProperty("--font-title", "sans-serif");
        document.documentElement.style.setProperty("--font-size", "1.1em");
        document.documentElement.style.setProperty("--title-size", "36px");
        document.documentElement.style.setProperty("--font-mono", "monospace");
        document.body.style.setProperty("line-height", "1.4");
        console.log("Font toggled: Sans-serif");
    } else {
        document.documentElement.style.setProperty("--font-main", "'OpenDyslexic'");
        document.documentElement.style.setProperty("--font-title", "'OpenDyslexic'");
        document.documentElement.style.setProperty("--font-size", "1em");
        document.documentElement.style.setProperty("--title-size", "30px");
        document.documentElement.style.setProperty("--font-mono", "'OpenDyslexic', monospace");
        document.body.style.setProperty("line-height", "1.8");
        console.log("Font toggled: OpenDyslexic");
    }
});
