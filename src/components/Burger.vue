<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  methods: {
    /* Set the width of the side navigation to 250px */
    openNav() {
      let sidenav = document.getElementById("mySidenav");
      sidenav.classList.add("active");
    },

    /* Set the width of the side navigation to 0 */
    closeNav() {
      let sidenav = document.getElementById("mySidenav");
      sidenav.classList.remove("active");
    },
  },
};
</script>

<template>
  <router-view>
    <body>
      <div id="menutop">
        <div id="mySidenav" class="sidenav">
          <a id="closeBtn" href="#" class="close" @click="closeNav">&times;</a>
          <ul>
            <!-- Revoir les boutons
            <li><a href="#" id="collection">Notre collection</a></li>
            <li><a href="#" id="addbook">Ajouter un livre</a></li>
            <li><a href="#" id="deletebook">Supprimer un livre</a></li>
            <li><a href="#" id="modifstock">Modifier le stock</a></li>
            -->
            <RouterLink to="/">Notre collection</RouterLink>
            <RouterLink to="/add">Ajouter un livre</RouterLink>
            <RouterLink to="/delete">Supprimer un livre</RouterLink>
            <RouterLink to="/modify">Modifier le stock</RouterLink>
          </ul>
        </div>

        <a href="#" id="openBtn" @click="openNav">
          <span class="burger-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>
        <h1>Ma Petite Librairie</h1>
      </div>
      <!-- Image a rajouter
    <img src="../assets/librairie.jpg" alt="tour" />
  -->
    </body>
  </router-view>
</template>

<style>
body {
  font-family: "Arial";
  font-size: 1em;
  text-align: left;

  background-image: url("../image/librairie.jpg");
  background-repeat: repeat;
}
h1 {
  text-transform: uppercase;
  font-size: 2.6em;
  color: rgb(255, 167, 211);
  padding-top: 0px;
  padding-bottom: 0px;
  text-align: center;
}

/* Sidenav menu */
.sidenav {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: -250px;
  background-color: rgb(255, 167, 211);
  padding-top: 60px;
  transition: left 0.5s ease;
}

.sidenav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/* Sidenav menu links */
.sidenav RouterLink {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
  transition: 0.3s;
}

.sidenav RouterLink:hover {
  color: #111;
}

/* Active class */
.sidenav.active {
  left: 0;
}

/* Close btn */
.sidenav .close {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
}

.burger-icon span {
  display: block;
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
}
</style>