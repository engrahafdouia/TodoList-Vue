<template>
  <v-container>

    <section>
      <v-data-table  v-model="selected"
        :headers="headers"
        :items="desserts"
        :sort-by="[{ key: 'Name', order: 'asc' }]"
        class="elevation-1 w-100"
      >
        <template v-slot:top>
          <v-toolbar flat class="bg-purpleme"
          >
            <v-toolbar-title>My Tasks</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog
              v-model="dialog"
              max-width="500px"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                    type="submit"  class="mb-2"
                    rounded="pill"  color="purpleme"   v-bind="props"
                  >
                    New Task
                  </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                    lg="8"
                      >
                      <v-text-field
                        v-model="editedItem.id"
                        label="id" class="w-100" clearable placeholder=""  variant="underlined" color="indigo"
                      ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                    lg="8"
                      >
                        <v-text-field class="w-100" clearable placeholder=""  variant="underlined" color="indigo"
                          v-model="editedItem.Name"
                          label=" name Task "
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="close"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="save"
                  >
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
        <!-- <template v-slot:item.actions="{ item }">
          <v-icon
            size="small"
            class="me-2"
            @click="editItem(item.raw)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            size="small"
            @click="deleteItem(item.raw)"
          >
            mdi-delete
          </v-icon>
        </template> -->
        <template v-slot:no-data>
          <v-btn
            color="primary"
            @click="initialize"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
    </section>
  </v-container>
</template>


<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          title: 'id',
          align: 'start',
          sortable: false,
          key: 'id',
        },
       { title: 'Name', key: 'Name' },
        { title: 'Actions', key: 'actions', sortable: false },
      ],

      selected: [],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        Name: 0,


      },
      defaultItem: {
        id: '',
        Name: 0,

      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Task' : 'Edit Task'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            Name: 'Frozen Yogurt',
            id: 159,

          },
          {
            Name: 'Ice cream sandwich',
            id: 1,

          },
          {
            Name: 'Eclair',
            id: 2,

          },
          {
            Name: 'Cupcake',
            id: 3,


          },
          {
            Name: 'Gingerbread',
            id: 4,

          },


        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
