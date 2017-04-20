import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WordpressService } from './../wordpress.service';
import { WordpressItemPage } from '../item/wordpress.item.page';
import { Post } from '../models/post.model';
import { LoggerService } from '../../../services/logger.service';
import { SlackService } from '../../../services/slack.service';

@Component({
	templateUrl: 'wordpress.list.html',
	providers: [WordpressService, LoggerService, SlackService]
})
export class WordpressListPage implements OnInit {
	public posts: Post[];

	private wordpressService: WordpressService;
	private nav: NavController;

	private loggerService: LoggerService;
	private slackService: SlackService;

	constructor(wordpressService: WordpressService, nav: NavController, loggerService: LoggerService, slackService: SlackService) {
		this.wordpressService = wordpressService;
		this.nav = nav;
		this.loggerService = loggerService;
		this.slackService = slackService;
	}

	ngOnInit(): void {
		this.wordpressService.getPosts()
			.subscribe(posts => {
				this.posts = posts;
			});
	}

	ionViewDidLoad() {
		this.loggerService.info('The view loaded into the DOM.');
	}

	ionViewWillEnter() {
		this.loggerService.log('The view is active.');
	}

	ionViewDidLeave() {
		this.loggerService.warn('The view stopped being active.');
	}

	ionViewWillUnload() {
		this.loggerService.error('The view is going to be completely removed from the DOM.');
	}

	public itemTapped(item) {
		this.nav.push(WordpressItemPage, {
			item: item
		});
	}
}
