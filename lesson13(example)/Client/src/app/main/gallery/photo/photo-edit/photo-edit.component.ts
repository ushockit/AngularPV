import {ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subject} from "rxjs";
import {map, switchMap, takeUntil} from "rxjs/operators";
import {GalleryService, Photo} from "../../gallery.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'gallery-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoEditComponent implements OnInit, OnChanges, OnDestroy{
  destroy$: Subject<boolean> = new Subject<boolean>();

  form: FormGroup;

  editPhoto: Photo;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly galleryService: GalleryService
  ) {
    this.form = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'url': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map(params => String(params.id)),
      switchMap((id: string) => this.galleryService.getPhoto(id)),
      takeUntil(this.destroy$)
    ).subscribe((photo: Photo) => {
      this.editPhoto = photo;
      this.form.patchValue(photo);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Photo edit Changes', changes);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  demo() {
    this.editPhoto.comments[0] = {text: 'text', createdAt: new Date(), id: 'id'};
  }

}
