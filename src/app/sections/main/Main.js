import { CuppaComponent, html } from "../../../cuppa/cuppa.component.min.js";
import { SpotifyCtrl } from "../../controller/SpotifyCtrl.js";
import { CuppaStorage, GetStorage } from "../../../cuppa/cuppa.storage.min.js";
import { Storages } from "../../controller/Storages.js";

export class Main extends CuppaComponent {
    constructor() {
        super();
        this.deviceId = this.observable('deviceId', '');
        this.trackUri = this.observable('trackUri', 'spotify:track:3yHyiUDJdz02FZ6jfUbsmY');
        this.playerState = this.observable('playerState');
    }

    connectedCallback() {
        super.connectedCallback();
        SpotifyCtrl.loadPlayer();
    }

    async playTrack() {
        // Implementation for playTrack() if needed
    }

    render() {
        return html`
            <get-storage
                name="${Storages.deviceId.name}"
                store="${Storages.deviceId.store}"
                @change=${(e) => { this.deviceId = e.detail; }}
            ></get-storage>
            <get-storage
                name="${Storages.playerState.name}"
                store="${Storages.playerState.store}"
                @change=${(e) => { this.playerState = e.detail; }}
            ></get-storage>
            <div class="flex d-column p-x-20 p-y-20 m-0-auto m-w-300" style="gap:10px;">
                ${this.deviceId ? html`
                    <h2>We are Ready</h2>
                    <input
                        value="${this.trackUri}"
                        @change=${(e) => { this.trackUri = e.target.value }}
                    />
                    ${(!this.playerState || this.playerState?.paused === true) ? html`
                        <button @click=${() => SpotifyCtrl.playTrack(this.trackUri).then()}>Play Game</button>
                    ` : html`
                        <button @click=${() => SpotifyCtrl.pauseTrack()}>Pause Game</button>
                    `}
                ` : html`
                    <button @click=${SpotifyCtrl.initPlayer}>Player Set</button>
                `}
                <button @click=${() => { SpotifyCtrl.setToken(null) }}>Logout</button>
            </div>
        `;
    }
}

customElements.define("main-comp", Main);
