import {CuppaComponent, html} from "../cuppa/cuppa.component.min.js";
import {CuppaStorage} from "../cuppa/cuppa.storage.min.js";
import {Storages} from "./controller/Storages.js";
import('./sections/login/Login.js');
import('./sections/main/Main.js');

export class App extends CuppaComponent{

  render(){
    let token = CuppaStorage.getDataSync(Storages.token);
    return html`
      <get-storage
        name="${Storages.token.name}"
        store="${Storages.token.store}"
        @change=${(e)=>{ this.forceRender(); }}
      /></get-storage>
     ${token ? html`<main-comp></main-comp>` : html`<login-comp></login-comp>`}
    `
  }
}

customElements.define("app-comp", App);
