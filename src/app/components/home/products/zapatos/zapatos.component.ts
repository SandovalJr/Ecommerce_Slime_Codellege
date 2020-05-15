import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { productsInterface } from '../../interfaces/products.interfaces';
import { departments, products, brand } from 'src/app/data/data';
import { from } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-zapatos',
  templateUrl: './zapatos.component.html',
  styleUrls: ['./zapatos.component.css'],
})
export class ZapatosComponent implements OnInit {
  public productosZapatosShow: Array<productsInterface> = [];

  constructor(private router: Router) {
    this.getProducto();
  }

  ngOnInit(): void {}

  public getProducto() {
    let departamento = departments.find((v) => v.department == 'Zapatería');

    from(products)
      .pipe(
        filter((producto) => producto.department == departamento.id),

        map((producto) => {
          let imgUrl = `../../../../../${producto.img}`;
          console.log(imgUrl);
          return {
            ...producto,
            img: imgUrl,
          };
        }),
        tap((productoFinal) => this.productosZapatosShow.push(productoFinal))
      )
      .subscribe();
  }

  public GetId(id: number) {
    this.router.navigate(['buyProducts', id]);
  }
}
