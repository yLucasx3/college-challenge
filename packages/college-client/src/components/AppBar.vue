<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppBar",
  data() {
    return {
      drawer: true,
      rail: false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("access_token");
      this.$router.push("/login");
    },
  },
});
</script>

<template>
  <v-card :v-if="$route.meta.showMenu">
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item title="College Challenge" nav class="justify-center">
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-menu"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list nav>
          <v-list-item
            prepend-icon="mdi-home-city"
            title="Home"
            value="home"
            @click="$router.push('/home')"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-school"
            title="Students"
            value="students"
            @click="$router.push('/students')"
          ></v-list-item>
        </v-list>
        <template v-slot:append>
          <div class="pa-2">
            <v-btn block variant="outlined" color="primary" @click="logout">
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main class="h-screen">
        <v-container>
          <router-view />
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped></style>
