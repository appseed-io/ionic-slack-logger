import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
	static slackIncomingWebHookUrl = 'https://hooks.slack.com/services/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';
}
