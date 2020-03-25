import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { KarsService, Kar } from '../../kars.service';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './create-kar.component.html',
})
export class CreateKarComponent implements OnInit {

  karForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Kar,
    public dialogRef: MatDialogRef<CreateKarComponent>,
    private formBuilder: FormBuilder,
    private karsService: KarsService,
  ) { }

  ngOnInit(): void {
    this.karForm = this.formBuilder.group({
      vehicle: [this.data.vehicle, Validators.required],
      brand: [this.data.brand, Validators.required],
      year: [this.data.year, Validators.required],
      description: [this.data.description, Validators.required],
    });
  }

  submit(): void {
    if (!this.karForm.valid || this.karForm.pending) {
      Swal.fire('Fill the required fields', '', 'error');
      return;
    }

    const kar: Kar = this.karForm.getRawValue();

    if (this.data._id) {
      kar._id = this.data._id;
      this.karsService.updateKar(kar).subscribe(res => {
        console.log(res);
      });
    } else {
      this.karsService.createKar(kar).subscribe(res => {
        console.log(res);
      });
    }
    this.dialogRef.close();
  }
}
