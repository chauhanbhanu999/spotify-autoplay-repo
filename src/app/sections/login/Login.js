import {CuppaComponent, html} from "../../../cuppa/cuppa.component.min.js";
import {Constant} from "../../controller/Constant.js";
import {cuppa} from "../../../cuppa/cuppa.js";
import {SpotifyCtrl} from "../../controller/SpotifyCtrl.js";

export class Login extends CuppaComponent{
	clientId = this.observable('clientId', '9f0738b59c3342cab89a348d49d0eb90');
	redirectUrl = this.observable('redirectUrl', 'https://cryptomarketone.com/spotify/');

	mounted(){
		let pathData = cuppa.getPathData();
		if(!pathData?.data?.access_token) return;
		SpotifyCtrl.setToken(pathData.data.access_token);
		window.location.href = this.redirectUrl;
	}

	render(){
		return html`
			<div class="flex d-column p-x-20 p-y-20 m-0-auto m-w-300 " style="gap:10px;">
			    <input id="redirectUrl"  type="hidden" value="${this.redirectUrl}" @change=${(e)=>{ this.redirectUrl = e.target.value }} />
				<input id="clientId" type="hidden" value="${this.clientId}" @change=${(e)=>{ this.clientId = e.target.value }} />

				<button @click=${()=>{ SpotifyCtrl.auth({clientId:this.clientId, redirectUrl:this.redirectUrl}); }} >Login With Spotify</button>
			</div>
		`
	}
}

customElements.define("login-comp", Login);
