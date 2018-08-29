class NegociacaoController{

  private _inputData: JQuery;
  private _inputQuantidade: JQuery;
  private _inputValor: JQuery;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');

  constructor(){
    this._inputData = <HTMLInputElement>document.querySelector('#data');
    this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
    this._inputValor = <HTMLInputElement>document.querySelector('#valor');
    this._negociacoesView.update(this._negociacoes);

  }
  adiciona(event: Event){
    event.preventDefault();
    const negociacao = new Negociacao(
      new Date(this._inputData.value.replace(/-/g,',')),
      parseInt(this._inputQuantidade.value),
      parseInt(this._inputValor.value)
    );

    this._negociacoes.adiciona(negociacao);

    this._negociacoesView.update(this._negociacoes);

    this._mensagemView.update('Negociacao adicionada com sucesso');

  }
}
