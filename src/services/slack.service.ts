import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../config';
import { Observable } from 'rxjs';

@Injectable()
export class SlackService {
	private http: Http;

	constructor(http: Http) {
		this.http = http;
	}

	public post(message, color): Observable<any> {
		let payload = {
			attachments: [
				{
					color: color,
					text: message
				}
			]
		};
		return this.http
			.post(Config.slackIncomingWebHookUrl, JSON.stringify(payload));
	}
}
