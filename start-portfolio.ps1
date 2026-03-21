# Script pour lancer le portfolio Angular
# Résout le problème de mode offline npm

Write-Host "Configuration de npm..." -ForegroundColor Yellow
$env:npm_config_offline = "false"
$env:npm_config_prefer_offline = "false"

Write-Host "Vérification des dépendances..." -ForegroundColor Yellow
if (-not (Test-Path "node_modules")) {
    Write-Host "Installation des dépendances..." -ForegroundColor Green
    npm install --prefer-online
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Erreur lors de l'installation. Essayez manuellement: npm install --prefer-online" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "Dépendances déjà installées." -ForegroundColor Green
}

Write-Host "Lancement du serveur de développement..." -ForegroundColor Green
npm start
