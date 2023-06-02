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

	feria1: EventosCulturales[] = [
		{
			nombre:'FECHA 18/04/17',
			img: '../../../assets/fotosFechas/feria/43.JPG',
			text: 'Feria No-Picnic'
		},
		{
			img: '../../../assets/fotosFechas/feria/42.JPG',
			nombre: '',
			text:''
		},
		{
			img: '../../../assets/fotosFechas/feria/41.JPG',
			nombre: '',
			text:''
		},			
		{
			img: '../../../assets/fotosFechas/feria/44.JPG',
			nombre: '',
			text:''
		},			
	]
	feria2: EventosCulturales[] = [
		{
			nombre:'FECHA 20/05/21',
			img: '../../../assets/fotosFechas/feria/2.JPG',
			text: "Feria de Emprendedores"
		},
		{
			img: '../../../assets/fotosFechas/feria/3.JPG',
			nombre: '',
			text:''
		},
		{
			img: '../../../assets/fotosFechas/feria/4.JPG',
			nombre: '',
			text:''
		},			
		{
			img: '../../../assets/fotosFechas/feria/5.jpg',
			nombre: '',
			text:''
		},
	]
		feria3: EventosCulturales[] = [
			{
				nombre:'FECHA 03/04/2022',
				img: '../../../assets/fotosFechas/feria/6.JPG',
				text: "Feria de Emprendedores No Picnic"
			},
			{
				img: '../../../assets/fotosFechas/feria/7.jpg',
				nombre: '',
				text:''
			},
			{
				img: '../../../assets/fotosFechas/feria/8.JPG',
				nombre: '',
				text:''
			},			
			{
				img: '../../../assets/fotosFechas/feria/9.JPG',
				nombre: '',
				text:''
			},
	]
		feria4: EventosCulturales[] = [
		{
			nombre:'FECHA 03/01/2023',
			img: '../../../assets/fotosFechas/feria/28.JPG',
			text: "Feria de Emprendedores No Picnic"
		},
		{
			img: '../../../assets/fotosFechas/feria/13.JPG',
			nombre: '',
			text:''
		},
		{
			img: '../../../assets/fotosFechas/feria/14.JPG',
			nombre: '',
			text:''
		},			
		{
			img: '../../../assets/fotosFechas/feria/15.JPG',
			nombre: '',
			text:''
		},
	]
		feria5: EventosCulturales[] = [
		{
			nombre:'FECHA 03/03/2023',
			img: '../../../assets/fotosFechas/feria/22.JPG',
			text: "Feria de Emprendedores No Picnic"
		},
		{
			img: '../../../assets/fotosFechas/feria/23.JPG',
			nombre: '',
			text:''
		},
		{
			img: '../../../assets/fotosFechas/feria/24.JPG',
			nombre: '',
			text:''
		},			
		{
			img: '../../../assets/fotosFechas/feria/25.JPG',
			nombre: '',
			text:''
		},

	]
	feria6: EventosCulturales[] = [
		{
			nombre:'FECHA 12/12/2022',
			img: '../../../assets/fotosFechas/feria/30.JPG',
			text: "Feria de Emprendedores No Picnic"
		},
		{
			img: '../../../assets/fotosFechas/feria/31.JPG',
			nombre: '',
			text:''
		},
		{
			img: '../../../assets/fotosFechas/feria/32.JPG',
			nombre: '',
			text:''
		},			
		{
			img: '../../../assets/fotosFechas/feria/33.JPG',
			nombre: '',
			text:''
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

