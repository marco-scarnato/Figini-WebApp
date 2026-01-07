# 🚀 Guida Deploy su Aruba

Questa guida ti accompagna passo-passo nel processo di deploy dell'applicazione su Aruba Hosting Linux.

## ✅ Checklist Pre-Deploy

Prima di procedere, assicurati di avere:
- [ ] Credenziali FTP/SFTP di Aruba (o accesso al File Manager)
- [ ] Tutte le modifiche committate su Git
- [ ] Testato l'applicazione in locale (`npm start`)

## 📝 Procedura Completa

### Step 1: Build di Produzione

Apri il terminale nella cartella del progetto ed esegui:

```bash
npm run build:prod
```

Questo comando:
1. Compila l'applicazione Angular in modalità produzione (ottimizzata)
2. Copia automaticamente il file `.htaccess` nella cartella di output
3. Crea tutti i file necessari in `dist/figinistudio/`

**Output atteso:**
```
✔ Browser application bundle generation complete.
✔ Copying assets complete.
✔ Index html generation complete.
...
Build at: [data] - Hash: [hash] - Time: [tempo]ms
```

### Step 2: Verifica i File Generati

Controlla che nella cartella `dist/figinistudio/` ci siano:
- `index.html`
- `.htaccess` ⚠️ **IMPORTANTE**
- Cartella `assets/` con tutte le immagini
- Vari file `.js` (main, polyfills, runtime, ecc.)
- Vari file `.css`
- `favicon.ico`

### Step 3: Backup dei File Esistenti (Consigliato)

Prima di sovrascrivere i file sul server:

**Se usi File Manager Aruba:**
1. Accedi al pannello Aruba
2. Vai su File Manager
3. Comprimi la cartella `public_html` o `www` in un file `.zip`
4. Scarica il backup sul tuo PC

**Se usi FTP:**
1. Scarica l'intera cartella pubblica sul tuo PC
2. Rinominala con la data (es: `backup_2026-01-07`)

### Step 4: Upload dei File

#### Opzione A: File Manager Aruba (più lento ma semplice)

1. Accedi al **Pannello di Controllo Aruba**
2. Vai su **File Manager**
3. Naviga nella cartella pubblica (solitamente `/public_html` o `/www`)
4. **Elimina tutti i vecchi file** della webapp (NON eliminare cartelle come `.well-known`, email, ecc.)
5. **Upload:**
   - Puoi caricare tutti i file insieme selezionando tutto il contenuto di `dist/figinistudio/`
   - Oppure caricare prima i file `.js` e `.css` (i più pesanti), poi il resto
6. **Verifica che `.htaccess` sia stato caricato** (potrebbe essere nascosto, abilita "mostra file nascosti")

#### Opzione B: Client FTP (più veloce - CONSIGLIATO)

**Software consigliati:**
- **FileZilla** (gratuito) - [Download](https://filezilla-project.org/)
- **WinSCP** (gratuito, solo Windows) - [Download](https://winscp.net/)
- **Cyberduck** (gratuito) - [Download](https://cyberduck.io/)

**Procedura con FileZilla:**

1. **Configurazione connessione:**
   - Host: `ftp.tuodominio.it` (trovalo nel pannello Aruba)
   - Nome utente: (fornito da Aruba)
   - Password: (fornita da Aruba)
   - Porta: `21` (FTP normale) oppure `22` (SFTP)

2. **Connessione:**
   - Clicca su "Connessione rapida"
   - Accetta il certificato se richiesto

3. **Upload:**
   - Pannello sinistro: naviga fino a `dist/figinistudio/` sul tuo PC
   - Pannello destro: naviga fino a `/public_html` o `/www` sul server
   - Seleziona **tutti i file** nel pannello sinistro
   - Trascinali nel pannello destro (oppure tasto destro → Upload)
   - Scegli **"Sovrascrivi"** quando richiesto

4. **Verifica:**
   - Controlla che tutti i file siano stati caricati
   - Verifica le dimensioni dei file (devono corrispondere)
   - Assicurati che `.htaccess` sia presente (potrebbe essere nascosto)

### Step 5: Test del Sito Live

1. **Svuota la cache del browser:**
   - Chrome/Edge: `Ctrl + Shift + Delete` → Cancella cache e cookies
   - Oppure: `Ctrl + F5` per ricaricare forzatamente

2. **Testa tutte le pagine principali:**
   - Homepage: `tuodominio.it`
   - Team: `tuodominio.it/team`
   - Trattamenti: `tuodominio.it/treatments`
   - Ogni altra pagina specifica

3. **Verifica la console del browser:**
   - Apri DevTools (F12)
   - Vai sulla tab "Console"
   - NON devono esserci errori rossi

4. **Testa da mobile:**
   - Verifica che il sito sia responsive
   - Testa su dispositivi reali se possibile

### Step 6: Verifica SEO e Performance (Opzionale)

- Usa [Google PageSpeed Insights](https://pagespeed.web.dev/) per verificare le performance
- Controlla che il sito sia indicizzato con `site:tuodominio.it` su Google

## ⚠️ Problemi Comuni e Soluzioni

### Problema: Errore 404 sulle route (es. /team, /treatments)

**Causa:** Il file `.htaccess` non è presente o non funziona

**Soluzione:**
1. Verifica che `.htaccess` sia nella root del sito su Aruba
2. Controlla che il contenuto sia corretto (vedi `.htaccess` nel progetto)
3. Verifica che `mod_rewrite` sia abilitato (di solito è già attivo su Aruba)
4. Contatta il supporto Aruba se il problema persiste

### Problema: Pagina bianca / sito non si carica

**Causa:** File mancanti o percorsi errati

**Soluzione:**
1. Apri la console del browser (F12) e leggi gli errori
2. Verifica che `index.html` sia presente nella root
3. Controlla che tutti i file `.js` e `.css` siano stati caricati
4. Verifica i permessi dei file (devono essere 644 per i file, 755 per le cartelle)

### Problema: Immagini non caricate

**Causa:** Cartella `assets` mancante o percorsi errati

**Soluzione:**
1. Verifica che la cartella `assets/` sia stata caricata completamente
2. Controlla che i permessi siano corretti (755 per cartelle, 644 per file)
3. Verifica i percorsi nel codice (devono essere relativi: `assets/immagine.jpg`)

### Problema: Modifiche non visibili dopo il deploy

**Causa:** Cache del browser o CDN

**Soluzione:**
1. Svuota completamente la cache del browser
2. Prova in modalità incognito/privata
3. Prova da un altro browser o dispositivo
4. Attendi qualche minuto (potrebbero esserci cache CDN)

## 📋 Checklist Post-Deploy

Dopo ogni deploy, verifica:
- [ ] Tutte le pagine si caricano correttamente
- [ ] Le immagini sono visibili
- [ ] I link funzionano
- [ ] Il sito è responsive su mobile
- [ ] Non ci sono errori nella console del browser
- [ ] Il file `.htaccess` è presente sul server
- [ ] Le performance sono buone (PageSpeed Insights)

## 🔄 Deploy Automatico (Futuro - Opzionale)

Se in futuro vuoi automatizzare completamente il deploy, puoi considerare:

1. **GitHub Actions** per deploy automatico dopo ogni commit

2. **Netlify** o **Vercel** (hosting gratuito per progetti statici)

Per ora, il metodo manuale con Aruba è perfettamente valido e funzionale!

## 📞 Supporto

Per problemi specifici di Aruba:
- Supporto Tecnico Aruba: https://assistenza.aruba.it/
- Telefono: 0575 0505

---

**Ultimo aggiornamento:** Gennaio 2026
