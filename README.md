- creare un servizio UIService con:
  -  una proprieta' pubblica menuStatus (eventEmitter)
  -  un metodo toggleMenu che fa il next di menuStatus
- creare il componente SidebarComponent (non legato a nessun routing)
  - ha un botton "apri/chiudi" menu che pilota un EventEmitter definito in un servizio
    - servizio.toggleMenu()
  - il componente sidebar legge il valore dell'eventEmitter (public servizio.menuStatus)
  - se menuStatus === 'open' il bottone ha la scritta "chiudi"
  - se menuStatus = 'closed' il bottone ha la scritta "apri"
- in app.component.html
    <app-sidebar></app-sidebar>

- nel componente ElencoComponent  legge e visualizzare il valore dell'eventEmitter (public servizio.menuStatus)
