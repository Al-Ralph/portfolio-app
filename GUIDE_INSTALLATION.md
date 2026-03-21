# Guide d'Installation - Résolution des Problèmes

## Problème : ECONNREFUSED lors de l'installation

Si vous rencontrez des erreurs de connexion lors de l'installation, suivez ces étapes :

### Solution 1 : Installation manuelle avec retry

```powershell
cd c:\Users\allan\Desktop\Portfolio\portfolio-app
$env:npm_config_offline = "false"
npm install --fetch-retries=10 --fetch-retry-mintimeout=20000
```

### Solution 2 : Utiliser un registre npm alternatif

```powershell
cd c:\Users\allan\Desktop\Portfolio\portfolio-app
npm config set registry https://registry.npmjs.org/
npm install
```

### Solution 3 : Installation par lots (si la connexion est instable)

Installez d'abord Angular CLI globalement :
```powershell
npm install -g @angular/cli@latest
```

Puis installez les dépendances du projet :
```powershell
cd c:\Users\allan\Desktop\Portfolio\portfolio-app
npm install
```

### Solution 4 : Utiliser yarn (Alternative recommandée)

Si npm continue à poser problème :

```powershell
# Installer yarn globalement
npm install -g yarn

# Dans le dossier du projet
cd c:\Users\allan\Desktop\Portfolio\portfolio-app
yarn install
yarn start
```

### Solution 5 : Vérifier le pare-feu/antivirus

1. Vérifiez que votre pare-feu n'bloque pas npm
2. Ajoutez une exception pour Node.js dans votre antivirus
3. Essayez de désactiver temporairement le pare-feu pour tester

### Solution 6 : Installation avec cache nettoyé

```powershell
cd c:\Users\allan\Desktop\Portfolio\portfolio-app
npm cache clean --force
$env:npm_config_offline = "false"
npm install
```

## Vérification de l'installation

Une fois l'installation terminée, vérifiez que les packages sont installés :

```powershell
Test-Path "node_modules\@angular\core"
```

Si cela retourne `True`, lancez l'application :

```powershell
npm start
```

L'application sera accessible sur `http://localhost:4200`

## Si rien ne fonctionne

1. Vérifiez votre connexion Internet
2. Essayez depuis un autre réseau (hotspot mobile par exemple)
3. Contactez votre administrateur réseau si vous êtes sur un réseau d'entreprise
