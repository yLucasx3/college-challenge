<script lang="ts">
import { defineComponent } from "vue";
import { Student } from "../types/entities";
import axiosInstance from "../config/axios";

export default defineComponent({
  data: () => ({
    dialog: false,
    dialogDelete: false,
    snackbarDelete: false,
    studentToDelete: 0,
    searchName: "",
    searchRA: "",
    itemsPerPage: 10,
    currentPage: 1,
    deletedMessage: "",
    headers: [
      {
        title: "ID",
        align: "start",
        sortable: false,
        key: "id",
      },
      { title: "RA", key: "ra", sortable: false },
      { title: "Full Name", key: "fullName" },
      { title: "CPF", key: "cpf", sortable: false },
      { title: "Class", key: "enrollment.class.name" },
      { title: "Course", key: "enrollment.class.course.name" },
      { title: "Enrollment ID", key: "enrollment.id", sortable: false },
      { title: "Actions", key: "actions", sortable: false },
    ],
    students: [] as Student[],
  }),
  computed: {
    filteredItems() {
      let filteredStudents = this.students;

      if (this.searchName) {
        filteredStudents = filteredStudents.filter((student: Student) =>
          student.fullName.toLowerCase().includes(this.searchName.toLowerCase())
        );
      }

      if (this.searchRA) {
        filteredStudents = filteredStudents.filter((student: Student) =>
          student.ra.toString().includes(this.searchRA.toString())
        );
      }

      return filteredStudents;
    },
  },
  watch: {
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.fectchStudents();
  },

  methods: {
    async fectchStudents() {
      const response = await axiosInstance.get(
        `/students?limit=${this.itemsPerPage}&offset=${
          (this.currentPage - 1) * this.itemsPerPage
        }`
      );

      if (response.data) {
        this.students = response.data.items;
      }
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    newStudent() {
      this.$router.push("/students/create");
    },
    editStudent(studentId: number) {
      this.$router.push({
        path: "/students/create",
        query: { studentId },
      });
    },
    openDeleteDialog(studentId: number) {
      this.dialogDelete = true;
      this.studentToDelete = studentId;
    },
    deleteStudentConfirm() {
      this.deleteStudent();
      this.dialogDelete = false;
    },
    async deleteStudent() {
      await axiosInstance
        .delete(`/students/${this.studentToDelete}`)
        .then((_response) => {
          this.fectchStudents();

          this.deletedMessage = `Student ${this.studentToDelete} successfully deleted`;

          this.snackbarDelete = true;
        })
        .catch((error) => {
          console.log(error);
          this.deletedMessage = `Unexpected error`;
          this.snackbarDelete = true;
        });
    },
    async search() {
      this.fectchStudents();
    },
    setItemsPerPage(newItemsPerPage: number) {
      this.itemsPerPage = newItemsPerPage;
      this.currentPage = 1;
      this.fectchStudents();
    },
    setCurrentPage(newPage: number) {
      this.currentPage = newPage;
      this.fectchStudents();
    },
  },
});
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-text-field
          v-model="searchName"
          label="Search by name"
          @input="search"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          v-model="searchRA"
          label="Search by RA"
          @input="search"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="filteredItems"
      :sort-by="[{ key: 'fullName', order: 'asc' }]"
      :items-per-page="itemsPerPage"
      :page="currentPage"
      @update:page="setCurrentPage"
      @update:items-per-page="setItemsPerPage"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Students</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn
            class="mb-2"
            append-icon="mdi-plus"
            variant="outlined"
            color="primary"
            @click="newStudent"
          >
            New Student
          </v-btn>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this student?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="deleteStudentConfirm()"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon size="small" class="me-2" @click="editStudent(item.id)">
          mdi-pencil
        </v-icon>
        <v-icon size="small" @click="openDeleteDialog(item.id)">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </v-container>
  <v-snackbar v-model="snackbarDelete" multi-line>
    <span>{{ deletedMessage }}</span>

    <template v-slot:actions>
      <v-btn variant="text" @click="snackbarDelete = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped></style>
