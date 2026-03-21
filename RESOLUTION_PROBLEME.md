# Résolution du Problème de Lancement

## Problème Identifié

npm est configuré en **mode offline** via une variable d'environnement système. Cela empêche l'installation des dépendances depuis le registre npm.

## Solutions

### Solution 1 : Utiliser le script PowerShell (Recommandé)

Exécutez dans PowerShell (en tant qu'administrateur si nécessaire) :

```powershell
cd c:\Users\allan\Desktop\Portfolio\portfolio-app
.\start-portfolio.ps1
```

### Solution 2 : Désactiver le mode offline manuellement

1. Ouvrez PowerShell en tant qu'administrateur
2. Exécutez :

```powershell
cd c:\Users\allan\Desktop\Portfolio\portfolio-app
$env:npm_config_offline = "false"
npm install --prefer-online
npm start
```

### Solution 3 : Modifier la variable d'environnement système

1. Ouvrez les **Variables d'environnement** Windows
2. Recherchez `npm_config_offline` dans les variables système
3. Supprimez-la ou définissez-la à `false`
4. Redémarrez PowerShell
5. Exécutez :

```powershell
cd c:\Users\allan\Desktop\Portfolio\portfolio-app
npm install
npm start
```

### Solution 4 : Utiliser yarn (Alternative)

Si npm continue à poser problème, utilisez yarn :

```powershell
npm install -g yarn
cd c:\Users\allan\Desktop\Portfolio\portfolio-app
yarn install
yarn start
```

## Vérification

Après l'installation, vérifiez que les dépendances sont installées :

```powershell
Test-Path "node_modules\@angular\core"
```

Si cela retourne `True`, vous pouvez lancer l'application avec :

```powershell
npm start
```

L'application sera accessible sur `http://localhost:4200`

## Note

L'installation peut prendre plusieurs minutes la première fois car Angular et ses dépendances sont volumineuses.
