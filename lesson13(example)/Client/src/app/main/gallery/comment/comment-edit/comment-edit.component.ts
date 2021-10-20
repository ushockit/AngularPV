import {ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentInterface} from "../../gallery.service";


type EditCommentChanges = {
  [key in keyof CommentEditComponent]: SimpleChanges
};

@Component({
  selector: 'comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentEditComponent implements OnInit, OnChanges, OnDestroy{
  @Input() comment: CommentInterface;

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      'text': new FormControl(null, Validators.required),
      'createdAt': new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    console.log('Init');
    this.form.patchValue({
      ...this.comment,
    }, { emitEvent: false });
  }


  demoChangeDetection() {
    console.log('Change detection');
  }

  // @ts-ignore
  ngOnChanges(changes: EditCommentChanges): void {
    if (changes.comment) {
      this.form.patchValue({
        ...this.comment,
      }, { emitEvent: false });
    }
  }

  ngOnDestroy(): void {
    console.log('Destroy');
  }
}
