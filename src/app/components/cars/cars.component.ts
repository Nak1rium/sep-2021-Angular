import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CarService } from '../../services';
import { car } from 'src/app/interfaces';
import { RegEx } from '../../contants';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: car[];
  form: FormGroup;
  carForUpdate: car | null;

  constructor(private carService:CarService) {
    this._createForm()
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value)
  }

  save(): void {
    if (!this.carForUpdate) {
     this.carService.create(this.form.value).subscribe(value => {
       this.cars.push(value);
       this.form.reset();
     })
    }else {
      this.carService.updateById(this.carForUpdate.id, this.form.value).subscribe(value => {
        const updateCar = this.cars.find(f => f.id === this.carForUpdate?.id);
        Object.assign(updateCar, value)
        this.carForUpdate = null;
        this.form.reset();
      })
    }
  }

  delete(id: number):void {
    this.carService.deleteById(id).subscribe(()=> {
      const index = this.cars.findIndex(car => car.id === id);
      this.cars.slice(index, 1);
    })
  }

  update(car: car): void {
    this.carForUpdate = car;
    this.form.setValue({model: car.model, year: car.year, price: car.price})
  }

  _createForm():void {
    this.form = new FormGroup({
      model: new FormControl(null, [Validators.pattern(RegEx.model)]),
      year: new FormControl(1990, [Validators.min(1990),Validators.max(new Date().getFullYear())]),
      price: new FormControl(0,[Validators.min(0),Validators.max(1000000)])
    })
  }

}
