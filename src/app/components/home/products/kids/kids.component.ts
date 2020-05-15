import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { productsInterface } from '../../interfaces/products.interfaces';
import { departments, products, brand } from 'src/app/data/data';
import { from } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css'],
})
export class KidsComponent implements OnInit {
  public productosKidsShow: Array<productsInterface> = [];

  constructor(private router: Router) {
    this.GetProduct();
  }

  ngOnInit(): void {}

  public GetProduct() {
    let departamento = departments.find((v) => v.department == 'Niños');
    console.log(departamento);

    from(products)
      .pipe(
        filter((producto) => producto.id == departamento.id),

        map((producto) => {
          let imgUrl = `../../../../../${producto.img}`;
          console.log(imgUrl);
          return {
            ...producto,
            img: imgUrl,
          };
        }),
        tap((productosFinal) => this.productosKidsShow.push(productosFinal))
      )
      .subscribe();
  }

  public GetId(id: number) {
    this.router.navigate(['buyproducts', id]);
  }
}
