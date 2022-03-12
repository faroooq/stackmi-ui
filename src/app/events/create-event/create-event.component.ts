import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { HttpService } from '../../shared/services/http.service';
import { DatePipe } from '@angular/common';
import { TimeFormat } from '../../shared/pipe/time.pipe';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  loading: boolean;
  selectedFiles: FileList;
  download_image: any;
  percentage: number;
  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  formSubmitted: boolean = false;
  errorMsg: string;
  successMsg: string;
  eventForm = this.formBuilder.group({
    event_name: new FormControl('', Validators.required),
    event_host: new FormControl('', Validators.required),
    event_url: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', Validators.required),
    start_date: new FormControl('', Validators.required),
    start_time: new FormControl('', Validators.required),
    end_date: new FormControl('', Validators.required),
    end_time: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    event_price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    event_seo_desc: new FormControl('', Validators.required)
  });
  fileChooseMsg: string;

  constructor(
    private formBuilder: FormBuilder,
    public httpservice: HttpService,
    public datepipe: DatePipe,
    public timepipe: TimeFormat) { }

  ngOnInit(): void {
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  onSubmit(value) {
    this.loading = true;
    this.errorMsg = '';
    this.successMsg = '';
    if (this.selectedFiles !== undefined) {
      const image = this.selectedFiles.item(0);
      this.selectedFiles = undefined;
      this.formSubmitted = true;
      if (this.eventForm.valid) {
        const _v = this.eventForm.value;
        const form = new FormData();
        form.append('event_name', _v.event_name);
        form.append('event_host', _v.event_host);
        form.append('event_url', _v.event_url);
        form.append('email', _v.email);
        form.append('mobile', _v.mobile);
        form.append('event_start_date', this.datepipe.transform(_v.start_date, 'dd-MM-yyyy'));
        form.append('event_end_date', this.datepipe.transform(_v.end_date, 'dd-MM-yyyy'));
        form.append('event_start_time', this.timepipe.transform(_v.start_time));
        form.append('event_end_time', this.timepipe.transform(_v.end_time));
        form.append('start_date', this.datepipe.transform(_v.start_date, 'dd-MM-yyyy'));
        form.append('end_date', this.datepipe.transform(_v.end_date, 'dd-MM-yyyy'));
        form.append('duration', _v.duration);
        form.append('event_price', _v.event_price);
        form.append('description', _v.description);
        form.append('event_seo_desc', _v.event_seo_desc);
        form.append('image', image, _v.event_name + '.png');
        this.httpservice.create('create_event', form).subscribe(
          (data) => {
            this.loading = false;
            if (data) {
              this.successMsg = 'Thank you for posting the event. We will get back to you soon.'
            }
          },
          error => {
            this.loading = false;
            // console.log('err : ' + JSON.stringify(error))
            this.successMsg = 'Sorry, we can`t take your request Now.'
          }
        );
        // this.resetFields();
      }
    } else {
      this.loading = false;
      this.fileChooseMsg =
        'Please upload the image!';
    }
  }

  resetFields() {
    this.errorMsg = '';
    this.successMsg = '';
    this.formSubmitted = true;
    this.eventForm = this.formBuilder.group({
      event_name: new FormControl('', Validators.required),
      event_host: new FormControl('', Validators.required),
      event_url: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      start_date: new FormControl('', Validators.required),
      start_time: new FormControl('', Validators.required),
      end_date: new FormControl('', Validators.required),
      end_time: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      event_price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      event_seo_desc: new FormControl('', Validators.required)
    });
  }
}
