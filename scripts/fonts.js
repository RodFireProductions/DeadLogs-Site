// Giving a font switch feature

let html = `
<form id="font">
    <label for="default">Default font</label>
    <input type="radio" name="font" value="default" checked>

    <label for="opendyslexic">OpenDyslexic</label>
    <input type="radio" name="font" value="opendyslexic">
</form>
`
document.getElementById('fonttoggle').innerHTML = html;

var checkbox = document.getElementById('font')
checkbox.addEventListener('change', function() {
    if (document.querySelector("input[value=default]").checked == true) {
        console.log("Sans-serif")
        document.documentElement.style.setProperty("--font-main", "sans-serif");
        document.documentElement.style.setProperty("--font-title", "sans-serif");
        document.documentElement.style.setProperty("--font-size", "1.1em");
        document.documentElement.style.setProperty("--title-size", "36px");
        document.documentElement.style.setProperty("--font-mono", "monospace");
        document.body.style.setProperty("line-height", "1.4")
    } else {
        console.log("OpenDyslexic")
        document.documentElement.style.setProperty("--font-main", "'OpenDyslexic'");
        document.documentElement.style.setProperty("--font-title", "'OpenDyslexic'");
        document.documentElement.style.setProperty("--font-size", "1em");
        document.documentElement.style.setProperty("--title-size", "30px");
        document.documentElement.style.setProperty("--font-mono", "'OpenDyslexic', monospace");
        document.body.style.setProperty("line-height", "1.8")
    }
});
