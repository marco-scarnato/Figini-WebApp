# Figini Studio - WebApp

Sito web dello Studio Dentistico Figini realizzato con Angular 16.

## 📋 Prerequisiti

- Node.js (versione 18.x o superiore)
- npm (viene installato con Node.js)
- Accesso FTP/SFTP al server Aruba o accesso al File Manager

## 🚀 Setup Iniziale

1. **Installa le dipendenze:**
   ```bash
   npm install
   ```

2. **Verifica che tutto funzioni localmente:**
   ```bash
   npm start
   ```
   L'applicazione sarà disponibile su `http://localhost:4200/`

## 🛠️ Sviluppo

### Comandi Utili

- **Avvia il server di sviluppo:**
  ```bash
  npm start
  # oppure
  ng serve
  ```

- **Compila in modalità sviluppo:**
  ```bash
  ng build
  ```

- **Esegui i test:**
  ```bash
  npm test
  # oppure
  ng test
  ```

## 📦 Deploy su Aruba (Hosting Linux)

### Metodo Manuale

1. **Compila l'applicazione per la produzione:**
   ```bash
   ng build --configuration production --base-href /
   ```
   
   I file compilati saranno generati nella cartella `dist/figinistudio/`

2. **Copia il file .htaccess nella cartella di build:**
   - Il file `.htaccess` nella root del progetto deve essere copiato manualmente in `dist/figinistudio/`
   - Questo file è **fondamentale** per il corretto funzionamento del routing di Angular su server Apache

3. **Upload dei file su Aruba:**
   
   **Opzione A - File Manager Aruba:**
   - Accedi al pannello di controllo Aruba
   - Vai su File Manager
   - Naviga nella cartella pubblica (solitamente `/public_html` o `/www`)
   - Elimina i vecchi file (fai prima un backup!)
   - Carica tutto il contenuto della cartella `dist/figinistudio/` (incluso `.htaccess`)

   **Opzione B - Client FTP (Consigliato per upload più veloci):**
   - Usa un client FTP come FileZilla, WinSCP, o Cyberduck
   - Connettiti al server con le credenziali FTP fornite da Aruba
   - Carica il contenuto di `dist/figinistudio/` nella cartella pubblica del server

### ⚠️ Note Importanti sul Deploy

- **Il file `.htaccess` è essenziale:** Senza questo file, il routing di Angular non funzionerà correttamente. Se provi ad accedere direttamente a una route (es. `tuodominio.it/team`), riceverai un errore 404.

- **Verifica dopo il deploy:**
  - Controlla che `index.html` sia presente
  - Verifica che il file `.htaccess` sia stato caricato
  - Testa le diverse route dell'applicazione
  - Svuota la cache del browser se necessario (Ctrl+F5)

- **File da NON caricare sul server:**
  - Non serve caricare `node_modules/`
  - Non serve caricare i file sorgente (`src/`)
  - Carica SOLO il contenuto di `dist/figinistudio/`

### 🔄 Automatizzare il processo (Opzionale)

Per evitare di copiare manualmente `.htaccess` ogni volta, puoi aggiungere questo script al `package.json`:

```json
"scripts": {
  "build:prod": "ng build --configuration production --base-href / && cp .htaccess dist/figinistudio/"
}
```

Su Windows PowerShell usa:
```json
"scripts": {
  "build:prod": "ng build --configuration production --base-href / && copy .htaccess dist\\figinistudio\\"
}
```

Poi esegui semplicemente:
```bash
npm run build:prod
```

## 🔧 Struttura del Progetto

```
Figini-WebApp/
├── src/                    # Codice sorgente
│   ├── app/               # Componenti e moduli Angular
│   ├── assets/            # Risorse statiche (immagini, font, ecc.)
│   └── index.html         # HTML principale
├── dist/                   # File compilati (generati dalla build)
├── .htaccess              # Configurazione Apache per routing
├── angular.json           # Configurazione Angular
├── package.json           # Dipendenze e script npm
└── tsconfig.json          # Configurazione TypeScript
```

## 🐛 Troubleshooting

### Errore 404 sulle route
- Verifica che il file `.htaccess` sia presente nella root del sito su Aruba
- Verifica che il server Apache abbia `mod_rewrite` abilitato (di solito è già attivo su Aruba)

### Pagina bianca dopo il deploy
- Apri la console del browser (F12) e controlla eventuali errori
- Verifica che tutti i file siano stati caricati correttamente
- Svuota la cache del browser

### Immagini o risorse non caricate
- Verifica che la cartella `assets/` sia stata caricata completamente
- Controlla i percorsi delle risorse nel codice

## 🔐 Sicurezza

- Non caricare mai file `.env` o chiavi API sul server pubblico
- Mantieni aggiornate le dipendenze (`npm audit` e `npm audit fix`)
