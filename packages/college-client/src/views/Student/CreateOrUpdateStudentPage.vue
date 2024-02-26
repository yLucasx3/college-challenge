<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { Class, Student } from "../../types/entities";
import axiosInstance from "../../config/axios";

export default defineComponent({
  data: () => ({
    student: {} as Student,
    classes: [] as { id: number; name: string }[],
    selectedClass: {
      id: 0,
      name: "",
    } as { id: number; name: string },
    errorMessage: "",
    editMode: false,
    loading: false,
  }),
  computed: {
    pageTitle() {
      return this.editMode ? "Edit Student" : "Create Student";
    },
    fullNameRules() {
      return [(v: string) => !!v || "Full Name is required"];
    },
    emailRules() {
      return [
        (v: string) => !!v || "Email is required",
        (v: string) =>
          /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(v) || "Email must be valid",
      ];
    },
    cpfRules() {
      return [
        (v: string) => !!v || "CPF is required",
        (v: string) =>
          /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/.test(v) ||
          "CPF must be valid",
      ];
    },
  },
  mounted() {
    const route = useRoute();
    const studentId = Number(route.query.studentId);

    if (studentId) {
      this.fetchStudentDetails(studentId);
    }

    this.fetchClassesDetails();
  },
  methods: {
    async fetchStudentDetails(studentId: number) {
      try {
        const response = await axiosInstance.get(`/students/${studentId}`);

        if (response.data) {
          this.student = response.data;

          this.editMode = true;
          this.selectedClass = {
            id: this.student.enrollment.class.id,
            name: `${this.student.enrollment.class.course.name} - ${this.student.enrollment.class.name}`,
          };
        }
      } catch (error) {
        console.error("Erro ao obter detalhes do estudante:", error);
      }
    },
    async fetchClassesDetails() {
      try {
        const response = await axiosInstance.get(`/classes?limit=10&offset=0`);

        if (response.data) {
          const mappedClasses = response.data.items.map((clazz: Class) => ({
            id: clazz.id,
            name: `${clazz.course.name} - ${clazz.name}`,
          }));
          this.classes = mappedClasses;
        }
      } catch (error) {
        console.error("Erro ao obter detalhes do estudante:", error);
      }
    },
    async createStudent() {
      axiosInstance
        .post("/students", {
          fullName: this.student.fullName,
          email: this.student.email,
          cpf: this.student.cpf,
          classId: this.selectedClass,
        })
        .then((response) => {
          this.loading = false;
          if (response.data) {
            this.$router.push("/students");
          }
        })
        .catch((error) => {
          this.loading = false;
          if (error.response.data.error) {
            this.errorMessage = error.response.data.error;
          }

          this.errorMessage = "Unexpected error!";
        });
    },
    async editStudent() {
      axiosInstance
        .put(`/students/${this.student.id}`, {
          fullName: this.student.fullName,
          email: this.student.email,
          classId: this.selectedClass,
        })
        .then((response) => {
          this.loading = false;

          if (response.data) {
            this.$router.push("/students");
          }
        })
        .catch((error) => {
          this.loading = false;

          if (error.response.data.error) {
            this.errorMessage = error.response.data.error;
          } else {
            this.errorMessage = "Unexpected error!";
          }
        });
    },
    async onSubmit() {
      const { valid } = await (this.$refs.form as any).validate();

      if (valid) {
        this.loading = true;
        if (this.editMode) return this.editStudent();

        return this.createStudent();
      }
    },
  },
});
</script>

<template>
  <v-sheet
    height="100vh"
    class="d-flex flex-column justify-center align-center ga-4"
  >
    <h2>{{ pageTitle }}</h2>
    <v-form ref="form" style="width: 500px">
      <v-text-field
        v-model="student.fullName"
        :counter="10"
        :rules="fullNameRules"
        label="Full name"
        required
      ></v-text-field>

      <v-text-field
        v-model="student.email"
        :rules="emailRules"
        label="Email"
        required
      ></v-text-field>

      <v-text-field
        v-model="student.cpf"
        :rules="cpfRules"
        label="CPF"
        required
        :disabled="editMode"
      ></v-text-field>

      <v-select
        v-model="selectedClass"
        :items="classes"
        item-title="name"
        item-value="id"
        :rules="[(v) => !!v || 'Item is required']"
        label="Class"
        :disabled="editMode"
        required
      ></v-select>

      <v-alert
        v-if="errorMessage.length"
        :text="errorMessage"
        type="error"
        variant="tonal"
      ></v-alert>
      <div>
        <v-btn color="success" class="mt-4" block @click="onSubmit">
          {{ loading ? "Saving..." : "Save" }}
        </v-btn>
        <v-btn class="mt-4" block @click="$router.push('/students')">
          Cancel
        </v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>
<style scoped></style>
