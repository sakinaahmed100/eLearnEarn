export function renderSigninPage(): string {
    return `
      <h1>Sign In</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    `;
  }
  