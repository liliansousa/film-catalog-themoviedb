# Angular Project: Film Catalog with The Movie DB API

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

##### themoviedb API Useful Links:
Documentation: [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)   
Support forum: [https://www.themoviedb.org/talk/category/5047958519c29526b50017d6](https://www.themoviedb.org/talk/category/5047958519c29526b50017d6)               
Wrappers & libraries: [https://www.themoviedb.org/documentation/api/wrappers-libraries](https://www.themoviedb.org/documentation/api/wrappers-libraries)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Testing

Run `ng test` to run the project unit testing.

---
---

## Estrutura e anotações gerais - Apresentação

---

#### Technologies and techniques used

- Angular: version 8.3.24
- Sass / SCSS
- Bootstrap Customizer (https://getbootstrap.com/docs/3.4/customize/)
- Karma: Basic Unit testing  - used with angular cli 
- Firebase Hosting

---

#### Sass: Architecture and Style Organization
##### Arquivos Comuns: Assets src/assets

Recursos usados para a construção do tema layout generico que não são vinculados a um componente especifico (fonts, imagens, css comum).

SASS Tema comum da SPA:
Estrutura:
 - base: configuração base global como cores e tipografia / fonts

 - theme: Classes comuns utilizadas por todo o site, elementos que se repetem entre views/ components etc;
 
 - utils: Mixins e functions construidas para facilitar a estilização;

 - vendors: CSS de terceiros que podem ser customizados ou importados, como o Boostrap Customizer, aonde pode ser selecionado apenas os blocos / components que querem ser utilizados separados da lib, neste caso foi customizado e incluido a grid, icones e medias, para que assim não seja importado no app varias classes e components não utilizados instalando um pacote complete de terceiros.

Todos os demais estilos que são usados apenas em um local / component foram adicionados ao respectivo.

---

#### Services: Estrutura de Serviços

ThemoviedbService Service: A Classe ThemoviedbService: THE MOVIEDB API - GET DATA Service
Criado para organizar e centralizar o consumo e chamadas /  HTTP request da API.

---

#### Test-driven development (TDD)

Dois Arquivos de testes:
- App Build com os principais components e Estrutura do site
- Criação do serviço para consumo de API: Verifica se o serviço foi criado para os request de API usando o Angular HttpClient