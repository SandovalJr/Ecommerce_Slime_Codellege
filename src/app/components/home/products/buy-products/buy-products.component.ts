import { productsInterface } from '../../interfaces/products.interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, pluck, switchMap } from 'rxjs/operators';
import { departments, products, brand } from 'src/app/data/data';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-buy-products',
  templateUrl: './buy-products.component.html',
  styleUrls: ['./buy-products.component.css'],
})
export class BuyProductsComponent implements OnInit {
  public ver = false;
  public producto: productsInterface;

  constructor(private AR: ActivatedRoute) {
    window.scrollTo(0, 0);

    this.AR.params
      .pipe(
        pluck('id'),
        switchMap((id) => this.GetProduct(id))
      )
      .subscribe((valor) => (this.producto = valor));
  }

  ngOnInit(): void {}

  public GetProduct(id: number) {
    return from(products).pipe(
      filter((producto) => producto.id == id),
      map((producto) => ({
        ...producto,
        img: `../../../../../${producto.img}`,
      }))
    );
  }
}
