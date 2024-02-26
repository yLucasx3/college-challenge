<script lang="ts">
import { defineComponent } from "vue";
import axiosInstance from "../config/axios";

export default defineComponent({
  data: () => ({
    name: "",
    password: "",
    signinErrorMessage: "",
    signupErrorMessage: "",
    dialogSignup: false,
    signupForm: {
      name: "",
      password: "",
      confirmPassword: "",
    },
  }),
  watch: {
    dialogSignup(val) {
      val || this.closeDialogSignup();
    },
  },
  computed: {
    nameRules() {
      return [(v: string) => !!v || "Name is required"];
    },
    passwordRules() {
      return [(v: string) => !!v || "Password is required"];
    },
    confirmPasswordRules() {
      return [
        (v: string) => !!v || "Confirm password is required",
        (v: string) =>
          v === this.signupForm.password ||
          "The password confirmation does not match.",
      ];
    },
  },
  methods: {
    async sigin() {
      const { valid } = await (this.$refs.signinForm as any).validate();

      if (valid) {
        await axiosInstance
          .post("/signin", {
            name: this.name,
            password: this.password,
          })
          .then((response) => {
            if (response.data) {
              localStorage.setItem("access_token", response.data.accessToken);

              this.$router.push("/home");
            }
          })
          .catch((error) => {
            if (error.response.data.error) {
              this.signinErrorMessage = error.response.data.error;
            } else {
              this.signinErrorMessage = "Unexpected error!";
            }
          });
      }
    },
    async signup() {
      const { valid } = await (this.$refs.singupForm as any).validate();

      if (valid) {
        await axiosInstance
          .post("/signup", {
            name: this.signupForm.name,
            password: this.signupForm.password,
          })
          .then((_response) => (this.dialogSignup = false))
          .catch((error) => console.log(error));
      }
    },
    closeDialogSignup() {
      this.dialogSignup = false;
    },
  },
});
</script>

<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="headline">Sign in</v-card-title>

          <v-card-text>
            <v-form ref="signinForm" @submit.prevent="sigin">
              <v-text-field
                v-model="name"
                label="Name"
                :rules="nameRules"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                :rules="passwordRules"
                required
              ></v-text-field>
              <v-alert
                v-if="signinErrorMessage.length"
                :text="signinErrorMessage"
                type="error"
                variant="tonal"
              ></v-alert>

              <v-btn class="mt-4 mr-4" type="submit" color="primary"
                >Sign in</v-btn
              >
              <v-btn class="mt-4" variant="tonal" @click="dialogSignup = true"
                >Sign up</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-dialog v-model="dialogSignup" width="500px">
    <v-card>
      <v-card-title class="headline">Sign up</v-card-title>

      <v-card-text>
        <v-form ref="singupForm" @submit.prevent="signup">
          <v-text-field
            v-model="signupForm.name"
            label="Name"
            :rules="nameRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="signupForm.password"
            label="Password"
            type="password"
            :rules="passwordRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="signupForm.confirmPassword"
            label="Confirm Password"
            type="password"
            :rules="confirmPasswordRules"
            required
          ></v-text-field>
          <v-alert
            v-if="signupErrorMessage.length"
            :text="signupErrorMessage"
            type="error"
            variant="tonal"
          ></v-alert>

          <v-btn class="mt-4 mr-4" type="submit" color="primary">Save</v-btn>
          <v-btn class="mt-4" variant="tonal" @click="dialogSignup = true"
            >Cancel</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>
