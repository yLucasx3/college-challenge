<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        title: 'ID',
        align: 'start',
        sortable: false,
        key: 'id',
      },
      { title: 'RA', key: 'ra', sortable: false },
      { title: 'Full Name', key: 'fullName' },
      { title: 'CPF', key: 'document', sortable: false },
      { title: 'Class', key: 'className' },
      { title: 'Course', key: 'courseName' },
      { title: 'Enrollment ID', key: 'enrollmentId', sortable: false },
    ],
    students: [],
    editedIndex: -1,
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Student' : 'Edit Student'
    },
    emailRules() {
      return [
        (v: string) => !!v || 'Email is required',
        (v: string) =>
          /.+@.+\..+/.test(v) || 'Email must be valid',
      ];
    },
    cpfRules() {
      return [
        (v: string) => !!v || 'CPF is required',
        (v: string) =>
          /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(v) || 'CPF must be valid',
      ];
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.students = [];
    },
    deleteStudentConfirm() {
      this.closeDelete()
    },
    close() {
      this.dialog = false
    },
    closeDelete() {
      this.dialogDelete = false
    },
    save() {
      this.close()
    },
  },
})
</script>

<template>
  <v-data-table :headers="headers" :items="students" :sort-by="[{ key: 'fullName', order: 'asc' }]">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Students</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ props }">
            <v-btn class="mb-2" append-icon="mdi-plus" v-bind="props" variant="outlined" color="primary">
              New Student
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <!-- <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedStudent.fullName" label="Full Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedStudent.email" label="email"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedStudent.document" label="CPF"></v-text-field>
                  </v-col> -->
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="close">
                Cancel
              </v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon size="small" class="me-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<style scoped></style>
