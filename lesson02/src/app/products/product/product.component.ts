import {Component, EventEmitter, Input, Output} from '@angular/core';

export interface Product {
  id?: number;
  title: string;
  description: string;
}

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  // product: Product = {
  //   id: 1,
  //   title: 'Title',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
  //   '    A aut cupiditate deserunt enim excepturi facilis ipsa ipsum\n' +
  //   '    iusto minima nostrum omnis optio recusandae repellendus sed,\n' +
  //   '    temporibus, ullam veniam? Laborum, repellat.'
  // };
  // title = 'Title';
  // description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
  //   '    A aut cupiditate deserunt enim excepturi facilis ipsa ipsum\n' +
  //   '    iusto minima nostrum omnis optio recusandae repellendus sed,\n' +
  //   '    temporibus, ullam veniam? Laborum, repellat.';
  @Output() infoEvent = new EventEmitter<number>();
  @Output() detailEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<number>();

  onInfoClick() {
    // console.log('Product Info click', this.product);
    // this.product.title = 'New title';
    this.infoEvent.emit(this.product.id);
  }
  onDetailClick() {
    this.detailEvent.emit();
  }
  onDeleteClick() {
    this.deleteEvent.emit(this.product.id);
  }
}
