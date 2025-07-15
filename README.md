# Necro Maps

![Necro Maps](https://github.com/phenixita/necromaps/assets/17789308/56409311-21a0-4844-aa1f-47526751093b)

Necro Maps è la prima app dedicata a guidarti nel trovare i defunti nei cimiteri italiani.

Questo repository contiene un prototipo sviluppato con [Expo](https://expo.dev/) e React Native.
Lo scopo di questo documento è aiutarti a configurare l'ambiente e avviare l'app in un emulatore Android.

## Requisiti

- **Node.js** (consigliata la versione LTS)
- **npm** (installato con Node) oppure `yarn`
- **Expo CLI**: se non l'hai ancora installato esegui `npm install -g expo-cli`
- **Android Studio** con almeno un dispositivo virtuale configurato

## Installazione

1. Clona questo repository:
   ```bash
   git clone <repo-url>
   cd necromaps
   ```
2. Installa le dipendenze del progetto:
   ```bash
   npm install
   ```

## Avvio dell'app in emulatore Android

1. Avvia l'emulatore Android da Android Studio (o `emulator` da riga di comando).
2. Nel terminale, all'interno della cartella del progetto, esegui:
   ```bash
   npm start
   ```
   Si aprirà la schermata di Expo. Premi `a` per collegarti all'emulatore Android.

## Struttura del progetto

- `App.js` – punto di ingresso dell'app.
- `src/components` – i componenti React Native, ad esempio la **WelcomeScreen** con la ricerca.
- `src/services` – servizi di supporto, come la ricerca in memoria.
- `src/data` – dati fittizi utilizzati per il prototipo.

## Test e lint

Al momento non sono presenti script di test o lint. In futuro saranno aggiunte istruzioni specifiche.

## Supporto

Se incontri problemi durante l'installazione o l'esecuzione, controlla la documentazione di Expo e React Native oppure apri un issue su questo repository.

