import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { productsInterface } from '../../interfaces/products.interfaces';
import { departments, products, brand } from 'src/app/data/data';
import { from } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-caballero',
  templateUrl: './caballero.component.html',
  styleUrls: ['./caballero.component.css'],
})
export class CaballeroComponent implements OnInit {
  public productosCaballeroShow: Array<productsInterface> = [];

  constructor(private router: Router) {
    this.GetProducts();
  }

  ngOnInit(): void {}

  public GetProducts() {
    let departmento = departments.find((v) => (v.department = 'Él'));
    // console.log(departmento);

    from(products)
      .pipe(
        filter((producto) => producto.department == departmento.id),
        map((producto) => {
          let urlImg = `../../../../../${producto.img}`;
          console.log(urlImg);
          return {
            ...producto,
            img: urlImg,
          };
        }),

        tap((productoActualizado) =>{
          this.productosCaballeroShow.push(productoActualizado)
        })
      )
      .subscribe();
  }

  public GetId(id: number) {
    console.log('id tomado es:' + id);
    this.router.navigate(['buyProducts', id]);
  }
}
