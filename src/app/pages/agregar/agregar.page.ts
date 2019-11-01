import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItems } from 'src/app/models/lista-items.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  lista: Lista;
  nombreItem = '';
  constructor(private _todoService: TodoService,
              private route: ActivatedRoute) {
                const listaId = this.route.snapshot.paramMap.get('listaId');
                this.lista = this._todoService.obtenerLista(listaId);



   }

  ngOnInit() {
  }

  agregarItem() {
    if (this.nombreItem.length === 0){
      return ;
    } else {
      const nuevoItem = new ListaItems(this.nombreItem);
      this.lista.items.push(nuevoItem);
      this.nombreItem = '';
      this._todoService.guardarStorage();

    }
  }


}
