import {browser, element, by } from 'protractor';
 
describe('Mi Test', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/");

    });
    //creación de prueba 1
    it("El page 1 se muestra por defecto", ()=>{
        expect(element(by.css(".titulo ion-label")).getText()).toContain("Opciones de Menú");
    });  
    it("el contenido debe ser en relación a esta app", ()=>{
        expect(element(by.className("uno titulo ion-card-title")).getText()).toContain("Encontrarás lo mejor para tus mascotas");
    });  
});


 















