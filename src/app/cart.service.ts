import { Injectable } from '@angular/core';

@Injectable({
  providedId: 'root'
})
export class CartService {
  Items=[];
  constructor() { }

}