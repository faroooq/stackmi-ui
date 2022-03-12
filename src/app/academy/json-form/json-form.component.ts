import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/shared/services/http.service';

interface JsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  nullValidator?: boolean;
}
interface JsonFormControlOptions {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}
interface JsonFormControls {
  name?: string;
  input_name?: string;
  label?: string;
  value?: string;
  type?: string;
  options?: JsonFormControlOptions;
  required?: boolean;
  validators: JsonFormValidators;
}
export interface JsonFormData {
  controls: JsonFormControls[];
}
// https://eliteionic.com/tutorials/creating-dynamic-angular-forms-with-json/
@Component({
  selector: 'app-json-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.css']
})
export class JsonFormComponent implements OnInit, OnChanges {

  @Input() jsonFormData: JsonFormData;
  public quizForm: FormGroup = this.fb.group({});
  radioSelected: boolean = false;
  fieldDisabled: boolean = false;
  loading: boolean;
  successMsg: string;
  formSubmitted: boolean;

  constructor(
    private fb: FormBuilder,
    public http: HttpService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.jsonFormData.firstChange) {
      this.createForm(this.jsonFormData.controls);
    }
  }

  createForm(controls: JsonFormControls[]) {
    for (const control of controls) {
      const validatorsToAdd = [];
      if (control.validators !== undefined) {
        for (const [key, value] of Object.entries(control.validators)) {
          switch (key) {
            case 'min':
              validatorsToAdd.push(Validators.min(value));
              break;
            case 'max':
              validatorsToAdd.push(Validators.max(value));
              break;
            case 'required':
              if (value) {
                validatorsToAdd.push(Validators.required);
              }
              break;
            case 'requiredTrue':
              if (value) {
                validatorsToAdd.push(Validators.requiredTrue);
              }
              break;
            case 'email':
              if (value) {
                validatorsToAdd.push(Validators.email);
              }
              break;
            case 'minLength':
              validatorsToAdd.push(Validators.minLength(value));
              break;
            case 'maxLength':
              validatorsToAdd.push(Validators.maxLength(value));
              break;
            case 'pattern':
              validatorsToAdd.push(Validators.pattern(value));
              break;
            case 'nullValidator':
              if (value) {
                validatorsToAdd.push(Validators.nullValidator);
              }
              break;
            default:
              break;
          }
        }
        this.quizForm.addControl(
          control.name,
          this.fb.control(control.value, validatorsToAdd)
        );
      }
      // console.log('Form values: ', this.quizForm.value);
    }
  }

  reset() {
    this.formSubmitted = false;
  }

  onSubmit(value) {
    this.loading = true;
    // console.log('selected code : ' + value)
    this.successMsg = '';
    this.formSubmitted = true;
    if (this.quizForm.valid) {
      // console.log('Form values: ', value);
      // this.http.create('course_reg_users', value).subscribe(
      //   (data) => {
      //     this.loading = false;
      //     this.successMsg = 'Thank you for registering. We will get back to you soon!'
      //   },
      //   error => {
      //     this.loading = false;
      //     // console.log('err : ' + JSON.stringify(error))
      //     this.successMsg = 'Sorry, we can`t take your request Now.'
      //   }
      // );
    }
  }
}
