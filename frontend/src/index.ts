import { renderHomePage } from "./pages/LandingPage";
import { renderSignupPage } from "./pages/SignUpPage";
import { renderSigninPage } from "./pages/SignInPage";

// Function to handle page rendering
function renderPage(pageContent: string) {
  const appDiv = document.getElementById("app");
  if (appDiv) {
    appDiv.innerHTML = pageContent;
  }
}

// Initial render (home page)
renderPage(renderHomePage());

// Set up event listeners for navigation buttons
document.getElementById("home")?.addEventListener("click", () => renderPage(renderHomePage()));
document.getElementById("signup")?.addEventListener("click", () => renderPage(renderSignupPage()));
document.getElementById("signin")?.addEventListener("click", () => renderPage(renderSigninPage()));
