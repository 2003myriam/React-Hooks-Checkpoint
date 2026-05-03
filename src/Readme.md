# 🎬 Movie App - React Project

## 📌 Description

Cette application est une plateforme simple développée avec React permettant d'afficher, filtrer et gérer une liste de films ou séries TV.

L'objectif principal est de manipuler les composants React ainsi que les hooks comme `useState`.

---

## 🎯 Objectifs du projet

- Créer une interface pour afficher des films 🎬
- Utiliser les hooks React (`useState`)
- Mettre en place un système de filtrage 🔎
- Permettre l’ajout de nouveaux films ➕

---

## 🧱 Structure des composants

### 🔹 MovieCard
Affiche les informations d’un seul film :
- Titre
- Description
- Image (poster)
- Note

---

### 🔹 MovieList
- Reçoit une liste de films
- Affiche plusieurs `MovieCard` avec `.map()`

---

### 🔹 Filtre
- Permet de filtrer les films par :
  - titre 🔎
  - note ⭐
- Envoie les valeurs de recherche vers le composant parent

---

 