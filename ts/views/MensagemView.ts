class MensagemView{

  private _elemento: Element

  constructor(seletor: string){

    this._elemento = document.querySelector(seletor);
  }

  update(model: string){

    this._elemento.innerHTML = this.template(model);
  }

  template(model:string){

  }
}
