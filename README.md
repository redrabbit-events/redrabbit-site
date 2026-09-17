# Red Rabbit — sito

Homepage "coming soon" per redrabbit.events. Sito statico, nessuna build necessaria.

## File

- `index.html` — pagina
- `style.css` — stile (colori presi dal logo)
- `script.js` — countdown del prossimo evento
- `assets/` — logo e favicon
- `CNAME` — dominio personalizzato per GitHub Pages

## Come caricarlo su GitHub Pages

1. Crea un repository su GitHub (es. `redrabbit-site`), pubblico.
2. Carica dentro tutti questi file mantenendo la struttura delle cartelle (in particolare `assets/` deve restare una sottocartella).
3. Vai su **Settings → Pages** del repository.
4. In "Build and deployment" scegli **Deploy from a branch**, branch `main`, cartella `/ (root)`. Salva.
5. GitHub ti darà un link tipo `https://tuonome.github.io/redrabbit-site/` — funziona già così.

## Collegare il dominio redrabbit.events

Il file `CNAME` nel repository dice già a GitHub di rispondere anche su `redrabbit.events`. Devi solo puntare il DNS del dominio verso GitHub:

Dal pannello dove hai comprato il dominio, imposta questi record DNS:

**Se vuoi usare `redrabbit.events` (senza www):**
- 4 record **A** sul dominio principale (root/@) verso questi IP di GitHub:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

**Se vuoi anche `www.redrabbit.events`:**
- 1 record **CNAME** per `www` che punta a `tuonome.github.io`

Dopo aver impostato i DNS (possono volerci da pochi minuti a qualche ora per propagarsi), torna su **Settings → Pages** del repository, scrivi `redrabbit.events` nel campo "Custom domain" e salva. Quando GitHub verifica il dominio, attiva anche **Enforce HTTPS**.

## Cose da modificare prima di pubblicare

- **Data evento**: in `script.js`, riga con `EVENT_DATE`, metti la data vera del prossimo evento.
- **Logo in alta risoluzione**: `assets/logo.png` (solo l'icona della testa del coniglio, senza cerchio né scritta) è stato ritagliato da una foto di bassa risoluzione, quindi ingrandito è leggermente morbido. Se hai il file originale del logo in alta qualità (o vettoriale), sostituisci `assets/logo.png` con quello per una resa più nitida.
