<template>
  <div class="todo-item">
    <div class="todo-item-left">
      <input type="checkbox" v-model="completed" />
      <div
        v-if="!todo.editing"
        :class="{ completed: completed }"
        @dblclick="editTodo"
        class="todo-item-label "
      >
        {{ title }}
      </div>
      <v-text-field
        v-else
        class="todo-item-edit ml-12"
        type="text"
        v-model="title"
        @blur="doneEdit"
        @keyup.enter="doneEdit"
        @keyup.esc="cancelEdit"
        v-focus
      />

        <div class=" d-flex justify-end">
          <div class="remove-item  " @click="removeTodo(index)">
            <v-btn   icon="mdi-delete" align="right" variant="text" />
          </div>
          <v-row >
            <v-dialog v-model="dialog" persistent       width="600"
           >
              <template v-slot:activator="{ props }">
                <v-btn
                  variant="text"
                  color="primary"
                  class="ma-3"
                  @click="editTodo"
                  v-bind="props"
                  icon="mdi-pencil"
                >
                </v-btn>
              </template>
              <v-card class="px-2">
                <v-card-title class="text-h5"> Edit Task </v-card-title>
                <v-card-text>
                  <v-col cols="12">
                    <v-text-field
                      max-width="300px"
                      label=""
                      required
                      v-model="title"
                    ></v-text-field>
                  </v-col>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="red-darken-1"
                    variant="text"
                    @click="dialog = false"
                  >
                    cancel
                  </v-btn>
                  <v-btn
                    color="indigo-darken-1"
                    variant="text"
                    @click="dialog = false"
                  >
                    save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    checkAll: {
      type: Boolean,
      required: true,
    },
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
  data() {
    return {
      dialog: false,
      id: this.todo.id,
      title: this.todo.title,
      completed: this.todo.completed,
      editing: this.todo.editing,
      BeforeEditCache: "",
    };
  },
  methods: {
    removeTodo(index) {
      this.$emit("removeTodo", index);
    },
    editTodo() {
      this.beforeEditCache = this.title;
      this.editing = true;
    },
    doneEdit() {
      if (this.title.trim() == "") {
        this.title = this.beforeEditCache;
      }
      this.editing = false;
      this.$emit("finishedEdit", {
        index: this.index,
        todo: {
          id: this.id,
          title: this.title,
          completed: this.completed,
          editing: this.editing,
        },
      });
    },
    cancelEdit() {
      this.title = this.beforeEditCache;
      this.editing = false;
    },
  },

  watch: {
    checkAll() {
      this.completed = this.checkAll ? true : this.todo.completed;
    },
    // checkAll(){
    //   if(this.checkAll){
    //     this.completed=true
    //   }
    //   else{
    //     this.completed=this.todo.completed

    //   }
    // }
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

ul {
  list-style: none;
}
button {
  font-size: 14px;
  background-color: white;
  appearance: none;
}
.tod .remove-item {
  margin-left: 14px;
  cursor: pointer;
}
ul li {
  padding: 5px;
  background: #fc3;
  color: black;
  margin: 5px 0;
}
.msg {
  color: #333;
  padding: 5px;
  margin: 5px;
}
.extra-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid lightgrey;
  padding-top: 14px;
  margin-bottom: 14px;
}
.todo-item-left {
  // later
  display: flex;
  align-items: center;
}
.todo-item-label {
  padding: 10px;
  border: 1px solid white;
  margin-left: 12px;
}

.error {
  background: rgb(255, 0, 43);
}
.active {
  background-color: lightgreen;
}
.success {
  background: lightgreen;
}
.todo-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.completed {
  text-decoration: line-through;
  color: grey;
}
// CSS Transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
