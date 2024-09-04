var _a, _b, _c;
import { renderHomePage } from "./pages/LandingPage";
import { renderSignupPage } from "./pages/SignUpPage";
import { renderSigninPage } from "./pages/SignInPage";
// Function to handle page rendering
function renderPage(pageContent) {
    const appDiv = document.getElementById("app");
    if (appDiv) {
        appDiv.innerHTML = pageContent;
    }
}
// Initial render (home page)
renderPage(renderHomePage());
// Set up event listeners for navigation buttons
(_a = document.getElementById("home")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => renderPage(renderHomePage()));
(_b = document.getElementById("signup")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => renderPage(renderSignupPage()));
(_c = document.getElementById("signin")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => renderPage(renderSigninPage()));
