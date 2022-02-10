import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { pairwise } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadComponent implements OnInit {
  linkForm: FormGroup;
  viewImage = false;
  imgurServer = false;
  onGenerating = false;
  processing = false;
  onDraging = false;

  constructor(fb: FormBuilder, private cdr: ChangeDetectorRef) {
    this.linkForm = fb.group({
      width: [''],
      height: [''],
      ratio: [false],
      lazyLoad: [false],
      link: ['']
    });
  }

  ngOnInit(): void {}

  /**
   * Toggle switch server
   * @param val
   */
  onChangeServer(val: boolean) {
    // this.imgurServer = val;
    console.log(this.imgurServer);
  }
  /**
   * Click button Generate link
   * @param event
   */
  generateLink(event: Event) {}

  dropHandler(ev: any) {
    console.log('File(s) dropped', ev);
    this.onDraging = false;
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === 'file') {
          var file = ev.dataTransfer.items[i].getAsFile();
          console.log('... file[' + i + '].name = ' + file.name);
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        console.log(
          '... file[' + i + '].name = ' + ev.dataTransfer.files[i].name
        );
      }
    }
  }
  /**
   * On DragOver
   * @param ev Event Drag Over
   */
  dragOverHandler(ev: any) {
    this.onDraging = true;
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }
  /**
   * On Drag end
   * @param ev
   */
   dragLeaveHandler(ev: any) {
    this.onDraging = false;
    ev.preventDefault();
  }
}
