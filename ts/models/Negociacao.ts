class Negociacao{


  constructor(private _data: Date, private _quantidade: number, private _valor: number){

    if(!_data){
      throw new Error('data deve ser preenchida');
    }
    if(!_quantidade){
      throw new Error('quantidade deve ser preenchida');
    }
    if(!_valor){
      throw new Error('valor deve ser preenchida');
    }

    this._data = _data;
    this._quantidade = _quantidade;
    this._valor = _valor;
  }

  get data(){
    return this._data;
  }

  get quantidade(){
    return this._quantidade;
  }

  get valor(){
      return this._valor;
  }

  get volume(){
    return this._quantidade * this._valor;
  }

}
