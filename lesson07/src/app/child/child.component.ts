import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges
} from "@angular/core";
import {ItemComponent} from "./item/item.component";


export interface State {
  value: number;
  str: string;
}

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, AfterContentInit{
  @Input() state: State = { value: 0, str: '' };

  @ContentChildren(ItemComponent) items!: QueryList<ItemComponent>;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes', changes);

    if (changes.state) {
      this.state.value = changes.state.currentValue.value * 2;
      this.state.str = `[${changes.state.currentValue.str}]`;
    }
  }
  constructor() {
    console.log('constructor: ', this.state);
  }

  ngOnInit(): void {
    console.log('OnInit: ', this.state);
  }

  ngAfterContentInit(): void {
    console.log('items', this.items);
  }
}
