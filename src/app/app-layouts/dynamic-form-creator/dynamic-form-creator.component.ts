import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormConfigService } from 'src/app/form-config-service.service';

@Component({
  selector: 'app-dynamic-form-creator',
  templateUrl: './dynamic-form-creator.component.html',
  styleUrls: ['./dynamic-form-creator.component.scss']
})
export class DynamicFormCreatorComponent implements OnInit {
  form!: FormGroup;
  formConfig: any; // JSON configuration data
  headerText: string = "Are you sure?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DynamicFormCreatorComponent>,
    private formBuilder: FormBuilder,
    private formConfigService: FormConfigService) {
    if (data) {
      this.headerText = data.headerText || this.headerText;
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }


  ngOnInit() {
    this.formConfigService.getFormConfig(this.data.formName).subscribe((config: any) => {
      this.formConfig = config.fields;
      this.buildForm();
    });
  }

  buildForm() {
    const formGroup: any = {};
    // Loop through the form fields and create form controls with validators
    this.formConfig.forEach((field: any) => {
      const validators = [];
      if (field.validators) {
        if (field.validators.required) {
          validators.push(Validators.required);
        }
        if (field.validators.minLength) {
          validators.push(Validators.minLength(field.validators.minLength));
        }
        if (field.validators.maxLength) {
          validators.push(Validators.maxLength(field.validators.maxLength));
        }
        if (field.validators.pattern) {
          validators.push(Validators.pattern(field.validators.pattern));
        }
      }

      formGroup[field.name] = [null, validators];
    });

    this.form = this.formBuilder.group(formGroup);
  }

  // Function to submit the form
  onSubmit() {
    if (this.form.valid) {
      // Form is valid, submit it
      console.log(this.form.value);
    } else {
      // Form is invalid, display error messages
      this.markFormGroupTouched(this.form);
    }
  }

  // Function to mark form controls as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  url: any = '';
  onSelectProfileFile(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.url = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }
}

