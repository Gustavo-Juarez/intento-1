class Form{
  constructor(){
    this.title = createElement("h1");
    this.input = createInput("ingresa tu nombre")
    this.playButton = createButton("play")
    this.welcome = createElement("h3")
  }
  display(){
    this.title.position(120,160);
    this.title.class("gameTitle");
    this.title.html(mi intento de tron)
    this.input.position(width/2,heigth/2 - 80)
    this.input.class("customInput")
    this.playButton.position(width/2,heigth/2)
    this.playButton.class("customButton")
  }
}