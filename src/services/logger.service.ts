import { Injectable } from '@angular/core';
import { SlackService } from './slack.service';


@Injectable()
export class LoggerService {
  private slackService: SlackService;

	constructor(slackService: SlackService) {
		this.slackService = slackService;
	}

	public info(message): void {
    let label = 'Info: ';
    let color = '#3AA3E3';
    message = label.concat(message);
		this.slackService.post(message, color).subscribe(res => console.log(res));
  }

  public log(message): void {
    let label = 'Log: ';
    let color = '#3AE345';
    message = label.concat(message);
		this.slackService.post(message, color).subscribe(res => console.log(res));
  }

  public warn(message): void {
    let label = 'Warn: ';
    let color = '#E2E33A';
    message = label.concat(message);
		this.slackService.post(message, color).subscribe(res => console.log(res));
  }

  public error(message): void {
    let label = 'Error: ';
    let color = '#E33A43';
    message = label.concat(message);
		this.slackService.post(message, color).subscribe(res => console.log(res));
  }
}
