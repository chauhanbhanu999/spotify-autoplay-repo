import {CuppaStorage} from "../../cuppa/cuppa.storage.min.js";

export class Storages{
	static token = {name:'TOKEN', store:CuppaStorage.LOCAL};
	static deviceId = {name:'DEVICE_ID', store:''};
	static playerState = {name:'SPOTIFY_PLAYER_STATE', store:''};
}
