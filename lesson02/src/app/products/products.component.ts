import {Component, ElementRef, EventEmitter, ViewChild} from '@angular/core';
import {Product} from "./product/product.component";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      title: 'Title 1',
      description: 'Description 1'
    },
    {
      id: 2,
      title: 'Title 2',
      description: 'Description 2'
    },
    {
      id: 3,
      title: 'Title 3',
      description: 'Description 3'
    },
    {
      id: 4,
      title: 'Title 4',
      description: 'Description 4'
    },
  ];

  onProductInfoClick(id: number) {
    console.log('Click from product', id);
  }
  onProductDetailClick() {
    console.log('Detail click from product');
  }
  onProductDelete(id: number) {
    // Поиск индекса удаляемого элемента
    const idx = this.products.findIndex((prod) => prod.id === id);
    // Удаление из массива
    this.products.splice(idx, 1);
  }
}
