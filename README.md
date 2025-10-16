# RemoteConnect-Pro

**RemoteConnect-Pro** est une application full-stack permettant de capturer et partager l’écran d’un ordinateur à distance via un serveur WebSocket et une interface web moderne.

## 🔹 Fonctionnalités

- Capture d’écran en temps réel du poste client (backend Java).  
- Partage d’écran avec contrôle à distance, chat et transfert de fichiers.  
- Transmission des images au frontend via WebSocket.  
- Interface web réactive pour afficher le flux vidéo (frontend Node.js + Nginx).  
- Séparation claire entre le backend et le frontend pour une meilleure maintenabilité.   

## 🛠 Technologies utilisées

- **Backend :** Java 17, WebSocket, AWT (Robot) pour la capture d’écran  
- **Frontend :** Node.js 20, NPM, framework frontend (React/Vue selon ton projet)  
- **Serveur web :** Nginx (pour servir le frontend)  
- **Conteneurisation :** Docker et Docker Compose (optionnel pour déploiement)  

## 📁 Structure du projet

```

RemoteConnect-Pro/
├─ backend/    # Code Java pour capture et serveur WebSocket
└─ frontend/   # Code Node.js pour l'interface utilisateur

````

## 🚀 Installation & Exécution

1. **Cloner le repo :**

```bash
git clone https://github.com/ton-utilisateur/RemoteConnect-Pro.git
cd RemoteConnect-Pro
````

2. **Backend :**

```bash
cd backend
javac -d out $(find src -name "*.java")
java -cp out main.java.server.WebSocketServer
```

3. **Frontend :**

```bash
cd frontend
npm install
npm run build
# Servir via Node.js ou config Nginx
```

4. **Option Docker :**
   *(si tu veux containeriser backend et frontend)*

```bash
docker-compose up --build
```

## 📌 Remarques

* L’application backend nécessite un environnement non-headless pour capturer l’écran.
* Frontend servi via Nginx sur le port 80 par défaut.

```


