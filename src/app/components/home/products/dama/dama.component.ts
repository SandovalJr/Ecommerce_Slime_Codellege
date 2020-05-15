import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { productsInterface } from '../../interfaces/products.interfaces';
import { departments, products, brand } from 'src/app/data/data';
import { from } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-dama',
  templateUrl: './dama.component.html',
  styleUrls: ['./dama.component.css'],
})
export class DamaComponent implements OnInit {
  public productosDamaShow: Array<productsInterface> = [];

  constructor(private router: Router) {
    this.GetProducts();
  }

  ngOnInit(): void {}

  public GetProducts() {
    let departamento = departments.find((v) => v.department == 'Ella');
    console.log(departamento);

    from(products)
      .pipe(
        filter((producto) => producto.department == departamento.id),

        map((producto) => {
          let urlImg = `../../../../../${producto.img}`;
          console.log(urlImg);
          return {
            ...producto,
            img: urlImg,
          };
        }),
        tap((productosFinal) => this.productosDamaShow.push(productosFinal))
      )
      .subscribe();
  }

  public GetId(id: number) {
    this.router.navigate(['buyProducts', id]);
  }
}
