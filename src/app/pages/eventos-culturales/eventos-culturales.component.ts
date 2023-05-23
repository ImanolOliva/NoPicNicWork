import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { EventosCulturales } from 'src/app/model/EventosCulturales';

@Component({
	selector: 'ngbd-carousel-basic',
	templateUrl: './eventos-culturales.component.html',
	styleUrls: ['./eventos-culturales.component.css']

})
export class EventosCulturalesComponent implements OnInit {

	feria1: any[] = [
		{
			nombre:'FECHA 18/04/17',
			img: '../../../assets/slider/slider2.jpg',
			text: 'los pibe de rloco'
		},
		{
			img: '../../../assets/slider/slider1.jpg',
		},
		{
			img: '../../../assets/slider/slider3.jpg',
		},			
		{
			img: '../../../assets/slider/slider4.jpg',
		},			
	]
	feria2: any[] = [
		{
			nombre:'FECHA NO PICNIC',
			img: '../../../assets/slider/slider2.jpg',
			text: 'descripcion bonita'
		},
		{
			img: '../../../assets/slider/slider1.jpg',
		},
		{
			img: '../../../assets/slider/slider3.jpg',
		},			
		{
			img: '../../../assets/slider/slider4.jpg',
		},			
	]




	constructor(private _config:NgbCarouselConfig){
			_config.showNavigationArrows = true;
			_config.wrap = true;
			_config.animation = true;
			_config.keyboard = false;


	}
	
	ngOnInit(){

	}
}

