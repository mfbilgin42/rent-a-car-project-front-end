import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validator,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand/brand';
import { Color } from 'src/app/models/color/color';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CarService } from 'src/app/services/car/car.service';
import { ColorService } from 'src/app/services/color/color.service';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  carAddForm: FormGroup;
  brands: Brand[];
  colors: Color[];
  imageAddForm: FormGroup;
  imageFiles: File[];
  savedCarId: number;
  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createCarAddForm();
    this.getAllBrand();
    this.getAllColor();
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      descript: ['', Validators.required],
      brandName: ['', Validators.required],
      minFindex: ['', Validators.required],
    });
  }

  add() {
    if (this.carAddForm.valid) {
      let productModel = Object.assign({}, this.carAddForm.value);
      this.carService.add(productModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          this.savedCarId = response?.data?.carId;
          this.router.navigate(['cars']);
          setTimeout(function () {
            location.reload();
          }, 400);
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
            for (
              let i = 0;
              i < responseError.error.ValidationErrors.length;
              i++
            ) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                'Doğrulama Hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz Eksik', 'Dikkat');
    }
  }
  getAllBrand() {
    this.brandService.getBrand().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }
  getAllColor() {
    this.colorService.getColor().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }
}
