class App {
  constructor({ content }) {
    this._content = content;
  }

  renderPage() {
    console.log(this._content);
  }
}

export default App;
