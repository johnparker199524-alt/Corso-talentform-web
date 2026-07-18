/// <reference types="react-scripts" />
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
} // l'ho aggiunto per risolvere l'errore nel file httpget all'intorno della cartella http
