import { ListaItems } from './lista-items.model';

export class Lista {
    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    terminada: boolean;
    items: ListaItems[];
     constructor( titulo: string ) {
         this.titulo = titulo;
         this.creadaEn = new Date();
        // this.terminadaEn = new Date();
         this.terminada = false;
         this.items = [];
         this.id = new Date().getTime();
     }


}
