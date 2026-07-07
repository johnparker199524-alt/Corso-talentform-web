class Auto{
public nome:string;
public modello:string;
public cilindrata:number;

constructor(nome:string,model:string,cilindri:number){
    this.nome=nome;
    this.modello = model;
    this.cilindrata = cilindri;
}

 //getter
getNome(): string{
    return this.nome;
}
getModello(): string{
    return this.modello;
}
getCilindrata(): number{
    return this.cilindrata;
}

// to string

toString(): string{
     
    return ` Categoria Automobile : -->  il ${this.nome} ${this.modello} ha ${this.cilindrata}  cilindrata`;

}

}

// main
// invocazione dell'oggeto 
    let auto = new Auto( "Ford Mustang", "FM-4x4", 8 );

    let no = auto.getNome();
    let pr = auto.toString();
    console.log(auto);
    console.log(no);
    console.log(pr);

