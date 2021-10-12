import {Component, OnDestroy, OnInit} from '@angular/core';
import {from, fromEvent, Observable, of, Subject, zip} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {debounceTime, distinctUntilChanged, filter, map, switchMap, take, takeUntil, tap} from "rxjs/operators";
import {AppService} from "./app.service";
import {Post} from "./api/jsonplaceholder/interfaces";
import {PostInterface} from "./interfaces/post.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'lesson01';

  words$ = of([
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth'
  ]);

  demoStream$: Observable<number[]> = of([]);

  form!: FormGroup;

  destroy$ = new Subject();

  posts$: Observable<PostInterface[]>;

  searchResults$?: Observable<string[]>;

  constructor(
    private readonly appService: AppService
  ) {
    this.demoStream$.subscribe(val => {
      console.log(val);
    });
    this.initForm();



    // fromEvent(document, 'click').pipe(
    //   map((ev) => {
    //     const mouseEvent: MouseEvent = ev as MouseEvent;
    //     return {
    //       x: mouseEvent.x,
    //       y: mouseEvent.y
    //     }
    //   })
    // ).subscribe((val) => {
    //   console.log(val);
    // });

    zip(...[1, 2, 3, 4, 5].map(n => of(n).pipe(
      map(n => n * 10)
    ))).subscribe(res => {
      console.log(res);
    })

    // this.posts$ = appService.posts$;
  }

  getPost(id: number) {
    this.appService.getPost(id).pipe(
      takeUntil(this.destroy$)
    ).subscribe(post => {
      console.log(post);
    });
  }

  private initForm() {
    this.form = new FormGroup({
      'search': new FormControl('', [Validators.required])
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.searchResults$ = this.form.get('search')?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(text => {
        let res$: Observable<string[]> = of([]);
        if (text) {
          res$ = this.words$.pipe(
            take(1),
            map(data => data.filter(w => w.toLowerCase().includes(String(text).toLowerCase())))
          );
        }

        return res$;
      }),
      // произойдет отписка после того, как сработает destroy$
      // takeUntil(this.destroy$)
    );
  }
}
